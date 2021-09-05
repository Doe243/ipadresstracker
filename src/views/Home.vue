<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Result -->
    <div class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">
      <!-- Search Input --> 
      
      <div class="w-full max-w-screen-sm">
       
        <h1 class="text-white text-center text-3xl pb-4"> 🎯 IP ADRESS TRACKER</h1>
        <div class="flex">
          <input v-model="queryIp"
                 class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md foucus:outline-none" 
                 type="text"  
                 placeholder="Search for any IP adress or leave empty to get your info"
          />
          <i  @click="getIpInfo"
              class="cursor-pointer 
                    bg-white 
                    text-black
                    outline-black
                    px-4 
                    rounded-tr-md 
                    rounded-br-md 
                    flex
                    items-center
                    fas fa-chevron-right"></i>
        </div>
        
      </div>
      <!-- IP Info -->
      <IPInfo v-if="ipInfo" v-bind:ipInfo="ipInfo"/>
    </div>
    <!-- Map -->
    <div class="h-full z-10" id="mapid"></div>
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from 'axios';

export default {
  name: 'Home',
  components: { IPInfo },
  setup () {
    let mymap;
    const queryIp = ref("");
    const ipInfo = ref(null);

    onMounted(() => {
      mymap = leaflet.map('mapid').setView([45.17869, 5.71479], 13);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG9lMjQzIiwiYSI6ImNqeWozdDR2ejBmcnkzb25ybmNmazR3OHMifQ.LrHsfdMkCIw0tiCVQlxVAQ', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, <a href="https://renemumba.netlify.com/">René MUMBA - Software engineer</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiZG9lMjQzIiwiYSI6ImNqeWozdDR2ejBmcnkzb25ybmNmazR3OHMifQ.LrHsfdMkCIw0tiCVQlxVAQ'
      }).addTo(mymap);
    });

    const getIpInfo = async () => {
      try {

        const data = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_hGlshm0DaHNpZxvenXeuQMIF3lWOs&ipAddress=${queryIp.value}`);
        const result = data.data;
        //console.log(result);
        ipInfo.value = {
          adress: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng,
          postalCode: result.location.postalCode,
          country: result.location.country,
          vpn: result.vpn,
          tor: result.tor,
          domain: result.as.domain
        };
        leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
        mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13);
      } catch (error) {
        alert(error.message)
      }
    };

    return { queryIp, ipInfo, getIpInfo };
  }
}
</script>

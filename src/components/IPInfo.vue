<template>
  <div class="absolute
    -bottom-64
    lg:-bottom-20
    flex
    flex-col
    lg:flex-row
    bg-white
    gap-y-4
    gap-x-12
    px-8 pt-8 pb-12
    rounded-md
  "
  >
  <!-- Flex Item #1 -->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">IP Adress</h3>
        <span class="text-2xl">{{ ipInfo.adress }}</span>
    </div>
    <!-- Flex Item #2 -->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Location</h3>
        <span class="text-2xl">{{ ipInfo.state }}</span>
    </div>
    <!-- Flex Item #3 --><div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">country</h3>
        <span class="text-2xl">{{ ipInfo.country }}</span>
    </div>
    <!-- Flex Item #4 -->
     <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">postal code</h3>
        <span class="text-2xl">{{ ipInfo.postalCode }}</span>
    </div>
    <!-- Flex Item #5 -->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Timezone</h3>
        <span class="text-2xl">UTC {{ ipInfo.timezone }}</span>
    </div>
    <!-- Flex Item #6 -->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Internet Provider</h3>
        <span class="text-2xl">{{ ipInfo.isp }}</span>
    </div>
    <!-- Flex Item #7 -->
    <div v-if="ipInfo.vpn" class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">vpn</h3>
        <span class="text-2xl">{{ ipInfo.vpn }}</span>
    </div>
    <!-- Flex Item #8 -->
    <div v-if="ipInfo.domain" class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">domain url</h3>
        <span class="text-2xl">{{ ipInfo.domain }}</span>
    </div>
    <!-- Flex Item #9 -->
    <div v-if="ipInfo.tor" class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">tor</h3>
        <span class="text-2xl">{{ ipInfo.tor }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['ipInfo'],
}
</script>

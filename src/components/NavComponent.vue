<template>
  <div class="flex w-full">
    <div class="flex mx-auto text-white">
      <div 
        class="text-xl px-6 mx-1"
        :class="{ 'text-red-400/100': isWorkHovered, 'text-red-400': $store.state.cacheStore.isWork}"
        @mouseover="isWorkHovered = true"
        @mouseout="isWorkHovered = false"
        @click="toggleWork"
      >
        WORK
      </div>
      <div 
        class="text-xl px-6 mx-1"
        :class="{ 'text-red-400/100': isMeHovered, 'text-red-400': $store.state.cacheStore.isMe}"
        @mouseover="isMeHovered = true"
        @mouseout="isMeHovered = false"
        @click="toggleMe"
      >
        ME
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWorkHovered: false,
      isMeHovered: false
    }
  },
  methods: {
    toggleWork(){
      console.log('toggle 클릭')
      this.$store.state.cacheStore.isWork = true
      this.$store.state.cacheStore.isMe = false
    },
    toggleMe(){
      console.log('toggle 클릭')
      this.$store.state.cacheStore.isWork = false
      this.$store.state.cacheStore.isMe = true
    }
  }
}
</script>

<style scoped>

</style>

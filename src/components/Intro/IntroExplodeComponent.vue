<template>
    <div class="absolute w-full h-full">
        <video autoplay='true'><source src="@/assets/explosion.mp4" type="video/mp4" /></video>
    </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return {
      isGreen:true,
      isyellow:true,
      isPurple:true,

    }
  },
}
</script>
<style scoped>

</style>

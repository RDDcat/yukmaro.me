<template>
  <IntroExplode v-show="$store.state.modalStore.isIntroExplode" />
  <IntroBuzz v-show="$store.state.modalStore.isIntroBuzz" />

  <NavComponent />
  <MeComponent />
  <WorkComponent />
</template>

<script>
import IntroExplode from '@/components/intro/IntroExplode.vue'
import IntroBuzz from '@/components/intro/IntroBuzz.vue'

import MeComponent from './components/MeComponent.vue'
import NavComponent from './components/NavComponent.vue'
import WorkComponent from './components/WorkComponent.vue'

export default {
  name: 'App',
  components: {
    IntroExplode,
    IntroBuzz,
    MeComponent,
    NavComponent,
    WorkComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  background-color: #04020C;
}
</style>

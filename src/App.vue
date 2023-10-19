<template>
  <div>
    <FirstHead/> 
    <HeaderTwo/> 
    <HeroSection/>
  </div>

</template>

<script>
import FirstHead from './components/FirstHead.vue';
import HeaderTwo from './components/HeaderTwo.vue';
import HeroSection from './components/HeroSection.vue';

  export default {
    name:'app',
    components:{
      FirstHead,
      HeaderTwo,
      HeroSection, 
    }
    
  }
</script>

<style scoped>

</style>


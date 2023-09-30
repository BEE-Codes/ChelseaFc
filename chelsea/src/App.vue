<template>
  <div>
    <FirstHead/> 
    <HeaderTwo/> 

  </div>

</template>

<script>
import FirstHead from './components/FirstHead.vue';
import HeaderTwo from './components/HeaderTwo.vue';
  export default {
    name:'app',
    components:{
      FirstHead,
      HeaderTwo,
    }
    
  }
</script>

<style scoped>

</style>


<template>
  <div class="main">
    <div class="main-wrapper">
      <main-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>

import MainHeader from "./components/MainHeader.vue";

export default {
  components :{
    MainHeader
  },
  mounted() { 
    window.addEventListener('resize', ()=>this.$store.commit('setScreenWidth'))
  },
}
</script>
<style lang="scss">
  .main-wrapper {
    max-width: 1250px;
    margin: auto;
    overflow: hidden;
  }
  @include mobile{
    .main-wrapper{
      max-width: 290px;
    }
  }
</style>

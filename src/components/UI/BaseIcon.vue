<template>
    <div class="base-icon" v-html="icon"/> 
</template>
  
<script>
import icons from '@/assets/icons'
  
export default {
  props: ['name'],
  data () {
    return {
      icon: icons[this.name]
    }
  },
  name: 'base-icon'
}
</script>

<style lang="scss">
  .base-icon{
    height: max-content;
    width: max-content;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    
    svg{
      width: 100%;
      height: 100%;
    }
  }
</style>
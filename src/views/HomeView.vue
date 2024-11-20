<template>
  <main class="home">
      <home-presentation class="home__presentation"/>
      <home-offices class="home__offices"/>
      <home-mission class="home__mission"/>
      <home-business-areas class="home__business-areas"/>
      <home-compensation-package class="home__compensation-package"/>
      <home-corporate-life class="home__corporate-life"/>
  </main>
</template>

<script>
import HomePresentation from '@/components/homePage/HomePresentation.vue'
import HomeOffices from '@/components/homePage/HomeOffices.vue'
import HomeMission from '@/components/homePage/HomeMission.vue'
import HomeBusinessAreas from '@/components/homePage/HomeBusinessAreas.vue'
import HomeCompensationPackage from '@/components/homePage/HomeCompensationPackage.vue'
import HomeCorporateLife from '@/components/homePage/HomeCorporateLife.vue'

export default {
  name: 'HomeView',
  components: {
    HomePresentation, HomeOffices, HomeMission, HomeBusinessAreas, HomeCompensationPackage, HomeCorporateLife
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__presentation {
    margin: 79px auto;
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.8s ease-out forwards;

    @include mobile {
      margin: 27px auto 0px;
    }
  }
  &__corporate-life{
    margin-bottom: 67px;

    @include mobile {
      margin-bottom: 50px;
    }
  }
  &__presentation,
  &__offices,
  &__mission,
  &__business-areas,
  &__compensation-package{
    margin-bottom: 100px;

    @include mobile {
      margin-bottom: 50px;
    }
  }
}


@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
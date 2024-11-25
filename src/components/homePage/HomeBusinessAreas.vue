<template>
  <section class="business-areas">
    <h2 class="business-areas__title title">Направления бизнеса</h2>

    <div class="business-areas__areas-list">

      <!-- в отличие от точек на карте, areas данные врятли будут меняться, 
       по этому выносить в отдельный json и делать их подгрузку не требуется 
       ( можно вынести просто для удобства чтобы дата меньше была ) -->

       
      <div  class="business-areas__area-item" :class="{ 'business-areas__area-item--active': isAreaOpen(area.title) }"
          :style="{ backgroundImage: `url(${require('@/assets/' + area.img)})` }"
          v-for="area in areas" :key="area.title"
          @mouseover="toggleArea(area.title)"
          @mouseleave="clearArea()"
          @click="!isMobile || toggleArea(area.title)"
      >
      
        <div class="business-areas__item-content">
          <header class="business-areas__item-header">
              <h3 class="business-areas__item-title title">{{ area.title }} </h3>
              <base-icon class="business-areas__item-dropdown" :name="'areaDropdown'" v-if="isMobile" @click.stop="clearArea()"/>
          </header>
          
          <p class="business-areas__item-description" v-if="isAreaOpen(area.title)">{{ area.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'home-business-areas',
  data(){
      return {
          areas:[
              {
                  title: 'Решения Softline',
                  description: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.',
                  img: 'image/areas/area-1.jpg'
              },
              {
                  title: 'Кибербезопасность',
                  description: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. ',
                  img: 'image/areas/area-2.jpg'
              },
              {
                  title: 'Импортозамещение',
                  description: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.',
                  img: 'image/areas/area-3.jpg'
              },
              {
                  title: 'Облачные решения',
                  description: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.',
                  img: 'image/areas/area-4.jpg'
              },
              {
                  title: 'Цифровая трансформация и разработка ПО',
                  description: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.',
                  img: 'image/areas/area-5.jpg'
              },
              {
                  title: 'Техническая поддержка Softline',
                  description: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.',
                  img: 'image/areas/area-6.jpg'
              }
          ],
          openArea: ''
      }
  },
  computed: {
      ...mapGetters(["isMobile"]),
      isAreaOpen() {
        return (areaTitle) => this.openArea === areaTitle;
      }
  },
  methods:{
      clearArea(){
          this.openArea = null 
      },
      toggleArea(title){
          this.openArea = title 
      },
      mouseoverArea(title){
          this.openArea = title 
      }
  }
}
</script>

<style lang="scss" scoped>
.business-areas {
  &__item-header{
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: space-between;
  }
  &__title {
    margin: 0px auto 55px;

    @include mobile {
      margin-bottom: 15px;
    }
  }

  &__areas-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 22px 20px;

    @include mobile {
      grid-template-columns: auto;
      grid-template-rows: repeat(6, auto);
      gap: 10px;
    }
  }

  &__area-item {
    width: 100%;
    height: 260px;
    background: red;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;

    &:hover .business-areas__item-content {
      height: 100%;
    }
    
    @include mobile{
      height: 60px;
    }

    &--active{
      & .business-areas__item-header {
          height: auto;
      }
      & .business-areas__item-dropdown{
          transform: rotate(180deg);
      }
      & .business-areas__item-content{
          padding: 20px 10px;
      }
      & .business-areas__item-title{
          margin-bottom: 20px;

          @include mobile{
              margin-bottom: 10px;
          }
      }
      @include mobile{
        height: 240px;
      }
    }
  }

  &__item-content {
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: $dark-blue;
    padding: 28px 20px;
    box-sizing: border-box;
    transition: height 0.3s ease;
    
    @include mobile {
      height: 60px;
      padding: 0px 10px;
    }
  }
  
  &__item-dropdown{
    min-height: 36px;
    min-width: 36px;
  }

  &__item-title {
    max-width: 358px;

    @include mobile {
      max-width: 100%;
    }
  }

  &__item-description {
    transition: transform 0.3s ease;
    font-size: 17px;
    line-height: 23.8px;
    color: #fff;

    @include mobile {
      font-size: 16px;
      line-height: 22.4px;
    }
  }
}

</style>
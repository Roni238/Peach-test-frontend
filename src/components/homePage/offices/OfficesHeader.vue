<template>
    <div class="offices-menu">
        <header class="offices-menu__header">
            <div class="offices-menu__dropdown-btn" @click="toggleChooseOffices">
                <div class="offices-menu__dropdown-title">Офисы Softline</div>
                <arrow-icon :class="{ 'offices-menu__arrow--active': showAllOffice }" />
            </div>

            <ul class="offices-menu__filter-list">
                <li
                    class="offices-menu__filter-item"
                    :class="{ 'is-active': filter === selectedFilter }"
                    v-for="filter in filters"
                    :key="filter"
                    @click="selectFilter(filter)"
                >
                    {{ filter }}
                </li>
            </ul>
        </header>

        <div class="offices-menu__dropdown" v-if="showAllOffice">
            <ul class="offices-menu__region-list" v-for="region in regions" :key="region.name">
                <li class="offices-menu__list-title" @click="toggleRegion(region.name)">
                    {{ region.name }}   
                    <!-- лишнюю иконку нет смысла делать тк есть такой символ, пишу его не юникодом для большей понятности что это -->
                    <b class="offices-menu__dropdown-arrow" v-if="isMobile" 
                        :class="{ 'offices-menu__arrow--active': region.name === openedRegion }">▼</b>
                </li>
                
                <template v-if="region.name === openedRegion || !isMobile" >
                    <li class="offices-menu__list-item" v-for="city in region.cities" :key="city.name"> {{ city }} </li>
                </template>
            </ul>
        </div>
</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "offices-header",
  data(){
    return {
        openedRegion: null,
        showAllOffice: false
    }
  },
  props: {
    filters: {
      type: Array,
      required: true,
    },
    selectedFilter: {
      type: String,
      required: true,
    },
    regions: {
        type: Array,
        required: true,
    }
  },
  emits: [ "selectFilter"],
  methods: {
    selectFilter(filter) {
      this.$emit("selectFilter", filter);
    },
    // показать || скрыть список городов для выбранного региона
    toggleRegion(regionName) {
        if (this.isMobile){
            this.openedRegion = this.openedRegion === regionName ? null : regionName
        } 
    },
    // показать||скрыть все офисы
    toggleChooseOffices() {
      this.showAllOffice = !this.showAllOffice
    }
  },
  computed: {
    ...mapGetters(["isMobile"])
  }
};
</script>

<style lang="scss"scoped>

.offices-menu{
    width: 100%;

    &__header {
        height: 85px;
        padding: 0 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 0px 40px 0px #0000000f;
        color: $gray-color;
      
        @include mobile500 {
            padding: 0px 5px 0px 5px;
        }
        @include mobile {
            display: block;
            padding: 18px 5px 21px 5px;
            box-sizing: border-box;
            height: 95px;
        }
    }

    &__dropdown-btn {
        display: flex;
        gap: 16px;
        font-size: 24px;
        line-height: 24px;
        cursor: pointer;
        z-index: 2;
        position: relative;
        align-items: center;
        margin-right: 30px;
    
      & .header__arrow--active {
            transform: rotate(180deg);
      }
    }
  
    &__filter-list {
        display: flex;
        gap: 30px;
        height: 100%;
        overflow-x: auto;
    
        @include mobile500 {
            gap: 16px;
        }
    }
  
    &__filter-item {
        font-size: 18px;
        line-height: 20px;
        cursor: pointer;
        z-index: 1;
        display: flex;
        align-items: center;
    
        &.is-active {
            color: $red-color;
            border-bottom: solid 3px $red-color;
        }
        &:hover {
            color: $red-color;
        }
    
        @include mobile500 {
            font-size: 14px;
            line-height: 16px;
        }
    }

    &__dropdown-arrow{
        scale: 0.6;
    }
    &__arrow--active {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }
    &__region-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: none;
    }

    &__list-title {
        font-size: 18px;
        margin-bottom: 5px;
        line-height: 20px;
        
        @include mobile500 {
            display: flex;
            font-size: 14px;
            line-height: 14px;
            align-items: center;
            gap: 3px;
        }
    }

    &__list-item {
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;

        @include mobile500 {
            font-size: 14px;
            font-weight: 400;
            line-height: 14px;
        }
    }

    &__city-list {
        padding-top: 20px;
    }

    &__dropdown {
        position: absolute;
        top: calc(85px + 20px);
        background-color: #FFF;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 30px 65.8px;
        box-sizing: border-box;
        z-index: 1;
        color: #444;
        box-shadow: 0px 0px 32px 0px #00000058;

        &::after{
            content:'';
            position: fixed;
            inset: 0;
            z-index: -1;
            background-color: #ffffffd7;
        }
        @include mobile500 {
            top: 0px;
            padding: 84px 5px 19px;
            max-width: 100%;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 15px 30px;
        }
        @include mobile {
            padding: 53px 5px 19px;
        }
    }
}

</style>
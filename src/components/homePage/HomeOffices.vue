<template>
        <div class="offices">
            
            <offices-header class="offices__header"
                :filters="filters"
                :selectedFilter="selectedFilter"
                :showAllOffice="showAllOffice"
                :regions="regions"
                @toggleChooseOffices="toggleChooseOffices"
                @selectFilter="selectFilter"
            />
    
            <offices-map
                :selectedCity="selectedCity"
            />
        </div>
</template>

<script>
import OfficesHeader from "./offices/OfficesHeader.vue";
import OfficesMap from "./offices/OfficesMap.vue";

export default {
  name: 'HomeOffices',
  components: {
    OfficesHeader, OfficesMap
  },
  data() {
    return {
      filters: [],
      regions: [],
      selectedFilter: "Все", // дефолтный фильтр
    };
  },
  computed: {
    selectedCity() {
      if (this.selectedFilter === "Все") {
        return this.regions.map(region => region.dots).flat() // все точки на карте
      } else {
        const selectRegion = this.regions.find(region => region.name === this.selectedFilter)
        return selectRegion.dots // точки из нужного нам региона
      }
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter
    },
    async loadRegions() {
      try {
        const response = await fetch("/data/regions.json")
        const data = await response.json();
        this.filters = ["Все", ...data.regions.map(region => region.name)]
        this.regions = data.regions
      } catch (error) {
        console.error("Ошибка загрузки регионов:", error)
      }
    },
  },
  mounted() {
    // данных для даты слижком много, чтобы не засорять компонент буду подргужать json
    this.loadRegions() 
  }
};
</script>

<style lang="scss" scoped>
.offices {
    width: 100%;
    position: relative;
    font-weight: 600;
    list-style: none;
}
</style>
<template>
    <div class="content">
      <TopComponents></TopComponents>
      <Swiper ></Swiper>
      <seletor ></seletor>
      <menudiv ></menudiv>
      <subnav ></subnav>
      <salesbox ></salesbox>
    </div>
</template>

<script>
import TopComponents from './components/TopComponent'
import Swiper from  './components/vue-awsome-swiper'
import seletor from './components/selector'
import menudiv from './components/menu'
import subnav from './components/subnav_Entry'
import salesbox from './components/sales-box'
import searchbox from './components/searchBox'
export default {
  components: {
    TopComponents,
    Swiper,
    seletor,
    menudiv,
    subnav,
    salesbox,
    searchbox
  },
  data(){
    return{
      isshow: true,
      searchBoxshow: false
    }
  },
  methods:{
    openSearch(show){
      this.isshow = show
      this.searchBoxshow = true
    }
  }
}
</script>

<style scoped lang="stylus">
  .content
    display block
    background-color #f2f2f2
</style>

<template>
  <div>
    <div class="Search-index">
      <div class="Search-box" @click="openSearch()">
        <div>
          <span class="Search-box-font">
            <span class="iconfont icon-sousuo"></span>
            搜索:目的地/酒店/景点/航班号
          </span>
        </div>
      </div>
      <div class="user-icon">
        <img src="../../../asset/icon/user.png" class="img"/>
        <p class="font">我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopComponent",
    props:[
      'show'
    ],
    methods:{
      openSearch() {
        let url = '../../pages/search/main'
        wx.navigateTo({url})
      }
    }
  };
</script>

<style scoped lang="stylus">

.Search-index
  position fixed
  top:0
  width 100%
  background-color #f6f6f6
  height: 0.90rem
  border-bottom: 0.02rem solid #ccc
  padding 0.1rem 0 0 0.1rem
  border-top: 0.02rem solid #ccc
  box-sizing: border-box
  min-width: 6.4rem
  max-width: 10.8rem
  z-index 999
.Search-box
  float left
  width 90%
  height 0.56rem
  line-height 0.56rem
  background-color #fff
  border 1px solid #ccc
  border-radius 0.1rem
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  color #666
  font-size 0.3rem
.Search-box-font
  padding 1rem 1rem 1rem 0.1rem
.user-icon
  width 9%
  height 100%
  float left
  text-align center
  img
    width 0.48rem
    height 58%
  .font
    font-size 0.15rem
    color #0086b3
</style>

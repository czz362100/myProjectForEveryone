<template>
  <div class="content" ref="content">
    <div class="inputcontent">
      <img src="../../asset/icon/goback.png">
      <div class="input-box">
        <span class="iconfont icon-sousuo"></span>
        <input placeholder="请输入城市/景点"/>
      </div>
      <p class="font">搜索</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    created(){
      let width = wx.getSystemInfoSync().windowWidth
      let height = wx.getSystemInfoSync().windowHeight
      console.log(width, height)
    }
  };
</script>

<style scoped lang="stylus">
  .content
    background-color #cccccc
  .inputcontent
    position absolute
    top 0
    width 100%
    height 0.88rem
    background-color #e6f0f7
    padding 0.1rem 0.1rem
    img
      display block
      margin-top 0.1rem
      float left
      width 0.6rem
      height 0.6rem
    .input-box
      display block
      float left
      margin 0.1rem 0.1rem
      width 70%
      height 80%
      border-radius 8px
      background-color #fff
      span
        margin-top 0.2rem
        text-align center
        width 10%
        float left
      input
        margin-top 0.1rem
        float left
        width 70%
        font-size 0.3rem
    .font
      display block
      margin-top 0.15rem
      margin-left 0.1rem
      font-size 0.4rem
      float left
      color #099fde
</style>

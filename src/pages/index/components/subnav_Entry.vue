<template>
    <div class="content">
      <ul>
        <li>
          <img src="../../../asset/icon/subnav-icon/WIFI.png" class="icon">
          <a class="font">wifi电话卡</a>
        </li>
        <li>
          <img src="../../../asset/icon/subnav-icon/coin.png" class="icon">
          <a class="font">外币兑换</a>
        </li>
        <li>
          <img src="../../../asset/icon/subnav-icon/renzheng.png" class="icon">
          <a class="font">保险·签证</a>
        </li>
        <li>
          <img src="../../../asset/icon/subnav-icon/shopping.png" class="icon">
          <a class="font">购物</a>
        </li>
        <li>
          <img src="../../../asset/icon/subnav-icon/travel.png" class="icon">
          <a class="font">旅行</a>
        </li>
        <li>
          <img src="../../../asset/icon/subnav-icon/guider.png" class="icon">
          <a class="font">向导</a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "subnav_Entry"
  };
</script>

<style scoped lang="stylus">
.content
  background-color #fff
  height 2.32rem
  width 100%
  border 1px solid #ccc
  border-radius 0.16rem
  ul
    box-shadow 0 0.02rem 0.04rem rgba(0,0,0,.2)
    height 100%
    width 100%
    li
      float left
      height 50%
      width 20%
      text-align center
      img
        margin-top 0.1rem
        height 0.56rem
        width 0.56rem
.font
  font-size 0.25rem
</style>

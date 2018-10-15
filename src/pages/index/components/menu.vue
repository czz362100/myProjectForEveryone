<template>
    <div class="maincontent">
      <div class="menu-top">
        <div class="menu-child menu-child-left">
          <a class="menu_name">酒店</a>
        </div>
        <div class="menu-child menu-child-middle">
          <div class="Overseas_hotel">
            <a class="menu_name">海外酒店</a>
          </div>
          <div class="Cheap_hotel">
            <a class="menu_name">特价酒店</a>
          </div>
        </div>
        <div class="menu-child menu-child-right">
          <div class="Group_buy">
            <a class="menu_name">团购</a>
          </div>
          <div class="Inn">
            <a class="menu_name">民俗·客栈</a>
          </div>
        </div>
      </div>
      <div class="menu-middle">
        <div class="menu-child menu-middle-left">
          <a class="menu_name">机票</a>
        </div>
        <div class="menu-child menu-middle-middle">
          <div class="ticket">
            <a class="menu_name">火车票</a>
          </div>
          <div class="plane_ticket">
            <a class="menu_name">特价机票</a>
          </div>
        </div>
        <div class="menu-child menu-middle-right">
          <div class="car-ship_ticket">
            <a class="menu_name">汽车票·船票</a>
          </div>
          <div class="taxi">
            <a class="menu_name">专车·租车</a>
          </div>
        </div>
      </div>
      <div class="menu-bottom">
        <div class="menu-child menu-bottom-left">
          <a class="menu_name">旅游</a>
        </div>
        <div class="menu-child menu-bottom-middle">
          <div class="ticket">
            <a class="menu_name">门票</a>
          </div>
          <div class="Destination_strategy">
            <a class="menu_name">目的地攻略</a>
          </div>
        </div>
        <div class="menu-child menu-bottom-right">
          <div class="Cruise_ship_travel">
            <a class="menu_name">游轮旅行</a>
          </div>
          <div class="mading_travel">
            <a class="menu_name">定制旅行</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "menu"
  };
</script>

<style scoped lang="stylus">
.maincontent
  width 100%
  height 5.46rem
  border solid 1px #cccccc
  border-radius 8px
  overflow hidden
.menu-top
  height 33%
  width 100%
  background linear-gradient(to right ,#fa5956,#fa9b4d)
.menu-middle
  margin-top 0.02rem
  height 33%
  width 100%
  background linear-gradient(to right ,#4b8fed,#53bced)
.menu-bottom
  margin-top 0.02rem
  height 33%
  width 100%
  background linear-gradient(to right ,#34c2aa,#6cd557)
.menu-child
  height 100%
  width 33%
  float left
.menu-child-left
  background-image url("//pic.c-ctrip.com/platform/h5/home/grid-nav-items-hotel.png")
  background-size 2.42rem auto
  background-repeat no-repeat
  border-right solid 1px #fff
  border-bottom solid 1px #fff
  background-position center bottom
.menu-child-middle
  border-right 1px solid #fff
  .Overseas_hotel
    height 50%
    width 100%
    border-bottom solid 1px #fff
  .Cheap_hotel
    height 50%
    width 100%
.menu-child-right
  height 100%
  width 33%
  .Group_buy
    height 50%
    width 100%
    border-bottom solid 1px #fff
  .Inn
    height 50%
    width 100%
.menu-middle-left
  background-image url("//pic.c-ctrip.com/platform/h5/home/grid-nav-items-flight.png")
  background-size 2.42rem auto
  background-repeat no-repeat
  border-right solid 1px #fff
  border-bottom solid 1px #fff
  background-position center bottom
.menu-middle-middle
  border-right 1px solid #fff
  .ticket
    height 50%
    width 100%
    border-bottom solid 1px #fff
  .plane_ticket
    height 50%
    width 100%
.menu-middle-right
  height 100%
  width 33%
  .car-ship_ticket
    height 50%
    width 100%
    border-bottom solid 1px #fff
  .taxi
    height 50%
    width 100%
.menu-bottom-left
  background-image url("//pic.c-ctrip.com/platform/h5/home/grid-nav-items-travel.png")
  background-size 2.42rem auto
  background-repeat no-repeat
  border-right solid 1px #fff
  border-bottom solid 1px #fff
  background-position center bottom
.menu-bottom-middle
  border-right 1px solid #fff
  .Destination_strategy
    height 50%
    width 100%
  .ticket
    height 50%
    width 100%
    border-bottom solid 1px #fff
.menu_name
  text-align center
  font-size 0.3rem
  color #fff
  padding 0.22rem
.menu-bottom-right
  width 33%
  height 100%
  .Cruise_ship_travel
    width 100%
    height 50%
    border-bottom solid 1px #fff
  .mading_travel
    width 100%
    height 50%
</style>

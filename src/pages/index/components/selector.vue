<template>
    <div class="selector">
        <ul class="selector-ul">
          <li class="selector-li" >
            <img src="../../../asset/icon/palce.png" class="img"/>
            <p class="font">景点</p>
          </li>
          <li class="selector-li" >
            <img src="../../../asset/icon/jingdian.png" class="img"/>
            <p class="font">周边</p>
          </li>
          <li class="selector-li" >
            <img src="../../../asset/icon/food.png" class="img"/>
            <p class="font">美食林</p>
          </li>
          <li class="selector-li" >
            <img src="../../../asset/icon/onedayplay.png" class="img"/>
            <p class="font">一日游</p>
          </li>
          <li class="selector-li" >
            <img src="../../../asset/icon/Strategy.png" class="img"/>
            <p class="font">攻略</p>
          </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "selector",
    data(){
      return{
        play:[{
          name: '景点',
          position: 0
        },{
          name: '景点',
          position: -32
        },{
          name: '景点',
          position: -64
        },{
          name: '景点',
          position: -96
        },{
          name: '景点',
          position: -128
        }
        ]
      }
    },
    methods:{
      getIconPosition(item, index){
        let x = 0
        let y = -index * 32
        console.log('background-position:'+ x + ''+ y)
        return 'background-position:'+ x + ''+ y
      }
    }
  };
</script>

<style scoped lang="stylus">
.selector
  height 1.28rem
  padding 5px 0px 5px 0px
  background-color #fff
  border-radius 8px
  margin 4px 5px
.selector-ul
  position relative
  top 5px
  background-color #fffdef
  border-radius 15%
  border solid #ccccc 1px
.selector-li
  position relative
  top 0.1rem
  text-align center
  width 1.46rem
  height 1rem
  background-repeat no-repeat
  background-size 0.64rem 0.64rem
  float left
.img
  height 0.64rem
  width 0.64rem
.font
  font-size 0.3rem
</style>

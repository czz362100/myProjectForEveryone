<template>
      <div class="slider" ref="slider">
        <ul class="slider-group" ref="sliderGroup">
          <li class="slider-item">
              <img class="img" src="//dimg04.c-ctrip.com/images/70020w000000kt6tyD28A_750_150_25.jpg"/>
          </li>
          <li  class="slider-item">
              <img class="img" src="//dimg04.c-ctrip.com/images/700k0w000000kt5ko3CAE_750_150_25.jpg"/>
          </li>
          <li class="slider-item">
              <img class="img" src="//dimg04.c-ctrip.com/images/700l0w000000kd8ly97F9_750_150_25.jpg"/>
          </li>
        </ul>
      </div>
</template>

<script>
  import {addClass} from "../../../common/js/dom";
  import BScroll from 'better-scroll'
  let slider = document.querySelector('.slider')
  let scroll = new BScroll(slider)
  export default {
    name: "swiper",
    mounted() {
      setTimeout(()=>{
        this._initBScroll()
      },20)
    },
    methods:{
      _initBScroll(){
        this.slider = new scroll(this.$refs.slider,{
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          click: true
        })
      },
      /*_setBScrollWidth() {
        this.chilidren = this.$refs.sliderGroup.children
        console.log(this.$refs.sliderGroup.children)
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        console.log(width)
        for(let i = 0;i <this.chilidren.length; i++){
          let child = this.children[i]
          addClass(child,'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if(this.loop && !isResize){
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      }*/
    }
  };

</script>

<style scoped lang="stylus">
  .slider
    height 1.5rem
    background-color #cccccc
    margin-top  0.90rem
    overflow hidden
    .sliderGroup
      width 375*3 px
    .slider-item
      float: left
      box-sizing border-box
      overflow hidden
      text-align center
      width 375px
      img
        height 1.5rem
        width 100%
</style>

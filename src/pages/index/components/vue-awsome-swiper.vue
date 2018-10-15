
  <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500" circular="true">
    <block v-for="(item, index) in movies" :index="index" :key="key">
      <swiper-item>
        <image :src="item.url" class="slide-image" mode="aspectFill"/>
      </swiper-item>
    </block>
  </swiper>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {

        },
        movies:[{
          url: 'https://dimg04.c-ctrip.com/images/70020w000000kt6tyD28A_750_150_25.jpg'
        },{
          url:'https://dimg04.c-ctrip.com/images/700k0w000000kt5ko3CAE_750_150_25.jpg'
        },{
          url:'https://dimg04.c-ctrip.com/images/700l0w000000kd8ly97F9_750_150_25.jpg'
        },{
          url:'https://dimg04.c-ctrip.com/images/700u0w000000kl6vj92CF_750_150_25.jpg'
        },{
          url:'https://dimg04.c-ctrip.com/images/700k0w000000kt5ko3CAE_750_150_25.jpg'
        }]
      }
    },

  }
</script>
<style lang="stylus" scoped>
  .swiper
    margin-top 0.9rem
    height 1.5rem
    width 7.5rem
  .slide-image
    width 100%
    height 100%
</style>

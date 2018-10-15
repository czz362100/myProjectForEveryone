<template>
  <div>
    <p>hello,welcome to new page</p>
    <p> {{ name }} </p>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  data()  {
    return{
      name: '',
      screenWidth: '',
      screenHeight: ''
    }
  },
  created() {

  },
  mounted() {
    this.name = this.$root.$mp.query.name
    this.screenWidth = wx.getSystemInfoSync().windowWidth
    this.screenHeight = wx.getSystemInfoSync().windowHeight
    console.log(this.screenWidth)
    console.log(this.screenHeight)
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  }
}
</script>

<style>

</style>

import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible.js'
import './asset/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


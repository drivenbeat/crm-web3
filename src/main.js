// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'jquery'

import './assets/vendors/custom/fullcalendar/fullcalendar.bundle.css'
import './assets/vendors/base/vendors.bundle.css'
import './assets/demo/demo10/base/style.bundle.css'

import './assets/vendors/base/vendors.bundle.js'
import $mAppObj from './assets/demo/demo10/base/scripts.bundle.js'
// import './assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'
// import './assets/app/js/dashboard.js'

Vue.use($mAppObj)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {

  	console.log('app mounted')
  	setTimeout(function(){
  		$('body').removeClass('m-page--loading')
  	}, 2000)
  }
})

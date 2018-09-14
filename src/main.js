// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  '@/styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false
/* 使用 router.beforeEach 注册一个全局前置守卫
  在页面跳转前 对路由进行判断 防止未登录的用户跳转到其他需要登录的页面去
*/
router.beforeEach((to,from,next)=>{
  // console.log(to)
  let token = localStorage.getItem('mytoken')
  if(token){ // 如果已经登录  不干涉
    next()
  }else{
    if(to.path !=='/login'){
      // 如果没有登录 访问的是其他页面  就让跳到登录页面
      // next({path:'/login'})
      next('/login')
   
      
    }else{
      // 如果没有登录 访问的是login  不干涉 让访问login
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('@/views/home/Home.vue')
    }
]

export default new Router({
    mode:'history',
    routes
})

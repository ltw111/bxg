import Vue from "vue"
import App from "./App.vue"
import axios from "axios"

import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Loginin from "./components/Loginin.vue"

Vue.use(VueRouter)

var router=new VueRouter({
    routes:[
        {name:"app",path:"/",redirect:"/home"},
        {name:"home",path:"/home",component:Home},
        {name:"loginin",path:"/loginin",component:Loginin}
    ]
})

Vue.use(function (Vue){
    Vue.prototype.$axios=axios
})

new Vue({
    el:"#app",
    router,
    render:createElement=>createElement(App)
})
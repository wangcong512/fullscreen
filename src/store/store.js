// vuex状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入状态
import state from './state'
// 引入修改状态的方法
import mutations from './mutation'
// 引入异步操作mutation的方法
import actions from './action'
// 引入计算属性
import getters from './getter'
// 引入模块

export default new Vuex.Store({
    state,//状态
    mutations,//自定义方法
    actions,
    getters,//计算属性
    plugins: [],
    modules:{//模块
    }
})

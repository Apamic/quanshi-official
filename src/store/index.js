import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    isLogin: false, // 登录状态
  },
  // 修改store中的值唯一的方法就是提交mutation来修改
  mutations:{
    /**
     * 设置状态
     * @param {Object} state 状态对象
     * @param {Object} provider 传入值
     */
    // 示例
    setState(state, provider) {
      state.user = provider.user
      state.config = provider.config
    },

    login(state,provider){
      state.isLogin = true
      window.localStorage.setItem("live_token", provider)
    },

    loginout(state){
      state.isLogin = false
      uni.removeStorageSync("live_token")
    },
  },
})

export default store
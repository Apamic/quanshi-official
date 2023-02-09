<template>
  <!-- 头部导航部分 -->
  <div class="headerVue" :style="{ background: background }">
    <div class="header">
      <div class="navVue">
        <img :src="logo==='light'?light:dark">
        <div class="navBox">
          <div class="nav" v-for="(item, index) in navs" :key="index"
            :style="{ color:current === index?activeColor:color,fontWeight:current === index?700:400}" @click="changeNav(index)">{{ item }}</div>
        </div>
      </div>
      <div class="oprationVue">
        <div class="scan" @mouseover="isScan = true" @mouseleave="isScan = false">
          <img src="../assets/erweima.png" />
          <span>扫码咨询</span>
          <div class="codeVue" v-if="isScan">
            <img src="../assets/code.png">
          </div>
        </div>
        <div class="line" :style="{ background: color }"></div>
        <h4 @click="isLoginVue = true" :style="{ color: color}" v-if="!isLogin">登录/注册</h4>
        <div class="user el-icon-user" :style="{ color: color}" v-else></div>
      </div>
    </div>
    <!-- 登录弹框 -->
    <div class="loginmask" v-if="isLoginVue">
      <div class="loginVue">
        <div class="login">
          <div class="close" @click="isLoginVue = false">
            <img src="../assets/close.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      navs: ["首页", "产品介绍", "形象定制", "会员中心", "伙伴计划", "关于我们"],
      isScan: false,
      isLoginVue: false,
      light: require('../assets/logo_light.png'),
      dark: require("../assets/logo_dark.png"),
    }
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.isLogin
    }),
  },
  props: {
    background: {
      type: String,
      default: ""
    },
    current: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#fff"
    },
    logo: {
      type: String,
      default: "light"
    },
    activeColor: {
      type: String,
      default: "#02A7A0"
    }
  },
  methods: {
    changeNav(index) {
      this.$parent.setActiveItem(index)
    }
  }
}
</script >

<style lang="less" scoped>
.headerVue {
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  .header {
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 50px;

    .navVue {
      display: flex;
      align-items: center;

      img {
        width: 80px;
        height: 56px;
        cursor: pointer;
      }

      .navBox {
        display: flex;
        align-items: center;
        padding-left: 50px;

        .nav {
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          margin-right: 30px;
          cursor: pointer;
          font-weight: 500;
        }
      }
    }

    .oprationVue {
      display: flex;
      align-items: center;

      .scan {
        width: 120px;
        height: 36px;
        background: #02A7A0;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        .codeVue {
          width: 120px;
          height: 120px;
          background: #fff;
          border-radius: 4px;
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          top: 40px;
          z-index: 99999;
          box-shadow: 0px 2px 4px 0px rgba(173, 179, 204, 0.39);

          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }

        img {
          width: 14px;
          height: 14px;
          margin-right: 5px;
        }

        span {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          line-height: 34px;
        }
      }

      .line {
        width: 1px;
        height: 18px;
        margin: 0 20px;
        border-radius: 1px;
      }

      h4 {
        color: #666;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
      h4:hover {
        color: #02A7A0 !important;
      }

      .user {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
      }


      
    }
  }
}

// 登录弹框
.loginmask {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    .loginVue {
        width: 800px;
        height: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .login {
            width: 100%;
            height: 100%;
            animation: fadeinScale 0.5s ease 0s both;
            background: #fff;
            border-radius: 10px;
            position: relative;
            .close {
                width: 30px;
                height: 30px;
                position: absolute;
                top: 0;
                right: -40px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
@keyframes fadeinScale {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>


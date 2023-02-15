<template>
  <div class="container flex-center align-center">
    <div class="content flex">
      <img src="../assets/login/login.png" style="width:652px;height: 605px;">
      <div class="login-wrap">
        <img style="display: block; margin: 30px auto;" src="../assets/logo_dark.png">
        <div class="wrap">
          <div class="flex tabs">
            <div class="flex-1" :class=" current == 0 ? 'active' : '' " @click="current = 0">验证码登录</div>
            <div class="flex-1" :class=" current == 1 ? 'active' : '' " @click="current = 1">密码登录</div>
          </div>

          <template v-if="current == 0">
            <div class="input-wrap">
              <img src="../assets/login/phone-icon.png" class="icon">
              <input v-model="phone" placeholder="请输入手机号">
            </div>
            <div class="input-wrap flex">
              <img src="../assets/login/lock-icon.png" class="icon">
              <input v-model="code" placeholder="请输入验证码">
              <div class="code-but" v-if="!isSend" @click.stop="onSend()">
                获取验证码
              </div>

              <div class="send-but" v-if="isSend">
                {{count}}s重新发送
              </div>

            </div>
          </template>

          <template v-if="current == 1">
            <div class="input-wrap">
              <img src="../assets/login/phone-icon.png" class="icon"> <input v-model="phone" placeholder="请输入手机号">
            </div>

            <div class="input-wrap">
              <img src="../assets/login/lock-icon.png" class="icon">
              <input v-model="password" placeholder="请输入密码">
            </div>

          </template>


          <div class="login-but" style="margin-top: 50px">
            注册 / 登录
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logIn",

  data() {
    return {
      current: 0,
      phone: '',
      code: '',
      password: '',
      isSend: false,
      count: 30,
      time: null
    }
  },

  methods: {

    onCountSeconds() {
      this.time = setInterval(() => {
        this.count--

        if (this.count == 0) {
          clearInterval(this.time)
          this.time = null
          this.isSend = false
          this.count = 30
        }

      },1000)

    },

    onSend() {
      this.isSend = true
      this.onCountSeconds()
    }

  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;

  .content {
    width: 1200px;
    height: 634px;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 0 26px 50px 1px rgba(0, 0, 0, 0.15);

    .login-wrap {
      width: 424px;

      .wrap {
        .tabs {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #989898;

          div {
            text-align: center;
            font-size: 26px;
            color: #989898;
            cursor: pointer;
          }

          .active {
            color: #343434;
            font-weight: 700;
          }
        }
      }
    }
  }
}

.input-wrap {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0 0 0 30px;
  height: 70px;
  line-height: 70px;

  input {
    margin-left: 20px;
    font-size: 20px;
  }

}

input::placeholder {
  color: #989898;
}

.code-but {
  width: 160px;
  height: 64px;
  line-height: 64px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: #02A7A0;
  border-radius: 16px;
  cursor: pointer;
  transition: .5s;
}

.send-but {
  width: 160px;
  height: 64px;
  line-height: 64px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: #B7B7B7;
  border-radius: 16px;
}

.code-but:hover,
.login-but:hover {
  color:  #02A7A0;
  background: #fff;
}

.login-but {
  height: 64px;
  line-height: 64px;
  color: #fff;
  text-align: center;
  background: #02A7A0;
  border-radius: 16px;
  font-size: 20px;
  cursor: pointer;
  transition: .5s;
}

.icon {
  width: 33px;
  height: 33px;
}

</style>

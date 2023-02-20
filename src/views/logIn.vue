<template>
  <div class="container flex-center align-center">
    <div class="content flex">
      <img class="image" src="../assets/login/login.png">
      <div class="login-wrap">
        <img class="logo" style="display: block; margin: 30px auto;" src="../assets/logo_dark.png">
        <div class="wrap">
          <div class="flex tabs">
            <div class="flex-1" :class=" current == 0 ? 'active' : '' " @click="current = 0">验证码登录</div>
<!--            <div class="flex-1" :class=" current == 1 ? 'active' : '' " @click="current = 1">密码登录</div>-->
          </div>

          <template v-if="current == 0">
            <div class="input-wrap">
              <img src="../assets/login/phone-icon.png" class="icon">
              <input v-model="phone" placeholder="请输入手机号">
            </div>
            <div class="input-wrap flex">
              <img src="../assets/login/lock-icon.png" class="icon">
              <input v-model="code"  style="width: 60%;" placeholder="请输入验证码">
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


          <div class="login-but" @click="login()">
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

  mounted() {

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

      let reg = /^1[3-9]\d{9}$/

      if (reg.test(this.phone)) {
        this.$axios.post(`/ajax/sendCode?phoneEmail=${this.phone}`,{
        }).then(res => {
          this.isSend = true
          this.onCountSeconds()
          console.log('成功')
        })
      } else {
        this.$message.error('请输入正确的手机号！')
        return
      }

    },

    login() {

      if (!this.phone) {
        return this.$message.error('请输入正确的手机号！')
      }

      if (!this.code) {
        return  this.$message.error('请输入正确的验证码！')
      }

      this.$axios.post(`/front/codeLogin?name=${this.phone}&code=${this.code}`,{}).then(res => {
        console.log('登录成功！')
      })
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

    .image {
      width:652px;
      height: 605px;
    }

    .login-wrap {
      width: 424px;
      .logo {
        display: block;
        margin: 30px auto;
      }
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
    padding-left: 20px;
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
  margin-top: 50px;
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

@media screen and (max-width: 900px) {

  .container {
    .content {
      flex-direction: column;
      padding: 0 0.5rem;
      margin: 0 0.2rem;
      width: 100%;
      height: 4rem;
      .image {
        display: none;
        margin: 0 auto;
        width:3.26rem;
        height: 3.02rem;
      }

      .login-wrap {
        width: 100%;
        .logo {
          width: .9rem;
          height: 0.7rem;
        }
        .wrap {
          .tabs {
            height: 0.4rem;
            line-height: 0.4rem;

            div {
              font-size: 0.18rem;
            }
          }
        }
      }

    }
  }

  .input-wrap {
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
    padding: 0 0 0 0.15rem;
    height: 0.35rem;
    line-height: 0.35rem;

    input {
      padding-left: 0.1rem;
      font-size: 0.1rem;
    }

  }

  input::placeholder {
    color: #989898;
  }

  .code-but {
    width: 0.8rem;
    height: 0.32rem;
    line-height: 0.32rem;
    color: #fff;
    font-size: 0.1rem;

  }

  .send-but {
    width: 0.8rem;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.1rem;
  }

  .icon {
    width: 0.15rem;
    height: 0.15rem;
  }

  .login-but {
    margin-top: 0.3rem;
    height: 0.34rem;
    line-height: 0.34rem;
    font-size: 0.1rem;

  }

  .code-but:hover,
  .login-but:hover {
    color: #fff;
    background: #02A7A0;
  }

}


</style>

<template>
  <div class="popup-bg align-center flex-center" v-if="show">
    <div class="popup-wrap flex">
      <div class="left">
        <img class="logo" src="../assets/logo_light.png">
        <h1>
          加入伙伴计划，<br>
          免费开启分身之旅
        </h1>

        <p>
          感谢您对全视数字科技的关注，<br>
          请留下您的信息，<br>
          我们会尽快联系您！
        </p>

        <div class="code-wrap">
          <img class="code" src="../assets/code.jpg">
          <span>了解更多，扫码咨询</span>
        </div>

      </div>

      <div class="right">
        <div class="flex flex-end">
          <img class="close" src="../assets/popup/close.png" @click.stop="show = false">
        </div>
        <div class="list-wrap">
          <div class="item">
            <span class="label">主体对象</span>
            <div class="selected">
              <label><input type="radio" name="main-body" v-model="subject" value="mcn机构">mcn机构</label>
              <label><input type="radio" name="main-body" v-model="subject" value="个人">个人</label>
            </div>
          </div>
          <div class="item">
            <span class="label">已入驻平台（<span style="color: #02A7A0;">多选</span>）</span>
            <div class="selected">
              <label class="flex-3"><input type="checkbox" name="platform" v-model="platform" value="抖音">抖音</label>
              <label class="flex-3"><input type="checkbox" name="platform" v-model="platform" value="快手">快手</label>
              <label class="flex-3"><input type="checkbox" name="platform" v-model="platform" value="视频号">视频号</label>
              <label class="flex-3"><input type="checkbox" name="platform" v-model="platform" value="b站">b站</label>
              <label class="flex-3"><input type="checkbox" name="platform" v-model="platform" value="全网">全网</label>
            </div>
          </div>

          <div class="item">
            <span class="label">粉丝数量</span>
            <div class="selected">
              <label><input type="radio" name="fans" v-model="fansNum" value="5W以下">5W以下</label>
              <label><input type="radio" name="fans" v-model="fansNum" value="5W-50W">5W-50W</label>
              <label><input type="radio" name="fans" v-model="fansNum" value="50W-100W">50W-100W</label>
              <label><input type="radio" name="fans" v-model="fansNum" value="100W以上">100W以上</label>
            </div>
          </div>

          <div class="item">
            <span class="label">创作方向</span>
            <input type="text" placeholder="请输入创作方向" v-model="direction">
          </div>

          <div class="item">
            <span class="label">姓名</span>
            <input type="text" placeholder="请输入姓名" v-model="realName">
          </div>

          <div class="item">
            <span class="label">手机号</span>
            <input type="text" placeholder="请输入手机号" v-model="mobile" >
          </div>
        </div>

        <div class="but-wrap">
          <div class="but" @click.stop="submit()">
            提交
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getParams} from "@/utils";

export default {
  name: "questionPopup",
  data() {
    return {
      show: false,

      subject: 'mcn机构',
      platform: ['抖音'],
      fansNum: '5W以下',
      direction: '',
      realName: '',
      mobile: '',
    }
  },

  watch: {
    platform() {
      if (this.platform.length == 0) {
        this.platform = ['抖音']
      }
    }
  },

  methods: {
    submit() {
      let reg = /^1[3-9]\d{9}$/

      if (!this.direction) return this.$message({message: '请输入创作方向',type: "error"})
      if (!this.realName) return this.$message({message: '请输入姓名',type: "error"})
      if (!reg.test(this.mobile)) return this.$message({message: '请输入正确的手机号',type: "error"})
      this.$axios.post(`/search/joinUs?${getParams({
        subject: this.subject,
        platform: this.platform,
        fansNum: this.fansNum,
        direction: this.direction,
        realName: this.realName,
        mobile: this.mobile
      })}`).then(res => {
        this.$message({message: '提交成功',type: "success"})
        this.show = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.popup-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fedeIn 0.5s ease 0s normal;
  z-index: 1001;
}

.popup-wrap {
  width: 1200px;
  height: 800px;
  background: #fff;
  border-radius: 40px;
  overflow: hidden;
  .left {
    padding: 40px 0;
    width: 380px;
    height: 100%;
    background: url("../assets/popup/group.png") no-repeat;
    background-size: 100% 100%;
    .logo {
      display: block;
      margin: 0 auto;
      width: 140px;
      height: 103px;
    }
    h1 {
      margin: 40px 0;
      color: #DFB685;
      font-size: 36px;
      text-align: center;
    }
    p {
      color: #D4D4D4;
      font-size: 16px;
      text-align: center;
    }

    .code-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 220px;
      .code {
        width: 140px;
        height: 140px;
      }
      span {
        margin: 10px;
        color: #D4D4D4;
        font-size: 20px;
      }
    }
  }

  .right {
    flex: 1;
    padding: 20px 30px;
    .close {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .list-wrap {
      .item {
        display: flex;
        align-items: flex-start;
        padding-bottom: 20px;
        width: 100%;
        .label {
          width: 230px;
          color: #989898;
          font-size: 24px;
          white-space: nowrap;
        }

        .selected {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          label {
            flex: 0 0 50%;
            display: flex;
            margin-bottom: 20px;
            align-items: center;
            font-size: 24px;
            color: #343434;

            input[type='radio'] {
              margin-right: 10px;
              width: 24px;
              height: 24px;
            }

            input[type='checkbox'] {
              margin-right: 10px;
              width: 24px;
              height: 24px;
            }



          }
          .flex-3 {
            flex: 0 0 33.3%;
          }

        }
      }

      input[type='text'] {
        padding: 0 10px;
        margin-bottom: 20px;
        width: 350px;
        height: 45px;
        font-size: 18px;
        line-height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 6px;
      }
    }
    .but-wrap {
      .but {
        margin: 40px auto 0;
        width: 500px;
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: 24px;
        color: #FFFFFF;
        background: #02A7A0;
        border-radius: 13px;
        cursor: pointer;
      }
    }
  }
}


@media screen and (max-width: 900px) {
  .popup-wrap {
    width: 88%;
    height: 6rem;
    background: #fff;
    border-radius: 0.2rem;
    overflow: hidden;

    .left {
      display: none;
    }

    .right {
      flex: 1;
      padding: 0.1rem 0.15rem;
      width: 100%;

      .close {
        width: 0.2rem;
        height: 0.2rem;
        cursor: pointer;
      }

      .list-wrap {
        .item {
          display: flex;
          align-items: flex-start;
          padding-bottom: 0.2rem;
          width: 100%;
          .label {
            width: 1.15rem;
            color: #989898;
            font-size: 0.12rem;
            white-space: nowrap;
          }

          .selected {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            label {
              flex: 0 0 50%;
              display: flex;
              margin-bottom: 0.24rem;
              align-items: center;
              font-size: 0.12rem;
              color: #343434;

              input[type='radio'] {
                margin-right: 0.1rem;
                width: 0.12rem;
                height: 0.12rem;
              }

              input[type='checkbox'] {
                margin-right: 0.1rem;
                width: 0.12rem;
                height: 0.12rem;
              }



            }
            .flex-3 {
              flex: 0 0 33.3%;
            }

          }
        }

        input[type='text'] {
          padding: 0 10px;
          margin-bottom: 20px;
          width: 1.75rem;
          height: 0.3rem;
          font-size: 0.09rem;
          line-height: 0.3rem;
          border: 1px solid #D4D4D4;
          border-radius: 0.06rem;
        }
      }
      .but-wrap {
        .but {
          margin: 40px auto 0;
          width: 2.5rem;
          height: 0.32rem;
          line-height: 0.32rem;
          text-align: center;
          font-size: 0.12rem;
          color: #FFFFFF;
          background: #02A7A0;
          border-radius: 0.06rem;
          cursor: pointer;
        }
      }
    }
  }
}








@keyframes fedeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}

</style>

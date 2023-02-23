<template>
  <div class="popup-bg align-center flex-center" v-if="show">
    <div class="popup-wrap">
      <div class="popup-head align-center flex-between">
        <span>立即咨询</span>
        <img class="close" src="../assets/popup/close.png" @click="show = !show">
      </div>
      <div class="content">
        <div>
          <ul>
            <li class="row">
              <span>
                姓名
                <span style="color: red;">*</span>
              </span>
              <input v-model="name" placeholder="请输入您的姓名">
            </li>
            <li class="row">
              <span>
                手机号
                <span style="color: red;">*</span>
              </span>
              <input v-model="mobile" placeholder="请输入您的手机号">
            </li>
            <li class="row">
              <span>
                留言
                <span style="color: red;">*</span>
              </span>
              <textarea v-model="content" placeholder="请输入您的留言内容"></textarea>
            </li>
          </ul>
        </div>
        <div class="submit" @click="submit">
          提交
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getParams} from "@/utils";

export default {

  name: "consultPopup",
  data() {
    return {
      show: false,
      name: '',
      mobile: '',
      content: '',
      message1: ''
    }
  },
  methods: {

    submit() {

      let reg = /^1[3-9]\d{9}$/

      if (!this.name) return this.$message({message: '请输入您的姓名',type: "error"})
      // console.log( reg.test(this.mobile))
      // console.log(!this.mobile)
      if (!reg.test(this.mobile)) {

        return this.$message({message: '请输入正确的手机号',type: "error"})
      }
      if (!this.content) return this.$message({message: '请输入您的留言内容',type: "error"})

      this.$axios.post(`/search/leaveMessage?${getParams({
        name: this.name,
        mobile: this.mobile,
        content: this.content
      })}`,{}).then(res => {

        this.$message({message: '提交成功',type: "success"})

        this.name = ''
        this.mobile = ''
        this.content = ''
        this.show = false
      })

    }


  },

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
  width: 600px;
  height: 700px;
  background: #fff;
  border-radius: 30px;
  overflow: hidden;

  .popup-head {
    padding: 0 40px;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    font-weight: 700;
    background: #E4F5F4;

    .close {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  .content {
    padding: 40px;

    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      height: 40px;
      line-height: 40px;
      span {
        font-size: 20px;
        color: #343434;
      }

      input {
        padding: 0 10px;
        width: 350px;
        font-size: 20px;
        border: 1px solid #D4D4D4;
        border-radius: 6px;
      }

      textarea {
        padding: 10px;
        width: 350px;
        height: 220px;
        font-size: 20px;
        border: 1px solid #D4D4D4;
        border-radius: 6px;
        outline: none;
        resize:none;
      }

    }

    .submit {
      margin-top: 240px;
      width: 100%;
      height: 65px;
      line-height: 65px;
      color: #fff;
      font-size: 24px;
      text-align: center;
      background: #02A7A0;
      border-radius: 13px;
      cursor: pointer;
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

@media screen and (max-width: 900px) {
  .popup-wrap {
    width: 85%;
    height: 4rem;
    background: #fff;
    border-radius: 0.3rem;
    overflow: hidden;

    .popup-head {
      padding: 0 0.2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.15rem;
      font-weight: 700;
      background: #E4F5F4;

      .close {
        width: 0.12rem;
        height: 0.12rem;
        cursor: pointer;
      }
    }

    .content {
      padding: 0.2rem;

      .row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.15rem;
        height: 0.3rem;
        line-height: 0.3rem;
        span {
          font-size: 0.1rem;
          color: #343434;
        }

        input {
          padding: 0 0.1rem;
          width: 1.7rem;
          font-size: 0.1rem;
          border: 1px solid #D4D4D4;
          border-radius: 0.06rem;
        }

        textarea {
          padding: 10px;
          width: 1.7rem;
          height:1.1rem;
          font-size: 0.1rem;
          border: 1px solid #D4D4D4;
          border-radius: 0.06rem;
          outline: none;
          resize:none;
        }

      }

      .submit {
        margin-top: 1.4rem;
        width: 100%;
        height: 0.32rem;
        line-height: 0.32rem;
        color: #fff;
        font-size: 0.12rem;
        text-align: center;
        background: #02A7A0;
        border-radius: 0.13rem;
        cursor: pointer;
      }

    }
  }



}


</style>

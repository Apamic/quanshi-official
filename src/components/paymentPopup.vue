<template>
  <div class="popup-bg align-center flex-center" v-if="show">

    <div class="popup-wrap">
      <div class="popup-head align-center flex-between">
        <span>开通会员</span>
        <img class="close" src="../assets/popup/close.png" @click="show = !show">
      </div>
      <div class="content">
        <div class="card-wrap">
          <div class="card">
            <div>月卡</div>
            <div style="text-align: center">
              <span class="p1">￥</span><span class="p2">1299</span>
            </div>
          </div>
        </div>

        <ul class="list-wrap">
          <li>
            <span class="label">选择方案</span>
            <span style="color: #343434;">会员1个月</span>
          </li>

          <li>
            <span class="label">应付金额</span>
            <span class="other" style="color: #02A7A0;">1299</span>
          </li>

          <li>
            <span class="label">支付方式</span>
            <div class="select-wrap flex align-center">
              <div class="select-item">
                <img src="../assets/popup/zfb.png" v-if="select == 0">
                <img src="../assets/popup/zfb-c.png" v-else>

                <img class="selected" src="../assets/popup/zfb-g.png">

                <div>支付宝支付</div>
              </div>

              <div class="select-item">
                <img src="../assets/popup/vx.png" v-if="select == 1">
                <img src="../assets/popup/vx-c.png" v-else>

                <img class="selected" src="../assets/popup/zfb-g.png">
                <div>微信支付</div>
              </div>
            </div>
          </li>

        </ul>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "paymentPopup",
  data() {
    return {
      show: true,

      select: 0,

    }
  },

  methods: {

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
  background: rgba(0,0,0,0.5);
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
    .card-wrap {
      overflow: hidden;
      .card {
        padding: 10px 20px;
        width: 184px;
        height: 123px;
        color: #fff;
        background: url("../assets/popup/card.png") no-repeat;
        background-size: 100% 100%;
        div:first-child {
          font-size: 20px;
        }
        .p1 {
          font-size: 24px;
        }

        .p2 {
          font-size: 40px;
        }

      }
    }

    .list-wrap {
      li {
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;

        span {
          font-size: 20px;
        }

        .label {
          color: #989898;

        }

        .other {
          font-size: 30px;
          color: #02A7A0;
        }

        .select-wrap {
          .select-item {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: 25px;
            padding: 0 10px;
            width: 148px;
            height: 48px;
            border: 1px solid #B7B7B7;
            border-radius: 8px;
            div {
              margin-left: 10px;
              color: #989898;
              font-size: 18px;
            }
            img {

              width: 24px;
              height: 24px;
            }

            .selected {
              position: absolute;
              bottom: 0;
              right: 0;
              width: 33px;
              height: 23px;
            }

          }
        }
      }
    }

  }



}

</style>

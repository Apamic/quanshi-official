<template>
  <div class="popup-bg align-center flex-center" v-if="show">

    <div class="popup-wrap">
      <div class="popup-head align-center flex-between">
        <span>{{title}}</span>
        <img class="close" src="../assets/popup/close.png" @click="show = !show">
      </div>
      <div class="content">
        <div class="card-wrap">
          <div class="card" :class="index == selectType ? 'active' : ''"  v-for="(item,index) in vipPrice" :key="item.key" @click.stop="selectType = index">
            <div>{{item.name}}卡</div>
            <div style="text-align: center">
              <span class="p1">￥</span><span class="p2">{{item.price}}</span>
            </div>
          </div>
        </div>

        <ul class="list-wrap">
          <li>
            <span class="label">选择方案</span>
            <span style="color: #343434;">会员{{vipPrice[selectType].name}}卡</span>
          </li>

          <li>
            <span class="label">应付金额</span>
            <span class="other" style="color: #02A7A0;">{{vipPrice[selectType].price}}</span>
          </li>

          <li>
            <span class="label">支付方式</span>
            <div class="select-wrap flex align-center">
              <div class="select-item" :class="select == 0 ? 'zfb-s' : ''" @click.stop="select = 0">
                <img src="../assets/popup/zfb.png" v-if="select == 0">
                <img src="../assets/popup/zfb-c.png" v-else>

                <img class="selected" src="../assets/popup/zfb-g.png" v-if="select == 0">

                <span>支付宝</span>
              </div>

              <div class="select-item" :class="select == 1 ? 'vx-s' : ''" @click.stop="select = 1">
                <img src="../assets/popup/vx.png" v-if="select == 1">
                <img src="../assets/popup/vx-c.png" v-else>

                <img class="selected" src="../assets/popup/vx-g.png" v-if="select == 1">
                <span>微信</span>
              </div>
            </div>
          </li>

        </ul>

        <div class="bottom-wrap">

          <div class="pay-but" @click="buyVip()">
            立即支付
          </div>

          <div class="agreement">
            付款即同意《服务协议》
          </div>

        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "paymentPopup",

  props: {
    title: {
      type: String,
      default: '开通会员'
    }
  },

  data() {
    return {
      show: false,

      select: 0,
      selectType: 0,

    }
  },

  mounted() {

    this.getVipPrice()
  },

  methods: {
    getVipPrice() {
      this.$axios.post('/front/user/vipPrice').then(res => {
        this.vipPrice = res.obj
        //console.log(res)
      })
    },

    buyVip() {

      let type = this.vipPrice[this.selectType].key

      this.$axios.post(`/front/user/buyVip?type=${type}`).then(res => {
        console.log(res)

        this.pay(res)

      })
    },


    pay(data) {
      let {select} = this
      if (select == 0) {
        this.$axios.post(`/front/aliPay/wapPay?orderId=${data.obj.id}`).then(res => {
          // console.log(res)

          // const div = document.createElement('div');
          // div.innerHTML = res.data.form;
          // document.body.appendChild(div);
          // document.forms[0].submit();



        })
      }

      if (select == 1) {

      }
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
  width: 680px;
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
      display: flex;
      margin-bottom: 20px;
      overflow-x: auto;

      .card {
        flex: 0 0 184px;
        margin-right: 20px;
        padding: 10px 20px;
        width: 184px;
        height: 123px;
        color: #fff;
        background: url("../assets/popup/card.png") no-repeat;
        background-size: 100% 100%;
        transform: scale(0.9);
        cursor: pointer;
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

      .active {
        transition: 0.5s;
        transform: scale(1);
      }
    }

    .list-wrap {
      li {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;

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
            border-radius: 10px;
            cursor: pointer;
            span {
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

          .zfb-s {
            border: 1px solid rgb(0,168,240);
            span {
              color: rgb(0,168,241);
            }
          }

          .vx-s {
            border: 1px solid rgb(28,171,67);
            span {
              color: rgb(28,171,67);
            }
          }

        }
      }
    }

    .bottom-wrap {
      margin-top: 80px;

      .pay-but {
        width: 100%;
        height: 65px;
        line-height: 65px;
        font-size: 24px;
        color: #FFFFFF;
        text-align: center;
        background: #02A7A0;
        border-radius: 13px;
        cursor: pointer;
      }

      .agreement {
        margin-top: 10px;
        color: #343434;
        font-size: 16px;
        text-align: center;
      }
    }
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

      .card-wrap {
        display: flex;
        margin-bottom: 0.2rem;
        overflow-x: auto;

        .card {
          flex: 0 0 0.92rem;
          padding: 0.1rem 0.2rem;
          width: 0.92rem;
          height: 0.61rem;
          color: #fff;
          background: url("../assets/popup/card.png") no-repeat;
          background-size: 100% 100%;

          div:first-child {
            font-size: 0.1rem;
          }

          .p1 {
            font-size: 0.12rem;
          }

          .p2 {
            font-size: 0.2rem;
          }

        }
      }

      .list-wrap {
        li {
          display: flex;
          justify-content: space-between;
          height: 0.4rem;
          line-height: 0.4rem;

          span {
            font-size: 0.1rem;
          }

          .label {
            color: #989898;

          }

          .other {
            font-size: 0.15rem;
            color: #02A7A0;
          }

          .select-wrap {

            .select-item {
              position: relative;
              display: flex;
              align-items: center;
              margin-left: 0.2rem;
              padding: 0 0.1rem;
              width: 0.74rem;
              height: 0.24rem;
              border: 1px solid #B7B7B7;
              border-radius: 0.08rem;
              cursor: pointer;
              span {
                margin-left: 0.05rem;
                height: 0.24rem;
                line-height: 0.24rem;
                color: #989898;
                font-size: 0.09rem;
                white-space: nowrap;
              }

              img {

                width: 0.12rem;
                height: 0.12rem;
              }

              .selected {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 0.16rem;
                height: 0.11rem;
              }

            }

            .zfb-s {
              border: 1px solid rgb(0,168,240);
              span {
                color: rgb(0,168,241);
              }
            }

            .vx-s {
              border: 1px solid rgb(28,171,67);
              span {
                color: rgb(28,171,67);
              }
            }

          }
        }
      }

      .bottom-wrap {
        margin-top: 0.5rem;

        .pay-but {
          width: 100%;
          height: 0.32rem;
          line-height: 0.32rem;
          font-size: 0.15rem;
          color: #FFFFFF;
          text-align: center;
          background: #02A7A0;
          border-radius: 0.13rem;
          cursor: pointer;
        }

        .agreement {
          margin-top: 0.1rem;
          color: #343434;
          font-size: 0.1rem;
          text-align: center;
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

::-webkit-scrollbar{display:none}

</style>

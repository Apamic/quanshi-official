<template>
  <div class="container-swiper">
      <div class="headerVue">
        <div class="header">
          <img class="logo" src="../assets/logo_light.png">
          <div class="right">
            <div class="but-wrap">
              <div class="but">下载客户端</div>
              <div class="but" @click.stop="codeShow()">扫码咨询</div>


              <div class="codeVue" v-if="isScan">
                <img src="../assets/code.jpg">
              </div>

            </div>
            <img class="image" src="../assets/logo_light.png">
          </div>
        </div>
      </div>
      <div class="block"></div>

      <div class="content">
        <div class="card">
          <div class="left">
            <img class="image" src="../assets/logo.jpg">
            <div class="grade">
              <div class="phone">187****9999</div>
              <div class="level">黄金会员</div>
            </div>

            <div class="time-wrap">
              <span class="time">2023年10月2日到期</span>
              <span class="renew" @click.stop="pay()">续费</span>
            </div>
          </div>

          <div class="right">
            <div class="tabs-wrap">
              <div class="tabs-item" v-for="(item,index) in tabs" :key="index" :class="index == current ? 'active' : ''" @click.stop="current = index">
                {{item}}
              </div>
            </div>

            <ul class="list-wrap" id="list">

              <li v-for="(item,index) in 10" :key="index">
                <div class="label">购买月卡</div>
                <div>
                  <div class="price"><span class="num">1299</span>元</div>
                  <div class="time">2023-09-02 23：43</div>
                </div>
              </li>

            </ul>


          </div>
        </div>
      </div>

      <paymentPopup ref="paymentPopup" :title="`续费`"></paymentPopup>

  </div>
</template>

<script>

import paymentPopup from "@/components/paymentPopup";

export default {
  name: "personalCenter",

  data() {
    return {
      tabs: [
          '全部','今天','最近7天','最近30天'
      ],
      current: 0,
      isScan: false
    }
  },

  mounted() {

    if (window.innerWidth <= 900 ) {
      let list = document.getElementById('list')
      list.style.height =  ((window.innerHeight - list.getBoundingClientRect().top)) + 'px'
      console.log(list.getBoundingClientRect())
    }

  },

  methods: {
    codeShow() {
      this.isScan = !this.isScan
    },

    pay() {
      this.$refs.paymentPopup.show = true
    }
  },

  components: {
    paymentPopup
  }
}
</script>

<style lang="less" scoped>
  .container-swiper {
    width: 100vw;
    height: 100vh;
  }

  .headerVue {
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    top: 0;
    background: #0C121D;
    z-index: 999;

    .header {
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 80px;
        height: 56px;
      }
      .right {
        display: flex;
        align-items: center;

        .but-wrap {
          position: relative;
          display: flex;
          padding-right: 20px;
          border-right: 1px solid #B7B7B7;
          .but {
            margin-left: 20px;
            width: 120px;
            height: 36px;
            line-height: 36px;
            color: #fff;
            text-align: center;
            background: #02A7A0;
            border-radius: 5px;
            cursor: pointer;
          }

          .codeVue {
            position: absolute;
            right: 20px;

            top: 50px;
            width: 120px;
            height: 120px;
            img {
              width: 120px;
              height: 120px;
            }
          }

        }

        .image {
          margin-left: 20px;
          width: 46px;
          height: 46px;
        }

      }
    }
  }

  .block {
    height: 100px;
  }

  .content {
    margin: 0 auto;
    padding: 30px 0 0 0;
    width: 1200px;
    height: calc(100% - 100px);

    .card {
      display: flex;
      width: 100%;
      height: 800px;
      background: #0C121D;
      border-radius: 39px;

      .left {
        padding-top: 30px;
        width: 300px;
        border-right: 1px solid #252A34;

        .image {
          display: block;
          margin: 0 auto 10px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .grade {
          margin-bottom: 20px;
          .phone {
            text-align: center;
            color: #FFFFFF;
            font-size: 30px;
          }

          .level {
            text-align: center;
            color: #E5C764;
          }

        }

        .time-wrap {
          padding-bottom: 30px;
          text-align: center;
          border-bottom: 1px solid #252A34;
          .time {
            display: inline-block;
            margin-right: 15px;
            color: #989898;
          }

          .renew {
            color: #02A7A0;
            cursor: pointer;
          }
        }

      }

      .right {
        width: 900px;

        .tabs-wrap {
          display: flex;
          height: 80px;
          line-height: 80px;
          border-bottom: 1px solid #252A34;
          .tabs-item {
            width: 120px;
            font-size: 20px;
            text-align: center;
            color: #FFFFFF;
            cursor: pointer;
          }

          .active{
            font-size: 24px;
            color: #02A7A0;
          }
        }

        .list-wrap {
          padding: 30px;
          height: calc(100% - 80px);
          overflow-y: scroll;
          -ms-overflow-style:none;
          overflow:-moz-scrollbars-none;
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            margin-bottom: 20px;
            height: 90px;
            background: #252A34;
            border-radius: 30px;

            .label {
              font-size: 28px;
              color: #FFFFFF;
            }

            .price {
              font-size: 20px;
              text-align: right;
              color: #02A7A0;
              .num {
                font-size: 34px;
                font-weight: 700;
              }
            }

            .time {
              font-size: 18px;
              color: #989898;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .headerVue {
      width: 100%;
      padding: 0 0.2rem;
      height: 0.5rem;
      position: fixed;
      left: 0;
      top: 0;
      background: #0C121D;
      z-index: 999;

      .header {
        width: 100%;
        height: 0.5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 0.58rem;
          height: 0.42rem;
        }
        .right {
          display: flex;
          align-items: center;

          .but-wrap {
            position: relative;
            display: flex;
            padding-right: 0.1rem;
            border-right: 1px solid #B7B7B7;
            .but {
              margin-left: 0.1rem;
              width: 0.7rem;
              height: 0.2rem;
              line-height: 0.2rem;
              font-size: 0.1rem;
              color: #fff;
              text-align: center;
              background: #02A7A0;
              border-radius: 5px;
              cursor: pointer;
            }

            .codeVue {
              position: absolute;
              right: 0.1rem;

              top: 0.25rem;
              width: 0.8rem;
              height: 0.8rem;
              img {
                width: 0.8rem;
                height: 0.8rem;
              }
            }

          }

          .image {
            margin-left: 20px;
            width: 0.23rem;
            height: 0.23rem;
          }

        }
      }
    }

    .block {
      height: 0.5rem;
    }

    .content {
      margin: 0 auto;
      padding: 0;
      width: 100%;
      height: calc(100% - 0.5rem);
      background: #0C121D;
      .card {
        display: block;
        width: 100%;
        height: 100%;
        background: #0C121D;
        border-radius: 0px;

        .left {
          padding-top: 30px;
          width: 100%;
          border: none;
          .image {
            display: block;
            margin: 0 auto 10px;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }

          .grade {
            margin-bottom: 0.1rem;
            .phone {
              text-align: center;
              color: #FFFFFF;
              font-size: 0.15rem;
            }

            .level {
              font-size: 0.1rem;
              text-align: center;
              color: #E5C764;
            }

          }

          .time-wrap {
            padding-bottom: 0.15rem;
            font-size: .09rem;
            text-align: center;
            border-bottom: 1px solid #252A34;
            .time {
              display: inline-block;
              margin-right: 0.07rem;
              color: #989898;
            }

            .renew {
              color: #02A7A0;
            }
          }

        }

        .right {
          width: 100%;

          .tabs-wrap {
            display: flex;
            height: 0.4rem;
            line-height: 0.4rem;
            border-bottom: 1px solid #252A34;
            .tabs-item {
              width: 25%;
              font-size: 0.1rem;
              text-align: center;
              color: #FFFFFF;
              cursor: pointer;
            }

            .active{
              font-size: 0.12rem;
              color: #02A7A0;
            }
          }

          .list-wrap {
            padding: 0.15rem;
            //background: #0C121D;

            overflow-y: scroll;
            -ms-overflow-style:none;
            overflow:-moz-scrollbars-none;
            li {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 0.15rem;
              margin-bottom: 0.1rem;
              height: 0.5rem;
              background: #252A34;
              border-radius: 0.15rem;

              .label {
                font-size: 0.14rem;
                color: #FFFFFF;
              }

              .price {
                font-size: 0.1rem;
                text-align: right;
                color: #02A7A0;
                .num {
                  font-size: 0.17rem;
                  font-weight: 700;
                }
              }

              .time {
                font-size: 0.09rem;
                color: #989898;
              }
            }
          }
        }
      }
    }




  }

  ::-webkit-scrollbar{display:none}

</style>

<template>
    <div class="page2">
      <h2>
        多种动作捕捉方案<br>快速打造营销数字人
      </h2>

      <div class="swiper wrap">
<!--        <swiper ref="mySwiper" :options="swiperOptions">-->
<!--          <swiperSlide>-->
            <div class="item">
              <img src="../assets/product2.png">
              <div class="label">摄像头面捕：</div>
              <div class="value">1部手机实现面部表情精准捕捉</div>
            </div>

<!--          </swiperSlide>-->
<!--          <swiperSlide>-->
            <div class="item">
              <img src="../assets/product3.png">
              <div class="label">半身摄像头动捕:</div>
              <div class="value">1部手机+1个摄像头实现<br>面部/身体捕捉</div>
            </div>

<!--          </swiperSlide>-->
<!--          <swiperSlide>-->
            <div class="item">
              <img src="../assets/product4.png">
              <div class="label">全身光学动捕:</div>
              <div class="value">6个点光学动捕 + 手套<br>实时性、稳定性更强</div>
            </div>
<!--          </swiperSlide>-->
<!--          <div class="swiper-pagination" slot="pagination"></div>-->
<!--        </swiper>-->
      </div>


    </div>
</template>

<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "swiper/css/swiper.min.css"

export default {
  name: "operation",


  data() {
    return {
      swiperOptions: {
        loop : true,
        autoplay:true,
        // effect : 'coverflow',
        // slidesPerView: 3,
        // centeredSlides: true,
        // coverflowEffect: {
        //   rotate: 0,
        //   stretch: 10,
        //   depth: 60,
        //   modifier: 2,
        //   slideShadows : true
        // },
      }
    }
  },


  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less" scoped>

.page2 {
  h2 {
    font-size: .18rem;
    color: #fff;
    text-align: right;
  }
}

.swiper-container {
  .swiper-wrapper {
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      img {
        width: 1.88rem;
        height: 1.53rem;
      }
    }
  }
}

.wrap {
  display: flex;
  display: -webkit-box;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar { width: 0 !important }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  .item {
    margin-right: .2rem;
    width: 1.88rem;
    .label {
      height: 0.3rem;
      line-height: 0.3rem;
      color: #fff;
      font-size: 0.14rem;
      font-weight: bold;
      text-align: center;
    }
    .value {
      //height: 0.15rem;
      line-height: 0.2rem;
      color: #D4D4D4;
      font-size: 0.12rem;
      text-align: center;
    }
    img {
      margin-bottom: 0.1rem;
      width: 1.88rem;
      height: 1.53rem;
    }
  }
}

</style>

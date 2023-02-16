<template>
  <div class="page2">
    <h2>
      基础/全案代运营服务<br>
      营销落地转化无忧财富
    </h2>

    <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiperSlide>
          <img src="../assets/t1.png" alt="">
        </swiperSlide>
        <swiperSlide>
          <img src="../assets/t2.png" alt="">
        </swiperSlide>
        <swiperSlide>
          <img src="../assets/t3.png" alt="">
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <p>
      对比传统直播，节省大量人工、设备等开支
      AI虚拟主播，<span>24小时</span>不下线，不错过任何成交机会
    </p>


  </div>
</template>

<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "swiper/css/swiper.min.css"
export default {
  name: "seize",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          // stretch: 10,
          // depth: 60,
          // modifier: 2,
          // slideShadows: true
        }
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
  }

  p {
    font-size: 0.14rem;
    color: #fff;

    span {
      color: #02A7A0;
    }
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
        width: 2.367rem;
        height: 3.393rem;
      }
    }
  }
}


</style>

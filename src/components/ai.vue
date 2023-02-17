<template>
    <div class="page2">
      <h2>
        虚拟AI直播数字人<br>
        一键打造你的数字分身
      </h2>

      <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiperSlide>
            <img src="../assets/1.png" alt="">
          </swiperSlide>
          <swiperSlide>
            <img src="../assets/2.png" alt="">
          </swiperSlide>
          <swiperSlide>
            <img src="../assets/3.png" alt="">
          </swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="ai-text">
        <ul>
          <li>
            <div>
              <span>商品讲解</span>
              <span>：文本输入，讲解一字不差</span>
            </div>

          </li>
          <li>
            <div>
              <span>智能交互</span>
              <span>：抓取评论，智能回复问题</span>
            </div>

          </li>
          <li>
            <div>
              <span>超长直播</span>
              <span>：随时随地，24h想开就开</span>
            </div>
          </li>
          <li>
            <div>
              <span>降本增效</span>
              <span>：一台电脑无人直播模式</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="but1">
        <span>了解一下</span>
        <img src="../assets/more.png" alt="">
      </div>
    </div>
</template>

<script>
import {Swiper,SwiperSlide} from "vue-awesome-swiper"
import "swiper/css/swiper.min.css"
export default {
  name: "ai",
  data() {
    return {
      swiperOptions: {
        loop : true,
        autoplay:true,
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          // rotate: 0,
          // stretch: 10,
          // depth: 60,
          // modifier: 2,
          // slideShadows : true
        },
      }
    }
  },

  created() {

  },

  methods: {

  },

  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less" scoped>
.but1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.36rem;
  height: 0.38rem;
  font-size: 0.16rem;
  color: #fff;
  background: linear-gradient(135deg, #5D1983, #02A7A0,#f05b77,#ffd75d);
  background-size: 400% 400%;
  animation: fadeinBg 5s ease 0s infinite both;
  border-radius: 8px;
  img {
    margin-left: 0.05rem;
    width: 0.17rem;
    height: 0.17rem;
  }
}

.page2 {

  h2 {
    font-size: .18rem;
    color: #fff;
  }

  .ai-text {
    ul {

      li {
        display: flex;

        &:nth-child(2n) {
          justify-content: flex-end;
        }

        div {
          margin-bottom: 0.08rem;
          width: 2.7rem;
          height: 0.24rem;
          line-height: 0.24rem;
          text-align: center;
          background: #252A34;
          border-radius: 5px;

          span {
            font-size: 0.14rem;
            color: #B7B7B7;
          }

          span:nth-child(1) {
            color: #02A7A0;
          }
        }
      }
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


@keyframes fadeinBg {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>

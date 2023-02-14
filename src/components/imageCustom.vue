<template>
  <div class="page3">
    <h1>形象定制</h1>

    <h2>
      数字人形象自定义<br>
      服装场景任意配
    </h2>

    <p>
      五官变形维度多样化，自助捏脸<br>
      人物形象高度自定义<br>
      多种组合方式，服装、场景、玩法随意搭配
    </p>

    <div class="image-wrap">


    </div>

    <div class="flex align-center flex-between" style="margin-top: 0.2rem; width: 100%;">
      <img style="margin-right: 0.1rem; width: 0.12rem;height: 0.21rem;" src="../assets/left.png" @click="arrowClick('prev')">

      <div class="swiper-wrap">
        <div v-for="(item,index) in 2" :key="index" class="flex flex-around item" :style="{transform: `translateX(-${current * 100}%)`}">
          <div v-for="(items,indexs) in 4" :key="indexs">
            <img style="width: 0.65rem;height: 0.58rem;" src="../assets/4.png">
          </div>
        </div>
      </div>

      <img style="margin-left: 0.1rem; width: 0.12rem;height: 0.21rem;" src="../assets/right.png" @click="arrowClick('next')">
    </div>



  </div>
</template>

<script>
export default {
  name: "imageCustom",
  data() {
    return {
      current: 0
    }
  },

  methods: {
    arrowClick(type) {


      if (type == 'next') {

        if (this.current == 1) return

        this.current ++
      } else {

        if (this.current == 0) return

        this.current --
      }
    }
  }

}
</script>

<style lang="less" scoped>
.page3 {
  color: #fff;
  h1 {
    margin-bottom: 0.23rem;
    font-size: 0.26rem;
    text-align: center;
  }

  h2 {
    margin-bottom: 0.14rem;
    font-size: 0.18rem;
  }

  p {
    margin-bottom: 0.2rem;
    color: #A0A2A5;
    font-size: 0.12rem;
  }

  .image-wrap {
    width: 3.36rem;
    height: 2.17rem;
    background: url("../assets/costom-inner-bg.png") no-repeat;
    background-size: contain;
  }

  .swiper-wrap {
    display: flex;
    height: 0.58rem;
    //white-space: nowrap;
    overflow: hidden;

    .item {
      flex: 0 0 100%;
      width: 100%;
      transition: 1s;
    }

  }

}
</style>

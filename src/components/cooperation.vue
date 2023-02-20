<template>
  <div class="page5">
    <h1>合作伙伴计划</h1>
    <h6>免费领取ip元分身-数智人</h6>

    <div class="card">
      <h3>伙伴权益说明:</h3>
      <ul class="grid">
        <li>
          <img src="../assets/icon1.png" alt="">
          <p>全视直播伙伴标识</p>
        </li>
        <li>
          <img src="../assets/icon2.png" alt="">
          <p>短视频合成不限时</p>
        </li>
        <li>
          <img src="../assets/icon3.png" alt="">
          <p>免费运营工具库</p>
        </li>
        <li>
          <img src="../assets/icon4.png" alt="">
          <p>免费直播模板库</p>
        </li>
        <li>
          <img src="../assets/icon5.png" alt="">
          <p>短视频合成不限时</p>
        </li>
        <li>
          <img src="../assets/icon6.png" alt="">
          <p>全年导出不限时</p>
        </li>
      </ul>
    </div>

    <p style="margin-top: 0.1rem;">
      <span style="color: #D4D4D4;font-size: 0.15rem;font-weight: 700;">注</span>：渠道合作5000起，具体咨询招商经理。要成为公司渠道合伙人必须要 先体验和使用公司数字人产品。
    </p>

    <div style="padding-top: 0.2rem;">

      <div class="but1" style="margin: 0 auto;">
        <span>申请加入</span>
        <img src="../assets/more.png">
      </div>
    </div>

    <div class="title">关于我们</div>

    <p class="text">
      武汉全视数字科技有限公司，是一家专业、专注研发AI直播数字 人软、硬件的高新科技企业。公司为企业用户提供AI直播数字人 定制、基础运营服务、以及电商直播全套落地解决方案。公司依 托蚂蚁链产业创新中心等优势资源。为用户从宏观战略到微观落 地执行，提供全面、专业、细致的服务。
    </p>

  </div>
</template>

<script>
export default {
  name: "cooperation",
  mounted() {
    const io = new IntersectionObserver(entries => {
      entries.forEach( entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('active')
        }

      })
    })

    const boxList = document.querySelectorAll('.page4')


    boxList.forEach((el) => {
      io.observe(el)
    })
  }
}
</script>

<style lang="less" scoped>
  .page5 {
    color: #fff;
    h1 {
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      color: #DFB685;
      font-size: 0.26rem;
    }
    h6 {
      text-align: center;
      font-size: 0.12rem;
      color: #DFB685;
    }

    .card {
      margin-top: 0.2rem;
      padding: 0.16rem 0.2rem 0;
      width: 3.35rem;
      height: 1.87rem;
      background: url("../assets/partner-box.png") no-repeat;
      background-size: cover;

      h3 {
        font-size: 0.16rem;
        color: #B66D23;
      }

      .grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 0.4rem 0.4rem 0.4rem;

        li {
          display: flex;
          align-items: center;
          font-size: 0.14rem;
          color: #343434;
          img {
            margin-right: 0.06rem;
            width: 0.14rem;
            height: 0.14rem;
          }
          p {
            color: #343434;
            font-size: 0.14rem;
          }

        }
      }
    }

    p {
      color: #A0A2A5;
      font-size: 0.1rem;
    }

    .title {
      margin-top: .4rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.26rem;
    }

    .text {
      padding: 0 0 0.3rem;
      color: #A0A2A5;
      font-size: 0.12rem;
    }

  }

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
    border-radius: 8px;
    animation: fadeinBg 5s ease 0s infinite both;
    img {
      margin-left: 0.05rem;
      width: 0.17rem;
      height: 0.17rem;
      animation: fadeinHover 1s linear 0s infinite both;
    }
  }


  .active {
    h1 {
      animation: fadeInRight 2s ease 0s normal;
    }

    h6 {
      animation: fadeInRight 2.5s ease 0s normal;
    }

    p {
      animation: fadeInRight 3.5s ease 0s normal;
    }

    .card {
      animation: fadeInDown 3s ease 0s normal;
    }

  }


  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeinHover {
    0% {
      transform: translate(10px);
    }

    50% {
      transform: translate(0px);
    }

    100% {
      transform: translate(10px);
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

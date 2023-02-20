<template>
    <div class="page4">
     <h1>
       买全视数字科技会员·享专属特权
     </h1>
      <p>一键生成视频·人物素材丰富·海量场景资源·顶级配音神器</p>

      <div class="card">
        <div class="price">
          <div class="flex" style="align-items: baseline;border-bottom: 1px solid #02A7A0;">
            <span>一口价</span>
            <div style="position: relative; color: #02A7A0;">
              ￥
              <span style="font-size: 0.26rem;">1299</span>
              /月
              <img class="king" src="../assets/king.png" style="width: 0.17rem;height: 0.17rem;">
            </div>
          </div>

          <img class="hands" src="../assets/hands.png" >
        </div>
        <div class="grid">
          <div>
            虚拟数字人1个<span>（多选一）</span>
          </div>
          <div>
            数字人直播平台
          </div>
          <div>
            数字人合成后台
          </div>
          <div>
            专属数字人直播培训
          </div>
        </div>
      </div>

      <h4>
        为什么要选择购买会员？
      </h4>

      <p class="text">
        一个套餐，解决数字人直播的多元需求，为主播实现数
        字人分身，为直播企业降本增效。
      </p>

    </div>
</template>

<script>
export default {
  name: "member",

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
  },


}
</script>

<style lang="less" scoped>
.page4 {
  color: #FFFFFF;
  h1 {
    height: 0.33rem;
    line-height: 0.33rem;
    font-size: 0.21rem;
    text-align: center;
  }

  p {
    line-height: 0.26rem;
    color: #A0A2A5;
    font-size: 0.11rem;
    text-align: center;
  }

  .card {
    padding: 0.2rem 0.15rem;
    margin-top: .25rem;
    width: 100%;
    height: 1.6rem;
    background: #252A34;
    border-radius: 16px;
    .price {
      position: relative;
      display: flex;
      align-items: baseline;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.14rem;
      font-weight: 700;
      .king {
        position: absolute;
        top: 0.05rem;
        right: -0.1rem;
      }
      .hands {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.86rem;
        height: 1.22rem;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 0.4rem 0.4rem;
      align-items: end;

      div {
        position: relative;
        padding-left: 0.1rem;
        font-size: 0.12rem;
        &:after {
          content: '';
          position: absolute;
          top: 0.06rem;
          left: 0;
          display: block;
          width: .06rem;
          height: .06rem;
          background: linear-gradient(to left, #5D1983, #02A7A0);
          transform: rotate(45deg);
        }
        span {
          color: #B7B7B7;
        }
      }

    }

  }

  h4 {
    margin-top: 0.2rem;
    line-height: 0.4rem;
    height: 0.4rem;
    font-size: 0.15rem;
  }

  .text {
    font-size: 0.14rem;
    line-height: 0.18rem;
    text-align: left;
  }

}

.active {
  h1 {
    animation: fadeInRight 2s ease 0s normal;
  }

  p {
    animation: fadeInRight 2.5s ease 0s normal;
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


</style>

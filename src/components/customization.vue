<template>
    <div class="page2">
      <h2>
        定制AI直播数字人<br>对接专属团队
      </h2>
      <div class="img-wrap">
        <img style="width: 2.92rem;height: 3.61rem;" src="../assets/product1.png" alt="">
        <img class="two" style="width: 1.6rem;height: 1.73rem;" src="../assets/son.png" >
      </div>
      <ul>
        <li>
          <h4>专业定制服务：</h4>
          <div>
            提供定制化制作流程，保障服务质量和最终克隆效果
          </div>
        </li>
        <li>
          <h4>音色深度还原：</h4>
          <div>
            基于最新声音克隆技术，极致还原原音的音色和风格
          </div>
        </li>
        <li>
          <h4>专属发音人：</h4>
          <div>
            专业录音工坊配音平台，享受更完善的配音服务
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "customization"
}
</script>

<style lang="less" scoped>
.page2 {
  h2 {
    font-size: .18rem;
    color: #fff;
    text-align: right;
  }
  .img-wrap {
    position: relative;
    margin-bottom: 0.15rem;
    .two {
      position: absolute;
      right: 0;
      bottom: -0.1rem;
    }
  }

  ul {
    li {
      h4 {
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: right;
        color: #02A7A0;
        font-size: 0.13rem;
      }
      div {
        padding-right: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: right;
        font-size: 0.12rem;
        color: #D4D4D4;
        background: linear-gradient(135deg,transparent 20px,#565A61 0);
      }
    }
  }

}
</style>

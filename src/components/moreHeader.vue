<template>
  <div class="wrap flex">
    <img src="../assets/logo_light.png">
<!--    <img src="../assets/logo_dark.png">-->
    <div class="right">
        <div class="code">扫码咨询</div>
        <div class="login">登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "moreHeader"
}
</script>

<style lang="less" scoped>
    .wrap {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.2rem;
      height: 0.5rem;
      //background: #0C121D;
      img {
        width: 0.58rem;
        height: 0.42rem;
      }
    }

    .right {
      display: flex;
      font-size: 0.12rem;
      .code {
        margin-right: .15rem;
        width: 0.75rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        background: linear-gradient(to left, #5D1983, #02A7A0);
        border-radius: 5px;
        color: #fff;
      }

      .login {
          line-height: 0.24rem;
          color: #02A7A0;
      }
    }
</style>

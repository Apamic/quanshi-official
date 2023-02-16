<template>
  <div class="wrap flex">
    <img src="../assets/logo_light.png">
<!--    <img src="../assets/logo_dark.png">-->
    <div class="right">
        <div class="code">扫码咨询</div>
        <div class="login" @click="$router.push({name: 'logIn'})">登录/注册</div>
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
      background: #0C121D;
      z-index: 1000;
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
        background: linear-gradient(135deg, #5D1983, #02A7A0,#f05b77,#ffd75d);
        background-size: 400% 400%;
        border-radius: 5px;
        color: #fff;
        animation: fadeinBg 5s ease 0s infinite both;
      }

      .login {
          line-height: 0.24rem;
          color: #02A7A0;
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

</style>

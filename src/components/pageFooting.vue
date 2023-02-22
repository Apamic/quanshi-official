<template>
    <div class="foot">
       <div class="flex flex-between">
           <div class="contact">联系我们</div>
           <div class="code">扫码了解更多</div>
       </div>
       <div class="flex flex-between" style="margin-top: 0.2rem;">
         <ul>
           <li><span>商业合作：</span><div>CNAIA13031119807</div></li>
<!--           <li>媒体咨询：XXXXX</li>-->
           <li><span>公司地址：</span><div>湖北省武汉市硚口区凯德西城T2写字楼20层</div></li>
         </ul>

         <div>
           <img style="margin-left: 0.2rem;width: .76rem;height: .76rem;" src="../assets/code.jpg">
<!--           <img style="width: .76rem;height: .76rem;" src="../assets/code.png">-->
         </div>

       </div>
    </div>
</template>

<script>
export default {
  name: "pageFooting"
}
</script>

<style lang="less" scoped>
.foot {
  padding: 0.2rem 0.2rem 0.4rem;
  color: #FFFFFF;
  border-top: 1px solid #707070;
  .contact {
    font-size: 0.17rem;
    color: #D4D4D4;
    font-weight: 700;
  }
  .code {
    color: #B7B7B7;
    font-size: 0.14rem;
  }
}

ul {
  margin-top: 0.1rem;
  li {
    display: flex;
    color: #A0A2A5;
    span {
      white-space: nowrap;
    }
  }
}
</style>

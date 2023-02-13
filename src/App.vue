<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = (clientWidth / 3.75) + 'px';
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


export default {

}
</script>

<style lang="less">
  @import "./style/base.less";
  @import "./style/style.css";
  .el-carousel__arrow {
    display: none !important;
  }
</style>

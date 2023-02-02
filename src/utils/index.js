// 函数防抖
// immediate - 是否首次执行
const debounce = (func, dalay = 200, immediate = false) => {
    let timer, callNow = immediate;
    return (...args) => {
      if (timer) clearTimeout(timer);
      if (callNow) {
          func(...args);
          callNow = false;
      }
      timer = setTimeout(() => {
          func(...args);
      }, dalay)
    }
  }
   
  export { debounce }
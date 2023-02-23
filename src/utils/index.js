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

const getParams = (params) => {
    let paramsStr = ''
    Object.keys(params).forEach(item => {
        if (paramsStr === '') {
            paramsStr = `${item}=${params[item]}`
        } else {
            paramsStr = `${paramsStr}&${item}=${params[item]}`
        }
    })

    return paramsStr
}


export { debounce,getParams }

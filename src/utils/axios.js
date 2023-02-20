import axios from "axios"
import { Loading, Message, MessageBox } from "element-ui"

let baseURL = 'http://10.10.10.159:8088/'

let loadingInstance = null

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = baseURL

let token = ''

axiosInstance.defaults.headers.common['token'] = token
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axiosInstance.interceptors.request.use(
    config => {

        if (!config.silence) {
            loadingInstance = Loading.service({
                lock: false,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0,0,0,0.1)"
            })
        }

        if (localStorage.getItem('token') ) {
            token = localStorage.getItem('token')
            config.headers.common['token'] = token
        }
        return config;
    }, error => {
        loadingInstance.close()
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
     response => {
         loadingInstance.close()
         if (response.data.code != 0) {
             Message({ message: response.data.msg, showClose: true, type: "error" })
             // this.$message(`${response.data.msg}`)
         } else {
             return response.data
         }


     },
    error => {
        loadingInstance.close()
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log(`Status code is ${error.response.status}`);
        } else if (error.request) {
            console.log('The request was made but no response was received.');
        } else {
            console.log('An error was triggered in setting up the request.');
        }
})


export {axiosInstance}

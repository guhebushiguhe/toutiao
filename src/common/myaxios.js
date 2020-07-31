// 配置axios
// 引入axios
import axios from 'axios'

// 配置公共的url
// process.env.VUE_APP_URL   运行 np run serve 时候会读取环境变量
axios.defaults.baseURL= process.env.VUE_APP_URL
// axios.defaults.baseURL="http://tt.linweiqin.com/api/tt/"
// 配置拦截器
axios.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
}
)

axios.interceptors.response.use(function (response){
    return response.data
},function (error){
    return Promise.reject(error)
}
)

// 导出 axios
export default axios
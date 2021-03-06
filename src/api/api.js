import axios from 'axios';
import {Message} from 'element-ui';
import Qs from 'qs';
// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:7615', 
  // api的base_url  http://175.155.179.248:8011/webapi/MeUService.asmx
  //http://localhost:55052/MeUService.asmx
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
}],
  timeout: 5000 // request timeout
});

// // request interceptor
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   if (store.getters.token) {
//     config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  });

export const postUserData = params => {
  return service.post('/regUserMethod', params).then(res => res.data);
};
export const loginUser = params => {
  //return service.post('/loginMethod', params).then(res => res.data); UserLogin
  return service.post('/Login/UserLogin', params).then(res => res.data);
};
export const get = params => {
  //return service.post('/get', params).then(res => res.data);
};

let api = {
  postUserData,
  loginUser,
  get
};

export default api;

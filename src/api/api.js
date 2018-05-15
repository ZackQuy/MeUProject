import axios from 'axios';
import {Message} from 'element-ui';

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:55052/MeUService.asmx', // api的base_url
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
  return service.post('/loginMethod', params).then(res => res.data);
};


let api = {
  postUserData
};

export default api;

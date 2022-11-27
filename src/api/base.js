import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: baseUrl,
  method: 'get',
});
instance.interceptors.response.use(async(respone) => {
  return respone;
}, async (error) => {
  if(error.respone !== null){
    if(error.respone.status === 401){
      ///
    }
  }
  return Promise.reject(error)
})
export {instance};
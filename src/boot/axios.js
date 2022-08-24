import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { Cookies } from 'quasar';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: process.env.APP_API_URL + '/api/v1/' });
const auth_api = axios.create({ baseURL: process.env.APP_API_URL + '/api/v1/' })
const admin_api = axios.create({ baseURL: process.env.APP_API_URL + '/admin/' })


// Request interceptor for API calls
api.interceptors.request.use(
  async config => {
    const token = Cookies.get('access_token');
    config.headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  });// Request interceptor for API calls


auth_api.interceptors.request.use(
  async config => {
    config.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    void Promise.reject(error)
  });

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href = '/#/auth/login'
    // return refreshToken(error.config)
  } else {
    return Promise.reject(error)
  }

});

// async function refreshToken(errorConfig) {
//   return await auth_api.post('refresh/token', { refresh_token: Cookies.get('refresh_token') })
//     .then((response) => {
//       if (response.status === 200) {
//         Cookies.set('access_token', response.data.access_token)
//         Cookies.set('refresh_token', response.data.refresh_token)
//         return api.request(errorConfig)
//       }
//       else {
//         return Promise.reject(response)
//       }
//     }).catch(err => {
//       if (err.response.status === 400) {
//         window.location.href = '/#/auth/login'
//       }
//       return Promise.reject(err)
//     })
// }

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api, auth_api, admin_api };


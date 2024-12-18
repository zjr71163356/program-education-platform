import axios from 'axios'
export const api_url = 'http://localhost:5010/api'
// export const api_url = 'https://apifoxmock.com/m1/4082568-3720417-default/api'
export const apifoxToken = 'lEsBy8UV1QRHptTK7_40c'
export const headersApifox = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  apifoxToken: apifoxToken
}
export const headers = {
  Accept: '*/*',
  'Content-Type': 'application/json'
}
export const HttpInstance = axios.create({
  baseURL: api_url,
  timeout: 1000
})

HttpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

HttpInstance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

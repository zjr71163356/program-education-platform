import axios from 'axios'
import https from 'https' // Import the 'https' module
const base_url = 'https://localhost:7231/api/Users'
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

const UserServices = {
  async userLogin(user) {
    try {
      const formData = new FormData()
      formData.append('Account', user.Account)
      formData.append('Password', user.Password)
      const response = await apiClient.post('/Login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(formData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async userRegister(user) {
    try {
      const formData = new FormData()
      formData.append('UserName', user.UserName)
      formData.append('Account', user.Account)
      formData.append('Password', user.Password)
      console.log(formData)

      const response = await apiClient.post('/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async isUserNameExist(username) {
    try {
      const response = await apiClient.get(`/isUserNameRepeat?userName=${username}`)
      console.log(response.data)
      return response.data.isUserNameRepeat
    } catch (error) {
      console.error(error)
    }
  },
  async isUserAccountExist(account) {
    try {
      const response = await apiClient.get(`/isUserAccountRepeat?userAccount=${account}`)
      console.log(response.data)
      return response.data.isUserAccountRepeat
    } catch (error) {
      console.error(error)
    }
  }
}
// const user = {
//   Account: 'loginModel.value.account2',
//   UserName: 'loginModel.value.usernam6e',
//   Password: ' loginModel.value.password'
// }
// await UserServices.userRegister(user)
export default UserServices

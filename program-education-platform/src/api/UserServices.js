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
  async deleteUserCourse(userId, courseId) {
    try {
      const response = await apiClient.delete(
        `/RemoveCourseFromMyList?userId=${userId}&courseId=${courseId}`
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addUserCourse(userCourse) {
    try {
      const response = await apiClient.post(`/AddUserCourse`, userCourse)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserCourseList(userId) {
    try {
      const response = await apiClient.get(`/GetUserCourseList/${userId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
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
  },
  async isUserCourseRepeat(userId, courseId) {
    try {
      const response = await apiClient.get(
        `/isUserCourseRepeat?userId=${userId}&courseId=${courseId}`
      )

      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async uploadImage(image) {
    try {
      const formData = new FormData()
      formData.append('image', image.file)
      formData.append('token', '561fc1d59e3e2eb22eb449459cac5916')
      const response = await axios.post('https://www.imgtp.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: '561fc1d59e3e2eb22eb449459cac5916'
        }
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getHistorySubmission(userId, problemId, pageNumber, pageSize) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('userId', userId)
      if (problemId !== null) searchParams.set('problemId', problemId)
      if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)
      const response = await apiClient.get(`/GetUserSubmission?${searchParams.toString()}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getHistorySubmissionByrecordId(recordId) {
    try {
      const response = await apiClient.get(`/GetSubmissionRecordById/${recordId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default UserServices

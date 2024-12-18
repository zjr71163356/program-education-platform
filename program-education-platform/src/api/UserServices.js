import axios from 'axios'
import { HttpInstance } from '@/api/config'
// const base_url = `${api_url}/Users`

// const HttpInstance = axios.create({
//   baseURL: base_url
// })
HttpInstance.baseURL = HttpInstance.baseURL + '/Users'
const base_url = '/Users'

export async function userLogin(user) {
  console.log(user)
  const formData = new FormData()
  formData.append('Account', user.Account)
  formData.append('Password', user.Password)
  console.log('111')
  return await HttpInstance.post(base_url + '/Login', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export async function removeUser(userId) {
  return await HttpInstance.delete(base_url + `/RemoveUser?userId=${userId}`).catch((error) =>
    console.error(error)
  )
}
const UserServices = {
  async removeUser(userId) {
    return await HttpInstance
      .delete(`/RemoveUser?userId=${userId}`)
      .catch((error) => console.error(error))
  },
  async deleteUserCourse(userId, courseId) {
    try {
      const response = await HttpInstance.delete(
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
      const response = await HttpInstance.post(`/AddUserCourse`, userCourse)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addUser(user) {
    try {
      const response = await HttpInstance.post(`/AddUser`, user)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addSubmissionRecord(submissionRecord) {
    try {
      const response = await HttpInstance.post(`/AddUserSubmission`, submissionRecord)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserCourseList(userId) {
    try {
      const response = await HttpInstance.get(`/GetUserCourseList/${userId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserById(userId) {
    try {
      const response = await HttpInstance.get(`/GetUserById/${userId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserName(userId) {
    try {
      const response = await HttpInstance.get(`/GetUserNameById?userId=${userId}`)
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserAvatar(userId) {
    try {
      const response = await HttpInstance.get(`/GetUserAvatar/${userId}`)
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getUserList(fitlerQuery, pageNumber, pageSize) {
    try {
      const searchParams = new URLSearchParams()
      if (fitlerQuery !== null) searchParams.set('fitlerQuery', fitlerQuery)
      if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)
      const response = await HttpInstance.get(`/GetUserList?${searchParams.toString()}`)
      console.log(response.data)
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

      const response = await HttpInstance.post('/Register', formData, {
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
      const response = await HttpInstance.get(`/isUserNameRepeat?userName=${username}`)
      console.log(response.data)
      return response.data.isUserNameRepeat
    } catch (error) {
      console.error(error)
    }
  },
  async isUserAccountExist(account) {
    try {
      const response = await HttpInstance.get(`/isUserAccountRepeat?userAccount=${account}`)
      console.log(response.data)
      return response.data.isUserAccountRepeat
    } catch (error) {
      console.error(error)
    }
  },
  async isUserCourseRepeat(userId, courseId) {
    try {
      const response = await HttpInstance.get(
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
      const response = await HttpInstance.get(`/GetUserSubmission?${searchParams.toString()}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getHistorySubmissionByrecordId(recordId) {
    try {
      const response = await HttpInstance.get(`/GetSubmissionRecordById/${recordId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateUser(userId, user) {
    try {
      const response = await HttpInstance.put(`/UpdateUser/${userId}`, user)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateUserProfile(userId, user) {
    try {
      const response = await HttpInstance.put(`/UpdateUserProfile/${userId}`, user)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateUserPW(userId, pw) {
    try {
      const response = await HttpInstance.put(`/UpdateUserPassword/${userId}`, pw)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async isUserPWMatch(user) {
    try {
      const formData = new FormData()
      formData.append('Account', user.Account)
      formData.append('Password', user.Password)
      formData.append('Role', 'user')
      const response = await HttpInstance.post(`/isUserPWMatch `, user, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

// export default UserServices

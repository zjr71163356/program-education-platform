import { HttpInstance } from '@/api/config'

const base_url = '/Users'
const UserServices = {
  async userLogin(user) {
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
  },
  async removeUser(userId) {
    return await HttpInstance.delete(base_url + `/RemoveUser?userId=${userId}`)
  },
  async deleteUserCourse(userId, courseId) {
    return await HttpInstance.delete(
      base_url + `/RemoveCourseFromMyList?userId=${userId}&courseId=${courseId}`
    )
  },
  async addUserCourse(userCourse) {
    return await HttpInstance.post(base_url + `/AddUserCourse`, userCourse)
  },
  async addUser(user) {
    return await HttpInstance.post(base_url + `/AddUser`, user)
  },
  async addSubmissionRecord(submissionRecord) {
    return await HttpInstance.post(base_url + `/AddUserSubmission`, submissionRecord)
  },
  async getUserCourseList(userId) {
    return await HttpInstance.get(base_url + `/GetUserCourseList/${userId}`)
  },
  async getUserById(userId) {
    return await HttpInstance.get(base_url + `/GetUserById/${userId}`)
  },
  async getUserName(userId) {
    return await HttpInstance.get(base_url + `/GetUserNameById?userId=${userId}`)
    // console.log(response.data)
  },
  async getUserAvatar(userId) {
    return await HttpInstance.get(base_url + `/GetUserAvatar/${userId}`)
  },
  async getUserList(fitlerQuery, pageNumber, pageSize) {
    const searchParams = new URLSearchParams()
    if (fitlerQuery !== null) searchParams.set('fitlerQuery', fitlerQuery)
    if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)
    return await HttpInstance.get(base_url + `/GetUserList?${searchParams.toString()}`)
  },
  async userRegister(user) {
    const formData = new FormData()
    formData.append('UserName', user.UserName)
    formData.append('Account', user.Account)
    formData.append('Password', user.Password)
    console.log(formData)
    return await HttpInstance.post(base_url + '/Register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  async isUserNameExist(username) {
    return await HttpInstance.get(base_url + `/isUserNameRepeat?userName=${username}`)
  },
  async isUserAccountExist(account) {
    return await HttpInstance.get(base_url + `/isUserAccountRepeat?userAccount=${account}`)
  },
  async isUserCourseRepeat(userId, courseId) {
    return await HttpInstance.get(
      base_url + `/isUserCourseRepeat?userId=${userId}&courseId=${courseId}`
    )
  },

  async uploadImage(image) {
    const formData = new FormData()
    formData.append('image', image.file)
    formData.append('token', '561fc1d59e3e2eb22eb449459cac5916')
    return await HttpInstance.post(base_url + 'https://www.imgtp.com/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: '561fc1d59e3e2eb22eb449459cac5916'
      }
    })
  },
  async getHistorySubmission(userId, problemId, pageNumber, pageSize) {
    const searchParams = new URLSearchParams()
    searchParams.set('userId', userId)
    if (problemId !== null) searchParams.set('problemId', problemId)
    if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)
    return await HttpInstance.get(base_url + `/GetUserSubmission?${searchParams.toString()}`)
  },
  async getHistorySubmissionByrecordId(recordId) {
    return await HttpInstance.get(base_url + `/GetSubmissionRecordById/${recordId}`)
  },
  async updateUser(userId, user) {
    return await HttpInstance.put(base_url + `/UpdateUser/${userId}`, user)
  },
  async updateUserProfile(userId, user) {
    return await HttpInstance.put(base_url + `/UpdateUserProfile/${userId}`, user)
  },
  async updateUserPW(userId, pw) {
    return await HttpInstance.put(base_url + `/UpdateUserPassword/${userId}`, pw)
  },
  async isUserPWMatch(user) {
    const formData = new FormData()
    formData.append('Account', user.Account)
    formData.append('Password', user.Password)
    formData.append('Role', 'user')
    return await HttpInstance.post(base_url + `/isUserPWMatch `, user, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default UserServices

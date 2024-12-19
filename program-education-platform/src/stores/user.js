import { defineStore } from 'pinia'

const userInfo = JSON.parse(localStorage.getItem('user'))
export const useProfileStore = defineStore('user', {
  state: () => ({
    userId: userInfo?.userId,
    userName: userInfo?.userName,
    account: userInfo?.account,
    avatar: userInfo?.avatar,
    role: userInfo?.role,
    token: userInfo?.token
  }),
  getters: {
    isLoggedIn: (state) => state.token !== null
  },
  actions: {
    setUser(user) {
      this.userId = user.userId
      this.userName = user.userName
      this.account = user.account
      this.avatar = user.avatar
      this.role = user.role
      this.token = user.role
      localStorage.setItem('user', JSON.stringify(this.$state))
    },
    clearUser() {
      this.userId = null
      this.userName = null
      this.account = null
      this.avatar = null
      this.role = null
      this.token = null
      localStorage.removeItem('user')
    }
  }
})

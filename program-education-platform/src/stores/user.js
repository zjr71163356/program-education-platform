import { defineStore } from 'pinia'
export const useProfileStore = defineStore('user', {
  state: () => ({
    userId: null,
    userName: null,
    account: null,
    avatar: null,
    role: null,
    token: null
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
    },
    setToken(token) {
      this.token = token
    },
    clearUser() {
      this.userId = null
      this.userName = null
      this.account = null
      this.avatar = null
      this.role = null
    },
    removeToken() {
      this.token = null
    }
  }
})

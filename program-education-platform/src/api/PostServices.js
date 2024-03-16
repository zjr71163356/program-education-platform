import axios from 'axios'
const base_url = 'https://localhost:7231/api/Posts'
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const PostServices = {
  async getAllPostsOverViewList(isSolution = true, problemId, pageNumber, pageSize) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('isSolution', isSolution)
      if (problemId !== null) searchParams.set('problemId', problemId)
      if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)

      const response = await apiClient.get(
        `/GetAllPostsListByProblemId?${searchParams.toString()} `
      )
      // console.log(`Courses?${searchParams.toString()} `)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getPostByUserId(userId, pageNumber = 1, pageSize = null) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('userId', userId)
      searchParams.set('pageNumber', pageNumber)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)
      const response = await apiClient.get(`/GetPostsListByUserId?${searchParams.toString()} `)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getPostById(postId) {
    try {
      const response = await apiClient.get(`/GetPostById/${postId}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addPost(post) {
    try {
      const response = await apiClient.post(`/AddPost`, post)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async removePostById(postId) {
    try {
      const response = await apiClient.delete(`/DeletePostById/${postId}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updatePostById(postId, post) {
    try {
      const response = await apiClient.put(`/UpdatePost/${postId}`, post)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default PostServices

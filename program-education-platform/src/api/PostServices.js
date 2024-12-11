import axios from 'axios'
import api_url from './config'
const base_url = `${api_url}/Posts`
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
  async getCommentsByPostId(postId, pageNumber = 1, pageSize = null) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('postId', postId)
      searchParams.set('pageNumber', pageNumber)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)
      const response = await apiClient.get(`/GetCommentsByPostId?${searchParams.toString()}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getPostByUserId(userId, pageNumber = 1, pageSize = null,isSolution = true) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('userId', userId)
      searchParams.set('pageNumber', pageNumber)
      searchParams.set('isSolution', isSolution)
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
      // console.log(response)
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
  async addComment(comment) {
    try {
      const response = await apiClient.post(`/AddComment`, comment)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addReply(reply) {
    try {
      const response = await apiClient.post(`/AddReply`, reply)
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
  async removeComment(commentId) {
    try {
      const response = await apiClient.delete(`/DeleteCommentById/${commentId}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async removeReply(replyId) {
    try {
      const response = await apiClient.delete(`/DeleteReplyById/${replyId}`)
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
  },
  async addLike(userlike){
    try {
      const response = await apiClient.post(`/AddUserLike`, userlike)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteLike(userId,postId){
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('userId', userId)
      searchParams.set('postId', postId)
      const response = await apiClient.delete(`/DeleteUserLike?${searchParams.toString()} `)
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }

  }
}

export default PostServices

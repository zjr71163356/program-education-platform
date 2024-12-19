import { HttpInstance } from '@/api/config'

const base_url = '/Posts'

const PostServices = {
  async getAllPostsOverViewList(isSolution = true, problemId, pageNumber, pageSize) {
    const searchParams = new URLSearchParams()
    searchParams.set('isSolution', isSolution)
    if (problemId !== null) searchParams.set('problemId', problemId)
    if (pageNumber !== null) searchParams.set('pageNumber', pageNumber)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)

    return await HttpInstance.get(
      `${base_url}/GetAllPostsListByProblemId?${searchParams.toString()}`
    )
  },

  async getCommentsByPostId(postId, pageNumber = 1, pageSize = null) {
    const searchParams = new URLSearchParams()
    searchParams.set('postId', postId)
    searchParams.set('pageNumber', pageNumber)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)

    return await HttpInstance.get(`${base_url}/GetCommentsByPostId?${searchParams.toString()}`)
  },

  async getPostByUserId(userId, pageNumber = 1, pageSize = null, isSolution = true) {
    const searchParams = new URLSearchParams()
    searchParams.set('userId', userId)
    searchParams.set('pageNumber', pageNumber)
    searchParams.set('isSolution', isSolution)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)

    return await HttpInstance.get(`${base_url}/GetPostsListByUserId?${searchParams.toString()}`)
  },

  async getPostById(postId) {
    return await HttpInstance.get(`${base_url}/GetPostById/${postId}`)
  },

  async addPost(post) {
    return await HttpInstance.post(`${base_url}/AddPost`, post)
  },

  async addComment(comment) {
    return await HttpInstance.post(`${base_url}/AddComment`, comment)
  },

  async addReply(reply) {
    return await HttpInstance.post(`${base_url}/AddReply`, reply)
  },

  async removePostById(postId) {
    return await HttpInstance.delete(`${base_url}/DeletePostById/${postId}`)
  },

  async removeComment(commentId) {
    return await HttpInstance.delete(`${base_url}/DeleteCommentById/${commentId}`)
  },

  async removeReply(replyId) {
    return await HttpInstance.delete(`${base_url}/DeleteReplyById/${replyId}`)
  },

  async updatePostById(postId, post) {
    return await HttpInstance.put(`${base_url}/UpdatePost/${postId}`, post)
  },

  async addLike(userLike) {
    return await HttpInstance.post(`${base_url}/AddUserLike`, userLike)
  },

  async deleteLike(userId, postId) {
    const searchParams = new URLSearchParams()
    searchParams.set('userId', userId)
    searchParams.set('postId', postId)

    return await HttpInstance.delete(`${base_url}/DeleteUserLike?${searchParams.toString()}`)
  }
}

export default PostServices

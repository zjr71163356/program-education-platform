import axios from 'axios'
const base_url = 'https://localhost:7231/api/'
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const CourseServices = {
  async getAllCoursesOverViewList() {
    try {
      const response = await apiClient.get('Courses')
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async getCoursesById(courseId){
    try {
      const response = await apiClient.get(`Courses/CourseDesc?courseId=${courseId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getCourseSubChapterById(subChapterId){
    try {
      const response = await apiClient.get(`Courses/CourseSubChapters?subChapterId=${subChapterId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
export default CourseServices
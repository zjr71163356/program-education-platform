import axios from 'axios'
const base_url = 'https://localhost:7231/api/Courses'
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const CourseServices = {
  async getAllCoursesOverViewList(filterQuery = null, pageNumber = 1, pageSize = null) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('pageNumber', pageNumber)
      if (filterQuery !== null) searchParams.set('filterQuery', filterQuery)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)

      const response = await apiClient.get(`?${searchParams.toString()} `)
      // console.log(`Courses?${searchParams.toString()} `)
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async getCoursesById(courseId) {
    try {
      const response = await apiClient.get(`/CourseDesc?courseId=${courseId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getCourseSubChapterById(subChapterId) {
    try {
      const response = await apiClient.get(`/CourseSubChapters?subChapterId=${subChapterId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addCourseStepOne(course) {
    try {
      const requestBody = JSON.stringify(course)
      // console.log(requestBody);
      const response = await apiClient.post('/AddStepOne', requestBody)
      // console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addCourseChapter(courseChapter) {
    try {
      // console.log(requestBody);
      const response = await apiClient.post('/AddCourseChapter', courseChapter)
      // console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addSubChapter(subChapter) {
    try {
      // console.log(requestBody);
      const response = await apiClient.post('/AddSubChapter', subChapter)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateCourseStepOne(courseId, course) {
    try {
      const requestBody = JSON.stringify(course)
      const response = await apiClient.put(`/UpdateStepOne/${courseId}`, requestBody)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateCourseStepTwo(courseId, courseChapters) {
    try {
      // const requestBody = JSON.stringify(courseChapters)
      // console.log( {"courseChapters":requestBody});
      const response = await apiClient.put(`/UpdateStepTwo/${courseId}`, courseChapters )
      
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateSubchapter(SubchapterId, Subchapter) {
    try {
      const response = await apiClient.put(`/UpdateSubChapter/${SubchapterId}`, Subchapter)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateSubchapterMD(subchapterId, updateSubchapterMD) {
    try {
      console.log(subchapterId)
      const response = await apiClient.put(
        `/UpdateSubChapterMDcontent/${subchapterId}`,
        updateSubchapterMD
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteSubChapterById(subChapterId) {
    try {
      const response = await apiClient.delete(`/SubChapter/${subChapterId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteChapterById(chapterId) {
    try {
      const response = await apiClient.delete(`/CourseChapter/${chapterId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
export default CourseServices

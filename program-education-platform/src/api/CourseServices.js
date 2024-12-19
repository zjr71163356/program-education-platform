import { HttpInstance } from '@/api/config'

const base_url = '/Courses'

const CourseServices = {
  async getAllCoursesOverViewList(filterQuery = null, pageNumber = 1, pageSize = null) {
    const searchParams = new URLSearchParams()
    searchParams.set('pageNumber', pageNumber)
    if (filterQuery !== null) searchParams.set('filterQuery', filterQuery)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)

    return await HttpInstance.get(`${base_url}?${searchParams.toString()}`)
  },

  async getCoursesById(courseId) {
    return await HttpInstance.get(`${base_url}/CourseDesc?courseId=${courseId}`)
  },

  async getCourseSubChapterById(subChapterId) {
    return await HttpInstance.get(`${base_url}/CourseSubChapters?subChapterId=${subChapterId}`)
  },

  async addCourseStepOne(course) {
    return await HttpInstance.post(`${base_url}/AddStepOne`, course)
  },

  async addCourseChapter(courseChapter) {
    return await HttpInstance.post(`${base_url}/AddCourseChapter`, courseChapter)
  },

  async addSubChapter(subChapter) {
    return await HttpInstance.post(`${base_url}/AddSubChapter`, subChapter)
  },

  async updateCourseStepOne(courseId, course) {
    return await HttpInstance.put(`${base_url}/UpdateStepOne/${courseId}`, course)
  },

  async updateCourseStepTwo(courseId, courseChapters) {
    return await HttpInstance.put(`${base_url}/UpdateStepTwo/${courseId}`, courseChapters)
  },

  async updateSubchapter(subchapterId, subchapter) {
    return await HttpInstance.put(`${base_url}/UpdateSubChapter/${subchapterId}`, subchapter)
  },

  async updateSubchapterMD(subchapterId, updateSubchapterMD) {
    return await HttpInstance.put(
      `${base_url}/UpdateSubChapterMDcontent/${subchapterId}`,
      updateSubchapterMD
    )
  },

  async deleteSubChapterById(subChapterId) {
    return await HttpInstance.delete(`${base_url}/SubChapter/${subChapterId}`)
  },

  async deleteChapterById(chapterId) {
    return await HttpInstance.delete(`${base_url}/CourseChapter/${chapterId}`)
  },

  async deleteCourseById(courseId) {
    return await HttpInstance.delete(`${base_url}/${courseId}`)
  }
}

export default CourseServices

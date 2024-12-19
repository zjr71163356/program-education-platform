import { HttpInstance } from '@/api/config'
import { b64EncodeUnicode } from '@/utils/tools'
import axios  from 'axios'
const base_url = '/Problems'

const SubmitAndResultOptions = {
  method: 'POST',
  url: 'http://localhost:2358/submissions',
  params: {
    base64_encoded: 'true',
    wait: 'true',
    fields: '*'
  },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json'
  }
}

const getSubmissionOptions = {
  method: 'GET',
  url: 'http://localhost:2358/submissions/batch',
  params: {
    tokens:
      'c0f05466-fb89-44bf-9418-a1b61fb3181c,c0cf66f3-2531-4790-864b-491b92db397b,602a3e4d-8bd7-4eba-a551-c580787ffc01 ',
    base64_encoded: 'true',
    fields: '*'
  }
}

const submitOptions = {
  method: 'POST',
  url: 'http://localhost:2358/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json'
  }
}

const MySysOptions = {
  method: 'GET',
  url: 'http://localhost:2358/system_info',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json'
  }
}

const ProblemServices = {
  async deleteTestData(dataId) {
    return await HttpInstance.delete(`${base_url}/DeleteTestData/${dataId}`)
  },
  async deleteProblem(problemId) {
    return await HttpInstance.delete(`${base_url}/DeleteProblem?problemId=${problemId}`)
  },

  async getProblemList(filterQuery, pageNumber, pageSize) {
    const searchParams = new URLSearchParams()
    searchParams.set('pageNumber', pageNumber)
    if (filterQuery !== null) searchParams.set('filterQuery', filterQuery)
    if (pageSize !== null) searchParams.set('pageSize', pageSize)
    return await HttpInstance.get(`${base_url}/?${searchParams.toString()}`)
  },
  async getProblemById(problemId) {
    return await HttpInstance.get(`${base_url}/GetProblemById?problemId=${problemId}`)
  },

  async submitProblemCode(language, code, testData) {
    const languageIds = {
      'C++': 52,
      Java: 62,
      JavaScript: 63,
      Python: 71
    }
    const language_id = languageIds[language]
    const base64Encoded = b64EncodeUnicode(code)
    const submissions = testData.map((data) => ({
      language_id: language_id,
      source_code: base64Encoded,
      stdin: b64EncodeUnicode(data.inputData.replace(/[\n\r]/g, '')),
      expected_output: b64EncodeUnicode(data.outputData.replace(/[\n\r]/g, ''))
    }))

    const requestBody = { submissions }
    return await axios.request({
      ...submitOptions,
      data: requestBody
    })
  },
  async getSubmission(tokenList) {
    const tokens = tokenList.map((item) => item.token).join(',')
    getSubmissionOptions.params.tokens = tokens
    return await axios.request(getSubmissionOptions)
  },
  async SendGetSubmission(language, code, testData) {
    const languageIds = {
      'C++': 52,
      Java: 62,
      JavaScript: 63,
      Python: 71
    }
    const source_code = b64EncodeUnicode(code)
    const language_id = languageIds[language]
    const resultList = []

    for (const data of testData) {
      const stdin = b64EncodeUnicode(data.inputData.replace(/[\n\r]/g, ''))
      const expected_output = b64EncodeUnicode(data.outputData.replace(/[\n\r]/g, ''))
      const submissionData = {
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
        expected_output: expected_output
      }
      SubmitAndResultOptions.data = submissionData
      const res = await axios.request(SubmitAndResultOptions)
      resultList.push(res.data)
    }
    return resultList
  },
  async getProblemTestData(problemId) {
    return await HttpInstance.get(`${base_url}/GetTestDatasByProblemId/${problemId}`)
  },
  async getTestData(dataId) {
    return await HttpInstance.get(`${base_url}/GetTestData/${dataId}`)
  },
  async getSystemInfo() {
    return await axios.request(MySysOptions)
  },
  async addProblem(problem) {
    return await HttpInstance.post(`${base_url}/AddProblem`, problem)
  },
  async addTestData(testData) {
    return await HttpInstance.post(`${base_url}/AddTestData`, testData)
  },
  async updateProblemStepOne(problemId, problem) {
    return await HttpInstance.put(`${base_url}/UpdateProblemStepOne/${problemId}`, problem)
  },

  async updateTestData(dataId, testData) {
    return await HttpInstance.put(`${base_url}/UpdateTestData/${dataId}`, testData)
  }
}

export default ProblemServices

import axios from 'axios'
import { b64EncodeUnicode } from '@/utils/tools'
import { api_url, headers } from './config'
const base_url = `${api_url}/Problems`
const apiClient = axios.create({
  baseURL: base_url,
  headers: headers
})
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
  // headers: {
  //   'X-RapidAPI-Key': '055a4bb1damsh3ee8e4205a9974bp1b2d7ejsn7e145775d87c',
  //   'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  // }
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
    // 'X-RapidAPI-Key': '055a4bb1damsh3ee8e4205a9974bp1b2d7ejsn7e145775d87c',
    // 'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
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
    try {
      const response = await apiClient.delete(`/DeleteTestData/${dataId}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async deleteProblem(problemId) {
    try {
      const response = await apiClient.delete(`/DeleteProblem?problemId=${problemId}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async getProblemList(filterQuery, pageNumber, pageSize) {
    try {
      const searchParams = new URLSearchParams()
      searchParams.set('pageNumber', pageNumber)
      if (filterQuery !== null) searchParams.set('filterQuery', filterQuery)
      if (pageSize !== null) searchParams.set('pageSize', pageSize)
      const response = await apiClient.get(`?${searchParams.toString()} `)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getProblemById(problemId) {
    try {
      const response = await apiClient.get(`/GetProblemById?problemId=${problemId}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async submitProblemCode(language, code, testData) {
    try {
      const languageIds = {
        'C++': 52,
        Java: 62,
        JavaScript: 63,
        Python: 71
      }
      console.log(testData)
      const language_id = languageIds[language]
      const base64Encoded = b64EncodeUnicode(code)
      const submissions = []
      for (let i = 0; i < testData.length; i++) {
        const inputWithoutNewlines = testData[i].inputData.replace(/[\n\r]/g, '')
        const outputWithoutNewlines = testData[i].outputData.replace(/[\n\r]/g, '')
        submissions.push({
          language_id: language_id,
          source_code: base64Encoded,
          stdin: b64EncodeUnicode(inputWithoutNewlines),
          expected_output: b64EncodeUnicode(outputWithoutNewlines)
        })
      }

      const requestBody = {
        submissions
      }
      console.log({
        ...submitOptions,
        data: requestBody
      })
      const response = await axios.request({
        ...submitOptions,
        data: requestBody
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getSubmission(tokenList) {
    const tokens = tokenList.map((item) => item.token).join(',')
    getSubmissionOptions.params.tokens = tokens
    console.log(getSubmissionOptions)
    try {
      const response = await axios.request(getSubmissionOptions)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
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
    let resultList = []
    for (let i = 0; i < testData.length; i++) {
      const inputWithoutNewlines = testData[i].inputData.replace(/[\n\r]/g, '')
      const outputWithoutNewlines = testData[i].outputData.replace(/[\n\r]/g, '')
      // console.log(inputWithoutNewlines, outputWithoutNewlines)
      const stdin = b64EncodeUnicode(inputWithoutNewlines)
      const expected_output = b64EncodeUnicode(outputWithoutNewlines)
      const data = {
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
        expected_output: expected_output
      }
      SubmitAndResultOptions.data = data
      const res = await axios.request(SubmitAndResultOptions)
      resultList.push(res.data)
      console.log(res.data, i)
      // console.log(SubmitAndResultOptions)
    }
    console.log(resultList)
    return resultList
  },
  async getProblemTestData(problemId) {
    try {
      const response = await apiClient.get(`/GetTestDatasByProblemId/${problemId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getTestData(dataId) {
    try {
      const response = await apiClient.get(`/GetTestData/${dataId}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async getSystemInfo() {
    try {
      const res = await axios.request(MySysOptions)
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  },
  async addProblem(problem) {
    try {
      const response = await apiClient.post('/AddProblem', problem)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async addTestData(testData) {
    try {
      const response = await apiClient.post('/AddTestData', testData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async updateProblemStepOne(problemId, problem) {
    try {
      const response = await apiClient.put(`/UpdateProblemStepOne/${problemId}`, problem)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  async updateTestData(dataId, testData) {
    try {
      const response = await apiClient.put(`/UpdateTestData/${dataId}`, testData)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default ProblemServices

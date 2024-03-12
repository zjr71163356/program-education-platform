import axios from 'axios'
const base_url = 'https://localhost:7231/api/Problems'
const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const getSubmissionOptions = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens:
      'c0f05466-fb89-44bf-9418-a1b61fb3181c,c0cf66f3-2531-4790-864b-491b92db397b,602a3e4d-8bd7-4eba-a551-c580787ffc01 ',
    base64_encoded: 'true',
    fields: '*'
  },
  headers: {
    'X-RapidAPI-Key': '055a4bb1damsh3ee8e4205a9974bp1b2d7ejsn7e145775d87c',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }
}
const submitOptions = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '055a4bb1damsh3ee8e4205a9974bp1b2d7ejsn7e145775d87c',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  }
}
const ProblemServices = {
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
      const base64Encoded = btoa(code)
      const submissions = []
      for (let i = 0; i < testData.length; i++) {
        const inputWithoutNewlines = testData[i].inputData.replace(/[\n\r]/g, '');
        const outputWithoutNewlines = testData[i].outputData.replace(/[\n\r]/g, '');
        submissions.push({
          language_id: language_id,
          source_code: base64Encoded,
          stdin:btoa(inputWithoutNewlines),
          expected_output: btoa(outputWithoutNewlines)
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
  async getProblemTestData(problemId) {
    try {
      const response = await apiClient.get(`/GetTestDatasByProblemId/${problemId}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default ProblemServices

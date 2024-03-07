const getImgURL = (imgName,pagenumber) => {
  const headers = {
    Authorization: 'Client-ID VoIkHCyIAx7Bu8GDXNxYvC7NqEj59kgdCroU8uJdj2E'
  }
 
  const width = 400
 
  const url = `https://api.unsplash.com/search/photos?page=${pagenumber}&query=${imgName}`

  return fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => console.log(data.results.map(result => result.urls.raw)))
    .catch((error) => console.log(error))
}
const generateRandomDate = () => {
  const startDate = new Date(2022, 0, 1) // Assuming the start date
  const endDate = new Date() // Current date
  const randomDate = new Date(
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
  )

  const year = randomDate.getFullYear()
  const month = String(randomDate.getMonth() + 1).padStart(2, '0')
  const day = String(randomDate.getDate()).padStart(2, '0')
  const hours = String(randomDate.getHours()).padStart(2, '0')
  const minutes = String(randomDate.getMinutes()).padStart(2, '0')
  const seconds = String(randomDate.getSeconds()).padStart(2, '0')

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

const generateRandomStatus = () => {
  const statuses = ['Pending', 'Accepted', 'Rejected']
  const randomIndex = Math.floor(Math.random() * statuses.length)
  return statuses[randomIndex]
}

const generateRandomCompiler = () => {
  const compilers = ['C', 'C++', 'Java', 'Python']
  const randomIndex = Math.floor(Math.random() * compilers.length)
  return compilers[randomIndex]
}

const generateRandomMemory = () => Math.floor(Math.random() * 4096) + 512 // Random memory between 512 and 4096 MB

const generateRandomRuntime = () => {
  const runtime = Math.random() * 10 + 1 // Random runtime between 1 and 10 seconds
  return Math.round(runtime * 100) / 100 // Round runtime to two decimal places
}

const generateRandomHistoryRecord = () => ({
  submittime: generateRandomDate(),
  state: generateRandomStatus(),
  titleId: Math.floor(Math.random() * 1000) + 1, // Random titleId between 1 and 1000
  title: `Title ${Math.floor(Math.random() * 100) + 1}`, // Random title
  user: `User ${Math.floor(Math.random() * 50) + 1}`, // Random user
  compiler: generateRandomCompiler(),
  memory: generateRandomMemory(),
  runtime: generateRandomRuntime()
})

// const numberOfRecords = 10 // Adjust the number of records as needed
// const historyRecords = Array.from({ length: numberOfRecords }, generateRandomHistoryRecord)

// console.log(historyRecords)
getImgURL('programming',1)

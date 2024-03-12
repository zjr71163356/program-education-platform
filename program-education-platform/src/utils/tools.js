export function stringToTag(inputString) {
  let tagList = ['', 'success', 'warning', 'danger', 'info']
  let hash = 0

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i)
    hash = (hash << 5) - hash + char
  }

  return tagList[hash % 5]
}

export function tagColorRender(tagColorId) {
  let tagList = ['', 'success', 'warning', 'danger', 'info']
  return tagList[tagColorId - 1]
}

export async function getDate() {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2) // 月份从 0 开始，因此需要加 1
  const day = ('0' + currentDate.getDate()).slice(-2)
  const hour = ('0' + currentDate.getHours()).slice(-2)
  const minute = ('0' + currentDate.getMinutes()).slice(-2)
  const second = ('0' + currentDate.getSeconds()).slice(-2)

  const formattedCurrentDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`
  return formattedCurrentDate
}

 
export async function getMaxTimeAndMemory(resultList) {
  let maxTime = -Infinity
  let maxMemory = -Infinity
  const array  = resultList.submissions;
 
  array.forEach( result  => {
      const time = parseFloat(result.time)
      const memory = parseFloat(result.memory)

      if (!isNaN(time) && time > maxTime) {
        maxTime = time
      }
      if (!isNaN(memory) && memory > maxMemory) {
        maxMemory = memory
      }
    })
 

  return { maxTime, maxMemory }
}

// 示例用法

// 示例用法
// const myString = "HelloWorld";
// const hashedValue = stringToTag(myString);
// console.log(hashedValue);

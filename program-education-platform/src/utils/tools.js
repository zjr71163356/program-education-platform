export function b64EncodeUnicode(str) {
  // return btoa(str)

  var utf8Bytes = new TextEncoder().encode(str);
  
  // 对 UTF-8 字节序列进行 Base64 编码
  var base64Encoded = btoa(String.fromCharCode.apply(null, utf8Bytes));

  return base64Encoded;
}

export function UnicodeDecodeB64(str) {
  // 将非 URI 安全字符替换为 URI 安全字符

  // return atob(str)

  var decodedString = atob(str);
  
  // 创建一个数组存放每个字符的 Unicode 编码
  var unicodeBytes = new Uint8Array(decodedString.length);
  for (var i = 0; i < decodedString.length; ++i) {
    unicodeBytes[i] = decodedString.charCodeAt(i);
  }

  // 使用 TextDecoder 将字节序列解码为 Unicode 字符串
  var unicodeStr = new TextDecoder().decode(unicodeBytes);

  return unicodeStr;
}

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
export async function getFormattedDate() {
  const date = new Date()

  // 获取年、月、日、小时和分钟
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份是从 0 开始计数的，需要加 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // 格式化为 smalldatetime 的格式
  // 注意：月份和日期如果是单个数字，需要在前面加上 '0'，以确保格式正确
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}`
  return formattedDate
}
export async function getMaxTimeAndMemory(resultList) {
  let maxTime = -Infinity
  let maxMemory = -Infinity

  resultList.forEach((result) => {
    const time = parseFloat(result.time)
    const memory = parseFloat(result.memory)

    if (!isNaN(time) && time > maxTime) {
      maxTime = time
    }
    if (!isNaN(memory) && memory > maxMemory) {
      maxMemory = memory
    }
  })

  if (maxTime === -Infinity) maxTime = 0
  if (maxMemory === -Infinity) maxMemory = 0
  maxMemory = (maxMemory / 1024).toFixed(1) // Convert maxMemory from KB to MB with 1 decimal place
  return { maxTime, maxMemory }
}

// 示例用法

// 示例用法
// const myString = "HelloWorld";
// const hashedValue = stringToTag(myString);
// console.log(hashedValue);

export function stringToTag(inputString) {
    let tagList=['','success','warning','danger','info']
    let hash = 0;

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }

    return tagList[hash%5];
}

// 示例用法
const myString = "HelloWorld";
const hashedValue = stringToTag(myString);
console.log(hashedValue);

/**
 * 9.17
 * https://github.com/azl397985856/leetcode/blob/master/problems/20.valid-parentheses.md
 * **/

const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
}
// {[()]}

//硬来法
function doValid(str) {
    const strArr = Array.prototype.slice.call(str)

    for (let i = 0; i < strArr.length / 2; i++) {
        let rightIndex = str.indexOf(obj[strArr[i]])

        if (rightIndex === i + 1) {
            //下一位就是对称的，所以跳过
            i++
        } else if (strArr[strArr.length - 1 - i] === obj[strArr[i]]) {
            //不做任何处理
        } else {
            return false
        }

    }
    return true
}

console.log(doValid('{}[]()'))
console.log(doValid('{{}}'))
console.log(doValid('{[]}'))


const left = '{[('
const stack = []

//使用栈的数据结构
function doValid2(str) {
    if (str.length % 2 !== 0) {
        return false
    }
    const strArr = Array.prototype.slice.call(str)
    strArr.map((item, index) => {
        if (item.indexOf(left) > -1){
            stack.push(item)
        }
        else{
            stack.pop()
        }
    })
    return stack.length===0
}

console.log(doValid2('{}[]()'))
console.log(doValid2('{{}}'))
console.log(doValid2('{[]}'))




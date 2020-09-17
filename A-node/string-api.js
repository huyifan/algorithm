/*
* 主要展示string相关的操作
* */

/**
 * https://www.cnblogs.com/guoyeqiang/p/8178336.html
 * **/

//1、字符串转换 toString()
let num=123
console.log('数字转字符串：',num.toString())

//2、字符串分割 split() //字符串转数组
const str='asd'
const str2='asd|www'

console.log('字符串分割：转数组',str.split(''))
console.log('字符串分割：特定分隔符',str2.split('|'))

//3、字符串替换
let replaceStr='asdhugosss'
let afterStr=replaceStr.replace('hugo','xxxx')
console.log('字符串替换：replace-不改变原字符串',replaceStr,afterStr)

//4、查询字符串
//下标从0开始；
let findStr='astdxxqwrt'
console.log('查询特定字符在字符串中的位置：',findStr.indexOf('q'))
console.log('查询特定字符在字符串中的最后位置：',findStr.lastIndexOf('t'))
console.log('从0开始返回：',findStr.lastIndexOf('t'))
console.log('指定位置的字符：',findStr.charAt(3))

//5、字符串匹配
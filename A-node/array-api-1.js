//pop、shift、unshift、push
const arr=[1,2,3]
//push-在数组尾部添加一个元素【原数组改变】
arr.push(4)
console.log('push  :',arr)
console.log('=============================================')

//shift 删除数组第一个元素，并返回一个新数组【原数组改变】
arr.shift()
console.log('shift  :',arr)
console.log('=============================================')

//unshift 在数据的最前端插入若干元素【原数组改变】
arr.unshift(1)
console.log('unshift  :',arr)
console.log('=============================================')

const popItem=arr.pop()
console.log('pop  :',arr)
console.log('pop  popItem:',popItem)
console.log('=============================================')

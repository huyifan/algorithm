const arr=[2,11,3,9,7,15]
const target=9

//1-双层循环
function twoSum(target,arr){
    const data=[]
    for(let i=0;i<arr.length-1;i++){
        for(let b=1;b<arr.length-1;b++){
            if(arr[i]+arr[b]===target){
                data[0]=i
                data[1]=b
            }
        }
    }
    return data
}

function twoSum2(target,arr){
    const map=new Map()
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }else{
            map.set(arr[i],i)
        }
    }
}

console.log(twoSum(target,arr))
console.log(twoSum2(target,arr))


/**
 求和转换为求差
 借助 Map 结构将数组中每个元素及其索引相互对应
 以空间换时间，将查找时间从 O(N) 降低到 O(1)
 */

const arr=[-2,1,-3,4,-1,2,1,-5,4]

//暴力解法-三层循环
const getMaxArr=function(arr){
    let result=0
    let sum=0
    for(let l=0;l<arr.length;l++){
        for(let r=1;r<arr.length;r++){

            for(let i=l;i<r;i++){
               sum+=arr[i]
           }
           if(sum>result){
               result=sum
           }
           sum=0
        }
    }
    return result
}

//前缀优化+暴力
const getMaxArr2=function (arr){
    let len=arr.length
    let max=-Number.MAX_VALUE
    let sum=0
    for(let l=0;l<len;l++){
        sum=0
        for(let r=l;r<len;r++){
            sum+=arr[r]
            if(sum>max){
                max=sum
            }
        }
    }
    return max
}
//优化前缀和
const getMaxArr3=function(list){
    const len = list.length;
    let max = list[0];
    let min = 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += list[i];
        if (sum - min > max) max = sum - min;
        if (sum < min) {
            min = sum;
        }
    }

    return max;
}

//

console.log(getMaxArr(arr))
console.log(getMaxArr2(arr))
console.log(getMaxArr3(arr))
const arr=[1,1,1,1,2,2,3,4,4,5,5,5,5,5]
let index=0
let result=[]
result.push(arr[0])
for (let i=1;i<arr.length;i++){
    if(arr[i]===arr[index]){
        continue
    }else{
        index=i
        result.push(arr[i])
    }
}
console.log(result)


var removeDuplicates = function(nums) {
    const size = nums.length;
    if(size==0) return 0;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1;
};

console.log(removeDuplicates(arr))
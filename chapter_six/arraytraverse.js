var arr=[4,5,1,6,8,9,40]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length - 1]
// console.log(arr)

for(var i=0; i <arr.length; i++){
    //console.log(arr[i])
    arr[i]=arr[i]+2
}
console.log(arr)

var sum=0
for(var i=0; i < arr.length; i++){

    sum+=arr[i]
}

console.log(sum)

    var value=0
    var value2=0
for(var i=0; i < arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i])
        value+=arr[i]
    }
    else{
        console.log(arr[i])
        value2+=arr[i]
    }
   
}
console.log("sum of odd array:",value2)
console.log("sum of even array:",value)
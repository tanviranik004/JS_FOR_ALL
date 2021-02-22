var arr=[4,5,6,9]
var arr2=[5,10,45,23]

//console.log(arr.join(' ,| '))

//arr.fill(0)
//console.log(arr)

var arr3=arr.concat (arr2)
console.log(arr3)

//console.log(Array.isArray(arr))


var arr5=Array.from(arr)
console.log(arr5) 


var a= [1,2]
var b=Array.from(a)
//var b=a
b[0]=5
console.log(a)
console.log(b)
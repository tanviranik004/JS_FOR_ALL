//First Class Function

// 1. A Function can be stored in variable

function add(a, b){
    return a + b;
}

var sum = add
console.log(sum(4,5))
console.log(typeof sum)

// 2. A Function can be stored in array

var arr =[]
arr.push(add)
console.log(arr) 
console.log(arr[0](5,3))
console.log(arr[0](5,5))

// 3. A Function can be stored in am Object

var  obj={
    sum: add
}
console.log(obj)
console.log(obj.sum(7,9))

// 4. We can Create Function as Need 
setTimeout(function(){
    console.log('I have Created.....')

},100)
function add(a,b){
    var result=a+b
    console.log(result) 

}

add(10,20)

function sub(a,b){
    var result=a - b
    console.log(result)
}
sub(30,40)

var arr1=[1,2,3,4] 
var arr2 =[5,7,9] 
var arr3 =[9, 7, 1]



function sumOfArray(arr){
     var sum=0
    for(var i=0; i < arr.length; i++){

        sum+=arr[i]

    }
    console.log(sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
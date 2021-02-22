//object literal vs constructor

//object literal 
var obj={}
console.log(obj)
console.log(typeof obj)

obj.x=10
console.log(obj)


var point = {
    x:30,
    y:20
}

 point.z=10

console.log(point)

//object constructor

var obj=Object()
obj.a=100
console.log(obj)

var obj2= new Object()
obj2.b=200
console.log(obj2)
let numOne = 3
let numTwo = 3 //primitive veri türleri=yani değerlerine göre karşılaştırabiliriz
console.log(numOne == numTwo)


let js='Javascript'
let py = 'Python'
console.log(js == py)


let lightOn = true
let lightOff=false
console.log(lightOff==lightOn)

let nums=[1,2,3] //array non-primitive yani değiştirilebilir.
console.log(nums)
nums[0]=10
console.log(nums)

let nums1=[1,2,3]
let nums2=[1,2,3]
console.log(nums1 == nums2) //false


let user1={
    name: 'Dilara',
    surname:'Kiraz'
}
let user2={
    name: 'Dilara',
    surname: 'Kiraz'
}
console.log(user1 == user2) //false


let name = 'Dilara'
let surname = 'Kiraz'
//let fullName = name +' '+ surname
//console.log(fullName)
let fullName = '${name} ${surname}' 
console.log(fullName)
let msg = "merhaba dünya"

function sayHello(){
    let nsg = 'hello world'
    return msg
}
let hello= sayHello()
console.log(hello)

function sum(){
    let total = 0
   for(let i = 0; i<arguments.length;i++){
    total +=arguments[i]
   }
   return total

}
console.log(sum(2,5,7,9,10))

const anonymus =  function(){
    console.log(
        'I am an anonmus'
    )
}
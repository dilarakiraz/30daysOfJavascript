const fonksiyon=number => number **2
function cube(cb,number){
    return cb(number) * number
}
//console.log(cube(fonksiyon,3))

const a=s1 => {
    const b= s2=>{
        const c=s3=>{
            return s1+s2+s3
        }
        return c
    }
    return b
}
//console.log (a(5)(10)(20))

const numbers=[1,3,5,7,9]
let total=0
let calculate=number=>total +=number
numbers.forEach(calculate)
//console.log(total)

function sayHello(){
    console.log('hello')
}
//sayInterval(sayHello,1000)

//setTimeout(sayHello,2000)

//const interval = setInterval(sayHello,1000)

//clearInterval
//clearTimeout

//setTimeout(()=>{
//    clearInterval(interval)
//    console.log('interval işlemi iptal edildi')
//},5000) 

const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

//console.log(numbersSquare)

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
   return 
  }, initialValue)
  const numbers3 = [1, 2, 3, 4, 5]
  const sum = numbers.reduce((acc, cur) => acc + cur, 0)
  
  console.log(sum)

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const score = scores.find((user) => user.score > 80)
  console.log(score)

const numbers4 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) 
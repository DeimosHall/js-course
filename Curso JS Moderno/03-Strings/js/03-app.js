const name = "         Name      "
console.log(name) // "         Name      "
console.log(name.trim()) // "Name"
console.log(name)

let myProduct = 'Monitor 20'
console.log(myProduct)
myProduct = myProduct.replace("20", '20"')
console.log(myProduct)

myProduct = myProduct.slice(0, 7)
console.log(myProduct)

myProduct = "Monitor 20\""
console.log(myProduct.substring(0, 7))
console.log(myProduct.repeat(2))

myProduct = 'Monitor 20"'
console.log(myProduct.substring(0, 7))
console.log(myProduct.repeat(2))
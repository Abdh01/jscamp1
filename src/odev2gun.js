//1-odev
function asalBulma(...numbers) {
    
}
function addToCart(productName) {
    console.log('sepete eklendi: '+productName)
    
}
addToCart('Alma')
let product1 = {productName:'Alma',quantity:5,unitPrice:10}
function addTocart2(product) {
    console.log(product.productName,product.quantity,product.unitPrice)
}
addTocart2(product1)
let product2 = {productName:'Alma',quantity:5,unitPrice:10}
let product3 = {productName:'xiyar',quantity:3,unitPrice:2}
console.log(product2.productName)
console.log(product3.productName)
product2=product3
console.log(product2.productName)
console.log(product3.productName)
product3.productName='badimcan'
console.log(product2.productName)
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        
        total +=numbers[i]
        }
        console.log(total)
    
}
add(10,20,30,40)
let [region1,region2,region3,[r1Seherleri,r2Seherleri,r3Seherleri]]=[
    {name:'Region1',ehali:'4M'},
    {name:'Region2',ehali:'500K'},
    {name:'Region3',ehali:'1M'},
    [
        ['Baki','Smuqayit','Abseron'],
        ['Salyan','Masalli','Lenkeran'],
        ['Gence','Samux','Yevlax']
    ]
]
console.log('1-ci Regiona daxil olan seherler: '+r1Seherleri+' Ehalisi: '+region1.ehali)
console.log(r2Seherleri)
function findPrime(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        
    }
}
findPrime(12,24,23)
//arkadas sayilar
function friendNumber(number1,number2) {
    let total1 = 0
    let total2 = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1+=i
        }
    }
    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            total2+=j
        }
    }
    if (total1 == number2 && total2 == number1) {
        console.log(number1+' ve '+number2+' arkadas sayilar!')
    }
    else(
        console.log('Arkadas sayi degiller!')
    )
}
friendNumber(220,284)


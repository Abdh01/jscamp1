console.log('hello')
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi!: urun : "
    + productName+ " Adet: "+quantity)

}
//addToCard()
addToCart(10)
//addToCard("Karpuz")
let sayHello  = ()=>{
    console.log("Hello World!")
}
sayHello()
let sayHello2 = function (){
    console.log('Hello World 2!')
}
sayHello2()
function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2('Elma',5,10)
addToCart2('Armut',2,20)
addToCart2('Karpuz',3,15)
//asagidaki verini en altda da yaza bilerik
let product1 = {productName:'Elma',quantity:5,unitPrice:10}

function addToCart3(product) {
    console.log('Urun: '+product.productName)
    console.log('Adet: '+product.quantity)
    console.log('Fiyat: '+product.unitPrice)
}
//Yani burda,hec ferq etmez
addToCart3(product1)
function addToCart4(params) {
    
}
function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName:'Elma',quantity:5,unitPrice:10},
    {productName:'Armut',quantity:5,unitPrice:10},
    {productName:'Karpuz',quantity:5,unitPrice:10}
]
addToCart4(products)
function add(number1,number2){
    console.log(number1+number2)
}
add(10,45)//burda saylar cox da ola biler,ona gore de bucur davam etmek olmaz
//en asan yolu awafidaki kimi bir funksiya yazmaqdir
//moterizedeki 3 noqte rest operatorudur,yani verilen
//saylari bir arraya atib ardicil olaraq yazir
function add1(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total  = total + numbers[i];
        
    }
    console.log(total)
}
add1(20,30)
add1(12,45,70)
let number = [20,60,450,640]
console.log(...number)
console.log(Math.max(...number))
let [icAnadolu,Marmara,Karadeniz,
    [icAnadoluSehirleri,MarmaraSehirleri]]=[
    {name:'Ic Anadolu',population:'20M'},
    {name:'Marmara',population:'30M'},
    {name:'Karadeniz',population:'10M'},
    [
        ['Ankara','Konya'],
        ['Istanbul','Bursa'],
        ['Sinop','Trabzon']
    ]
]
console.log(icAnadolu)
console.log(Marmara)
console.log(icAnadoluSehirleri)
console.log(MarmaraSehirleri)
//eyni seyleri obyektlernen de eliye bilirik
let newProductName,newUnitPrice,newQuantity
({ productName:newProductName,unitPrice:newUnitPrice,
    quantity:newQuantity}={productName:'Elma',unitPrice:10,quantity:5
})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

//arkadas sayilar
function arkadas(number1,number2) {
    let total1=0
    let total2=0
    for (let i = 0; i < number1; i++) {
        
        if (number1%i==0) {
            total1+=i
        }    
    }
    for (let j = 0; j < number2; j++) {
        if (number2%j==0) {
            total2+=j
        }    
    }
    if (total1==number2 && total2 == number1) {
        console.log(number1+' ve '+number2+' arkadas sayilar')
    }
    else{
        console.log('arkadas sayilar degiller')
    }
}
arkadas(221,284)
//mukemmel say
function perfectNumber(number) {
    let summary = 0
    for (let a = 1; a < number; a++){
        summary=0
        for (let s = 1; s < a; s++) {
            if (a%s==0) {
                summary+=s
            }
            
        }
        if (summary==a) {
            console.log('1000-e kadar olan sayilar icinde '+a+' bir mukemmel sayi.')
        }
1       
    }
}
perfectNumber(1000)
function primeNumber2(number) {
    let total = 0
    for (let a = 2; a < number; a++) {
        total=0
        for (let b = 0; b < a; b++) {
            if (a%b==0) {
                total++
            }
            if (total ==1) {
                console.log(a+' asal sayidir')
            }
            
        }
       
    }
}
primeNumber2(1000)

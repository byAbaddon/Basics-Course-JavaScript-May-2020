function savings(arg) {
 let income =  +arg[0]
 let savings =  +arg[1]
 let costs =  +arg[2]
let expense = income * 0.30  

let savedMoney = income - (costs + expense) 
let allSaved= savings * savedMoney 
let total = (savedMoney * 100) / income
console.log(`She can save ${total.toFixed(2)}%\n${allSaved.toFixed(2)}`)
}

//savings(['1500', '3' ,'800'])
//savings(['2050', '5' ,'900'])


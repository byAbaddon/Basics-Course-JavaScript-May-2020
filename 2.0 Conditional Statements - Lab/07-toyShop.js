function toyShop(...input) {
    let trip = Number(input.shift());
    let puzzle = Number(input.shift());
    let doll = Number(input.shift());
    let bear = Number(input.shift());
    let minion = Number(input.shift());
    let truck = Number(input.shift());
    let numbers = puzzle + doll + bear + minion + truck;
    let toyPrice = (puzzle * 2.60) + (doll * 3) + (bear * 4.1) + (minion * 8.20) + (truck * 2);
 
 
    if (numbers >= 50) {
        let price = toyPrice * 0.75;
        let totalPrice = price * 0.90;
        if (totalPrice >= trip) {
            console.log(`Yes! ${(totalPrice - trip).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(trip - totalPrice).toFixed(2)} lv needed.`)
        }
    } else if (numbers < 50) {
        let totalPrice = toyPrice * 0.90;
        if (totalPrice >= trip) {
            console.log(`Yes! ${(totalPrice - trip).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(trip - totalPrice).toFixed(2)} lv needed.`);
        }
    }
 }

// toyShop(
// '40.8',
// '20',
// '25',
// '30',
// '50',
// '10',
//        )

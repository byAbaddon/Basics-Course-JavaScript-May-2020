
function fruitOrVegetable(arg) {
    arr = ["bannana","banana", "apple", "kiwi", "cherry", "lemon", "grapes", "tomato","cucumber", "pepper", "carrot" ];
  
    if (arr.includes(arg)) {
      console.log(arr.findIndex(x => x === arg) <= 6 ? "fruit" : "vegetable");
      return;
    }
    console.log("unknown");
  }

//JUDGE BUG  - bannana

// fruitOrVegetable("banana");
// fruitOrVegetable("bannana");



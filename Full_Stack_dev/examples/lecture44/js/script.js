// //default values

// function orderChickenWith(sideDish){
//     if(sideDish===undefined){
//         sideDish="Whatever!";
//     }
//     console.log("Chicken with "+sideDish);

// }
// orderChickenWith("noodle");
// orderChickenWith();


function orderChickenWith(sideDish){
    sideDish = sideDish || "Whatever!";
    console.log("Chickenwith"+sideDish);

}
orderChickenWith("noodle");
orderChickenWith();

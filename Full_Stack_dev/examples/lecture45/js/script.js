///********creating object using new Object() syntax
// var company = new Object();
// company.name = "Facebook";
// console.log(company);
//-----

// var company = new Object();
// company.name = "Facebook";
// company.ceo.firstname="Mark";
// console.log(company);
//------

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname="Mark";
// console.log(company);

//-------
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName="Mark";
// company.ceo.favcolor = "blue";
// console.log("company CEO name is: "+company.ceo.firstName);
//------
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName="Mark";
// company.ceo.favcolor = "blue";
// console.log("company CEO name is: "+company.ceo.firstName);
// console.log(company["name"]);
// company["stock of company"] = 110;4
// console.log("Stock price is: "+company["stock of company"]);
//-------
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName="Mark";
// company.ceo.favcolor = "blue";
// console.log("company CEO name is: "+company.ceo.firstName);
// console.log(company["name"]);
// // var stockPropName = "stock of company";
// // company[stockPropName] = 110;
// // console.log("stock Price is: "+company[stockPropName]);
// company.$stock = 110;
// console.log(company);

//********Creating obejct using object literal syntax
// var facebook ={
//     name:"Facebook",
//     ceo:{
//         firstName:"Mark",
//         favColor:"blue"
//     }
// };
// console.log(facebook);
// *******
// var facebook ={
//     name:"Facebook",
//     ceo:{
//         firstName:"Mark",
//         favColor:"blue"
//     },
//     $stock:110
// };
// console.log(facebook);

// *******
var facebook ={
    name:"Facebook",
    ceo:{
        firstName:"Mark",
        favColor:"blue"
    },
    "stock of company":110
};
console.log(facebook.ceo.firstName);

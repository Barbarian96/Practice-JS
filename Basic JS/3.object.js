// object - > group of key value pair
// key : value -> property
// key : function -> method

// making object
let moo = {
    name: "G M",
    lastname : "Mozahed",
    address :{
        thana: "Satakani",
        city: "Chittagong"
    },
    age: 23,
    is_student: true,
    project: ["GMS", "CMS"],
    
    fun: function ( ) {
        console.log("Having Fun with Java Script");
    }
}

// Getter
// console. log(moo.lastname);
// console. log(moo.age);
// console. log(moo.project);
// moo.fun();

//Update
// moo.age=100;
// moo.friends=["Raihan","Atiq"];


//Delete
// delete moo.address;

// Printing Object
// console.log("Moozaheed ",moo);

//Printing Using Loop
// for(let key in moo)
// {
//     console.log(key," : ",moo[key]);
// }

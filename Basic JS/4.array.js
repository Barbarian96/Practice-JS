let arr=[1,2,3,5];
// console.log(arr);
// console.log(arr.length);
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }


arr.push('Mozahed');
arr.unshift('Aysha');//samne insert
console.log(arr);

arr.pop();
arr.shift();//samner value remove
console.log(arr);

let new_arr=arr.slice(2,4); //arr theke 2 to 4 idx niye new array banabe
console.log(new_arr);

//Delete from array 1st ta starting position and last parameter is the total koyta value delete krbo 
arr.splice(2,1)

//Index of contain


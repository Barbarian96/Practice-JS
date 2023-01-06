let s_str='single quote';
let d_str="double quote";

let char=s_str.charAt(4);
let ascii=s_str.charCodeAt(4);
let substr=s_str.substring(2,8);
// console.log(char);
// console.log(ascii);
// console.log(substr);


//Trim ->Space remove kore
s_str=s_str.trim();
console.log(s_str);

//Splite
let arr=s_str.split('');
console.log(arr);

//Join
let str=arr.join('');
console.log(str);


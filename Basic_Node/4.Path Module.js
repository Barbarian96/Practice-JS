let path=require('path');


let fs=require("fs");

// for(let i=1;i<=10;i++)
// {
//     let dirpath=`Lecture-${i}`;
//     fs.mkdirSync(dirpath);
//     fs.writeFileSync(path.join(dirpath,"readme.md"),`# Moozaheed and this is Lecture-${i}`);
// }


// Extension
// let ext=path.extname(path.join(__dirname,"abc.js"));
// console.log(ext);

//Folder Name
let name=path.basename(__dirname);
console.log(name);
name =path.basename(path.join(__dirname,'abc.js'));
console.log(name);
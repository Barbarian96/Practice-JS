//files -> create ,read,update,delete

let fs=require("fs");

// Read
// let buffer=fs.readFileSync("abc.js");
// console.log("Binary Data ",buffer);
// console.log("Binary Data "+buffer);

// Create
// fs.openSync("abc.txt","w"); //write mode
// fs.writeFileSync("abc.txt","Moozaheed Valo Nai"); //File a thakle banai dibe nahoy update kore dibe

// Update
// fs.appendFileSync("abc.txt","Ajke amar mon vlo nei");

// Making Folder
// fs.mkdirSync("My Dir");
// fs.writeFileSync("My Dir/abc.txt","Moozaheed Valo Nai"); //File a thakle banai dibe nahoy update kore dibe


// Delete
// let content=fs.readdirSync("My Dir");
// console.log(content);
// for(let i=0;i<content.length;i++)
// {
//     console.log(content[i]);
//     fs.unlinkSync("My Dir/"+content[i]);
// }

// Folder Remove
// fs.rmdirSync('My Dir');

// fs.existsSync() - Returns true if the path exists, false otherwise.


// fs.lstatSync() -path ta file er nki folder er eta return kore
// let details=fs.lstatSync(__dirname + "\\3.File System Modules.js");
// let ans=details.isFile();
// console.log(ans);
// let ans1=details.isDirectory();
// console.log(ans1);


// Create 10 folder
// for(let i=1;i<=10;i++)
// {
//     let dirpath=`Lecture-${i}`;
//     fs.mkdirSync(dirpath);
//     fs.writeFileSync(dirpath+"\\"+"readme.md",`#Moozaheed and this is Lecture-${i}`);
// }


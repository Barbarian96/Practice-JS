let cp = require("child_process");

// cp.execSync("calc");
// cp.execSync("start chrome https:\\www.pepcoding.com");

let out=cp.execSync("node abc.js");
console.log(out);
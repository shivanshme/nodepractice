console.log("welcome home");
//const name = "shivansh";
//console.log(name);
const fs = require("fs");
fs.writeFileSync('read.txt', "welcome to nodejs");    //creates a new file and add data into it
fs.writeFileSync('read.txt', "Come again");           //deletes previous data and overwrite over it
fs.appendFileSync('read.txt', " data appended")         //data appended
const buf_data=fs.readFileSync('read.txt');
console.log(buf_data);                                 //buffer data
org_data = buf_data.toString();                        //buffer data converted into the original data
console.log(org_data);
fs.renameSync('read.txt', 'readwrite.txt');



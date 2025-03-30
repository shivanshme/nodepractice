console.log("welcome home");
//const name = "shivansh";
//console.log(name);
import { writeFileSync, appendFileSync, readFileSync, renameSync } from "fs";
writeFileSync('read.txt', "welcome to nodejs");    //creates a new file and add data into it
writeFileSync('read.txt', "Come again");           //deletes previous data and overwrite over it
appendFileSync('read.txt', " data appended")         //data appended
const buf_data=readFileSync('read.txt');
console.log(buf_data);                                 //buffer data
org_data = buf_data.toString();                        //buffer data converted into the original data
console.log(org_data);
renameSync('read.txt', 'readwrite.txt');



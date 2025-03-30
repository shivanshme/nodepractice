import { writeFileSync, appendFileSync, readFileSync, renameSync } from "fs";
writeFileSync("bio.txt", 'Living in the forest ');
appendFileSync("bio.txt", 'Its is the new experience');
const data = readFileSync("bio.txt","utf8");
console.log(data);
renameSync('bio.txt', 'new_file.txt');                        //renaming
//fs.unlinkSync('new_file.txt');


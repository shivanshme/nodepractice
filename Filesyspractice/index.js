const fs = require("fs");
fs.writeFileSync("bio.txt", 'Living in the forest ');
fs.appendFileSync("bio.txt", 'Its is the new experience');
const data = fs.readFileSync("bio.txt","utf8");
console.log(data);
fs.renameSync('bio.txt', 'new_file.txt');                        //renaming
//fs.unlinkSync('new_file.txt');


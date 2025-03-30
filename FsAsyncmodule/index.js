import { writeFile, appendFile, readFile } from 'fs';
writeFile('read.txt', "Today is very awesome day ", (err) => { 
    console.log("File is created :)");
});
appendFile('read.txt', " really good", (err) => {
    console.log("task completed");
})
readFile('read.txt','utf8' ,(err,data) => {
    console.log(data);
})
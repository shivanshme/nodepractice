const fs = require('fs');
fs.writeFile('read.txt', "Today is very awesome day ", (err) => { 
    console.log("File is created :)");
});
fs.appendFile('read.txt', " really good", (err) => {
    console.log("task completed");
})
fs.readFile('read.txt','utf8' ,(err,data) => {
    console.log(data);
})
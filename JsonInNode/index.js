//Javascript object notation(JSON)
//used when data is sent from server
import { writeFile, readFile } from "fs";

const biodata = {
    name: "Shivansh ",
    age: 23,
    lastname: "Patel"
};

console.log(biodata.lastname);

const jsonData = JSON.stringify(biodata); //to convert object into json
console.log(jsonData);

writeFile("json1.json", jsonData, (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully");

    // Read the file after writing
    readFile("json1.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const original = JSON.parse(data);
        console.log(original.age);
    });
});





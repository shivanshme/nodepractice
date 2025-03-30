//Javascript object notation(JSON)
//used when data is sent from server
import { writeFile, readFile } from "fs";
const biodata = {
    name: "Shivansh ",
    age: 23,
    lastname:"Patel"
}
console.log(biodata.lastname);

const jsonData = JSON.stringify(biodata);     //to convert object into json
console.log(jsonData);

writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});
readFile("json1.json", "utf-8", (err, data) => {
    //console.log(data);
    const orginal = JSON.parse(data);
    console.log(orginal.age);
});



// const orgData = JSON.parse(jsonData);           //converted back into object
// console.log(orgData.age);





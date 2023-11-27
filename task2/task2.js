const findMostOccuredLetter = require("@whoever_whenever/most-occured-letter");
const fs = require("fs");
//const pathToFile = "./fileToRead.txt";

function readFile(filePath) {
    try {
        const text = fs.readFileSync(filePath, { encoding: "utf-8" });
        return text;
    }
    catch (err) {
        console.log("Error!");
    }
}

let mostOccuredLetters = findMostOccuredLetter(readFile(process.argv[2]));
console.log(mostOccuredLetters);

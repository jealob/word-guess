let Letter = require("./letter.js");

let Word = function (word) {
    // console.log("runs");
    this.letterArray = [];
    // Push all letter string to array
    word.split("").forEach(function (element) {
        this.letterArray.push(new Letter(element));
    });
   

}

module.exports = Word;
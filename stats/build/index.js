"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// create an object that satisfies the datareader interface
const csvfilereader = new CsvFileReader_1.CsvFileReader('football.csv');
// create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader_1.MatchReader(csvfilereader);
matchReader.load();
// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
;
console.log(`Man United won ${manUnitedWins} games`);

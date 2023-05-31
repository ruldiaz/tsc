import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

// create an object that satisfies the datareader interface
const csvfilereader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader(csvfilereader);
matchReader.load();

// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);


let manUnitedWins = 0;

for( let match of matchReader.matches ){
  if( match[1] === 'Man United' && match[5] === MatchResult.HomeWin ){
    manUnitedWins++;
  }else if( match[2] === 'Man United' && match[5] === MatchResult.AwayWin ){
    manUnitedWins++;
  }
};

console.log(`Man United won ${manUnitedWins} games`);
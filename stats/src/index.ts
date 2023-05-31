import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create an object that satisfies the datareader interface
const csvfilereader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader(csvfilereader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches)


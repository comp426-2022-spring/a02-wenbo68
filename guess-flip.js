import { flipACoin } from './modules/coin.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require("minimist")(process.argv.slice(2));
const call = args.call;

if(call=='tails' || call=='heads'){
    console.log(flipACoin(call));
}else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
};
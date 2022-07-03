const grind = {
    'fish': "pls fish",
    'dig': "pls dig",
    'search': "pls search",
    'hunt': "pls hunt",
    'beg': "pls beg",
    'pm': "pls pm",
    'crime': "pls crime",
    "slots": "pls slots 1500",
    "se": "pls se 1500",
    "hl": "pls hl 1500",
    "gamble": "pls gamble 1500"
};
var tynt = require("tynt");
// const id = '988110504901881876';

var client = require("./app.js");
client = client.client
sleep = client.sleep

var fs = require("fs")
const path = "../config.json"
var rawdata = fs.readFileSync(path, 'utf-8');
var data = JSON.parse(rawdata);
var id = data.client.channelID

var sentid;

module.exports = { crime, fish, beg, hunt, dig, pm, search, con, sentid, update, slots, se, hl, gamble };
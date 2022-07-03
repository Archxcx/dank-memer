(async () => {
    let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    var fs = require("fs"), tynt = require("tynt");
    const path = "\config.json"
    var rawdata = fs.readFileSync(path, 'utf-8');
    var data = JSON.parse(rawdata);
    var id = data.client.channelID

    // var client = require("./app.js");
    // client = client.client

    var sentid;

    async function search() {
        var command = "pls search"
        let min = (eval(`command.length`) / 6.4) * 1000 // 60 wpm in characters
        let max = (eval(`command.length`) / 13) * 1000 // 120 wpm in characters
        let rand = randnum(min, max)
        if (rand >= 10000) {
            let randnum = Math.ceil(rand / 10000) * 10000
            randnum = randnum / 10000
            for (let i = 1; i < randnum + 1; i++) {
                client.channels.fetch(id).then((channel) => channel.sendTyping());
                if (i !== randnum) {
                    await sleep(10000);
                } else {
                    await sleep(rand % 10000)
                }
            }
        } else {
            client.channels.fetch(id).then((channel) => channel.sendTyping());
            await sleep(rand);
        }
        sentid = await client.channels.fetch(id).then((channel) => channel.send(command));
        sentid = sentid.id
        console.log(await timeformat() + tynt.Magenta('[ DEBUG ]') + ' |' + tynt.White(` Sent message \`${tynt.Yellow(command)}\` `));
    }

    async function update() {
        module.exports = { sentid };
    }

    async function timeformat() {
        var date = new Date;
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hour = ((hour + 11) % 12 + 1);
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        day = day < 10 ? "0" + day : day
        return tynt.White(`[${hour}:${minutes}:${seconds}] `)
    }

    function randnum(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1))
    }

    module.exports = { search, sentid, update };


})();
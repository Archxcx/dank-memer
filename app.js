(async () => {
    const { Client } = require("discord.js-selfbot-v13");
    const client = new Client({ restRequestTimeout: 1200000 });
    client.login(process.env.token);
    var tynt = require("tynt")
        , fs = require('fs');
    const path = './config.json'

    let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    module.exports = { client, sleep, };
    const id = '988110504901881876';
    const server = '988077641640853535';
    // var grind = require("./modules/grind.js")
    
    // =============== GRIND COMMANDS =============== //
    var fish = require("./modules/fish.js");
    fish = fish.fish()



    const start = ['!r']
    var continue1 = true;
    var button = [
        "tax evasion",
        "murder",
        "soul's chamber",
        "aeradella's home",
        "phoenix pits",
        "grass",
        "kitchen",
        "air",
        "garage",
        "area 51",
        "dresser",
        "mailbow",
        "street",
        "bushes",
        "glovebox",
        "sewer",
        "bank",
        "car",
        "vacuum",
    ]
    const regex = new RegExp('(?<=⏣\\s)(.*?)(?=\\D+s)|(?<=⏣\\s)(.*?)(?=\\D+)', 'g')
    var { coins, coinstotal } = 0;
    var starttime, endtime, hms, starttime1, hms1, starttime2, hms2, starttime3, hms3;

    if (fs.existsSync(path)) {
        rawdata = fs.readFileSync(path, 'utf-8')
        data = JSON.parse(rawdata);
        endtime = new Date();

        starttime1 = data.config.timers.pizza
        starttime1 = new Date(starttime1);
        // hms1 = endtime - starttime1

        starttime2 = data.config.timers.daily
        starttime2 = new Date(starttime2)
        // hms2 = endtime - starttime2

        starttime3 = data.config.timers.horseshoe
        starttime3 = new Date(starttime3);
        // hms3 = endtime - starttime3
    } else {
        console.log("\n" + await timeformat() + tynt.Magenta(" [ DEBUG ] " + tynt.White(`| ${path} Does not exist.... Making now`)));
        fs.openSync(path, 'w')
        rawdata = fs.readFileSync(path);
        data = ({ "config": [] });
        data.config = ({ "timers": [] });
        data.config.timers = ({ "horseshoe": null, "daily": null, "pizza": null, "geco": null, "tidepod": null });
        fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
    }

    client.on('ready', async () => {
        // client.user.setStatus("offline");
        var usr = await client.users.fetch(client.user.id)
        let friends = 0;
        client.relationships.cache.forEach((value) => {
            if (value === 1) {
                friends++;
            }
        });
        var guild = [];
        client.guilds.cache.forEach((value) => {
            guild.push(value)
        });
        let date = new Date(client.user.createdAt)
        registeredDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
        console.log(await timeformat() + " " + tynt.Magenta(client.user.tag) + ' | Successfully logged in.');
        console.log(await timeformat() + tynt.Magenta(' [ Client Information ]') + ' | Created at : ' + tynt.Yellow(registeredDate));
        console.log(await timeformat() + tynt.Magenta(' [ Client Information ]') + ' | ID : ' + tynt.Yellow(usr.id));
        console.log(await timeformat() + tynt.Magenta(' [ Client Information ]') + ' | Email : ' + tynt.Yellow(usr.emailAddress));
        console.log(await timeformat() + tynt.Magenta(' [ Client Information ]') + ' | Guilds : ' + tynt.Yellow(guild.length));
        console.log(await timeformat() + tynt.Magenta(' [ Client Information ]') + ' | Friends : ' + tynt.Yellow(friends));

        console.log("\n" + await timeformat() + tynt.Magenta(" [ DEBUG ] " + tynt.White(`| Waiting for start command \`${tynt.Yellow(start)}\` `)));

    });


    // const id = '988445945773580358';
    // for (const [key, value] of Object.entries(command)) {
    // const key = "num 2"
    // }
    // console.log(command["fish"])

    client.on("messageCreate", async (msg) => {
        grind.update();
        var grind2 = require("./modules/grind.js");
        var sentid = grind2.sentid
        // if (grinder == true) {
        if (msg.guild && msg.guild.id === server) {
            if (msg.author.id == '270904126974590976') {
                if (msg.type === 'REPLY' && msg.reference.messageId === sentid) {
                    client.channels.cache.get(id).messages.fetch(msg.id).then(message => {
                        if (message.components[0]) {

                            if (msg.content.includes('Catch the fish!')) {
                                var content = message.content
                                content = content.toString().replace(/\n/g, '')

                                var regex = new RegExp('(?<=\\Catch the fish!).*', 'g')
                                content = content.toString().match(regex)

                                var regex = new RegExp('[\\s]*?(?=<)', 'g')
                                content = content.toString().match(regex)

                                fish = (content[0].length / 7) + 1;

                                var fishplacement = [1, 2, 3];

                                fishplacement = fishplacement.filter(filter => filter == fish)

                                // console.log("all possible fish placements: " + fishplacement)

                                var dir = fishplacement - 1

                                message.clickButton(message.components[0].components[dir].customId);
                                timeformat().then(time => console.log(time + tynt.Magenta(' [ DEBUG ]') + tynt.Red(" [ EVENT ]") + ' | ' + tynt.White(` legendary fish sniped `)));
                                continue1 = true;
                                return
                            }

                            if (msg.content.includes('Dodge the Fireball')) {
                                // console.log("dragon event")
                                var content = message.content
                                var player, fireball;

                                content = content.replace(/\n/g, '')

                                var regex = new RegExp('(?<=\\Dodge the Fireball).*', 'g')
                                content = content.match(regex)
                                // console.log(content)

                                content = content

                                var regex = new RegExp('><', 'g')
                                var content2 = content.toString().match(regex)
                                if (content2) fireball = 1;
                                // console.log(content2)

                                var regex = new RegExp('>:', 'g')
                                var content2 = content.toString().match(regex)
                                if (content2) player = 1;
                                // console.log(content2)


                                var regex = new RegExp('[\\s]*?(?=>|:|<)', 'g')
                                content = content.toString().match(regex)
                                // console.log(content)

                                var arr = [];
                                content.forEach(element => {
                                    if (element) arr.push(element.length);
                                });

                                if (!fireball) fireball = (arr[1] / 7) + 1;
                                if (!player) player = (arr[2] / 7) + 1;
                                var playerplacement = [1, 2, 3];

                                // console.log("Fireball: " + fireball + " Player: " + player)

                                playerplacement = playerplacement.filter(filter => filter !== fireball)

                                // console.log("all possible player placements: " + playerplacement)

                                var dir = playerplacement[Math.floor(Math.random() * playerplacement.length)];
                                // console.log(dir)
                                dir -= 1
                                message.clickButton(message.components[0].components[dir].customId);
                                timeformat().then(time => console.log(time + tynt.Magenta(' [ DEBUG ]') + tynt.Red(" [ EVENT ]") + ' | ' + tynt.White(` dragon sniped `)));
                                continue1 = true;
                                return
                                randnum2(1000, 1300).then(val => sleep(val))
                            }

                            continue1 = false;
                            // for (let index = 0; index < message.components[0].components.length; index++) {
                            // console.log(message.components[0].components[index].label);
                            for (let index3 = 0; index3 < button.length; index3++) {
                                for (let index2 = 0; index2 < message.components[0].components.length; index2++) {
                                    if (message.components[0].components[index2].label === button[index3]) {
                                        temp = false;
                                        message.clickButton(message.components[0].components[index2].customId);
                                        var label = (message.components[0].components[index2].label);
                                        timeformat().then(time => console.log(time + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` button click \`${tynt.Yellow(label)}\` `)));
                                        continue1 = true;
                                        // sleep(randnum(1000, 1300)).then(() => void (0))
                                        randnum2(1000, 1300).then(val => sleep(val))
                                        return;
                                    }
                                }
                            }

                            let data = message.components[0].components
                            let num = Math.floor(0 + Math.random() * ((data.length - 1) - 0 + 1));
                            message.clickButton(message.components[0].components[num].customId);
                            var label = (message.components[0].components[num].label);
                            timeformat().then(time => console.log(time + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` button click \`${tynt.Yellow(label)}\` `)));
                            continue1 = true;
                            randnum2(1000, 1300).then(val => sleep(val))
                        }
                    });
                }
            }
        }
    });

    var newx1 = 1
    var oldx1 = 0
    client.on("messageCreate", async (message) => {
        if (message.guild && message.guild.id == '988077641640853535')
            if (start.some(start => (message.content.toLowerCase()).includes(start))) {
                if (newx1 !== oldx1) {
                    newx1 = 0
                    console.log("\n" + await timeformat() + tynt.Magenta(" [ DEBUG ] " + tynt.White(`| start called by \`${tynt.Yellow(message.author.tag)}\` in \`${tynt.Yellow(message.guild.name)}\`\n`)));
                    spam();
                }
            }
    });

    client.on("messageCreate", async (msg) => {
        grind.update();
        var grind2 = require("./modules/grind.js");
        var sentid = grind2.sentid
        if (msg.guild && msg.guild.id == server) {
            if (msg.author.id === '270904126974590976') {
                if (msg.type === 'REPLY' && msg.reference.messageId === sentid) {


                }
            }
        }

    });

    async function spam() {
        timerstart();
        grinder = true;
        var f_arr = [grind.fish, grind.crime, grind.beg, grind.dig, grind.search, grind.pm, grind.hunt, grind.se, grind.slots, grind.hl, grind.gamble];
        var f_arr_done = [];

        for (let index = 0; index < f_arr.length; index++) {
            var i = Math.floor(Math.random() * f_arr.length);
            if (f_arr_done.includes(i)) {
                index -= 1
            } else {
                f_arr_done.push(i);

                endtime = new Date();
                starttime1 = data.config.timers.pizza
                starttime2 = data.config.timers.daily
                starttime3 = data.config.timers.horseshoe
                starttime1 = new Date(starttime1)
                starttime2 = new Date(starttime2)
                starttime3 = new Date(starttime3)
                hms1 = endtime - starttime1;
                hms2 = endtime - starttime2;
                hms3 = endtime - starttime3;

                if (!starttime1) {
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("pizza")}\` `));
                    await client.channels.fetch(id).then((channel) => channel.send("pls use zza"));
                    await sleep(randnum(2000, 4500));
                    starttime1 = new Date();
                    data.config.timers.pizza = starttime1
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                }
                if (!starttime2) {
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("daily box")}\` `));
                    await client.channels.fetch(id).then((channel) => channel.send("pls use ily"));
                    await sleep(randnum(2000, 4500));
                    starttime2 = new Date();
                    data.config.timers.daily = starttime2
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                }
                if (!starttime3) {
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("horseshoe")}\` `));
                    await client.channels.fetch(id).then((channel) => channel.send("pls use horseshoe"));
                    await sleep(randnum(2000, 4500));
                    starttime3 = new Date();
                    data.config.timers.horseshoe = starttime3
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                }
                if (hms1 > 7200000) {
                    hms1 = ""
                    // console.log("5 seconds has passed")      
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("pizza")}\` `));
                    await client.channels.fetch(id).then((channel) => channel.send("pls use zza"));
                    starttime1 = new Date();
                    data.config.timers.pizza = starttime1
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                    await sleep(randnum(3500, 4500));
                }
                if (hms2 > 600000) {
                    hms2 = ""
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("daily box")}\` `));
                    // console.log("5 seconds has passed")                    
                    await client.channels.fetch(id).then((channel) => channel.send("pls use ily"));
                    starttime2 = new Date();
                    data.config.timers.daily = starttime2
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                    await sleep(randnum(3500, 4500));
                }
                if (hms3 > 1800000) {
                    hms3 = ""
                    console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Item consumed: \`${tynt.Yellow("horseshoe")}\` `));
                    // console.log("5 seconds has passed")                    
                    await client.channels.fetch(id).then((channel) => channel.send("pls use horseshoe"));
                    starttime3 = new Date();
                    data.config.timers.horseshoe = starttime3
                    fs.writeFileSync(path, (JSON.stringify(data, null, 2)));
                    await sleep(randnum(3500, 4500));
                }

                f_arr[i]();
                await sleep(randnum(2200, 2500));

                var d = new Date()
                var e = new Date(d);
                var msSinceMidnight = e - d.setHours(0, 0, 0, 0);

                if (msSinceMidnight >= 0 && msSinceMidnight <= 600000) {
                    await sleep(randnum(21600000, 25200000))
                }

            }
        }

        timerend(false);

        // console.log(seconds)
        var looptimer = randnum(45000, 47500)
        var looptimer = randnum(28000, 30000)
        // var looptimer = randnum(20000, 22500)

        coinstotal = parseInt(coinstotal += coins)
        // console.log("\n")
        console.log("\n" + await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` loop finished in: \`${tynt.Yellow(hms + "ms")}\` or \`${tynt.Yellow(hms / 1000 + "s")}\` `));
        console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` starting again in: \`${tynt.Yellow(looptimer + "ms")}\` or \`${tynt.Yellow(looptimer / 1000 + "s")}\` `));
        console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Coins earned this loop: \`${tynt.Yellow(coins)}\` `));
        console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Coins earned this entire session: \`${tynt.Yellow(coinstotal)}\` `));
        console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Client uptime: \`${tynt.Yellow(new Date(client.uptime).toISOString().substring(11, 19))}\` \n`));
        // console.log("\n")
        coins = 0;
        await sleep(1000)

        // console.log("DONE")
        if (continue1) {
            grinder = false;
            var d = Math.random() * 100
            if (d < 5) {
                // var rand = randnum(120000, 300000)
                var rand = randnum(60000, 65000)
                console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` Sleeping for ${tynt.Yellow(`${Math.floor((rand % 3600000) / 60000)} minutes`)} and ${tynt.Yellow(`${Math.ceil((rand % 3600000) % 60)} seconds`)}`));
                await sleep(rand);
            }
            await sleep(looptimer - 2000)
            console.log(await timeformat() + tynt.Magenta(' [ DEBUG ]') + ' |' + tynt.White(` loop starting now. \n`));
            await sleep(1000)
            setTimeout(function () {
                spam();
            }, 0);
        }
    }



    client.on("messageCreate", async (Message) => { // Money Tracker
        grind.update();
        var grind2 = require("./modules/grind.js");
        var sentid = grind2.sentid

        if (Message.guild && Message.guild.id == server) {
            if (Message.author.id === '270904126974590976') {
                if (Message.type === 'REPLY' && Message.reference.messageId === sentid) {
                    // return
                    if (Message.embeds.length >= 0) { // Embed
                        let embed = Message.embeds
                        for (let i = 0; i < embed.length; i++) {
                            var description = embed[i].description
                            if (description.includes('⏣')) {
                                var coinsraw = description.toString().match(regex);
                                if (coinsraw) {

                                    coins = parseFloat(coinsraw.toString().replace(/\D/g, "")) + coins
                                }
                            }
                        }
                    } else { // Plain Message
                        if (Message.content.includes('⏣')) {
                            var coinsraw = Message.content
                            coinsraw = coinsraw.toString().match(regex)
                            if (coinsraw) {
                                coins = parseFloat(coinsraw.toString().replace(/\D/g, "")) + coins
                            }
                            // wallet = wallet.toString();
                            // console.log(wallet);
                            // var regex = new RegExp(`(?<=\\*\\* Wallet\\*\\*: ⏣)(.*?)(?=\\s *\\n)`, 'g')
                            // wallet = wallet.match(regex)
                            // console.log("wallet: " + wallet)
                        }
                    }
                }
            }
        }
    });

    client.on('messageUpdate', (oldMessage, newMessage) => {
        grind.update();
        var grind2 = require("./modules/grind.js");
        var sentid = grind2.sentid

        if (newMessage.guild && newMessage.guild.id == server) {
            if (newMessage.author.id === '270904126974590976') {
                if (newMessage.type === 'REPLY' && newMessage.reference.messageId === sentid) {
                    // client.channels.cache.get(id).messages.fetch(msg.id).then(message => {
                    //     if (message.components[0]) {
                    //     }
                    // });

                    let embed = newMessage.embeds
                    for (let i = 0; i < embed.length; i++) {
                        var description = embed[i].description
                        if (description.includes('⏣')) {
                            var coinsraw = description.toString().match(regex);
                            if (coinsraw) {

                                coins = parseFloat(coinsraw.toString().replace(/\D/g, "")) + coins
                            }
                        }
                    }
                }
            }
        }

    });

    function randnum2(min, max) {
        return new Promise((resolve, reject) => resolve(Math.floor(min + Math.random() * (max - min + 1))));
    }

    function randnum(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1))
    }

    async function timeformat() {
        var date = new Date;
        year = date.getUTCFullYear();
        month = date.getUTCMonth() + 1;
        day = date.getUTCDate();
        hour = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        hour = ((hour + 11) % 12 + 1);
        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        day = day < 10 ? "0" + day : day
        return tynt.White(`[${hour}:${minutes}:${seconds}]`);
    }

    async function timerstart() {
        starttime = new Date();
    }

    async function timerend(val) {
        endtime = new Date();
        hms = endtime - starttime;
        if (val) {
            await convert(hms())
        }
    }

    async function convert(timeDiff) {
        timeDiff /= 1000;
        hms = new Date(hms * 1000).toISOString().substring(11, 19)
        hms = hms.toString().replace(/\s/g, "");
        return hms
    }

})();
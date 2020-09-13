
const express = require("express");
const app = express();



app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = "0"
const developers = "696483121977098262"


///bot حاله

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");

  client.user.setActivity(`0help | المبرمجين العرب`, { type: "PLAYING" });
});







  client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```عايز تمسح كام رسالة يا عم```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n تم مسح هذا العدد من الرسائل: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
}); // حقوق عبود

client.on("message", message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
if(message.content.startsWith(prefix + "قوانين")) {
let embed = new Discord.RichEmbed() 
.setTitle(`***قوانين سيرفر المبرمجين العرب***`)
.setAuthor(client.user.username,client.user.avatarURL)
.setDescription(`**1 - ممنوع السب

2 - ممنوع الحديث عن الدين او مفاوضات دينيه

3 - ممنوع التحدث عن السياسه 

4 - ممنوع الصور الاباحيه او اى شي مخل بالادب

5 - ممنوع نشر صور من مواقع التواصل الاجتماعى بحقوق ملكيه

6- ممنوع طلب الرتبه **`)
.setColor("RANDOM") 
message.channel.send(embed) 
} 
}) // حقوق عبود



 

 
client.on("message", message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
if(message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed() 
.setAuthor(message.author.tag, message.author.avatarURL) 
.setDescription(`

*Codes BY @FILES.COM#1498*

*كود مسح الشات  0help-clear*

*كود الخط 0help-line*

*كود القوانين  0help-rules*

*كود قفل و فتح الشات  0help-lock*

*كود معلومات الحساب  0help-user*

*كود معلومات السيرفر  0help-server*
`)
.setColor("RANDOM") 
message.channel.send(embed) 
} 
})


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-clear") {




message.author.sendMessage(`الوصف : كود مسح الشات
 
 تحميل الكود : https://pastebin.com/pp50DpPc
 
 BY : @FILES.COM#1498`);
  }
});



client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-line") {




message.author.sendMessage(`الوصف : كود الخط
 
 تحميل الكود : https://pastebin.com/5GM3dYyA
 
 BY : @FILES.COM#1498`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-rules") {




message.author.sendMessage(`الوصف : كود القوانين
 
 تحميل الكود : https://pastebin.com/PuVwbR5R
 
 BY : @FILES.COM#1498`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-lock") {




message.author.sendMessage(`الوصف : كود قفل و فتح الشات
 
 تحميل الكود : https://pastebin.com/gfMHxEgt
 
 BY : @FILES.COM#1498`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-user") {




message.author.sendMessage(`الوصف : كود معلومات الحساب
 
 تحميل الكود : https://pastebin.com/atSJaQrL
 
 BY : @FILES.COM#1498`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-server") {




message.author.sendMessage(`الوصف : كود معلومات السيرفر
 
 تحميل الكود : https://pastebin.com/fdweLKXv
 
 BY : @FILES.COM#1498`);

  }
});


client.login(process.env.TOKEN);

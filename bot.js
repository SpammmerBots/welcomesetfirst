const Discord = require('discord.js');
const tpoints = {};
const vpoints = {};
const jimp = require("jimp");
const prefix = "?";
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});







client.on('message', message => {
     if (message.content === "???????invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **:small_orange_diamond: Link Server Support︾**" , "  **https://discord.gg/4uUcper**")
  .addField(" **:small_blue_diamond: Link First Bot︾ **" , "  **https://discordapp.com/api/oauth2/authorize?client_id=519242522602635295&permissions&permissions=2146958839&scope=bot**")     
     
  message.channel.sendEmbed(embed);
    }
});////////////////










const sWlc = {}
const premium = ['519248442334380033']
client.on('message', message => {
var prefix = "?";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['PicsArt_07-17-07.58.02 (1).png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 245, 80);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });
/////////////////////////////////dm bot
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("520189314211250196").send({embed:iiMo});
    }
});

////////////credits 
 const cool = [];
  client.on('message',async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  
    const args = message.content.split(' ');
    const credits = require('./credits.json');
    const path = './credits.json';
    const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
    const mentionn = message.mentions.users.first() || client.users.get(args[1]);
    const author = message.author.id;
    const balance = args[2];
    const daily = Math.floor(Math.random() * 350) + 10;
  
    if(!credits[author]) credits[author] = {credits: 50};
    if(!credits[mention.id]) credits[mention.id] = {credits: 50};
    fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
    
    if(message.content.startsWith(prefix + "credit")) {
    if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
  
    if(args[2]) {
      if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
      if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;
      
      message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
          if(c.first().content === number) {
            m.delete();
            message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
            credits[author].credits += (-balance);
            credits[mention.id].credits += (+balance);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
          } else if(c.first().content !== number) {
            m.delete();
            message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
          }
        });
      });
    }
    if(!args[2]) {
      if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
      message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
    } 
    
    }
    if(message.content.startsWith(prefix + "daily")) {
      if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \`${moment().startOf('day').locale('ar-eg').fromNow().replace('منذ', 'بعد')}\` , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
      if(mentionn) {
        var one = Math.floor(Math.random() * 9) + 1;
        var two = Math.floor(Math.random() * 9) + 1;
        var three = Math.floor(Math.random() * 9) + 1;
        var four = Math.floor(Math.random() * 9) + 1;
    
        var number = `${one}${two}${three}${four}`;
  
        message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
          message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
            if(collected.first().content === number) {
              m.delete();
              collected.first().delete();
              credits[mentionn.id].credits += (+daily);
              fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
            message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
            }
            if(collected.first().content !== number) {
              return m.delete();
            }
          });
        });
      } else if(!mentionn) {
        credits[author].credits += (+daily);
        fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
  
        message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
      }
      cool.unshift(message.author.id);
  
      setTimeout(() => {
        cool.shift(message.author.id);
        message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
      }, ms("1d"));
    }
  });

client.login(process.env.BOT_TOKEN);


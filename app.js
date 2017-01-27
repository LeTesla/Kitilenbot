const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  console.log(`Kitilen initilized.`);
});

function doMagic8BallVoodoo() {
    var rand = ['Absolutly.', 'Absolutly not.', 'It is true.', 'Impossible.', 'Of course.', 'I do not think so.', 'It is true.', 'It is not true.', 'I am very undoubtful of that.', 'I am very doubtful of that.', 'Sources point to no.', 'Theories prove it.', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];

    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "calculateadd") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.sendMessage(total).catch(console.error);
  }

  if (command === "say") {
    msg.channel.sendMessage(args.join(" "));
  }

  if (command === "ping") {
    msg.channel.sendMessage('Pong!');
  }

  if (command === "pong") {
    msg.channel.sendMessage("Ping!");
  }

  if (command === "help") {
    msg.channel.sendMessage("It seems you have requested help. Check your DMs.");
    msg.author.sendMessage("Thanks for using the help command, this command will help you know the current commands. c:ping and c:pong are commands used to check if the bot is online. c:say allows you to make the bot say whatever you want it to say. c:calculateadd is an adding calculator. c:8ball is a fun command where you can ask the magic 8 ball a question and it will reply. c:invite makes the bot DM you an invite link to invite the bot to your server. And c:objection, c:holdit and c:takethat are AA commands.")
  }

  if (command === "objection") {
    msg.channel.sendMessage(`http://i.imgur.com/19WEQFO.gif ${args.join(" ")}`);
  }

  if (command === "holdit") {
    msg.channel.sendMessage(`http://i.imgur.com/6kg9dtc.png ${args.join(" ")}`);
  }

  if (command === "takethat") {
    msg.channel.sendMessage(`http://i.imgur.com/S45Dsnb.png ${args.join(" ")}`);
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "8ball") {
    msg.channel.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=269968242984878081&scope=bot&permissions=2146958463")
  }

  if (command === "cointoss") {
    msg.channel.sendMessage(coinToss())
  }

});

bot.login(config.token);

require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const cron = require("node-cron");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  //console.log(readyClient);

  //console.log("client.guilds", client.guilds.cache);
  // const guild = client.guilds.cache.get("1223733341602320438");

  // console.log(client.users.cache);
  // const channel = guild.channels.cache.get("1223733342889836695");
  // channel.send("You message");

  cron.schedule("* * * * *", () => {
    client.users.send(process.env.USER_ID, "TANNNYYAAA");
  });
});

client.on("messageCreate", (message) => {
  // PING PONG Example
  // if (message.content == "ping") {
  //   console.log(message);
  //   message.channel.send("pong!");
  // }
  message.users.send(process.env.USER_ID, "Dude");
});

client.login(process.env.DISCORD_TOKEN);

require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const cron = require("node-cron");
const dayjs = require("dayjs");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);

const firstDayOfApril = dayjs().set("day", 1).set("month", 3).set("year", 2024);
// 92 is April 1
const count = firstDayOfApril.dayOfYear() - 91;

let name = "TAANNNYYYY";
for (i = 0; i <= count; i += 1) {
  name += "A";
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);

  cron.schedule("0 2 * * *", () => {
    client.users.send(process.env.USER_ID, name);
  });
});

client.on(Events.MessageCreate, (message) => {
  if (message.content.includes("PAT")) {
    message.channel.send(name);
  }
});

client.login(process.env.DISCORD_TOKEN);

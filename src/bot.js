require("dotenv").config();

const token = process.env.BOT_TOKEN;

const Discord = require("discord.js");

const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on("message", (msg) => {
//   if (msg.content === "ping") {
//     msg.reply("Pong!");
//   }
// });

client.on("message", async (msg) => {
  if (msg.content.toLowerCase().includes("heart this")) {
    msg.react("❤️");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    await modUser(msg);
  }
});

async function modUser(msg) {
  // Mod user and delete msg
  msg.member.roles.add("783462469410357299");
  await msg.delete();
}

client.login(token);

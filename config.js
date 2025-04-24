//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "263714183261";
global.sudo = process.env.SUDO || "263714183261";
global.owner = process.env.OWNER_NUMBER || "263714183261";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZ3T29GTml2WG9XMS9HOWk5RUZuT3MvQ0c3MVFoc0ZkOFZ0cmFLUlVVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWk0aWtwMTVnV2VHcGMyUFdnNUpqVzFjVHBkQy9hTDI4czZIclBaNVNFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjE0UlUxMG0vTWhyZ0JNS3pnKzBETXBtM25mbW40aklNb3pwNXNpWkVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeGhxVzdHc0lRS09TeUVNMzNZVDV3MkxjNHF3VUpkVlg4ZjdOUGtxckVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BMFExTlFKb1hKVFB2TnQveHhUNVRoSzdsZkI5SDJ0VGx5bDQ4RTVTM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMxTzFhekoraXVtNG5QdUNiOElPZklwZ0QzdmRqTitPV2RRQUdqU21GRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVYenNERkFQbGtxTG93bWh1SklIckZTRFc2bHFFYWNKeFBZQ3NmNzltRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3NERVErWDFaZmpOVzhlNzkySjN0cHh4VExPWHFHVlJIUW0yVVlWcUFSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNXbVpMY0RLNXBPVU4relZPWFErVFlybTJmYUxoQk0vMmhFckVjVE1mcU5udnhIQmprQkNJdmtKQW5ZaXZ0OWFDc1BmWGhINERqVEluUGFnb3VTZ0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IkoyRjE1TmtqTFZrV1Yybk5jWGVmY1BxTFI0dXRNOWxtNGRCdUQ3QU8zb0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBLLXNiOE81UkZDN2FVaktldEJhNXciLCJwaG9uZUlkIjoiOWUxMTNiMTMtYmI0Mi00YzJhLTkwYTgtMzFkNWM1NDk5ZDk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPbnQwc1pVWE8zRzdkbGRBckNzK2t5dUpMST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjN5LzR5U0FnNFdvbEpOamZsSytGWStIOW5jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm1JMlpnR0VMaVNxTUFHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0gyK281ZkwzSTEweWFRRjVwb083bURqUjBqZEJ0eHd4TTI4ZDdOOXdqWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid1RubHh4L0J2VGs5UVNNa3BCYlpIMy90emhRa01pWGo0Q2tENHFTTGxhdWJhcDhiOUJTMG0zTHZjMVNpWVNVLzQ5ZnFseGdxMzhJbnMyUUtKTlpDQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImFVSFlCNEY4UTY3UlVibUQ2Wk9WWmJEYXZXOW4vZmw4MjRUWDVIbm1CYXp1SGtvb2M1RC9HQW1ONElGYjFwdmcxWWl2SmFrOFZ3RFNyMzZZTk94ckNnPT0ifSwibWUiOnsiaWQiOiIyNjM3MTQxODMyNjE6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0hBRE9XIFdBTEtFUiIsImxpZCI6Ijc0NTc0MDg3NjIyNzM5OjE5QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTQxODMyNjE6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGg5dnFPWHk5eU5kTW1rQmVhYUR1NWc0MGRJM1FiY2NNVE52SGV6ZmNJMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1NDg4MTk3LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtoZyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "SHADOW WALKER V2",
  author: process.env.PACK_AUTHER || "Shadow walker v2",
  packname: process.env.PACK_NAME || "SHADOW 𝗠𝗗",
  botname: process.env.BOT_NAME || "SHADOW WLAKER BOT",
  ownername: process.env.OWNER_NAME || "Mandishona Innocent",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

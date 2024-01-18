var axios = require("axios");
// const { headers, token, chatId } = require("./config");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.token, {
  polling: false,
});

const chatId = parseInt(process.env.chatId);

// Initialize the previous response to an empty array
var previousResponse = [
  {
     "RewardName":"ROG Dairy.",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/gain/54ffb91c-ccae-4cb1-ba56-7590f6990bde/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/gain/54ffb91c-ccae-4cb1-ba56-7590f6990bde/",
     "RewardId":774,
     "Description":"<p>Redeem the ROG Exclusive Dairy!</p>",
     "RewardType":3,
     "Status":2,
     "Point":300,
     "Priority":1,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Mug.",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/gain/f517ccf7-75c8-42ab-bf5e-4aa2c601068a/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/gain/f517ccf7-75c8-42ab-bf5e-4aa2c601068a/",
     "RewardId":737,
     "Description":"<p>Redeem the ROG Exclusive Mug!</p>",
     "RewardType":3,
     "Status":2,
     "Point":300,
     "Priority":2,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"World of Warships Holiday Edition",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/gain/71caba78-8e50-4b1b-bb22-7a72912b3c56/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/gain/71caba78-8e50-4b1b-bb22-7a72912b3c56/",
     "RewardId":729,
     "Description":"<p>New and existing players get:</p>\n<p>&bull;The ASUS commemorative flag<br>&bull;3x New Year Sky expendable camouflages<br>&bull;1x Santa's Gift container, which can drop one of many Premium ships</p>\n<p>Players who are new to World of Warships get additional BONUS items:</p>\n<p>&bull; American Tier II Premium cruiser Albany with a Port slot and 6-skill-point Commander<br>&bull;7 days of Warships Premium Account<br>&bull;300 Doubloons<br>&bull;1,500,000 Credits<br>&bull;8x \"Credits +40%\" expendable economic bonuses<br>&bull;8x \"Ship XP +200%\" expendable economic bonuses<br>&bull;8x \"Commander XP +200%\" expendable economic bonuses<br>&bull;8x \"Free XP +600%\" expendable economic bonuses</p>\n<p><br>Redeem your code here:</p>\n<p><a href=\"https://redir.wargaming.net/xyf01rx3/?&amp;pub_id=INSERT_YOUR_CODE_HERE\" target=\"_blank\" rel=\"noopener\">https://redir.wargaming.net/xyf01rx3/?&amp;pub_id=INSERT_YOUR_CODE_HERE</a></p>\n<p>*Promo code is only valid until January 21, 2024.</p>",
     "RewardType":2,
     "Status":1,
     "Point":100,
     "Priority":3,
     "ButtonWords":"100 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo Pinball animated wallpaper 3840x2160",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/ff3a269e-c84a-4754-a74b-074b63915323/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/ff3a269e-c84a-4754-a74b-074b63915323/",
     "RewardId":679,
     "Description":"<p><span style=\"font-size: 12.0pt; font-family: 'Calibri',sans-serif; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\">Elite logo animated wallpaper </span><span style=\"font-size: 12.0pt; font-family: 'PMingLiU',serif; mso-bidi-font-family: Calibri; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\">｜</span><span style=\"font-size: 12.0pt; font-family: 'Calibri',sans-serif; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\"> 3840x2160</span></p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":4,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper｜ROG Pinball｜1080x1920",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/3f6a78e1-6203-48bd-8dcc-df0399e71fc2/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/3f6a78e1-6203-48bd-8dcc-df0399e71fc2/",
     "RewardId":674,
     "Description":"<p>ROG Animated Wallpaper｜ROG Pinball｜1080x1920</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":5,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo Pinball animated wallpaper 1920x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/5c09fac7-baf2-4228-a5d4-e02365cfb8cb/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/5c09fac7-baf2-4228-a5d4-e02365cfb8cb/",
     "RewardId":678,
     "Description":"<p><span style=\"font-size: 12.0pt; font-family: 'Calibri',sans-serif; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\">Elite logo Pinball animated wallpaper&nbsp;</span><span style=\"font-size: 12.0pt; font-family: 'PMingLiU',serif; mso-bidi-font-family: Calibri; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\">｜</span><span style=\"font-size: 12.0pt; font-family: 'Calibri',sans-serif; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA;\"> 1920x1080 </span></p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":6,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 1920x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/f2d8d1cb-19f6-49f9-967b-02686ab5a0d4/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/f2d8d1cb-19f6-49f9-967b-02686ab5a0d4/",
     "RewardId":566,
     "Description":"<p>Elite logo animated wallpaper ｜ 1920x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":7,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 1080x1920 (mobile)",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/fad027ff-371d-4f66-81d2-9f6716448409/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/fad027ff-371d-4f66-81d2-9f6716448409/",
     "RewardId":579,
     "Description":"<p>Elite logo animated wallpaper ｜ 1080x1920 (mobile)</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":8,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 3840x2160",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/2d1c52f8-64c4-43e0-87f7-3d35b20c1fac/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/2d1c52f8-64c4-43e0-87f7-3d35b20c1fac/",
     "RewardId":592,
     "Description":"<p>Elite logo animated wallpaper ｜ 3840x2160</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":9,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 3440x1440",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/99c62476-2776-4b07-bb24-2a95f90d6c27/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/99c62476-2776-4b07-bb24-2a95f90d6c27/",
     "RewardId":605,
     "Description":"<p>Elite logo animated wallpaper ｜ 3440x1440</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":10,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/49e1a4a5-ce3a-4c8a-8c92-1d0c165d50ea/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/49e1a4a5-ce3a-4c8a-8c92-1d0c165d50ea/",
     "RewardId":618,
     "Description":"<p>Elite logo animated wallpaper ｜ 2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":11,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"Elite logo animated wallpaper ｜ 2048x2732",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/e352e726-0be9-482c-8d12-5748b2c15ccd/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/e352e726-0be9-482c-8d12-5748b2c15ccd/",
     "RewardId":631,
     "Description":"<p>Elite logo animated wallpaper ｜ 2048x2732</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":12,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Mechatronics_2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/656a687a-f323-428e-aff2-72145d8eb78a/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/656a687a-f323-428e-aff2-72145d8eb78a/",
     "RewardId":411,
     "Description":"<p>ROG Animated Wallpaper_ROG Mechatronics_2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":13,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Mechatronics_3440x1440",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/436d6748-8738-4224-b9ca-a2c05f5d0982/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/436d6748-8738-4224-b9ca-a2c05f5d0982/",
     "RewardId":423,
     "Description":"<p>ROG Animated Wallpaper_ROG Mechatronics_3440x1440</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":14,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Mechatronics_4K",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/ede49829-cb18-4f8f-b3a2-1435326b9396/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/ede49829-cb18-4f8f-b3a2-1435326b9396/",
     "RewardId":397,
     "Description":"<p>ROG Animated Wallpaper_ROG Mechatronics_4K</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":15,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Mechatronics_Full HD",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/a07a1adb-83f9-4859-a068-878dfd8be331/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/a07a1adb-83f9-4859-a068-878dfd8be331/",
     "RewardId":384,
     "Description":"<p>ROG Animated Wallpaper_ROG Mechatronics_Full HD</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":16,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Prism_4K",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/6a1d15c9-c881-49b8-b872-90c058ff8224/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/6a1d15c9-c881-49b8-b872-90c058ff8224/",
     "RewardId":371,
     "Description":"<p>ROG Animated Wallpaper_ROG Prism_4K</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":17,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_ROG Prism_Full HD",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/ebd1f926-9184-4b3a-8429-f1ed80197ad2/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/ebd1f926-9184-4b3a-8429-f1ed80197ad2/",
     "RewardId":358,
     "Description":"<p>ROG Animated Wallpaper_ROG Prism_Full HD</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":18,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Code_4K",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/7a23febc-d28b-4696-a1f2-ecf34fe36c92/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/7a23febc-d28b-4696-a1f2-ecf34fe36c92/",
     "RewardId":316,
     "Description":"<p>ROG Animated Wallpaper_Code_4K</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":19,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Code_2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/d37a298d-527a-49c6-96e2-11b6c2e7c08a/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/d37a298d-527a-49c6-96e2-11b6c2e7c08a/",
     "RewardId":315,
     "Description":"<p>ROG Animated Wallpaper_Code_2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":20,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Code_3440x1440",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/e2cc86ff-b51e-47b4-a314-d3875689998e/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/e2cc86ff-b51e-47b4-a314-d3875689998e/",
     "RewardId":314,
     "Description":"<p>ROG Animated Wallpaper_Code_3440x1440</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":21,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Code_FullHD",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/819d6cc7-7d6f-49a0-b64b-7715eef7dcbc/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/819d6cc7-7d6f-49a0-b64b-7715eef7dcbc/",
     "RewardId":313,
     "Description":"<p>ROG Animated Wallpaper_Code_FullHD</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":22,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Mechanize_ 2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/3df3a131-e0d2-482a-8bd8-b25c3a21e6cf/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/3df3a131-e0d2-482a-8bd8-b25c3a21e6cf/",
     "RewardId":312,
     "Description":"<p>ROG Animated Wallpaper_Mechanize_ 2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":23,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Mechanize_4K",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/77e16637-92e5-4688-979d-c3ee0f85f4c3/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/77e16637-92e5-4688-979d-c3ee0f85f4c3/",
     "RewardId":310,
     "Description":"<p>ROG Animated Wallpaper_Mechanize_4K</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":24,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Mechanize_FullHD",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/9294f293-688e-49c3-9c3d-ce80a338907c/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/9294f293-688e-49c3-9c3d-ce80a338907c/",
     "RewardId":309,
     "Description":"<p>ROG Animated Wallpaper_Mechanize_FullHD</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":25,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Psychedelic_1920x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/a8c34b60-fa21-4bbc-b819-2a8dd8108126/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/a8c34b60-fa21-4bbc-b819-2a8dd8108126/",
     "RewardId":308,
     "Description":"<p>ROG Animated Wallpaper_Psychedelic_1920x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":26,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Psychedelic_2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/08c85bee-1832-4098-b708-520faa454bff/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/08c85bee-1832-4098-b708-520faa454bff/",
     "RewardId":307,
     "Description":"<p>ROG Animated Wallpaper_Psychedelic_2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":27,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Psychedelic_3440x1440",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/994a37a7-c597-466a-a367-80d64f15f0ee/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/994a37a7-c597-466a-a367-80d64f15f0ee/",
     "RewardId":305,
     "Description":"<p>ROG Animated Wallpaper_Psychedelic_3440x1440</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":28,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Psychedelic_3840x2160",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/3af7d85b-e4f8-49b2-ae1e-6ad5d3f6d8ed/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/3af7d85b-e4f8-49b2-ae1e-6ad5d3f6d8ed/",
     "RewardId":304,
     "Description":"<p>ROG Animated Wallpaper_Psychedelic_3840x2160</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":29,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Retro_4K",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/5545a4f4-43c9-4037-bb37-8303acd36d2a/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/5545a4f4-43c9-4037-bb37-8303acd36d2a/",
     "RewardId":303,
     "Description":"<p>ROG Animated Wallpaper_Retro_4K</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":30,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Retro_2560x1080",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/3b0d7179-b1b4-4924-89d8-bca02f5e581b/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/3b0d7179-b1b4-4924-89d8-bca02f5e581b/",
     "RewardId":302,
     "Description":"<p>ROG Animated Wallpaper_Retro_2560x1080</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":31,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Retro_3440x1440",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/83eed09a-0b11-4d5c-bc17-65707083e36c/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/83eed09a-0b11-4d5c-bc17-65707083e36c/",
     "RewardId":301,
     "Description":"<p>ROG Animated Wallpaper_Retro_3440x1440</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":32,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROG Animated Wallpaper_Retro_Full HD",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/71c93f19-7178-4c43-b841-09af08e54825/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/71c93f19-7178-4c43-b841-09af08e54825/",
     "RewardId":300,
     "Description":"<p>ROG Animated Wallpaper_Retro_Full HD</p>",
     "RewardType":1,
     "Status":1,
     "Point":300,
     "Priority":33,
     "ButtonWords":"300 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROGxEVANGELION Wallpaper_4K,1920x1080,2560x1440,3440x1440_A",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/c2ca0e0a-d718-4074-a40b-87188a2005d1/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/c2ca0e0a-d718-4074-a40b-87188a2005d1/",
     "RewardId":299,
     "Description":"<p>ROGxEVANGELION Wallpaper_A (including wallpapers in 4 different sizes )</p>",
     "RewardType":1,
     "Status":1,
     "Point":200,
     "Priority":34,
     "ButtonWords":"200 POINTS",
     "TipMessage":"",
     "TipTitle":""
  },
  {
     "RewardName":"ROGxEVANGELION Wallpaper_4K,1920x1080,2560x1440,3440x1440_B",
     "MediaIdPC":"https://dlcdnwebimgs.asus.com/api/gain/ce163019-b403-4edb-8b06-214e492619d0/",
     "MediaIdMobile":"https://dlcdnwebimgs.asus.com/api/gain/ce163019-b403-4edb-8b06-214e492619d0/",
     "RewardId":298,
     "Description":"<p>ROGxEVANGELION Wallpaper_B (including wallpapers in 4 different sizes )</p>",
     "RewardType":1,
     "Status":1,
     "Point":200,
     "Priority":35,
     "ButtonWords":"200 POINTS",
     "TipMessage":"",
     "TipTitle":""
  }
];

function pollApi() {
  var config = {
    method: "get",
    url: "https://rog.asus.com/elite/api/v2/RewardList?aticket=e87ddc8992a84887ba8e4d09880f7738&WebsiteCode=in&systemCode=rog",
    headers: {
      authority: "rog.asus.com",
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      api_key: "Em3l6i7t2qe",
      cookie:
        'token=7hth8ofsazwn761; _gcl_au=1.1.5027152.1703906419; BVBRANDID=ef7babbe-4ff1-4fb4-863a-073a9ed9c650; BVBRANDSID=725cca94-3963-4eb1-ae55-976f9d1cdbae; _ga=GA1.1.1554931635.1703906424; _fbp=fb.1.1703906426004.883974154; _ce.irv=new; cebs=1; _clck=6nehwb%7C2%7Cfhz%7C0%7C1459; _ce.clock_event=1; _ce.clock_data=80%2C152.58.230.236%2C1%2C4be5075824dfc9ebfcea962f3188097c; aticket=e87ddc8992a84887ba8e4d09880f7738; APREFORZ=2E7B8B5C-ED8C-4765-AA24-C0A04F2CEA711A7H; RT="z=1&dm=rog.asus.com&si=0e76caad-ce07-406a-a80c-d57cbc21fa40&ss=lqrhvz3j&sl=2&tt=7wv&bcn=%2F%2F684dd326.akstat.io%2F&obo=1"; cto_bundle=GTe4kV9NanhwRmRQdnRTcklaVktuT3FoUm1ySTRUZDJPdkowak9RQWdRMCUyQkhNR0IzTFd1QWFBT1VHYTElMkY1dDkxakJNSGNuc1ZJVExTdlhCRVZITCUyQkUlMkYlMkZxMUZpeXpUY01rYllQZ3dQdk81anhiSCUyRlhqWDI5Sk1qcUJMTXdzVW9HblZZM2hIeCUyRndRWWwyQWUzRVVkMnh6MmpBQSUzRCUzRA; _uetsid=5febf410a6c211ee977c038f38242040; _uetvid=5febde60a6c211ee8a83e3bf0a26db44; cebsp_=4; _clsk=16j952i%7C1703906470219%7C4%7C1%7Cx.clarity.ms%2Fcollect; _ce.s=v~1a5f36c98829ae2e23d112e9be3aca348b4f7088~lcw~1703906470467~lva~1703906426259~vpv~0~v11.cs~154890~v11.s~63b72fc0-a6c2-11ee-a8de-892a9691e25c~v11.sla~1703906470474~gtrk.la~lqrhx23m~lcw~1703906470474; _ga_T0D8JMNRV2=GS1.1.1703906424.1.1.1703906470.14.0.0; _ga_BP9E82TF15=GS1.1.1703906424.1.1.1703906470.14.0.0',
      referer: "https://rog.asus.com/in/elite/reward/all",
      "sec-ch-ua":
        '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      token: process.env.auth,
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  };

  axios(config)
    .then(function (response) {
      // Check for differences in the Obj array
      if (!arraysEqual(response.data.Result.Obj, previousResponse)) {
        console.log("Alert: Changes detected in Obj array!");
        bot.sendMessage(
          chatId,
          `Alert: Changes detected in Obj array! :  ${JSON.stringify(
            response.data.Result.Obj[0]
          )}`
        );
        // Log the new Obj array
        console.log(JSON.stringify(response.data.Result.Obj));
        // Update the previous response for the next comparison
        previousResponse = response.data.Result.Obj;
      } else {
        console.log("No changes in Obj array.");
      }
    })
    .catch(function (error) {
      bot.sendMessage(chatId, `Error occurred ${error?.message}`);

      console.log("Error:", error.message);
    });
}

// Compare two arrays for equality
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) return false;
  }
  return true;
}

// Poll the API every 10 minutes (600,000 milliseconds)
pollApi();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
setInterval(pollApi, 600000);

var axios = require("axios");
// const { headers, token, chatId } = require("./config");
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.token, {
  polling: false,
});

const chatId = parseInt(process.env.chatId);

// Initialize the previous response to an empty array
var previousResponse = [];

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
setInterval(pollApi, 600000);

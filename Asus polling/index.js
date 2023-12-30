var axios = require("axios");
// const { headers, token, chatId } = require("./config");
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.token, {
  polling: false,
});

const chatId = parseInt(process.env.chatId)

// Initialize the previous response to an empty array
var previousResponse = [];

function pollApi() {
  var config = {
    method: "get",
    url: "https://rog.asus.com/elite/api/v2/RewardList?aticket=e87ddc8992a84887ba8e4d09880f7738&WebsiteCode=in&systemCode=rog",
    headers: JSON.parse(process.env.headers),
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
      bot.sendMessage(
        chatId,
        `Error occurred ${error?.message}`
      );

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

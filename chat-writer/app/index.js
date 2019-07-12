require('dotenv').config();
const ComfyJS = require('comfy.js');

ComfyJS.onCommand = (user, command, message, flags) => {
  if (command === 'number1') {
    ComfyJS.Say(
      `${user} Number 1, I order you to take a Number 2, and also ${message}`
    );
  }
  if (command === 'hello') {
    ComfyJS.Say(`It's me..., ${user}`);
  }
  if (command === 'wut' || command === 'what') {
    ComfyJS.Say(`Say what again. I dare you. I double dare you.`);
  }
  if (command === 'wallace') {
    ComfyJS.Say(`${user}... What does Marsallace Wallace look like?`);
  }
};

ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH, 'roberttables', true);

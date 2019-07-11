const ComfyJS = require('comfy.js');

ComfyJS.onCommand = (user, command, message, flags) => {
  if (command === 'number1') {
    console.log(
      `${user} Number 1, I order you to take a Number 2, and also ${message}`
    );
  }
  if (command === 'hello') {
    console.log(`It's me..., ${user}`);
  }
  if (command === 'wut' || command === 'what') {
    console.log(`Say what again. I dare you. I double dare you.`);
  }
  if (command === 'wallace') {
    console.log(`${user}... What does Marsallace Wallace look like?`);
  }
};

ComfyJS.Init('roberttables');

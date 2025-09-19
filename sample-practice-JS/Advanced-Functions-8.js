// Write an IIFE that prompts the user for their name and immediately outputs a greeting message.
(function () {
    const prompt = require("prompt-sync")(); // panggil prompt-sync
    const userName = prompt("What is your name? ");
    console.log(`Hello, ${userName}!`);
})();

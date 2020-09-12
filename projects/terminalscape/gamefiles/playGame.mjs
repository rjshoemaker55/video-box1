const colors = require('colors');
const inquirer = require('inquirer');
const mongoose = require('mongoose');
const start = require('../app.mjs');
const train = require('./training');
const topDisplay = require('./displays/topDisplay.mjs');

console.log(`Start playGame.js: ${JSON.stringify(start)}`);

const monstersDB = require('./data/monsters.json');
const User = require('./models/User');

let user;

const playGame = loggedInUser => {
  user = loggedInUser;
  console.log('Logged in!');
  console.log('Loading game...'.white.bold);
  setTimeout(() => mainScreen(), 3000);
};

const mainScreen = () => {
  mainDisplay();
  mainDisplayPrompt();
};

const mainDisplay = () => {
  console.clear();
  console.log('');
  console.log('TerminalScape'.rainbow.bold);
  console.log('');
  console.log(user.username.yellow);
  console.log('========================');
  console.log('Player Stats:'.white.bold);
  console.log('------------------------');
  console.log(`Combat Level: ${user.cbtlevel}`);
  console.log('');
  console.log(`Strength Level: ${user.strlevel}`);
  console.log(`Defence Level: ${user.deflevel}`);
  console.log(`Range Level: ${user.rnglevel}`);
  console.log(`Magic Level: ${user.mglevel}`);
  console.log('------------------------');
  console.log('');
  console.log('Inventory:'.white.bold);
  console.log('------------------------');
  user.inventory.forEach(item => {
    console.log(`${item.name}: ${item.quantity}`);
  });
  if (user.inventory.length === 0) {
    console.log('Inventory empty!');
  }
  console.log('------------------------');
  console.log('');
  console.log('========================');
  console.log('');
  return;
};

const mainDisplayPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'mainprompt',
        message: 'What would you like to do?',
        choices: ['Train', 'Skilling', 'Shop', 'Bosses', 'PK', 'Log Out']
      }
    ])
    .then(answer => {
      switch (answer.mainprompt) {
        case 'Train':
          topDisplay(user);
          train(user);
          break;
        case 'Skilling':
          skilling();
          break;
        case 'Shop':
          shop();
          break;
        case 'Bosses':
          bosses();
          break;
        case 'PK':
          pk();
          break;
        case 'Log Out':
          start();
          break;
      }
    });
  return;
};

module.exports = playGame;

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const inquirer = require('inquirer');
const colors = require('colors');

const User = require('./gamefiles/models/User');
const init = require('./gamefiles/server');

import playGame from './gamefiles/playGame';

const start = async () => {
  await init();
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'startmenu',
        message: 'Choose one: ',
        choices: ['Login', 'Register']
      }
    ])
    .then(answer => {
      if (answer.startmenu === 'Login') {
        return login();
      } else {
        return register();
      }
    });
};

const login = () => {
  console.log('');
  console.log('TerminalScape Login'.rainbow.bold);
  console.log('');
  inquirer
    .prompt([
      {
        name: 'loginusername',
        message: 'Username:'
      },
      {
        name: 'loginpassword',
        message: 'Password:'
      }
    ])
    .then(async answers => {
      await User.findOne({ username: answers.loginusername })
        .then(user => {
          if (!user) {
            console.log('User does not exist!'.bgRed.white.bold);
            console.log('\x1b[0m');
            return login();
          }

          if (user.password !== answers.loginpassword) {
            console.log('\x1b[31m', 'Incorrect password!'.bgRed.white.bold);
            console.log('\x1b[0m');
            return login();
          }

          return playGame(user);
        })
        .catch(err => {
          console.log(err);
        });
    });
};

const register = async () => {
  console.log('');
  console.log('Welcome to TerminalScape!'.rainbow.bold);
  console.log('');
  await inquirer
    .prompt([
      {
        name: 'newusername',
        message: 'Username:'
      },
      {
        name: 'newpassword',
        message: 'Password'
      }
    ])
    .then(async answers => {
      const { newusername, newpassword } = answers;

      await User.findOne({
        username: newusername
      }).then(user => {
        if (user) {
          console.log('User already exists!'.bgRed.white.bold);
          return register();
        }
      });

      const newUser = new User({
        username: newusername,
        password: newpassword
      });

      await newUser.save();

      console.log('Account created!'.bold.white);
      console.log('Returning to login screen...');

      setTimeout(() => {
        login();
      }, 3000);
    });
};

start();

module.exports = start;

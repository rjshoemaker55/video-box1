const topDisplay = user => {
  console.clear();
  console.log('');
  console.log('TerminalScape'.rainbow.bold);
  console.log('');
  console.log(`${user.username}`);
  console.log(`Combat Level: ${user.cbtlevel}`);
  console.log('------------------------');
  return;
};

module.exports = topDisplay;

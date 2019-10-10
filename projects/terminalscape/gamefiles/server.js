const mongoose = require('mongoose');
const db = 'mongodb+srv://rj123:rj123@cluster0-rhonj.mongodb.net/test?retryWrites=true&w=majority'

const init = async () => {
  await console.log('Connecting to TerminalScape...');
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(() => console.log('Connected successfully!'))
    .catch((err) => console.log('Unable to connect: ' + err))
};

module.exports = init;
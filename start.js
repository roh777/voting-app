require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const app = require('./app');
app.set('port', process.env.PORT || 7777);


mongoose.connect(process.env.DBURL);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
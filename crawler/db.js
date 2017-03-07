var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/hr-mvp-Solutions');
mongoose.connect('mongodb://localhost/test1');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb connected')
});


var solutionsSchema = mongoose.Schema({
    urlToGet: String,
    rawJSON: String,
    answers: Array
});

const Solutions = mongoose.model('Solutions', solutionsSchema);

const models = {
  Solutions
}

module.exports.db = db
module.exports.models = models
// var kitty = new Solutions({ urlToGet: 'https://discuss.leetcode.com/api/category/1' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });


// show databases;

// use database;

// show collections;

// db.solutions.find()
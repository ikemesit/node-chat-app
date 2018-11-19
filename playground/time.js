// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());
const moment = require('moment');

const date = moment();
// date.add(10000, 'year');
console.log(date.format('h:mm a'));

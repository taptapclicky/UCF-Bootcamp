// TODO: What are we importing?
// standard package 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// log.txt is a text file
// proccess.argv is targeting the secocond element after inputing node index.js
// apendfile is adding the text 
//err is running when code fails 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // the operator below will throw out err if unrecongnized and will throw out commit logged if it meets the conditions
  err ? console.error(err) : console.log('Commit logged!')
);

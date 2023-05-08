const inquirer = require('inquirer')
const fs = require('fs')

inquirer
 .prompt([
{
    type: 'input',
    name: 'name',
    message: 'what is your name?',
},
{
    type: 'input',
    name:'Location',
    message: 'Where do you live?',
},
{
    type: 'input',
    name:'Bio',
    message: 'Tell me about yourself',
},
{
    type: 'link',
    name:'Linkedn',
    message:'Enter Linkedn URL',
},
{
    type: 'URL',
    name:'Github',
    message: 'Enter Github URL',
}

])

fs.readFile('index.html', 'utf8', (error, ) =>
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

 fs.writeFile('index.html', process.argv[2], (err) =>
   err ? console.error(err) : console.log('Success!')
 ); 

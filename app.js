// // link file system module
// const fs = require('fs');

// link inquirer module
const inquirer = require('inquirer');

// // import functions from src file
// const generatePage = require('./src/page-template.js');


// // create an index file building the html using a function and console input args
// const pageHTML = generatePage(name, github);
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type:'input',
        name:'name',
        message:'What is your name?'
        }
    ])
    .then(answers => {
        console.log(answers);
    });
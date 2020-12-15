// link file system module
const fs = require('fs');

// import functions from src file
const generatePage = require('./src/page-template.js');

// gather input arguments from console
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


// create an index file building the html using a function and console input args
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
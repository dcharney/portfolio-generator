// FUNCTION recieves input args and builds html base as a string
// IN userName = string 
// IN githubName = string
const generatePage = ( userName, githubName ) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${userName}</h1>
      <h2><a href="https://github.com/${githubName}">Github</a></h2>
    </body>
    </html>
    `;
};

// make function callable
module.exports = generatePage;
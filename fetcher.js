
const request = require('request');
const fs = require('fs')
const args = process.argv;

let url = args[2];
let fileLocation = args[3];

// let url = 'https://www.example.edu'
// let fileLocation = '/Users/caitohenry/Lighthouse/w2/d3-net/page-fetcher/index.html'

request(url, (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(fileLocation, body, err => {
     if (err) {
        console.error(`write file returned an ${err}`)
      return
      }
      console.log(`Downloaded ${body.length} bytes and saved to ${fileLocation}`);
  });

});
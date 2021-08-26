// const request = require('request');
// const fs = require('fs')
// const http = require('http');
// const https = require('https')
// const port = 3000;



// const options = {
//   hostname: 'localhost',
//   port: port,
//   path: '/Users/caitohenry/Lighthouse/w2/d3-net/page-fetcher/index.html',
//   method: 'GET'
// }

// //make a connection to the server:
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   let data = '';
//   req.on('data', chunk => {
//     console.log('data is being chunked');
//     data += chunk;
//   })
//   req.on('end', res => {
//     console.log('file done');
//     fs.writeFile(options, res, err);
//   // fs.writeFile(data);
//   })
// })

// server.listen(port, () => {
//   console.log(`server running at port ${port}`)
// });

// //make http request:
// //res = response

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d);
//     fs.writeFile(options, d, err);
//   })
// })
// //if the request returns an error:
// req.on('error', error => {
//   console.error(`request returned an ${error}`)
// })

// req.end();



// //outputted data and write to the file:
// fs.writeFile(options, data, err => {
//   if (err) {
//     console.error(`write file returned an ${err}`)
//     return
//   }
//   console.log(`Downloaded and saved ${size} bytes to ${filePath}, ${response}`);
// });


// req.end()




const request = require('request');
const fs = require('fs')

let url = 'https://www.example.edu'
let fileLocation = '/Users/caitohenry/Lighthouse/w2/d3-net/page-fetcher/index.html'

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
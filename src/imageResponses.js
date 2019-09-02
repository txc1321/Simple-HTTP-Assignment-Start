const fs = require('fs'); // pull in the file system module

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image' });
  response.write(spongegar);
  response.end();
};

module.exports.getSpongegar = getSpongegar;

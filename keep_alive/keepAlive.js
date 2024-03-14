let http = require('http');

function keepAlive() {
  http.createServer((req, res) => {
    res.write("I'm alive");
    res.end();
  }).listen(8080);
}

module.exports = keepAlive;
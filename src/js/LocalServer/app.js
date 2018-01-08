var express = require('express');
var path = require('path');

var app = express();

const PORT = 6434;

app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

function getIP() {
  var os = require('os');
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces)
  for (const ifname of Object.keys(ifaces)) {
    var alias = 0;

    for (const iface of ifaces[ifname]) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        continue;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
        continue;
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
        return iface.address;
      }
      ++alias;
    };
};
}

let server = require('http').createServer(app);

module.exports = app;
module.exports.start = (cb = () => {}) => server.listen(PORT, cb);
module.exports.stop = () => server.close();
module.exports.PORT = PORT;
module.exports.getIP = getIP;
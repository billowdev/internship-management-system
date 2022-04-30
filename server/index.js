const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const dbInternship= require("./models/internship");
const dbThaiAddresses = require("./models/thaiAddresses");

const gradient = require("gradient-string");
const cowsay = require("cowsay");

// server lisening
const PORT = process.env.PORT
dbInternship.sequelize.sync().then(() => {
  dbThaiAddresses.sequelize.sync().then(() => {
    server.listen(PORT, () => {
      runningServe(`SERVE ON PORT ${PORT}`);
    });
  });
});

const runningServe = async (log) => {
  const msg = `INTERNSHIP MANAGEMENT SYSTEM \n ---  ${log} ---`
  console.log(cowsay.say({
    text: gradient.pastel.multiline(msg),
    e: 'o O',
    T: "U"
  }));
};


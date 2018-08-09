const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function (){
  this.munros = [];
};

Munros.prototype.getData = function () {
  const url = "https://munroapi.herokuapp.com/api/munros";
  const request = new Request(url);
  request.get().then((munros) => {
    this.munros = munros;
    PubSub.publish('Munros:munros-list-ready', this.munros);
  })
  .catch((err) => {
    console.error(err);
  });
};


module.exports = Munros;

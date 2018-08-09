const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const SelectView = require('../views/select_view.js');


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
  .then(() => {
    const selectView = new SelectView(this.munros);
    selectView.bindEvents();
  })
  .catch((err) => {
    console.error(err);
  });
};



module.exports = Munros;

const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container){
  this.container = container;
  this.munros = null;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-list-ready', (evt) => {
    this.munros = evt.detail;

    this.render(this.munros);

  });
};

MunrosListView.prototype.render = function (munros) {
  munros.forEach((munro)  => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

module.exports = MunrosListView;

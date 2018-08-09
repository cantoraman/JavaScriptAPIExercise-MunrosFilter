const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container){
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-list-ready', (evt) => {
    this.munros = evt.detail;
    this.render();
  });
};

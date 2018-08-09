const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (container){
  this.container = container;
  this.munros = null;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-list-ready', (evt) => {
    this.container.innerHTML = '';
    this.munros = evt.detail;

    this.render(this.munros);

  });

  PubSub.subscribe('SelectView:change', (evt) => {
    this.container.innerHTML = '';
    const region = evt.detail;

    const filteredMunros = this.filteredMunrosByRegion(region);
    this.render(filteredMunros);
  });
};

MunrosListView.prototype.filteredMunrosByRegion = function (region) {

  const filteredMunros = [];

  this.munros.forEach((munro) => {
    if(munro.region === region){
      filteredMunros.push(munro);
    };
  });

    return filteredMunros;
};

MunrosListView.prototype.render = function (munros) {
  munros.forEach((munro)  => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

module.exports = MunrosListView;

const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro){
  this.munrosContainer = container;
  this.munro = munro;
};


MunroView.prototype.render = function () {

  const mrContainer = document.createElement('div');
  mrContainer.classList.add('munro');

  const name = this.createMunroHeading();
  mrContainer.appendChild(name);

  const munroElements = this.createMunroElements();
  mrContainer.appendChild(munroElements);

  this.munrosContainer.appendChild(mrContainer);



};

MunroView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createMunroElements = function () {
  const munroElements = document.createElement('ul');
  const height = document.createElement('li');
  height.textContent = this.munro.height;
  munroElements.appendChild(height);

  const meaning = document.createElement('li');
  meaning.textContent = this.munro.meaning;
  munroElements.appendChild(meaning);


  const region = document.createElement('li');
  region.textContent = this.munro.region;
  munroElements.appendChild(region);





  return munroElements;
};


module.exports = MunroView;

const PubSub = require('../helpers/pub_sub.js');
const MunroListView = require('./munros_list_view.js');

const SelectView = function(munros){
this.munros = munros;
}

SelectView.prototype.bindEvents = function(){

  this.fillSelections(this.munros);

  const selectionContainer = document.querySelector('#regions');

  selectionContainer.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    PubSub.publish('SelectView:change', selectedRegion);
  });
};

SelectView.prototype.fillSelections = function(munros){
  const selectionContainer = document.querySelector('#regions');
  const filteredRegion = this.filterMunrosForRegions(munros);

  filteredRegion.forEach((region) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region;
    selectionContainer.appendChild(option);
  })
};

SelectView.prototype.filterMunrosForRegions = function (munros) {

  return munros.map(munro => munro.region).filter((region, index, regions) =>
    regions.indexOf(region) == index);
  };





module.exports = SelectView;


//select view constructor


//proto bind events
// munros = munrolistview
// populateSelectionlist




// proto filterregionnames
// get me some region names from munros list



/// proto populateSelectionlist()
// loop
// populate the list with filteredregionnames

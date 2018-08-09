const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
  .then(res => res.json());

  //fetch is a part of dom makes a network request and returns a promise
  //res is response from fetch that is coming from network...>>> res.json returns a promise
};



module.exports = Request;

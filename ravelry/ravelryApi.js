const { ravelryUser, ravelryPass } = require('../config.json');

/* globals RavelryApi */

RavelryApi = function() {
  this.base = 'https://api.ravelry.com';
  this.authUsername = ravelryUser;
  this.authPassword = ravelryPass;
  this.debugFunction = null;
};
  
  
RavelryApi.prototype.get = function(url) {
  const headers = new Headers();
  const debugFunction = this.debugFunction;
  // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
  // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  
  headers.append('Authorization', 'Basic ' + btoa(this.authUsername + ":" + this.authPassword));
    
  return fetch(url, { method: 'GET', headers: headers }).then(function(response) {
    return response.json();
  }).then(function(json) { 
    if (debugFunction) debugFunction(json);
    return json; 
  });
};

RavelryApi.prototype.searchPatterns = function(query) {
  const pageSize = 10;
  const url = this.base + '/patterns/search.json?query=' + query + '&page_size=' + pageSize;
  return url;
};

RavelryApi.prototype.getPattern = function(patternId) {
  const url = this.base + '/patterns.json?ids=' + patternId;
}
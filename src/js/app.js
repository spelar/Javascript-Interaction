'use strict';

require('jquery');
require('underscore');


function DataLoad(url, num){
  this.init(url, num);
}

DataLoad.prototype.init = function(dataUrl, offset){
  var objThis = this;
  $.ajax({
    method: "GET",
    url: dataUrl + offset,
    dataType: "jsonp"
  }).then(function( result ) {
    _.each(result.results, function(itemData){
      objThis.render(itemData);
    })
  });
}

DataLoad.prototype.render = function(data){
  $(".contents-wrap").append(this.itemTempleat(data));
}

DataLoad.prototype.itemTempleat = _.template(
'<tr>'+
  '<td><img src="<%= picture.large %>"/></td>'+
  '<td><%= gender %></td>'+
  '<td><%= name.last %> <%= name.first %></td>'+
  '<td><%= email %></td>'+
  '<td><%= phone %></td>'+
'</tr>');

var randomUserApp = new DataLoad("http://api.randomuser.me/?results=", 3);
console.dir(randomUserApp);

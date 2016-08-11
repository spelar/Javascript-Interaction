'use strict';

var $ = require('jquery');
var _ = require('underscore');


var DataLoad = function(url, num, selector){
  this.element = null;
  this.init(url, num, selector);
};

DataLoad.prototype.init = function(dataUrl, offset, selector){
  this.element = $(selector);
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
};

DataLoad.prototype.render = function(data){
  this.element.append(this.itemTempleat(data));
};

DataLoad.prototype.itemTempleat = _.template(
'<tr>'+
  '<td><img src="<%= picture.large %>"/></td>'+
  '<td><%= gender %></td>'+
  '<td><%= name.last %> <%= name.first %></td>'+
  '<td><%= email %></td>'+
  '<td><%= phone %></td>'+
'</tr>');

var DataLoad2 = function(url, num, selector){
  this.element = null;
  this.init(url, num, selector);
};

_.extend(DataLoad2.prototype, DataLoad.prototype)

DataLoad2.prototype.itemTempleat = _.template(
'<tr>'+
  '<td><img src="<%= picture.large %>"/></td>'+
  '<td style="color:red"><%= gender %></td>'+
  '<td><%= name.last %> <%= name.first %></td>'+
  '<td style="color:red"><%= email %></td>'+
  '<td><%= phone %></td>'+
'</tr>');

$(function(){
  var randomUserApp = new DataLoad("http://api.randomuser.me/?results=", 3, '.contents-wrap');
  var randomUserApp2 = new DataLoad2("http://api.randomuser.me/?results=", 3, '.content');
});

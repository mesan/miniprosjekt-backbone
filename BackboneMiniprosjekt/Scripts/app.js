/// <reference path="_references.js" />

var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    "": "visAksjoner",
    "aksjon/opprett": "opprettAksjon",
    "aksjon/:id": "visAksjon",
    "deltaker" : "visDeltakere",
    "deltaker/:id" : "visDeltaker"
  },

  visAksjoner: function() {
    console.log("i visAksjoner");
    var aksjoner = new app.Aksjoner();
    aksjoner.fetch({
        success: function () {
            var view = new app.AksjonView({ collection: aksjoner });
            view.render();
        }
    });
  },

  visAksjon: function() {
    // TODO: Gjør noe mer fornuftig her :)
    console.log("i visAksjon");
  },

  opprettAksjon: function() {
    var opprettAksjon = new app.OpprettAksjonView();
    opprettAksjon.render();
  },
  
  visDeltakere: function(){
	  console.log("i visDeltakere");
  },
  
  visDeltaker: function(pid){
	  var deltaker = new app.DeltakerModel({id:pid});
	  var view = new app.DeltakerView({model: deltaker});
	  view.render();
  }
});

$(function() {
   "use strict";
    new app.Router();
    Backbone.history.start();
});

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
            var view = new app.AksjonerView({ collection: aksjoner });
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
	  var deltaker = new app.Deltaker({id:1});
	  deltaker.set('navn', 'Ola Normann');
	  var deltaker2 = new app.Deltaker({id:2});
	  deltaker2.set('navn', 'Kari Normann');
	  
	  var col = new app.Deltakere([deltaker, deltaker2]);
	  
	  var view = new app.DeltakereView({collection : col});
	  view.render();
	  
	  
	  console.log(" jaja_:" + col.length);
	  console.log("i visDeltakere");
  },
  //Funker ikke med el, skal finne ut av det
  visDeltaker: function(pid){
	  var deltaker = new app.Deltaker({id:pid});
	  deltaker.set('navn', 'Ola Normann');
	  var view = new app.DeltakerView({model: deltaker});
	  view.render();
  }
});

$(function() {
   "use strict";
    new app.Router();
    Backbone.history.start();
});

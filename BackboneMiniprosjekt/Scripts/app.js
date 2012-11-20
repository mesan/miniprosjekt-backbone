/// <reference path="_references.js" />

var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    "": "visAksjoner",
    "aksjon/:id": "visAksjon"
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
  }
});

$(function() {
   "use strict";
    new app.Router();
    Backbone.history.start();
});

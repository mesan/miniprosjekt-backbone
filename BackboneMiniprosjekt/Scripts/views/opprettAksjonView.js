/// <reference path="../_references.js" />

var app = app || {};

(function() {
  "use strict";

  app.OpprettAksjonView = app.BaseAksjonView.extend({

    el:app.config.container,

    events: {
      'submit form': 'nyAksjon'
    },

    render:function() {
      var template = Handlebars.compile($("#opprett-aksjon-template").html());
      this.$el.html(template);
    },

    nyAksjon:function(e) {
      e.preventDefault();

      var nyAksjon = new app.AksjonModel();
      this.fyllUtAksjonsdetaljer(nyAksjon);

      nyAksjon.save(null, {success: function(model) {
        Backbone.history.navigate(app.config.ruting.aksjonSide + model.id, {trigger: true});
      }});
    }
  });

})();

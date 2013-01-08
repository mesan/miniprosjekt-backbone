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

      var aksjon = new app.AksjonModel();

      $('input').each(function() {
        new app.Felt({el: this, model: aksjon});
      });
    },

    nyAksjon:function(e) {
      e.preventDefault();

      var nyAksjon = new app.AksjonModel();
      $("#js-aksjoner-container > form > input").trigger('blur'); // trigge eventuelle feilmeldinger

      this.fyllUtAksjonsdetaljer(nyAksjon);

      if (nyAksjon.isValid()) {
        nyAksjon.save(null, {success:function(model) {
          Backbone.history.navigate(app.config.ruting.aksjonSide + model.id, {trigger:true});
        }});
      }
    }
  });

})();

/// <reference path="../_references.js" />

var app = app || {};

(function() {
  "use strict";

  app.OpprettAksjonView = Backbone.View.extend({

    el:'#js-aksjoner-container',

    events: {
      'submit form': 'nyAksjon'
    },

    render:function() {
      var template = Handlebars.compile($("#opprett-template").html());
      this.$el.html(template);
    },

    nyAksjon:function(e) {
      e.preventDefault();

      // TODO: Håndtere penere?
      var tillatP2Pmeldinger = false;
      if (this.$el.find('input[name=tillatP2Pmeldinger]').val() === 'on') {
        tillatP2Pmeldinger = true;
      }

      var nyAksjon = new app.AksjonModel({
        navn: this.$el.find('input[name=navn]').val(),
        beskrivelse: this.$el.find('input[name=beskrivelse]').val(),
        url: this.$el.find('input[name=url]').val(),
        tillatP2Pmeldinger: tillatP2Pmeldinger,
        beskrivelse_lang: this.$el.find('input[name=beskrivelse_lang]').val()
      });

      nyAksjon.save(null, {success: function(model) {
        Backbone.history.navigate(app.config.ruting.aksjonSide + model.id);
      }});
    }
  });

})();

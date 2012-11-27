/// <reference path="../_references.js" />

var app = app || {};

(function() {
  "use strict";

  app.OpprettAksjonView = Backbone.View.extend({

    el:'.aksjoner p',

    events: {
      'submit form': 'nyAksjon'
    },

    render:function() {
      var template = Handlebars.compile($("#opprett-template").html());
      this.$el.html(template);
    },

    nyAksjon:function(e) {
      e.preventDefault();
      console.log('Oppretter ny aksjon');
      var aksjonsnavn = this.$el.find('input[name=aksjonsnavn]').val();
      console.log(aksjonsnavn);
    }
  });

})();

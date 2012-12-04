/// <reference path="../_references.js" />
var app = app || {};

(function() {
  "use strict";

  app.AksjonView = app.BaseAksjonView.extend({
    el:app.config.container,

    events: {
      'change .redigerAksjonInput': 'autoLagre'
    },

    render:function() {
      var template = Handlebars.compile($("#rediger-aksjon-template").html());
      this.$el.html(template);

      this.$el.find('input[name=navn]').val(this.model.get('navn'));
      this.$el.find('input[name=beskrivelse]').val(this.model.get('beskrivelse'));
      this.$el.find('input[name=beskrivelse_lang]').val(this.model.get('beskrivelse_lang'));
      this.$el.find('input[name=url]').val(this.model.get('url'));
      if (this.model.get('tillatP2Pmeldinger')) {
        this.$el.find('input[name=tillatP2Pmeldinger]').attr('checked', 'checked')
      }
    },

    autoLagre:function(e) {
      this.fyllUtAksjonsdetaljer(this.model);
      this.model.save(null, {success: function() {
        console.log("autolagret aksjon");
      }});
    }
  });
})();

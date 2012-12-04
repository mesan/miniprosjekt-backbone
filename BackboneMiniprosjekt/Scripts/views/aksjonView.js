/// <reference path="../_references.js" />
var app = app || {};

(function() {
  "use strict";

  app.AksjonView = Backbone.View.extend({
    el:app.config.container,

    render:function(model) {

      var template = Handlebars.compile($("#rediger-aksjon-template").html());
      this.$el.html(template);

      this.$el.find('input[name=navn]').val(model.get('navn'));
      this.$el.find('input[name=beskrivelse]').val(model.get('beskrivelse'));
      this.$el.find('input[name=beskrivelse_lang]').val(model.get('beskrivelse_lang'));
      this.$el.find('input[name=url]').val(model.get('url'));
      if (model.get('tillatP2Pmeldinger')) {
        this.$el.find('input[name=tillatP2Pmeldinger]').attr('checked', 'checked')
      }
    }
  });
})();

/// <reference path="../_references.js" />
var app = app || {};

(function() {
  "use strict";

  app.BaseAksjonView = Backbone.View.extend({
    fyllUtAksjonsdetaljer:function(modell) {
      // TODO: Håndtere penere?
      var tillatP2Pmeldinger = false;
      if (this.$el.find('input[name=tillatP2Pmeldinger]').val() === 'on') {
        tillatP2Pmeldinger = true;
      }
      modell.set('tillatP2Pmeldinger', tillatP2Pmeldinger, {silent: true});
      modell.set('navn', this.$el.find('input[name=navn]').val(), {silent: true});
      modell.set('beskrivelse', this.$el.find('input[name=beskrivelse]').val(), {silent: true});
      modell.set('beskrivelse_lang', this.$el.find('input[name=beskrivelse_lang]').val(), {silent: true});
      modell.set('url', this.$el.find('input[name=url]').val(), {silent: true});
      modell.set('hvor', { // default-verdier inntil videre
        "latitude":0,
        "longitude":0,
        "altitude":0,
        "bearing":0,
        "speed":0
      }, {silent: true});
    }
  });
})();

/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.AksjonView = app.BaseAksjonView.extend({
      //el:app.config.container,
        tagName: "section",

        events: {
            'change .redigerAksjonInput': 'autoLagre',
            'click #startAksjonKnapp': 'toggleAktiv'
        },

        render: function () {
            var template = Handlebars.compile($("#rediger-aksjon-template").html());
            this.$el.html(template);

            this.$el.find('input[name=navn]').val(this.model.get('navn'));
            this.$el.find('input[name=beskrivelse]').val(this.model.get('beskrivelse'));
            this.$el.find('input[name=beskrivelse_lang]').val(this.model.get('beskrivelse_lang'));
            this.$el.find('input[name=url]').val(this.model.get('url'));
            if (this.model.get('tillatP2Pmeldinger')) {
                this.$el.find('input[name=tillatP2Pmeldinger]').attr('checked', 'checked')
            }

            var ikon = this.$el.find('#startAksjonKnapp i');
            if (this.model.get('aktiv')) {
                ikon.removeClass('icon-play').addClass('icon-stop')
            } else {
                ikon.removeClass('icon-stop').addClass('icon-play')
            }
      },

      autoLagre:function() {
        this.fyllUtAksjonsdetaljer(this.model);
        this.model.save(null, {success:function() {
          console.log("autolagret aksjon");
        }});
      },

      toggleAktiv:function() {
        this.fyllUtAksjonsdetaljer(this.model);
        this.model.set('aktiv', !this.model.get('aktiv'));
        var self = this;
        this.model.save(null, {success:function() {
          self.render();
        }});
      }
    });
    return this;
})();

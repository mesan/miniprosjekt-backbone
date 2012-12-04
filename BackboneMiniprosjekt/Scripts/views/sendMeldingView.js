/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.sendMeldingView = Backbone.View.extend({
        el: app.config.container,

        template: Handlebars.compile($("#send-melding-template").html()),

        events: {
            "submit form" : "sendMelding"
        },


        render: function () {

            this.$el.html(this.template);

            return this;
        },


        sendMelding: function(e){
            e.preventDefault();
            var nyMelding = new app.Melding({
                tekst: this.$el.find('textarea[name=melding]').val(),
                // deltakere: ??
            });

            nyMelding.save(null, {success: function(model){
               // Backbone.history.navigate(app.config.ruting.meldingerSide);
            }});
        },

    });

})();

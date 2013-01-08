
/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.MeldingerView = Backbone.View.extend({
        tagName: "section",        
        template: Handlebars.compile($("#meldinger-template").html()),
        render: function () {
            this.$el.empty();
            this.$el.html(this.template(this.collection.toJSON()));
            return this;
        },
        initialize: function () {
            _.bind(this.bindPushOppdatering, this)();
        },

        bindPushOppdatering: function () {
            var self = this,
                oppdateringsFunksjon = function (data) {
                    self.collection.add(JSON.parse(data));
                    self.render();
                };

            app.meldingsOppdaterer.bind(this.collection.aksjonsId, oppdateringsFunksjon);
        }
    });

})();

/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Meldinger = Backbone.Collection.extend({
        model: app.Melding,
        url: function () {
            return app.config.apiBaseUrl + "/meldinger?aksjon=" + this.aksjonsId;
        }
    });
})();

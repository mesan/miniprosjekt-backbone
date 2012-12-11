/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Meldinger = Backbone.Collection.extend({
        model: app.Melding,
        url: app.config.apiBaseUrl,
        updateUrl: function () {
            this.url = this.url + "/meldinger?aksjon=" + this.aksjonsId;
        }
    });
})();

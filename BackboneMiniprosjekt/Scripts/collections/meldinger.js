/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Meldinger = Backbone.Collection.extend({
        model: app.Melding,
        url: app.config.apiBaseUrl + "/meldinger/",
    });
})();
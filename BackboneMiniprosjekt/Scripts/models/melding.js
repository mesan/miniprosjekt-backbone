/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Melding = Backbone.Model.extend({
        defaults: {
            tekst: ''
        },
        urlRoot: app.config.apiBaseUrl + "/meldinger"
    });

})();
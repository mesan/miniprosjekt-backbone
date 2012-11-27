/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Deltaker = Backbone.Model.extend({
        defaults: {
            navn: 'Tom',
        },
        urlRoot: app.config.apiBaseUrl + "/deltakere"
    });

})();
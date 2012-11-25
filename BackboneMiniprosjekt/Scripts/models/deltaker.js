/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.DeltakerModel = Backbone.Model.extend({
        defaults: {
            navn: '',
        },
        urlRoot: app.config.apiBaseUrl + "/deltakere"
    });

})();
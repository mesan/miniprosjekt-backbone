/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Deltakere = Backbone.Collection.extend({
        model: app.DeltakerModel
        //localStorage: new Store("deltakere")
    });
})();
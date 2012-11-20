/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Aksjoner = Backbone.Collection.extend({
        model: app.AksjonModel,
        
    });
})();
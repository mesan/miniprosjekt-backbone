/// <reference path="_references.js" />

var app = app || {};
$(function () {
    "use strict";

    var aksjoner = new app.Aksjoner();
    aksjoner.fetch({
        success: function () {
            var view = new app.AksjonView({ collection: aksjoner });
            view.render();
        }
    });
});
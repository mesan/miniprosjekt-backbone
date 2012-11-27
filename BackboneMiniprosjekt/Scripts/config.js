/// <reference path="_references.js" />

var app = app || {};
(function () {
    "use strict";
    app.config = {
        apiBaseUrl: "http://searchparty.azurewebsites.net/api",
        container: '#js-aksjoner-container',
        ruting: {
            // legg til mer ved behov
            aksjonSide: "/aksjon/"
        }
    };

})();

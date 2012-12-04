/// <reference path="_references.js" />

var app = app || {};
(function () {
    "use strict";
    app.config = {
        apiBaseUrl: "http://searchparty.azurewebsites.net/api",
//        apiBaseUrl: "http://searchpartyjava2.herokuapp.com",
        container: '#js-aksjoner-container',
        ruting: {
            // legg til mer ved behov
            aksjonSide: "/aksjon/"
        }
    };

})();

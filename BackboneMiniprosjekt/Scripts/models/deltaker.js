/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Deltaker = Backbone.Model.extend({
    	defaults: {
//    		  lag: [
//    		           {id : "1"},
//    		           {id : "2"},
//    		           {id : "3"}
//    		         ]
        },
        urlRoot: app.config.apiBaseUrl + "/aksjoner"
    });

})();
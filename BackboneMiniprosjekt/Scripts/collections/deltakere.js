/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.Deltakere = Backbone.Collection.extend({
        model: app.Deltaker,
        //url: app.config.apiBaseUrl,
        
        url : function(){
        	//this.url = this.url + "/aksjoner/"+ this.aksjonsId + "/Deltakere";
        	return app.config.apiBaseUrl + "/aksjoner/"+ this.aksjonsId + "/Deltakere";
        }
//    updateUrl : function(){
//    	this.url = this.url + "/aksjoner/"+ this.aksjonsId + "/Deltakere";
//    }
    });
})();
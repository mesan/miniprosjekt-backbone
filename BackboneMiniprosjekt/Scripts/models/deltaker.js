/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.Deltaker = Backbone.Model.extend({
		defaults : {},
		urlRoot : app.config.apiBaseUrl + "/Deltaker",

		//Validering, tatt fra :
		//https://github.com/addyosmani/backbone-fundamentals/blob/gh-pages/index.md
		validators : {
			minLength : function(value, minLength) {
				return value.length >= minLength;
			},
			maxLength : function(value, maxLength) {
				return value.length <= maxLength;
			}
		},
		
		updateUrlRoot : function(aksjonsId) {
			this.urlRoot = app.config.apiBaseUrl + "/aksjoner/" + aksjonsId + "/Deltakere";
		},

		validate : function(attrs) {
			var errors = this.errors = {};
			
			if (attrs.mobilnummer != null) {
				console.log(attrs.mobilnummer + " valideres");
				if (!attrs.mobilnummer) {
					errors.mobilnummer = 'mangler navn';
				} else if (!this.validators.minLength(attrs.mobilnummer, 2)) {
					errors.mobilnummer = 'mobilnummer er for kort';
				} else if (!this.validators.maxLength(attrs.mobilnummer, 15)) {
					errors.mobilnummer = 'navn er for langt';
				}
			}
			
			if (!_.isEmpty(errors)) return errors;

		}
	});

})();
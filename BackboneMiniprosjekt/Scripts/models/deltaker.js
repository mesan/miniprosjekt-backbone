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
			if (attrs.navn != null) {
				console.log(attrs.navn + " valideres");
				if (!attrs.navn) {
					errors.navn = 'mangler navn';
					console.log('mangler navn');
				} else if (!this.validators.minLength(attrs.navn, 2)) {
					errors.navn = 'navn er for kort';
					console.log('navn er for kort');
				} else if (!this.validators.maxLength(attrs.navn, 15)) {
					errors.navn = 'navn er for langt';
					console.log('navn er for langt');
				}
			}
			if (attrs.url != null) {
				console.log(attrs.url + " valideres");
				if (!attrs.url) {
					errors.url = 'mangler url';
					console.log('mangler url');
				} else if (!this.validators.minLength(attrs.url, 5)) {
					errors.url = 'url er for kort';
					console.log('url er for kort');
				} else if (!this.validators.maxLength(attrs.url, 30)) {
					errors.url = 'url er for lang';
					console.log('url er for lang');
				}
			}
			
			if (!_.isEmpty(errors)) return errors;

		}
	});

})();
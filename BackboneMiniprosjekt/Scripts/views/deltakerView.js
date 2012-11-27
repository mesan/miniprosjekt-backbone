/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakerView = Backbone.View.extend({

		//Definerer heller i templatefila:   	
		//tagName : "li",
		//className : "deltaker",
		events : {
			"click .deltaker-check" : "toggleDeltaker",
		},
		render : function() {
			var template = Handlebars.compile($("#deltaker-template").html());
			this.$el.html(template({
				navn : this.model.get('navn'),
				id : this.model.id
			}));
			return this;
		},
		toggleDeltaker : function() {
			console.log("Checkbox click, id:" + this.model.id);
		}

	});

})();

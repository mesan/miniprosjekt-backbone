/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakerView = Backbone.View.extend({
		events : {
			"keypress .mobilnummer-input" : "updateOnEnter",
			"click .close" : "deleteSelf",
			"click .deltaker-check" : "updateModel"
		},
		render : function() {
			var template = Handlebars.compile($("#deltaker-template").html());
			this.$el.html(template({
				mobilnummer : this.model.get('mobilnummer'),
				id : this.model.id,
				aktiv : this.model.get("aktiv")
			}));
			return this;
		},
		
		updateAttributes : function() {
			this.model.save({
				'mobilnummer' : this.$el.find('.mobilnummer-input').val(),
			    'aktiv' : this.$el.find('.deltaker-check').is(':checked')
			}, {validateAll: false});
			
		},
		
		updateOnEnter : function(e) {
			if (e.keyCode == 13) {
				this.updateAttributes();				
			}
		},
		
		updateModel : function(e) {
			this.updateAttributes();
		},
		
		//Deletes the model and removes the view
		deleteSelf : function(e) {
			var that = this;
			this.model.destroy({
				success: function(model, response) {
					that.$el.remove();
					
				},
				error : function(){
					console.log("error");
				}
			});
		}

	});

})();

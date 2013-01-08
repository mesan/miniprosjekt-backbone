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
			alert("Oppdatering av model er ikke støttet av backend...");
			//Not yet supported by the API
//			this.model.save({
//				'mobilnummer' : this.$el.find('.mobilnummer-input').val()
//			}, {validateAll: false});
			
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

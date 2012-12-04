/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakerView = Backbone.View.extend({
		//el : app.config.container,
		events : {
			"keypress .mobilnummer-input" : "updateOnEnter",
			"click .close" : "deleteSelf"
		},
		render : function() {
			var template = Handlebars.compile($("#deltaker-template").html());
			this.$el.html(template({
				mobilnummer : this.model.get('mobilnummer'),
				id : this.model.id
			}));
			return this;
		},
		
		updateAttributes : function() {
			
			//Not yet supported by the API
//			this.model.save({
//				'mobilnummer' : this.$el.find('.mobilnummer-input').val()
//			}, {validateAll: false});
			
//			this.$el.find('[data-msg]').text((this.model.errors['mobilnummer'] || 'OK'));
		},
		
		updateOnEnter : function(e) {
			console.log(e);
			if (e.keyCode == 13) {
				this.updateAttributes();				
			}
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

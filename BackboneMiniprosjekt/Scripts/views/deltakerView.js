/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakerView = Backbone.View.extend({
		//el : app.config.container,
		events : {
			"keypress .navn-input" : "updateOnEnter",
			"keypress .url-input" : "updateOnEnter",
			"click .close" : "deleteSelf"
		},
		render : function() {
			var template = Handlebars.compile($("#deltaker-template").html());
			this.$el.html(template({
				navn : this.model.get('navn'),
				url : this.model.get('url'),
				id : this.model.id
			}));
			return this;
		},
		
		//Oppdaterer og validerer
		updateAttributes : function() {
			
			this.model.save({
				'navn' : this.$el.find('.navn-input').val(),
				'url' : this.$el.find('.url-input').val()
			}, {validateAll: false});
			
			this.$el.find('[data-msg]').text((this.model.errors['navn'] || 'Navn OK') + 
											(this.model.errors['url'] || 'URL OK'
			));
		},
		
		updateOnEnter : function(e) {
			console.log(e);
			if (e.keyCode == 13) {
				this.updateAttributes();				
			}
		},
		
		deleteSelf : function(e) {
			console.log("clicked");
			var that = this;
			this.model.destroy({
				success: function(model, response) {
					console.log("destroyed");
					that.$el.remove();
					
				},
				error : function(){
					console.log("error");
				}
			});
		}

	});

})();

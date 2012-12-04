/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakereView = Backbone.View.extend({
		el : app.config.container,
		initialize: function(){
	        //console.log(this.collection.length);
	    },
		render : function() {	
			var that = this;
			this.template = Handlebars.compile($("#deltakere-template").html());
			this.$el.html(this.template(this.collection));

			this.collection.each(function(deltaker) {
				deltaker.updateUrlRoot(that.collection.aksjonsId);
				var view = new app.DeltakerView({model:deltaker});
				that.$('.deltaker-liste').append(view.render().el);
			});
			
			return this;
		}

	});

})();

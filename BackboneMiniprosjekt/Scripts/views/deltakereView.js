/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakereView = Backbone.View.extend({
		el : app.config.container,
		render : function() {
			var that = this;
			this.$el.html("<ul class='deltakere'></ul>");
			
			this.collection.each(function(deltaker) {
				var view = new app.DeltakerView({model:deltaker});
				that.$el.append(view.render().el);
			});
			return this;
		}

	});

})();

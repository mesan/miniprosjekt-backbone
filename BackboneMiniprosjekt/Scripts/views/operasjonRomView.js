var app = app || {};

(function() {
	"use strict";

	app.OperasjonRomView = Backbone.View.extend ( {
		el: app.config.container,

		initialize: function(options){
			this.id = options.id;
			this.model = new app.OperasjonRomModel();
			this.model.set('id', this.id);
			this.template = Handlebars.compile($("#operasjon-rom-template").html());
			this.render();
		},

		render: function() {
			this.$el.empty();
			this.$el.html(this.template);
		},
		renderAksjon: function() {
			this.render();
			$("#operasjonRomAksjon").addClass("active");
			$("#operasjonRom").removeClass("active");
			var self = this;
			var aksjonModel = new app.AksjonModel();
		    aksjonModel.set({id: this.model.get("id")});
		    aksjonModel.fetch({
		    	success: function() {
		    		var visAksjon = new app.AksjonView({model: aksjonModel});
		    		visAksjon.render();
		    		self.$el.append(visAksjon.$el);
		    	}
		    });

		},
		renderRom: function() {
			this.render();
			$("#operasjonRom").addClass("active");
			$("#operasjonRomAksjon").removeClass("active");
			this.$el.append("<p>Her kommer mere...</p>");
			var self = this;
			var meldinger = new app.Meldinger();
			meldinger.fetch({
			    success: function() {
			         var view = new app.MeldingerView({collection: meldinger});
			         view.render();
			         self.$el.append(view.$el);
			     }
			 });

		}



	});
	return this;

})();

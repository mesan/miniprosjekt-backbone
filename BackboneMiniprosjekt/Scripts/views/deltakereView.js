/// <reference path="../_references.js" />
var app = app || {};

(function() {
	"use strict";

	app.DeltakereView = Backbone.View.extend({
		el : app.config.container,
		events : {
			"click .btn" : "addDeltaker"
		},
		initialize: function(){
	        //console.log(this.collection.length);
	    },
		render : function() {	
			var that = this;
			this.template = Handlebars.compile($("#deltakere-template").html());
			this.$el.html(this.template({id: this.collection.aksjonsId, models: this.collection}));

			this.collection.each(function(deltaker) {
				var view = new app.DeltakerView({model:deltaker});
				that.$('.deltaker-liste').append(view.render().el);
			});
			
			return this;
		},
		addDeltaker : function(){
			var deltaker = new app.Deltaker();
			deltaker.set({
				'mobilnummer' : this.$el.find('input[name=add-mobil-input]').val(),
				'aksjonId' : this.collection.aksjonsId
			},{validateAll: false});
			
			if (!_.isEmpty(deltaker.errors)) {
				alert(deltaker.errors['mobilnummer']);
			}else{
				deltaker.urlRoot = app.config.apiBaseUrl + 
								"/aksjoner/"+ this.collection.aksjonsId + "/Deltakere";
				this.collection.create(deltaker);
				this.render();
			}

		}

	});

})();

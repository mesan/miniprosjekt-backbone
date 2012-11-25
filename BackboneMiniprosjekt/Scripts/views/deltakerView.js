/// <reference path="../_references.js" />
var app = app || {};

(function() {
    "use strict";

    app.DeltakerView = Backbone.View.extend({
        el: ".content",
        template: _.template("<p>Navn: <%= navn %> Lag: <%= id %></p>"),

        render: function () {
           this.$el.html(this.template({
        	   navn : 'Ola',
        	   id  : this.model.id
             }));
           return this;
       }
    

    });

})();

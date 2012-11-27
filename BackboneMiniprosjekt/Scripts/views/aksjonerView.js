/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.AksjonerView = Backbone.View.extend({
        el: "#js-aksjoner-container",
        template: Handlebars.compile($("#aksjoner-template").html()),
        render: function () {
            var aksjoner = this.collection.toJSON();
            
            this.$el.html(this.template(aksjoner));
            
            return this;
        }
    });

})();
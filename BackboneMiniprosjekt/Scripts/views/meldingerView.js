/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.MeldingerView = Backbone.View.extend({
        el: app.config.container,
        template: Handlebars.compile($("#meldinger-template").html()),
        render: function () {
            this.$el.html(this.template(this.collection.toJSON()));
            return this;
        }
    });

})();

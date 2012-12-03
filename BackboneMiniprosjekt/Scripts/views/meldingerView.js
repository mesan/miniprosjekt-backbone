/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.MeldingerView = Backbone.View.extend({
        el: app.config.container,
        template: Handlebars.compile($("#meldinger-template").html()),
        render: function () {
            var meldinger = this.collection.get(this.collection.aksjonid);
            this.$el.html(this.template([meldinger.toJSON()]));
            return this;
        }
    });

})();

/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.AksjonView = Backbone.View.extend({
        el: app.config.container,

        render: function () {
            this.$el.html(this.collection.models[0].get("navn"));
            return this;
        }

    });

})();

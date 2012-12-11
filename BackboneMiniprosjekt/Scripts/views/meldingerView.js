
/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.MeldingerView = Backbone.View.extend({
        el: app.config.container,
        template: Handlebars.compile($("#meldinger-template").html()),
        render: function () {
            this.$el.empty();
            this.$el.html(this.template(this.collection.toJSON()));
            return this;
        },
        initialize: function () {
            _.bind(this.bindPushUpdate, this)();
        },

        bindPushUpdate: function () {
            var self = this,
                aksjonId = 1,
                pusher = new Pusher('76b8bc80e33cffd17524'),
                channel = pusher.subscribe('leteaksjon-' + aksjonId);

            channel.bind('ny-melding', function (data) {
                self.collection.add(JSON.parse(data));
                self.render();
            });
        }
    });

})();

/// <reference path="../_references.js" />
var app = app || {};

(function() {
  "use strict";

  app.Felt = Backbone.View.extend({
    events:{blur:'validate'},

    initialize:function() {
      this.name = this.$el.attr('name');
      this.$msg = $('[data-msg=' + this.name + ']');
    },

    validate:function() {
      this.model.set(this.name, this.$el.val());
      if (this.model.errors[this.name]) {
        this.$msg.text(this.model.errors[this.name]);
      } else {
        this.$msg.text('');
        $(this.$el).trigger('validertOk');
      }
    }
  });

})();

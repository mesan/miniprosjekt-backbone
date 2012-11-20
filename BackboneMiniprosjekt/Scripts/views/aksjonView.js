/// <reference path="../_references.js" />
var app = app || {};

(function() {
    "use strict";

    app.AksjonView = Backbone.View.extend({
        el: $(".aksjoner p"), 

        render: function () {
            
           this.el.html(this.model.navn);
           
           return this;
       }
        
    });

})();
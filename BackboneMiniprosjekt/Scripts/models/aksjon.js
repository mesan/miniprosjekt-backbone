/// <reference path="../_references.js" />
var app = app || {};

(function () {
    "use strict";

    app.AksjonModel = Backbone.Model.extend({

        urlRoot: app.config.apiBaseUrl + "/aksjoner",

        validate:function(attributter) {
          var errors = this.errors = {};

          var blank = function(streng) {
            return (!streng || /^\s*$/.test(streng))
          };

          if (attributter['navn'] && blank(attributter.navn)) {
            errors['navn'] = 'feilmelding.paakrevd';
          }

          if(attributter['beskrivelse'] && blank(attributter.beskrivelse)) {
            errors['beskrivelse'] = 'feilmelding.paakrevd'
          }

          if (!_.isEmpty(errors)) return errors
        }
    });

})();

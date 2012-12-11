/// <reference path="_references.js" />

var app = app || {};
(function () {
    "use strict";

    var pusherPublicKey = '76b8bc80e33cffd17524';

    app.meldingsOppdaterer = {
        bind: function (aksjonId, oppdateringsFunksjon) {
            var pusher = new Pusher(pusherPublicKey),
                channel = pusher.subscribe('leteaksjon-' + aksjonId);

            channel.bind('ny-melding', oppdateringsFunksjon);
        }
    };
})();

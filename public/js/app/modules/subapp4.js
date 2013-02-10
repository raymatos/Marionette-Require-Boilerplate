define(['jquery', 'underscore', 'handlebars', 'routers/subapp4Router', 'controllers/subapp4Controller'], function ($, _, Handlebars, subapp4Router, subapp4Controller) {

    return App.module('subapp4', function (subapp4, App, Backbone, Marionette, $, _) {

        this.startWithParent = false;

        // This code is ran by Marionette when the modules are loaded
        subapp4.addInitializer(function () {
            subapp4.appRouter = new subapp4Router("subapp4", {
                controller: new subapp4Controller(),
                createTrailingSlashRoutes : true
            });


        });

    });

});
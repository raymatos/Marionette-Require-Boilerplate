define(['jquery', 'underscore', 'handlebars', 'routers/subapp3Router', 'controllers/subapp3Controller'], function ($, _, Handlebars, subapp3Router, subapp3Controller) {

    return App.module('subapp3', function (subapp3, App, Backbone, Marionette, $, _) {

        this.startWithParent = false;

        // This code is ran by Marionette when the modules are loaded
        subapp3.addInitializer(function () {
            subapp3.appRouter = new subapp3Router("subapp3", {
                controller: new subapp3Controller(),
                createTrailingSlashRoutes : true
            });


        });

    });

});
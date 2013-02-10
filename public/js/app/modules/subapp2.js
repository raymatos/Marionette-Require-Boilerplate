define(['jquery', 'underscore', 'handlebars', 'routers/subapp2Router', 'controllers/subapp2Controller'], function ($, _, Handlebars, subapp2Router, subapp2Controller) {

    return App.module('subapp2', function (subapp2, App, Backbone, Marionette, $, _) {

        this.startWithParent = false;

        // This code is ran by Marionette when the modules are loaded
        subapp2.addInitializer(function () {
            subapp2.appRouter = new subapp2Router("subapp2", {
                controller: new subapp2Controller(),
                createTrailingSlashRoutes : true
            });


        });

    });

});
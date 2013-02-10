define(['backbone', 'marionette','subroutes'], function(Backbone, Marionette) {
   return Backbone.Marionette.SubAppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
       		
       		"": "index",
       		"*hash": "index",
       		"subsub" : "subsub"
       }
   });
});
define(['backbone', 'marionette','subroutes'], function(Backbone, Marionette) {
   return Backbone.Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {		
           ""			: "index",
           "subapp1" 	: "subapp1",
           "subapp2" 	: "subapp2",
           "subapp3" 	: "subapp3",
           "subapp4*subroute" 	: "subapp4"
       }
   });
});
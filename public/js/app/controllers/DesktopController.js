define(['backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView'], function (Backbone, Marionette, WelcomeView, DesktopHeaderView) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            
            App.headerRegion.show(new DesktopHeaderView());
        },
        
        
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	console.log("INDEX")
            App.mainRegion.show(new WelcomeView());
        },
        
        //map routes to submodules
        subapp1: function() {
        	require(['views/subapp1View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp2: function() {
        	require(['views/subapp2View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp3: function() {
        	require(['views/subapp3View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp4: function(subroute) {
        	require(['app/modules/subapp4'],function(module){
        		module.start();
        	});
        }
        
        
    });
});
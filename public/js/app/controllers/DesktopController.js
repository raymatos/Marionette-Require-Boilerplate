define(['backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView'], function (Backbone, Marionette, WelcomeView, DesktopHeaderView) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        
        setActiveEntry: function() {
        	console.log(Backbone.history.getFragment());
	        // Unmark all entries
	        $('.nav li').removeClass('active');
	
	        // Mark active entry
	        $(".nav li a[href='/" + Backbone.history.getFragment() + "']").parents('li').addClass('active');
	    },
        
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	this.setActiveEntry();
            App.mainRegion.show(new WelcomeView());
        },
        
        //map routes to submodules
        subapp1: function() {
        	this.setActiveEntry();
        	require(['views/subapp1View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp2: function() {
        	this.setActiveEntry();
        	require(['views/subapp2View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp3: function() {
        	this.setActiveEntry();
        	require(['views/subapp3View'],
	    		function(view){
	    			
	    			App.mainRegion.show(new view());
	    			
	    		}
	    	);
        },
        
        subapp4: function(subroute) {
        	this.setActiveEntry();
        	require(['app/modules/subapp4'],function(module){
        		module.start();
        	});
        }
        
        
    });
});
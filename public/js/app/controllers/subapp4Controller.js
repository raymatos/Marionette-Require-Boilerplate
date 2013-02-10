define(['backbone', 'marionette', 'views/DesktopHeaderView', 'views/subapp4View'], function (Backbone, Marionette, DesktopHeaderView, subapp4View) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        
        index: function(){
        	App.appRouter.options.controller.setActiveEntry();
        	App.mainRegion.show(new subapp4View());
        },
        
        subsub: function() {	
	    	require(['views/subapp4.subsubView'],function(view){
	    		App.mainRegion.show(new view());
	    	});
        }
        
    });
});
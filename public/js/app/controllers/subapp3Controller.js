define(['backbone', 'marionette', 'views/DesktopHeaderView', 'views/subapp3View'], function (Backbone, Marionette, DesktopHeaderView, subapp3View) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        
        index: function(){
        	App.appRouter.options.controller.setActiveEntry();
        	App.mainRegion.show(new subapp3View());
        },
        
        subsub: function() {	
	    	require(['views/subapp3.subsubView'],function(view){
	    		App.mainRegion.show(new view());
	    	});
        }
        
    });
});
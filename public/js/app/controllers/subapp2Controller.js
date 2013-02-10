define(['backbone', 'marionette', 'views/DesktopHeaderView', 'views/subapp2View'], function (Backbone, Marionette, DesktopHeaderView, subapp2View) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        
        index: function(){
        	App.appRouter.options.controller.setActiveEntry();
        	App.mainRegion.show(new subapp2View());
        },
        
        subsub: function() {	
	    	require(['views/subapp2.subsubView'],function(view){
	    		App.mainRegion.show(new view());
	    	});
        }
        
    });
});
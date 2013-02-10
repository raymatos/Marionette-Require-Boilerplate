define(['backbone', 'marionette', 'views/DesktopHeaderView', 'views/subapp4View'], function (Backbone, Marionette, DesktopHeaderView, subapp4View) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
        	console.log("DDDDDDsass");
            //App.headerRegion.show(new DesktopHeaderView());
        },
        
        index: function(){
        	console.log("SUB4:index");
        	App.mainRegion.show(new subapp4View());
        },
        
        subsub: function() {
        	console.log("SUB4:subsub");		
	    	require(['views/subapp4.subsubView'],function(view){
	    		App.mainRegion.show(new view());
	    	});
        }
        
    });
});
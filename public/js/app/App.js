define(['jquery', 'underscore', 'handlebars', 'routers/AppRouter'],

function ($, _, Handlebars, AppRouter) {
    //App is global variable for our instance of Backbone.Marionette.Application
    if (!window.App) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion: "header",
            mainRegion: "#main",
            footer : "footer"
        });

        App.addInitializer(function (options) {
            var dependencies;
            this.mobile = options ? options.mobile : false;
            if (this.mobile) {
                dependencies = ["controllers/MobileController"];
            } else {
                dependencies = ["controllers/DesktopController"];
            }
            //set AppRouter's controller to MobileController or DesktopController
            require(dependencies, function (Controller) {
                App.appRouter = new AppRouter({
                    controller: new Controller()
                });
                
                Backbone.history.start();
                
                
                // All navigation that is relative should be passed through the navigate
				// method, to be processed by the router. If the link has a `data-bypass`
				// attribute, bypass the delegation completely.
				$(document).on('click', 'a:not([data-bypass])', function(evt) {
					// Get the absolute anchor href.
					var href = $(this).attr('href');
					
					// If the href exists and is a hash route, run it through Backbone.
					if (href && href.indexOf('#') === 0) {
						// Stop the default event to ensure the link will not cause a page
						// refresh.
						evt.preventDefault();
						
						// `Backbone.history.navigate` is sufficient for all Routers and will
						// trigger the correct events. The Router's internal `navigate` method
						// calls this anyways.  The fragment is sliced from the root.
						Backbone.history.navigate(href, true);
					}
		  		});
            });
        });
    }
    //export App as global variable
    window.App = App;
});
requirejs.config({
	config:"a",
    baseUrl: 'js/lib',
    paths: {
        'app': "../app"
    }
})


//Load common code that includes config, then load the app logic for this page.
require(['app/cart/main']);

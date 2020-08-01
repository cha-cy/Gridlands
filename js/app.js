requirejs.config({
	baseUrl: "//cdn.jsdelivr.net/gh/saigaocy/Gridland/js/lib",
	shim: {
		"google-analytics": {
			exports: "ga"
		},
		"base64": {
			exports: "Base64"
		}
	},
	paths: {
		app: "../app",
		"jquery": [
			"https://cdn.bootcss.com/jquery/3.4.1/jquery.min",
			"jquery-2.0.3.min"
		],
		"google-analytics": [
	        "https://cdn.bootcss.com/analytics.js/2.9.1/analytics",
	        "analytics"
        ]
	},
	waitSeconds: 0
});

// Load the main module to start the game
requirejs(["//cdn.jsdelivr.net/gh/saigaocy/Gridland/app/main.js"]);

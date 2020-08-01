define(function() {
	var host = window.location.protocol+"//"+window.location.host+"/Gridland/";
	var SITE_URL = encodeURIComponent(+host);

	var _el = null;
	function el() {
		var G = require('app/graphics/graphics');
		if(_el == null) {
			G.addStyleRule('.social:before');
			_el = G.make('social submenu', 'ul');
		}
		
		return _el;
	}
	
	return {
		init: function() {
			var G = require('app/graphics/graphics');
			G.addToMenu(el());
		}
	};
});
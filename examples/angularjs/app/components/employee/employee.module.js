(function() {
	"use strict";

	angular
		.module('company-registry.employee', [
			'ngResource', 
			'ui.router', 
			'ui.bootstrap', 
			'company-registry.place.place-modal'
		]);
})();
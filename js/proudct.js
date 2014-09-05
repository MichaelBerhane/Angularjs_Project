(function(){
	var app = angular.module('store-products', []);

	app.directive ('productTitle', function(){
	return{
		restrict: 'E',
		templateUrl: 'product-title.html'
	};
});

app.directive ('productPanel', function(){
	return{
		restrict: 'E',
		templateUrl: 'product-panels.html',
		controller: function(){

			this.tab = 1;

			this.selectTab = function(selectTab){
				this.tab = selectTab;
			}

			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			}
			
		},
		controllerAs: 'panels'
	};
});

})();
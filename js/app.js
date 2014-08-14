
(function(){
var app = angular.module('store', []);
app.controller('StoreController', function(){
	this.product = gem;
})

	var gem = [ 
		{
			name: 'Ruby Gem',
			price: 2.95,
			description: '"Lorem ipsum d Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
			images: [
				{full: 'Test.png'}
			],
			canPurchase : true,
			soldOut: false,
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "........",
			images: [
				{full: 'Test.png'}
			],
			canPurchase: false,
			soldOut: false,
		}
	];


app.controller('PanelController', function(){
	this.tab = 1;

	this.selectTab = function(selectTab){
		this.tab = selectTab;
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}


});	





})();






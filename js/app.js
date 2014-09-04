
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
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
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

app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
	
})





})();






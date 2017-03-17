describe('Foursquare', function() {
	var scope;
	
	beforeEach(angular.mock.module('pickplace'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('Foursquare', {$scope: scope});
	}));

	it("Checks the task creation", function () {
		var size = scope.tasks.length;
		scope.createTask({ title: 'Hello' });
		expect(scope.tasks.length).toEqual(size+1);
	});
});
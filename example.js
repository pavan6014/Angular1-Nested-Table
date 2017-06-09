angular.module('myApp', ['ui.bootstrap']);
angular.module('myApp').controller('DemoCtrl', function ($scope) {

     $scope.data = [
		{
                "region": "SouthEast", 
                "closedYesterdays": [
                {
					"closed": 364,
					 "closedYesterdaySubsets":[
						{
						"closed": 364,
						"total": 364
						}
					]
                                
                }
                ]

		}
  ]
});
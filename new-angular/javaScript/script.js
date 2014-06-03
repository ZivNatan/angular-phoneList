
var root =angular.module('root',[]);
	
	root.controller("index",["$scope", function($scope){
		$scope.message ="Hello Angular World!";
	}]);

		
	root.controller("myAppCtr", function($scope){
		$scope.persons = [{firstName:"Yossi",lastName:"Choen", phone:"0501234567",address:"Kfar Saba Israel"},
						{firstName:"Dani",lastName:"Natan",phone:"0501234567",address:"New york USA"},
						{firstName:"Itzik",lastName:"Shimony",phone:"0501234567",address:"TLV Israel"},
						{firstName:"Dafna",lastName:"Dekel",phone:"0501234567",address:"TLV Israel"},
						{firstName:"Evyatar",lastName:"Shpira",phone:"0501234567",address:"Ramt Gan Israel"},
						{firstName:"Aba",lastName:"Niso",phone:"0501234567",address:"Ramt Gan Israel"},
						{firstName:"Bar",lastName:"Zamir",phone:"0501234567",address:"Ramt Gan Israel"},
						{firstName:"Ziv",lastName:"Zamir",phone:"0501234567",address:"Ramt Gan Israel"}
						];		
			

		$scope.removePerson =function(person){
			var i =$scope.persons.indexOf(person);
			$scope.persons.splice(i,1);
		};
	

		$scope.addPerson= function(){

			$scope.preson= {firstName:$scope.firstName, lastName:$scope.lastName, phone:$scope.phone, address:$scope.address};
			$scope.persons.push($scope.person);
			$scope.firstName="";
			$scope.lastName="";
			$scope.phone="";
			$scope.address="";
			
		};

	});


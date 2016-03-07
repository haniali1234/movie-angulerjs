var app = angular.module("MoviesApp", []);

app.controller("MovieController", 
 function ($scope, $http) {
 	
 	alert($http)

	var movies = [
		{title: "Avatar", year: 2009, plot:"Come cool blue guys re-enact dancing with wolfs"},
		{title: "Star War 2", year: 2010, plot:"Come cool blue guys re-enact dancing with wolfs"},
		{title: "Star War 3", year: 2009, plot:"Cool"}


	];
	$scope.movies = movies;

	$scope.addMovie = function()
	{
		var newMovie = {
			title: $scope.movie.title,
			year: $scope.movie.year,
			plot: $scope.movie.plot
		};
		$scope.movies.push(newMovie);
	}
	$scope.removeMovie = function(movie)
	{
		var index = $scope.movies.indexOf(movie);
		$scope.movies.splice(index, 1);

	}
	$scope.selectMovie = function(movie){
		$scope.movie = movie;
	}
	$scope.updateMovie = function(movie){
		alert($scope.movie.title)
	}
});





























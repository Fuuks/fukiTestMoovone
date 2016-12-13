'use strict';

angular.module('myApp.view1', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','ApiGif',function($scope,ApiGif) {

    $scope.mot; //mot de recherche
    $scope.currentPage =1; //page courant initialisee a 1
    $scope.itemsPerPage = 8; //nombre de gifs par page
    $scope.clickGo = false; //click sur le bouton de recherche
    $scope.errorConnexion = false;


    /**
     * Fonction recherche
     */
    $scope.recherche = function(){
        $scope.clickGo = true;
        console.log("Je suis dans le controlleur fonction recherche");

        //appel a la factory
        ApiGif.recherche($scope.mot).success(function(data){
            console.log(data);
            console.log(data.data);
            $scope.liste = data.data; //recuperation des datas
            $scope.totalItems = $scope.liste.length; //nombre total de gifs

            $scope.errorConnexion = false;// connexion a nouveau retablie
        }).error(function(error){

            $scope.errorConnexion = true;
            console.log(error);

        });


        $scope.mot = '';
    };

    $scope.$watch("currentPage", function() {
        setPage($scope.currentPage);
    });

    function setPage(page) {
        var pagedData = $scope.liste.slice(
            (page - 1) * $scope.itemsPerPage,
            page * $scope.itemsPerPage
        );
        $scope.liste2 = pagedData;
    }


}])

.factory('ApiGif',function($http,$q){

    var apiKey = 'dc6zaTOxFJmzC'; //cle de lapi
    var apiUrl = 'http://api.giphy.com/v1/gifs/';
    var Gif = {};


    Gif.recherche = function(mot){
        return $http.get(apiUrl+'search?q='+mot+'&api_key='+apiKey);
    };

    return Gif;
});

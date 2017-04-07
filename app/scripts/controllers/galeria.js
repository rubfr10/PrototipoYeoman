'use strict';

/**
 * @ngdoc function
 * @name prototipoYeomanApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoYeomanApp
 */
angular.module('prototipoYeomanApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures = $scope.pictures = [];

    var baseURL = "http://lorempixel.com/300/180/";

    var titles=["Comida Sana", "Salud y trabajo", "Vida en la ciudad", "Mantente Activo", 
    			"Cuida tu aspecto", "Vida nocturna"];

    var keywords=["food", "business", "city","sports", "fashion", "nightlife"];

    var dummyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    $scope.addPics = function(i){
    	pictures.push({url:baseURL+keywords[i],
    		title:titles[i],
    		summary:dummyText})
    };

    for(var i=0;i<5;i++){
    	$scope.addPics(i);
    };

    $scope.rate= 0;
    $scope.max = 10;
    $scope.isReadOnly = false;

  });

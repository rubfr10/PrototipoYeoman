'use strict';

/**
 * @ngdoc function
 * @name prototipoYeomanApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoYeomanApp
 */
angular.module('prototipoYeomanApp')
  .controller('ArticulosCtrl', function ($scope) {
    
    $scope.posts = [
	    {
	    	title:"Alimentos buenos para la salud",
	    	content:"Ru ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt omnis cumque voluptates soluta est molestias beatae fugiat maiores"
	    },
	    {
	    	title:"Alimentos menos buenos para la salud",
	    	content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt omnis cumque voluptates soluta est molestias beatae fugiat maiores"
	    },
	    {
	    	title:"¡¡¡ Limita la cantidad de hidratos !!!",
	    	content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt omnis cumque voluptates soluta est molestias beatae fugiat maiores"
	    }
    ];
  });

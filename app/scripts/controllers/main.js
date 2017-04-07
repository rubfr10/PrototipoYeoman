'use strict';

/**
 * @ngdoc function
 * @name prototipoYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoYeomanApp
 */
angular.module('prototipoYeomanApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;

    $scope.slides = [
    	{
    		title:'Aprende a mantenerte en forma',
    		image:baseURL+'sports/',
    		text:'Practica alguna deporte todos los dias',
    		id: currIndex++
    	},
    	{
    		title:'Buena alimentacion',
    		image:baseURL+'food/',
    		text:'Come bien pa ponerte tocho',
    		id: currIndex++
    	},
    	{
    		title:'En contacto con la naturaleza',
    		image:baseURL+'nature/',
    		text:'La naturaleza mola',
    		id: currIndex++
    	}
    ];

    baseURL = 'http://lorempixel.com/200/200/';

    $scope.contenido = [
    	{
    		image:baseURL+'people/',
    		title:'Sobre Nosotros',
    		summary:'Somos una empresa comprometida con la vida',
    		id: currIndex++
    	},
    	{
    		image:baseURL+'business/',
    		title:'Nuestros Servicios',
    		summary:'Ofrecemos asesoria',
    		id: currIndex++
    	},
    	{
    		image:baseURL+'transport/',
    		title:'Contáctanos',
    		summary:'#333, Buena vida online, calle falsa 123',
    		id: currIndex++
    	}
    ];

  });

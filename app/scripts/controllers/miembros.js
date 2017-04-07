'use strict';

/**
 * @ngdoc function
 * @name prototipoYeomanApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototipoYeomanApp
 */
angular.module('prototipoYeomanApp')
  .controller('MiembrosCtrl', function ($scope, $http, $uibModal) {

  	$scope.gridOptions = {
  		enableSorting: true,
  		columnDefs:[
  			{ name: 'Numero', field: 'no' },
  			{ name: 'Nombre', field: 'nombre' },
  			{ name: 'Fiel', field: 'fidelidad' },
  			{ name: 'Fecha Fichaje', field: 'fechaUnion' },
  			{ name: 'Posicion', field: 'tipoMiembro' }
  		],
    	data: []
    };

    $http.get('http://localhost:9000/miembros.json').then(function(response){
    	//$scope.miembros= response.data;
    	$scope.gridOptions.data = response.data;
    },
         function(){
         	alert("Error en el http.get request ñeee");
         });

    $scope.showModal = function(){
    	$scope.nuevoMiembro={};
    	var modalInstance = $uibModal.open({
    		templateUrl: 'views/addMiembros.html',
    		controller: 'AddNuevoMiembroCtrl',
    		resolve:{
    			nuevoMiembro: function(){
    				return $scope.nuevoMiembro;
    			}
    		}
    	});

    	modalInstance.result.then(function(selectedItem){
    		$scope.gridOptions.data.push({
    			no: $scope.nuevoMiembro.numero, //Autoincremental $scope.miembros.length + 1
    			nombre: $scope.nuevoMiembro.nombre,
    			tipoMiembro: $scope.nuevoMiembro.tipoMiembro,
    			fidelidad: $scope.nuevoMiembro.fidelidad,
    			fechaUnion: $scope.nuevoMiembro.fechaUnion
    		});
    	});
    };

  })

  .controller('AddNuevoMiembroCtrl', function($scope, $uibModalInstance, nuevoMiembro){
  	$scope.nuevoMiembro = nuevoMiembro;
  	$scope.guardar = function(){
  		$uibModalInstance.close(nuevoMiembro);
  	};
  	$scope.cancel = function(){
  		$uibModalInstance.dismiss('cancel'); 
  	};
  });



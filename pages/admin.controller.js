app.controller("AdminCtrl", ["$scope", "$location","filterFilter", function($scope, $location, filterFilter) {
    try{
        $scope.DataUser     = JSON.parse( localStorage.getItem("RCVUserData") );
        $scope.currentUser  = $scope.DataUser.usu_nombre;
        $scope.idCatalogoUsuario = $scope.DataUser.idCatalogoUsuario;
    }
    catch( e ){
        $location.path("/login");
    }
    

    $scope.pnlNoticias = function(){
    	$location.path("/admin/noticia");
    }

    $scope.pnlVer = function(){
        $location.path("/admin/perfil");
    }

    $scope.pnlEditar = function(){
        $location.path("/admin/editarperfil");
    }

    $scope.pnlCambiar = function(){
        $location.path("/admin/cambiarpassword");
    }

    $scope.close = function(){
    	localStorage.setItem("RCVUserData", "");
    	$location.path("/login");
    }
}]);
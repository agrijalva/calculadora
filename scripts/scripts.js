"use strict";

var app = angular.module("yapp", ["ui.router", "ngAnimate", "ngSanitize","ui.carousel","angucomplete-alt","ngMaterial","ngMessages","ckeditor"]).config(["$stateProvider", "$urlRouterProvider", function(r, t) {

    t.when("/admin", "/admin/overview"), t.otherwise("/login"), 

    r.state("base", {

        "abstract": !0,

        url: "",

        templateUrl: "pages/base.html"

    })

    .state("login", {

        url: "/login",

        parent: "base",

        cache:false,

        templateUrl: "pages/login/login.html",

        controller: "LoginCtrl"

    })

    .state("admin", {

        url: "/admin",

        parent: "base",

        cache:false,

        templateUrl: "pages/admin.html",

        controller: "AdminCtrl"

    })

    .state("perfil", {

        url: "/perfil",

        parent: "admin",

        cache:false,

        templateUrl: "pages/perfil/templates/verPerfil.html",

        controller: "PerfilCtrl"

    })

    .state("editarperfil", {

        url: "/editarperfil",

        parent: "admin",

        cache:false,

        templateUrl: "pages/perfil/templates/editarPerfil.html",

        controller: "PerfilCtrl"

    })

    .state("cambiarpassword", {

        url: "/cambiarpassword",

        parent: "admin",

        cache:false,

        templateUrl: "pages/perfil/templates/cambiarPassword.html",

        controller: "PerfilCtrl"

    })

    .state("noticia", {

        url: "/noticia",

        parent: "admin",

        cache:false,

        templateUrl: "pages/noticia/templates/noticia.html",

        controller: "NoticiaCtrl"

    })

}]);



var Authorization = 'eb60959f5eac3e1d081244c33d4fb850';





app.config(function($mdDateLocaleProvider) {

    $mdDateLocaleProvider.formatDate = function(date) {

       return moment(date).format('YYYY-MM-DD');

    };

});



app.filter('startFrom', function() {

    return function(input, start) {

        start = +start; //parse to int

        return input.slice(start);

    }

});



// ============ [ v1.0.0 ]

var API_Path = "http://griant.mx/calculadora/restapi/v1/index.php";
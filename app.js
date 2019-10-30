var Visualizer = window["ui-router-visualizer"].Visualizer;
var app = angular.module("myApp", ["ui.router"]);
app
    .controller("inicioController", InicioController);
app.config([
    "$urlRouterProvider",
    "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {
        console.log("Entrando en la configuracion");
        $urlRouterProvider.when("", "/inicio");
        $stateProvider
            .state("inicio", {
            url: "/inicio",
            templateUrl: "views/inicio.html",
            controller: InicioController
        })
            .state("app.readme", {
            url: "/readme",
            templateUrl: "views/readme.html"
        });
    }
]);
app.run([
    "$uiRouter",
    function ($uiRouter) {
        var pluginInstance = $uiRouter.plugin(Visualizer);
    }
]);
//# sourceMappingURL=app.js.map
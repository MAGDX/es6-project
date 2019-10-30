let Visualizer = window["ui-router-visualizer"].Visualizer;
const app = angular.module("myApp", ["ui.router"]);

app
  .controller("inicioController", InicioController);

app.config([
  "$urlRouterProvider",
  "$stateProvider",
  ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
    console.log("Entrando en la configuracion");

    $urlRouterProvider.when("", "/inicio");
    $stateProvider
      .state("inicio", {
        url: "/inicio",
        templateUrl: "views/inicio.html",
        controller: InicioController
      })
      .state("readme", {
        url: "/readme",
        templateUrl: "views/readme.html"
      });
  }
]);

app.run([
  "$uiRouter",
  $uiRouter => {
    const pluginInstance = $uiRouter.plugin(Visualizer);
  }
]);

interface IInicioControllerScope extends ng.IScope {
  vm: InicioController;
}
class InicioController implements ng.IController {
  public titulo: string = "Tutorial ES6";

  public static $inject = ["$scope"];

  constructor(private $scope: IInicioControllerScope, clasificacionMundial: any) {
    console.log('Inicio Controller...');
    $scope.vm = this;
  }
}
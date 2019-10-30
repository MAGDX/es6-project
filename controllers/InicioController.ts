interface IInicioControllerScope extends ng.IScope {
  vm: InicioController;
}
class InicioController implements ng.IController {
  public titulo: string = "Tutorial ES6";
  public piloto: Piloto;

  public static $inject = ["$scope"];

  constructor(private $scope: IInicioControllerScope, clasificacionMundial: any) {
    console.log('Inicio Controller...');
    $scope.vm = this;

    $scope.vm.titulo = "ES6 - EcmaScript 2015";
    $scope.vm.piloto = new Piloto();

    $scope.vm.piloto.nombre = "Fernando Alonso";
  }
}
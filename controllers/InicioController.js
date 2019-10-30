var InicioController = (function () {
    function InicioController($scope, clasificacionMundial) {
        this.$scope = $scope;
        this.titulo = "Tutorial ES6";
        console.log('Inicio Controller...');
        $scope.vm = this;
        $scope.vm.titulo = "ES6 - EcmaScript 2015";
        $scope.vm.piloto = new Piloto();
        $scope.vm.piloto.nombre = "Fernando Alonso";
    }
    InicioController.$inject = ["$scope"];
    return InicioController;
}());
//# sourceMappingURL=InicioController.js.map
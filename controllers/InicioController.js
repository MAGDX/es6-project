var InicioController = (function () {
    function InicioController($scope, clasificacionMundial) {
        this.$scope = $scope;
        this.titulo = "Tutorial ES6";
        console.log('Inicio Controller...');
        $scope.vm = this;
    }
    InicioController.$inject = ["$scope"];
    return InicioController;
}());
//# sourceMappingURL=InicioController.js.map
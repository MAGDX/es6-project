var Piloto = (function () {
    function Piloto() {
        this._nombre = "piloto TODO set nombre";
    }
    Object.defineProperty(Piloto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    return Piloto;
}());
//# sourceMappingURL=piloto.js.map
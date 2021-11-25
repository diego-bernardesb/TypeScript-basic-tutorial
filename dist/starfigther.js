"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MillenniumFalcon = void 0;
var base_ship_1 = require("./base-ship");
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MillenniumFalcon.prototype.jumpToHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpToHyperspace.call(this);
        }
        else {
            console.log("Falha ao tentar entrar para o hyper espaço");
        }
    };
    return MillenniumFalcon;
}(base_ship_1.Spacecraft));
exports.MillenniumFalcon = MillenniumFalcon;
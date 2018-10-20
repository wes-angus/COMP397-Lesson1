var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        //public props
        //constructor
        function Ocean() {
            var _this = _super.call(this, "ocean", false) || this;
            //private inst. vars
            _this.__horizontalSpeed = 0;
            _this._verticalSpeed = 0;
            if (managers.Game.curState === config.Scene.LEVEL2 || managers.Game.curState === config.Scene.LEVEL3) {
                _this = _super.call(this, "ocean_h", false) || this;
            }
            _this.Start();
            return _this;
        }
        //private methods
        Ocean.prototype._move = function () {
            this.x += this.__horizontalSpeed;
            this.y += this._verticalSpeed;
        };
        Ocean.prototype._checkBounds = function () {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                if (this.x <= -800) {
                    this.Reset();
                }
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                if (this.x >= 0) {
                    this.Reset();
                }
            }
            else {
                if (this.y >= 0) {
                    this.Reset();
                }
            }
        };
        //public methods
        Ocean.prototype.Reset = function () {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this.x = 0;
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this.x = -800;
            }
            else {
                this.y = -960;
            }
        };
        Ocean.prototype.Destroy = function () {
        };
        Ocean.prototype.Start = function () {
            this.Reset();
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this.__horizontalSpeed = -5; //5px per frame
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this.__horizontalSpeed = 5; //5px per frame
            }
            else {
                this._verticalSpeed = 5; //5px per frame
            }
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
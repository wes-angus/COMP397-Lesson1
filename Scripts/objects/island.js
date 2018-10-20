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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        //public props
        //constructor
        function Island() {
            var _this = _super.call(this, "island", false) || this;
            //private inst. vars
            _this._horizontalSpeed = 0;
            _this._verticalSpeed = 0;
            _this.Start();
            return _this;
        }
        //private methods
        Island.prototype._move = function () {
            this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Island.prototype._checkBounds = function () {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                if (this.x < -this.Width) {
                    this.Reset();
                }
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                if (this.x > 640 + this.Width) {
                    this.Reset();
                }
            }
            else {
                if (this.y > 480 + this.Height) {
                    this.Reset();
                }
            }
        };
        //public methods
        Island.prototype.Reset = function () {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this._horizontalSpeed = -5;
                this.x = 640 + this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this._horizontalSpeed = 5;
                this.x = -this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else {
                this._verticalSpeed = 5;
                this.y = -this.Height;
                this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            }
            this.IsColliding = false;
        };
        Island.prototype.Destroy = function () {
        };
        Island.prototype.Start = function () {
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
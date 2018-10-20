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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        //public props
        //constructor
        function Cloud() {
            var _this = _super.call(this, "cloud", false) || this;
            _this.Start();
            return _this;
        }
        //private methods
        Cloud.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizSpeed;
            this._updatePosition();
        };
        Cloud.prototype._checkBounds = function () {
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
        Cloud.prototype.Reset = function () {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this._verticalSpeed = Math.floor(Math.random() * 4) - 2;
                this._horizSpeed = -(Math.floor(Math.random() * 5) + 5);
                this.x = 640 + this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this._verticalSpeed = Math.floor(Math.random() * 4) - 2;
                this._horizSpeed = Math.floor(Math.random() * 5) + 5;
                this.x = -this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else {
                this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
                this._horizSpeed = Math.floor(Math.random() * 4) - 2;
                this.y = -this.Height;
                this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            }
            this.IsColliding = false;
        };
        Cloud.prototype.Destroy = function () {
        };
        Cloud.prototype.Start = function () {
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map
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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //constructors
        function Player(x, y) {
            if (x === void 0) { x = 320; }
            if (y === void 0) { y = 435; }
            var _this = _super.call(this, "plane", true) || this;
            _this._speed = 5;
            _this.y = y;
            _this.x = x;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Player.prototype, "BulletSpawn", {
            get: function () {
                return this._bulletSpawn;
            },
            set: function (newSpawn) {
                this._bulletSpawn = newSpawn;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        Player.prototype.Move = function () {
            // this.x = managers.Game.stage.mouseX;
            var dir = -(this.rotation - 90);
            var degToRad = Math.PI / 180;
            if (managers.Input.moveRight) {
                this.x += this._speed;
            }
            if (managers.Input.moveLeft) {
                this.x -= this._speed;
            }
            if (managers.Input.moveBack) {
                this.y += this._speed;
            }
            if (managers.Input.moveForward) {
                this.y -= this._speed;
            }
            // Directional (tank) movement
            /* if(managers.Input.moveRight) {
                this.rotation += this._speed;
            }
            if(managers.Input.moveLeft) {
                this.rotation -= this._speed;
            }
            if(managers.Input.moveBack) {
                this.x -= Math.cos(dir * degToRad);
                this.y += Math.sin(dir * degToRad);
            }
            if(managers.Input.moveForward) {
                this.x += Math.cos(dir * degToRad);
                this.y -= Math.sin(dir * degToRad);
            } */
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        Player.prototype.Start = function () {
        };
        Player.prototype.Update = function () {
            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            else if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            this._updatePosition();
            this.BulletSpawn = new util.Vector2(this.x, this.y - this.HalfHeight - 2);
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
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
        function Player(y) {
            if (y === void 0) { y = 435; }
            var _this = _super.call(this, "plane") || this;
            _this.y = y;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Player.prototype.Start = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        };
        Player.prototype.Update = function () {
            this.x = managers.Game.stage.mouseX;
            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            else if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
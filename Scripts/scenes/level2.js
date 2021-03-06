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
var scenes;
(function (scenes) {
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        //public props
        //constructor
        function Level2() {
            var _this = _super.call(this) || this;
            _this._cloudNum = 2;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Level2.prototype.Reset = function () {
        };
        Level2.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
        };
        Level2.prototype.Start = function () {
            //Ocean background
            this._ocean = new objects.Ocean();
            //Player object
            this._player = new objects.Player();
            //Island object
            this._island = new objects.Island();
            //Create Cloud array
            this._clouds = new Array();
            //Fill Cloud array with clouds
            for (var i = 0; i < this._cloudNum; i++) {
                this._clouds.push(new objects.Cloud());
            }
            this._engineSound = createjs.Sound.play("engineSound", { volume: 0.1, loop: -1 });
            this.Main();
        };
        Level2.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            //Update each cloud in the array
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                if (!cloud.IsColliding) {
                    if (_this._player.checkIntersection(cloud)) {
                        cloud.IsColliding = true;
                    }
                }
            });
            if (!this._island.IsColliding) {
                if (this._player.checkIntersection(this._island)) {
                    this._island.IsColliding = true;
                }
            }
        };
        Level2.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._player);
            //Add each cloud in the array to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map
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
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        //public props
        //constructor
        function Level1() {
            var _this = _super.call(this) || this;
            _this._cloudNum = 2;
            _this.Start();
            return _this;
        }
        //private methods
        Level1.prototype.SetupInput = function () {
            this.on("mousedown", managers.Input.OnLeftMouseDown);
            managers.Input.Start();
            //this.on("mouseup", managers.Input.OnLeftMouseUp);
        };
        //public methods
        Level1.prototype.Reset = function () {
        };
        Level1.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
            managers.Input.Stop();
            this.off("mousedown", managers.Input.OnLeftMouseDown);
            //this.off("mouseup", managers.Input.OnLeftMouseUp);
            //TODO: Clean up bullet manager
        };
        Level1.prototype.Start = function () {
            //Ocean background
            this._ocean = new objects.Ocean();
            //Player object
            this._player = new objects.Player();
            managers.Game.player = this._player;
            //Island object
            this._island = new objects.Island();
            //Enemy object
            this._enemy = new objects.Enemy();
            //Create Cloud array
            this._clouds = new Array();
            //Fill Cloud array with clouds
            for (var i = 0; i < this._cloudNum; i++) {
                this._clouds.push(new objects.Cloud());
            }
            this._engineSound = createjs.Sound.play("engineSound", { volume: 0.1, loop: -1 });
            //Instantiate new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;
            this.SetupInput();
            this.Main();
        };
        Level1.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            this._enemy.Update();
            //Update each cloud in the array
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                if (!cloud.IsColliding) {
                    _this._player.checkCollision(cloud);
                }
            });
            if (!this._island.IsColliding) {
                this._player.checkCollision(this._island);
            }
            if (!this._enemy.IsColliding) {
                this._player.checkCollision(this._enemy);
            }
            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(function (bullet) {
                if (bullet.IsInPlay) {
                    _this._player.checkCollision(bullet);
                    _this._enemy.checkCollision(bullet);
                }
            });
        };
        Level1.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._enemy);
            this.addChild(this._player);
            //Add each bullet in the array to the scene
            this._bulletManager.Bullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            //Add each cloud in the array to the scene
            this._clouds.forEach(function (cloud) {
                _this.addChild(cloud);
            });
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map
var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        //constructor
        function Bullet() {
            this._currentBulletIndex = 0;
            this.Start();
        }
        Object.defineProperty(Bullet.prototype, "Bullets", {
            //public props
            get: function () {
                return this._bullets;
            },
            set: function (newBullets) {
                this._bullets = newBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "BulletNum", {
            get: function () {
                return this._bulletNum;
            },
            set: function (numOfBullets) {
                this._bulletNum = numOfBullets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "CurrentBullet", {
            get: function () {
                return this._bullets[this._currentBulletIndex];
            },
            set: function (newBullet) {
                this.CurrentBullet = newBullet;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        Bullet.prototype.Start = function () {
            //create the bullets array
            this._bullets = new Array();
            //fill up the bullets array
            for (var i = 0; i < this._bulletNum; i++) {
                this._bullets.push(new objects.Bullet());
            }
            //set the current bullet to the first bullet in the array
            this.CurrentBullet = this._bullets[this._currentBulletIndex];
        };
        Bullet.prototype.Update = function () {
            this._bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Bullet.prototype.FireBullet = function (spawnPoint, dir) {
            this.CurrentBullet.Position = spawnPoint;
            this.CurrentBullet.Direction = dir;
            this.CurrentBullet.IsInPlay = true;
            this._currentBulletIndex++;
            if (this._currentBulletIndex >= this._bullets.length) {
                this._currentBulletIndex = 0;
            }
            this.CurrentBullet = this.Bullets[this._currentBulletIndex];
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map
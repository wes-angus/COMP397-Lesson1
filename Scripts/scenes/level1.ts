module scenes {
    export class Level1 extends objects.Scene {
        //private inst. vars
        //Game objects
        private _player: objects.Player;
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudNum: number = 3;
        private _enemy: objects.Enemy;
        private _engineSound: createjs.AbstractSoundInstance;

        private _bulletManager: managers.Bullet;

        //public props

        //constructor
        constructor() {
            super();

            this.Start();
        }

        //private methods

        //public methods
        public Reset(): void {
        }

        public Destroy(): void {
            this.removeAllChildren();
            this._engineSound.stop();
            //TODO: Clean up bullet mananger
        }

        public Start(): void {
            //Ocean background
            this._ocean = new objects.Ocean();

            //Player object
            this._player = new objects.Player();

            //Island object
            this._island = new objects.Island();

            //Enemy object
            this._enemy = new objects.Enemy();

            //Create Cloud array
            this._clouds = new Array<objects.Cloud>();
            //Fill Cloud array with clouds
            for (let i = 0; i < this._cloudNum; i++) {
                this._clouds.push(new objects.Cloud());
            }

            this._engineSound = createjs.Sound.play("engineSound", { volume: 0.1, loop: -1 });

            //Instantiate new bullet manager
            this._bulletManager = new managers.Bullet();
            managers.Game.bulletManager = this._bulletManager;

            this.Main();
        }

        public Update(): void {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            this._enemy.Update();
            //Update each cloud in the array
            this._clouds.forEach(cloud => {
                cloud.Update();
                if (!cloud.IsColliding) {
                    this._player.checkIntersection(cloud);
                }
            });
            if (!this._island.IsColliding) {
                this._player.checkIntersection(this._island);
            }
            if (!this._enemy.IsColliding) {
                this._player.checkIntersection(this._enemy);
            }
            this._bulletManager.Update();
            this._bulletManager.Bullets.forEach(bullet => {
                if (bullet.IsInPlay) {
                    this._player.checkIntersection(bullet);
                }
            });
        }

        public Main(): void {
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._enemy);
            this.addChild(this._player);
            //Add each bullet in the array to the scene
            this._bulletManager.Bullets.forEach(bullet => {
                this.addChild(bullet);
            });
            //Add each cloud in the array to the scene
            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });

            managers.Game.scoreBoard.AddGameUI(this);
        }
    }
}
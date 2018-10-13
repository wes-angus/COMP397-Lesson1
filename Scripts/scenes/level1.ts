module scenes {
    export class Level1 extends objects.Scene {
        //private inst. vars
        //Game objects
        private _player: objects.Player;
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudNum: number = 3;
        private _scoreBoard: managers.ScoreBoard;

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
        }
        public Start(): void {
            //TODO: Remove this hack
            managers.Game.curScene = this;

            //Ocean background
            this._ocean = new objects.Ocean();

            //Player object
            this._player = new objects.Player();

            //Island object
            this._island = new objects.Island();

            //Create Cloud array
            this._clouds = new Array<objects.Cloud>();
            //Fill Cloud array with clouds
            for (let i = 0; i < this._cloudNum; i++) {
                this._clouds.push(new objects.Cloud());
            }

            this.Main();
        }
        public Update(): void {
            this._ocean.Update();
            this._player.Update();
            this._island.Update();
            //Update each cloud in the array
            this._clouds.forEach(cloud => {
                cloud.Update();
                if (!cloud.IsColliding) {
                    if (this._player.checkIntersection(cloud)) {
                        cloud.IsColliding = true;
                        console.log("Ran into a cloud :(");
                    }
                }
            });
            if (!this._island.IsColliding) {
                if (this._player.checkIntersection(this._island)) {
                    this._island.IsColliding = true;
                    console.log("Mail Delivered!");
                }
            }
        }
        public Main(): void {
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._player);
            //Add each cloud in the array to the scene
            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });

            this._scoreBoard = new managers.ScoreBoard();
        }
    }
}
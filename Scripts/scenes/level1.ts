module scenes {
    export class Level1 extends objects.Scene {
        //private inst. vars
        //Game objects
        private _player: objects.Player;
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudNum: number = 3;

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
            for (const cloud of this._clouds) {
                cloud.Update();
            }
        }
        public Main(): void {
            this.addChild(this._ocean);
            this.addChild(this._island);
            this.addChild(this._player);
            //Add each cloud in the array to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }
        }
    }
}
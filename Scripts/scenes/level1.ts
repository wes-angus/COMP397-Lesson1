module scenes {
    export class Level1 extends objects.Scene {
        //private inst. vars
        //Game objects
        private _player: objects.Player;
        private _ocean: objects.Ocean;

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
        }
        public Start(): void {
            this.Main();
        }
        public Update(): void {
            this._ocean.Update();
            this._player.Update();
        }
        public Main(): void {
            //Ocean background
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            //Player object
            this._player = new objects.Player();
            this.addChild(this._player);
        }
    }
}
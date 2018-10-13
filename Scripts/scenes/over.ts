module scenes {
    export class Over extends objects.Scene {
        //private inst. vars
        private _gameOverLbl: objects.Label;
        private _restartBtn: objects.Button;

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
            this._gameOverLbl = new objects.Label("Game Over", "60px", "Consolas", "#FF0000", 320, 240, true);
            this._restartBtn = new objects.Button("restartButton", 320, 360, true);

            this.Main();
        }
        public Update(): void {
        }
        public Main(): void {
            this.addChild(this._gameOverLbl);
            this.addChild(this._restartBtn);
            
            this._restartBtn.on("click", () => {
                managers.Game.curState = config.Scene.LEVEL1;
            });
        }
    }
}
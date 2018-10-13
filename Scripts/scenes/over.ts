module scenes {
    export class Over extends objects.Scene {
        //private inst. vars
        private _ocean: objects.Ocean;
        private _gameOverLbl: objects.Label;
        private _restartBtn: objects.Button;
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

            this._ocean = new objects.Ocean();
            this._gameOverLbl = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this._restartBtn = new objects.Button("restartButton", 320, 360, true);

            this.Main();
        }
        public Update(): void {
        }
        public Main(): void {
            this.addChild(this._ocean);
            this.addChild(this._gameOverLbl);
            this.addChild(this._restartBtn);
            
            this._restartBtn.on("click", () => {
                managers.Game.curState = config.Scene.LEVEL1;
            });

            this._scoreBoard = new managers.ScoreBoard(0, 0, managers.Game.highScore, true);
            managers.Game.scoreBoard = this._scoreBoard;
        }
    }
}
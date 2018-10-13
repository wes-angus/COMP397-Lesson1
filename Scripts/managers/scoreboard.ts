module managers {
    export class ScoreBoard {
        //private vars
        private _score: number;
        private _lives: number;
        private _highScore: number;

        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        private _curScene: objects.Scene;

        //public props
        get Score(): number {
            return this._score;
        }
        set Score(newVal: number) {
            this._score = newVal;
            this._scoreLabel.text = "Score: " + this._score;
            /*
            if(this._score > this._highScore)
            {
                this.HighScore = this._score;
            }
            */
        }

        get Lives(): number {
            return this._lives;
        }
        set Lives(newVal: number) {
            this._lives = newVal;
            this._livesLabel.text = "Lives: " + this._lives;
        }

        get HighScore(): number {
            return this._highScore;
        }
        set HighScore(newVal: number) {
            this._highScore = newVal;
            this._highScoreLabel.text = "High Score: " + this._highScore;
        }

        //constructor
        constructor(livesNum: number = 5, scoreNum: number = 0, highScoreNum: number = 0, isGameOver: boolean = false) {
            this._curScene = managers.Game.curScene;

            this.Start(isGameOver);

            this.Lives = livesNum;
            this.Score = scoreNum;
            this.HighScore = highScoreNum;
        }

        //private methods

        //public methods
        public Start(isGameOver: boolean): void {
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 350, 10, false);
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 10, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", 320, 140, true);
            this.Main(isGameOver);
        }

        public Main(isGameOver: boolean): void {
            if (!isGameOver) {
                managers.Game.curScene.addChild(this._scoreLabel);
                managers.Game.curScene.addChild(this._livesLabel);
            }
            else {
                managers.Game.curScene.addChild(this._highScoreLabel);
            }
        }
    }
}
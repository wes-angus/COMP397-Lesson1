module objects {
    export abstract class GameObject extends createjs.Bitmap {
        //private inst. vars
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;
        private _position: util.Vector2;
        private _isColliding: boolean;

        //public props
        get IsColliding(): boolean {
            return this._isColliding;
        }
        set IsColliding(newVal: boolean) {
            this._isColliding = newVal;
        }

        get Width(): number {
            return this._width;
        }
        set Width(newVal: number) {
            this._width = newVal;
            this._halfWidth = newVal * 0.5;
        }
        get HalfWidth() {
            return this._halfWidth;
        }

        get Height(): number {
            return this._height;
        }
        set Height(newVal: number) {
            this._height = newVal;
            this._halfHeight = newVal * 0.5;
        }
        get HalfHeight() {
            return this._halfWidth;
        }

        get Position(): util.Vector2 {
            return this._position;
        }
        set Position(newPos: util.Vector2) {
            this._position = newPos;
        }

        //constructors
        constructor(imageName: string, isCentered: boolean) {
            super(managers.Game.assetManager.getResult(imageName));
            this.name = imageName;

            this._init(isCentered);
        }

        //private methods
        private _init(isCentered: boolean): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Position = new util.Vector2(this.x, this.y);
            this.IsColliding = false;

            if (isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
        }

        protected _updatePosition(): void {
            this.Position.x = this.x;
            this.Position.y = this.y;
        }

        //Assumes other object is not centered
        public checkIntersection(other: GameObject): boolean {
            if (this.x - this.HalfWidth < other.x + other.Width &&
                this.x + this.HalfWidth > other.x &&
                this.y - this.HalfHeight < other.y + other.Height &&
                this.y + this.HalfHeight > other.y) {
                let sound: createjs.AbstractSoundInstance;

                switch (other.name) {
                    case "island":
                        sound = createjs.Sound.play("yaySound", { volume: 0.1 });
                        managers.Game.scoreBoard.Score += 100;
                        //Transition between levels
                        if (managers.Game.curState === config.Scene.LEVEL1) {
                            if (managers.Game.scoreBoard.Score > 499) {
                                managers.Game.curState = config.Scene.LEVEL2;
                            }
                        }
                        else if (managers.Game.curState === config.Scene.LEVEL2) {
                            if (managers.Game.scoreBoard.Score > 999) {
                                managers.Game.curState = config.Scene.LEVEL3;
                            }
                        }
                        //Update High Score
                        if (managers.Game.scoreBoard.Score > managers.Game.scoreBoard.HighScore) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                        break;
                    case "cloud":
                        sound = createjs.Sound.play("thunderSound", { volume: 0.1 });
                        managers.Game.scoreBoard.Lives--;
                        if (managers.Game.scoreBoard.Lives < 1) {
                            managers.Game.curState = config.Scene.OVER;
                        }
                        break;
                }
                return true;
            }
            return false;
        }

        //public methods
        public abstract Reset(): void;

        public abstract Destroy(): void;

        public abstract Start(): void;

        public abstract Update(): void;
    }
}
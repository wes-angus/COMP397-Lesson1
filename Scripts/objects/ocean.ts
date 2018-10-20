module objects {
    export class Ocean extends objects.GameObject {
        //private inst. vars
        private __horizontalSpeed: number = 0;
        private _verticalSpeed: number = 0;

        //public props

        //constructor
        constructor() {
            super("ocean", false);
            if (managers.Game.curState === config.Scene.LEVEL2 || managers.Game.curState === config.Scene.LEVEL3) {
                super("ocean_h", false);
            }

            this.Start();
        }

        //private methods
        _move(): void {
            this.x += this.__horizontalSpeed;
            this.y += this._verticalSpeed;
        }
        _checkBounds(): void {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                if (this.x <= -1440) {
                    this.Reset();
                }
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                if (this.x >= 0) {
                    this.Reset();
                }
            }
            else {
                if (this.y >= 0) {
                    this.Reset();
                }
            }
        }

        //public methods
        public Reset(): void {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this.x = 0;
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this.x = -1440;
            }
            else {
                this.y = -960;
            }
        }
        public Destroy(): void {

        }
        public Start(): void {
            this.Reset();
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this.__horizontalSpeed = -5; //5px per frame
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this.__horizontalSpeed = 5; //5px per frame
            }
            else {
                this._verticalSpeed = 5; //5px per frame
            }
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}
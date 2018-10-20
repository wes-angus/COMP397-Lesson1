module objects {
    export class Cloud extends objects.GameObject {
        //private inst. vars
        private _verticalSpeed: number;
        private _horizSpeed: number;

        //public props

        //constructor
        constructor() {
            super("cloud", false);

            this.Start();
        }

        //private methods
        _move(): void {
            this.y += this._verticalSpeed;
            this.x += this._horizSpeed;
            this._updatePosition();
        }
        _checkBounds(): void {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                if (this.x < -this.Width) {
                    this.Reset();
                }
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                if (this.x > 640 + this.Width) {
                    this.Reset();
                }
            }
            else {
                if (this.y > 480 + this.Height) {
                    this.Reset();
                }
            }
        }

        //public methods
        public Reset(): void {
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this._verticalSpeed = Math.floor(Math.random() * 4) - 2;
                this._horizSpeed = -(Math.floor(Math.random() * 5) + 5);
                this.x = 640 + this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this._verticalSpeed = Math.floor(Math.random() * 4) - 2;
                this._horizSpeed = Math.floor(Math.random() * 5) + 5;
                this.x = -this.Width;
                this.y = Math.floor(Math.random() * (480 - this.Height) + this.HalfHeight);
            }
            else {
                this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
                this._horizSpeed = Math.floor(Math.random() * 4) - 2;
                this.y = -this.Height;
                this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            }
            this.IsColliding = false;
        }
        public Destroy(): void {

        }
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}
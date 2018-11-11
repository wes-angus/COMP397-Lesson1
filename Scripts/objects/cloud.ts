module objects {
    export class Cloud extends objects.GameObject {
        //private inst. vars
        private _verticalSpeed: number;
        private _horizSpeed: number;

        //public props

        //constructor
        constructor() {
            super("cloud", true);
            this.scaleX = 0.75;
            this.scaleY = 0.75;
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.alpha = 0.75;

            this.Start();
        }

        //private methods
        _move(): void {
            this.y += this._verticalSpeed;
            this.x += this._horizSpeed;
            this._updatePosition();
        }
        _checkBounds(): void {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        }

        //public methods
        public Reset(): void {
            this._verticalSpeed = Math.floor(Math.random() * 5) + 5;
            this._horizSpeed = Math.floor(Math.random() * 4) - 2;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
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
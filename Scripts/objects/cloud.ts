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
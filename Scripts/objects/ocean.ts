module objects {
    export class Ocean extends objects.GameObject {
        //private inst. vars
        verticalSpeed: number;

        //public props

        //constructor
        constructor() {
            super("ocean", false);

            this.Start();
        }

        //private methods
        _move(): void {
            this.y += this.verticalSpeed;
        }
        _checkBounds(): void {
            if(this.y > -this.verticalSpeed)
            {
                this.Reset();
            }
        }

        //public methods
        public Reset(): void {
            this.y = -960;
        }
        public Destroy(): void {
            
        }
        public Start(): void {
            this.Reset();
            this.verticalSpeed = 5; //5px per frame
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}
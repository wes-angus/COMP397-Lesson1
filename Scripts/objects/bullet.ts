module objects {
    export class Bullet extends objects.GameObject {
        //private vars
        private _speed: number;
        private _direction: util.Vector2;
        private _inPlay: boolean;

        //public props
        get Direction(): util.Vector2 {
            return this._direction;
        }
        set Direction(newDir: util.Vector2) {
            this._direction = newDir;
        }

        get IsInPlay(): boolean {
            return this._inPlay;
        }
        set IsInPlay(newState: boolean) {
            this._inPlay = newState;
            if (!this._inPlay) {
                this.Reset();
            }
        }

        constructor() {
            super("bullet", false);

            this.Start();
        }

        //private methods
        _move(): void {
            this.y += util.Vector2.Mult(this.Direction, this._speed).y;
            this._updatePosition();
        }
        _checkBounds(): void {
            if (this.Position.y < 480 || this.Position.y < 0) {
                this.IsInPlay = false;
            }
        }

        //public methods
        public Reset(): void {
            this.x = -10000;
            this.y = -10000;
            this.Direction = util.Vector2.zero();
        }

        public Start(): void {
            this._speed = 10;
            this.IsInPlay = false;
        }

        public Update(): void {
            if (this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        }

        public Destroy(): void {

        }
    }
}
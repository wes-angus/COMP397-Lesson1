module objects {
    export class Player extends objects.GameObject {

        private _bulletSpawn: util.Vector2;
        
        get BulletSpawn(): util.Vector2 {
            return this._bulletSpawn;
        }
        set BulletSpawn(newSpawn: util.Vector2) {
            this._bulletSpawn = newSpawn;
        }

        //constructors
        constructor(y: number = 435) {
            super("plane", true);
            this.y = y;

            this.Start();
        }

        //private methods


        //public methods
        public Reset(): void {

        }
        public Destroy(): void {

        }
        public Start(): void {
            
        }
        public Update(): void {
            this.x = managers.Game.stage.mouseX;

            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            else if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }

            this._updatePosition();
            this.BulletSpawn = new util.Vector2(this.x, this.y - this.HalfHeight - 2);        
        }
    }
}
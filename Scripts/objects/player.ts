module objects {
    export class Player extends objects.GameObject {

        private _bulletSpawn: util.Vector2;
        private _speed: number = 5;
        
        get BulletSpawn(): util.Vector2 {
            return this._bulletSpawn;
        }
        set BulletSpawn(newSpawn: util.Vector2) {
            this._bulletSpawn = newSpawn;
        }

        //constructors
        constructor(x: number = 320, y: number = 435) {
            super("plane", true);
            this.y = y;
            this.x = x;

            this.Start();
        }

        //private methods


        //public methods
        public Move():void {
            // this.x = managers.Game.stage.mouseX;
            let dir = -(this.rotation-90);
            let degToRad = Math.PI / 180;

            if(managers.Input.moveRight) {
                this.x += this._speed;
            }
            if(managers.Input.moveLeft) {
                this.x -= this._speed;
            }
            if(managers.Input.moveBack) {
                this.y += this._speed;
            }
            if(managers.Input.moveForward) {
                this.y -= this._speed;
            }

            // Directional (tank) movement
            /* if(managers.Input.moveRight) {
                this.rotation += this._speed;
            }
            if(managers.Input.moveLeft) {
                this.rotation -= this._speed;
            }
            if(managers.Input.moveBack) {
                this.x -= Math.cos(dir * degToRad);
                this.y += Math.sin(dir * degToRad);
            }
            if(managers.Input.moveForward) {
                this.x += Math.cos(dir * degToRad);
                this.y -= Math.sin(dir * degToRad);
            } */
        }
        public Reset(): void {

        }
        public Destroy(): void {

        }
        public Start(): void {
            
        }
        public Update(): void {
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
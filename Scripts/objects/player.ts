module objects {
    export class Player extends objects.GameObject {

        private _bulletSpawn: util.Vector2;
        private _horiSpeed: number = 10;
        private _vertSpeed: number = 8;
        
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

            /* if(managers.Input.gamePadManager.Axis[config.GamePad.LS_HORIZONTAL] > 0) {
                this.x += this._horiSpeed;
            }
            if(managers.Input.gamePadManager.Axis[config.GamePad.LS_HORIZONTAL] < 0) {
                this.x -= this._horiSpeed;
            }
            if(managers.Input.gamePadManager.Axis[config.GamePad.LS_VERTICAL] > 0) {
                this.x += this._vertSpeed;
            }
            if(managers.Input.gamePadManager.Axis[config.GamePad.LS_VERTICAL] < 0) {
                this.x -= this._vertSpeed;
            } */

            if(managers.Input.moveRight) {
                this.x += this._horiSpeed;
            }
            if(managers.Input.moveLeft) {
                this.x -= this._horiSpeed;
            }
            if(managers.Input.moveBack) {
                this.y += this._vertSpeed;
            }
            if(managers.Input.moveForward) {
                this.y -= this._vertSpeed;
            }

            // Directional (tank) movement
            /* let dir = -(this.rotation-90);
            let degToRad = Math.PI / 180;
            
            if(managers.Input.moveRight) {
                this.rotation += this._vertSpeed;
            }
            if(managers.Input.moveLeft) {
                this.rotation -= this._vertSpeed;
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
            this.Move();

            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            else if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
            if (this.y > 480 - this.HalfWidth) {
                this.y = 480 - this.HalfWidth;
            }
            else if (this.y < this.HalfWidth) {
                this.y = this.HalfWidth;
            }

            this._updatePosition();
            this.BulletSpawn = new util.Vector2(this.x, this.y - this.HalfHeight - 2);        
        }
    }
}
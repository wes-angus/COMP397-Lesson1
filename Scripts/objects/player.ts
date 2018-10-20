module objects {
    export class Player extends objects.GameObject {

        //constructors
        constructor(x: number = 45, y: number = 435) {
            super("plane", true);
            if (managers.Game.curState === config.Scene.LEVEL2) {
                this.x = x;
                this.rotation = 90;
            }
            else if (managers.Game.curState === config.Scene.LEVEL3) {
                this.x = 640 - x;
                this.rotation = 270;
            }
            else {
                this.y = y;
            }

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
            if (managers.Game.curState === config.Scene.LEVEL2 || managers.Game.curState === config.Scene.LEVEL3) {
                this.y = managers.Game.stage.mouseY;

                if (this.y > 480 - this.HalfHeight) {
                    this.y = 480 - this.HalfHeight;
                }
                else if (this.y < this.HalfHeight) {
                    this.y = this.HalfHeight;
                }
            }
            else {
                this.x = managers.Game.stage.mouseX;

                if (this.x > 640 - this.HalfWidth) {
                    this.x = 640 - this.HalfWidth;
                }
                else if (this.x < this.HalfWidth) {
                    this.x = this.HalfWidth;
                }
            }

            this._updatePosition();
        }
    }
}
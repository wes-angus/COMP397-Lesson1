module objects {
    export class Player extends objects.GameObject {

        //constructors
        constructor(y: number = 435) {
            super("plane");

            this.y = y;

            this.Start();
        }

        //private methods

        //public methods
        public Start(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update(): void {
            this.x = managers.Game.stage.mouseX;

            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            else if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }
    }
}
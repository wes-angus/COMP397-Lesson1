module objects {
    export class Player extends objects.GameObject {

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
        }

        //Assumes both objects are centered
        public checkIntersection(other: GameObject): boolean {
            if (this.x - this.HalfWidth < other.x + other.Width &&
                this.x + this.HalfWidth > other.x &&
                this.y - this.HalfHeight < other.y + other.Height &&
                this.y + this.HalfHeight > other.y) {
                    switch(other.name) {
                        case "island":
                        createjs.Sound.play("yaySound");
                        console.log("yaySound.play");
                        break;
                        case "cloud":
                        createjs.Sound.play("thunderSound");
                        console.log("thunderSound.play")
                        break;
                    }
                    return true;
            }
            return false;
        }
    }
}
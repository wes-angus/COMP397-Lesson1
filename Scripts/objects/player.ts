module objects {
    export class Player extends createjs.Bitmap {
        //private inst. vars
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;

        //public props
        get Width(): number {
            return this._width;
        }
        set Width(newVal: number) {
            this._width = newVal;
            this._halfWidth = newVal * 0.5;
        }
        get HalfWidth() {
            return this._halfWidth;
        }

        get Height(): number {
            return this._height;
        }
        set Height(newVal: number) {
            this._height = newVal;
            this._halfHeight = newVal * 0.5;
        }
        get HalfHeight() {
            return this._halfWidth;
        }

        //constructors
        constructor(y: number = 435) {
            super(managers.Game.assetManager.getResult("plane"));

            this.y = y;

            this.Start();
        }

        //private methods

        //public methods
        public Start(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.regX = this._halfWidth;
            this.regY = this._halfHeight;
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
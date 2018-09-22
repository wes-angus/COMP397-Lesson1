module objects {
    export class Button extends createjs.Bitmap {
        //private instance vars
        private _width: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;

        //public properties
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

        //constructor

        /**
         * Creates an instance of Button.
         * @param imageId 
         * @param x 
         * @param y 
         * @param isCentered 
         */
        constructor(imageId: string, x: number = 0, y: number = 0, isCentered: boolean = false) {
            super(managers.Game.assetManager.getResult(imageId));

            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;

            if (isCentered) {
                this.regX = this._halfWidth;
                this.regY = this._halfHeight;
            }

            this.x = x;
            this.y = y;

            //event listeners
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }

        //private methods
        private _over(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }

        private _out(event: createjs.MouseEvent): void {
            this.alpha = 1;
        }

        //public methods
    }
}
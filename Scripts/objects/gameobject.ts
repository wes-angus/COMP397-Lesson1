module objects {
    export abstract class GameObject extends createjs.Bitmap {
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
        constructor(imageId: string) {
            super(managers.Game.assetManager.getResult(imageId));

            this._init();
        }

        //private methods
        private _init(): void {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
        }

        //public methods
        public Reset(): void {

        }

        public Destroy() : void {

        }

        public Start(): void {
            
        }

        public Update(): void {
            
        }
    }
}
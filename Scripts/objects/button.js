var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        //constructor
        /**
         * Creates an instance of Button.
         * @param imageString
         * @param x
         * @param y
         * @param isCentered
         */
        function Button(imageString, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imageString) || this;
            _this.Width = _this.getBounds().width;
            _this.Height = _this.getBounds().height;
            if (isCentered) {
                _this.regX = _this._halfWidth;
                _this.regY = _this._halfHeight;
            }
            _this.x = x;
            _this.y = y;
            //event listeners
            _this.on("mouseover", _this._over);
            _this.on("mouseout", _this._out);
            return _this;
        }
        Object.defineProperty(Button.prototype, "Width", {
            //public properties
            get: function () {
                return this._width;
            },
            set: function (newVal) {
                this._width = newVal;
                this._halfWidth = newVal * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newVal) {
                this._height = newVal;
                this._halfHeight = newVal * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "HalfHeight", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        Button.prototype._over = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._out = function (event) {
            this.alpha = 1;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
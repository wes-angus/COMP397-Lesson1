var managers;
(function (managers) {
    var GamePad = /** @class */ (function () {
        // constructor
        function GamePad(gamepadIndex) {
            this.Axis = new Array();
            this.Buttons = new Array();
            this.Direction = 0;
            this._gamepadIndex = gamepadIndex;
        }
        Object.defineProperty(GamePad.prototype, "Direction", {
            // public props
            get: function () {
                return this._direction;
            },
            set: function (newDir) {
                this._direction = newDir;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GamePad.prototype, "Axis", {
            get: function () {
                return this._axis;
            },
            set: function (newAxisArray) {
                this._axis = newAxisArray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GamePad.prototype, "Buttons", {
            get: function () {
                return this._buttons;
            },
            set: function (newButtonsArray) {
                this._buttons = newButtonsArray;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        GamePad.prototype.GetInput = function () {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if (this._gamepad) {
                //check buttons
                for (var index = 0; index < this._gamepad.buttons.length; index++) {
                    var button = this._gamepad.buttons[index];
                    if (button.pressed) {
                        console.log("button " + index + " pressed");
                        this.Buttons[index] = true;
                    }
                    else {
                        this.Buttons[index] = false;
                    }
                }
                //check axes
                for (var index = 0; index < this._gamepad.axes.length; index++) {
                    var axis = this._gamepad.axes[index];
                    if (axis > 0.2 || axis < -0.2) {
                        console.log("axis " + index);
                        this.Axis[index] = axis;
                        /* if (index == config.GamePad.LS_HORIZONTAL) {
                            console.log("left stick - left and right");
                        }
                        if (index == config.GamePad.LS_VERTICAL) {
                            console.log("right stick - up and down");
                        } */
                    }
                    if (axis > -0.2 || axis < 0.2) {
                        this.Axis[index] = 0; // dead zone
                    }
                }
            }
        };
        return GamePad;
    }());
    managers.GamePad = GamePad;
})(managers || (managers = {}));
//# sourceMappingURL=gamepad.js.map
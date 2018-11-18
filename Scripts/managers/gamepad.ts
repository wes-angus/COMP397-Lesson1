module managers {
    export class GamePad {
        // private vars
        private _gamepad: Gamepad;
        private _gamepadIndex: number;
        private _direction: number;
        private _axis: number[];
        private _buttons: boolean[];

        // public props
        get Direction(): number {
            return this._direction;
        }
        set Direction(newDir: number) {
            this._direction = newDir;
        }

        get Axis(): number[] {
            return this._axis;
        }
        set Axis(newAxisArray: number[]) {
            this._axis = newAxisArray;
        }

        get Buttons(): boolean[] {
            return this._buttons;
        }
        set Buttons(newButtonsArray: boolean[]) {
            this._buttons = newButtonsArray;
        }

        // constructor
        constructor(gamepadIndex: number) {
            this.Axis = new Array<number>();
            this.Buttons = new Array<boolean>();
            this.Direction = 0;
            this._gamepadIndex = gamepadIndex;
        }

        //private methods

        //public methods
        public GetInput(): void {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if (this._gamepad) {
                //check buttons
                for (let index = 0; index < this._gamepad.buttons.length; index++) {
                    const button: GamepadButton = this._gamepad.buttons[index];

                    if (button.pressed) {
                        console.log("button " + index + " pressed");
                        this.Buttons[index] = true;
                    }
                    else {
                        this.Buttons[index] = false;
                    }
                }

                //check axes
                for (let index = 0; index < this._gamepad.axes.length; index++) {
                    const axis: number = this._gamepad.axes[index];
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
        }
    }
}
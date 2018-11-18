var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.Start = function () {
            this.gamePadManager = new managers.GamePad(0);
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        };
        Input.Stop = function () {
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        };
        Input.onKeyDown = function (evt) {
            switch (evt.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = true;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBack = true;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = true;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = true;
                    break;
                case config.Key.SPACEBAR:
                    this.jump = true;
                    break;
                case config.Key.P:
                    this.enabled = !this.enabled;
            }
        };
        Input.onKeyUp = function (evt) {
            switch (evt.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = false;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBack = false;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = false;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = false;
                    break;
                case config.Key.SPACEBAR:
                    this.jump = false;
                    break;
            }
        };
        Input.OnLeftMouseDown = function (evt) {
            if (evt.nativeEvent.button === 0) {
                this.LeftButtonDown = true;
                evt.nativeEvent.preventDefault();
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }
        };
        Input.OnLeftMouseUp = function (evt) {
            if (evt.nativeEvent.button === 0) {
                this.LeftButtonDown = false;
                console.log(this.LeftButtonDown);
            }
        };
        Input.LeftButtonDown = false;
        Input.jump = false;
        Input.moveBack = false;
        Input.moveForward = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.enabled = true;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map
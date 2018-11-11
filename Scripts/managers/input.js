var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
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
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map
module managers {
    export class Input {
        public static LeftButtonDown: boolean;

        public static OnLeftMouseDown(evt: any): void {
            if (evt.nativeEvent.button === 0) {
                this.LeftButtonDown = true;
                evt.nativeEvent.preventDefault();
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }
        }

        public static OnLeftMouseUp(evt: any): void {
            if (evt.nativeEvent.button === 0) {
                this.LeftButtonDown = false;
                console.log(this.LeftButtonDown);
            }
        }
    }
}
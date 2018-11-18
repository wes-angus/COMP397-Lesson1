module managers {
    export class Input {
        public static LeftButtonDown: boolean = false;
        public static jump: boolean = false;
        public static moveBack: boolean = false;
        public static moveForward: boolean = false;
        public static moveLeft: boolean = false;
        public static moveRight: boolean = false;
        public static enabled: boolean = true;
        public static gamePadManager: GamePad;

        public static Start(): void {
            this.gamePadManager = new GamePad(0);

            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        public static Stop(): void {
            document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
            document.removeEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        public static onKeyDown(evt: KeyboardEvent) {
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
        }
        public static onKeyUp(evt: KeyboardEvent) {
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
        }

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
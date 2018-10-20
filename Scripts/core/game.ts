//IIFE - Immediately Invoked Function Expression
(function () {
    //function-scoped (game) variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let assetManager: createjs.LoadQueue;

    let curScene: objects.Scene;
    let curState: config.Scene;

    let scoreBoard: managers.ScoreBoard;

    let assetManifest = [
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "restartButton", src: "./Assets/images/restartButton.png" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "cloud", src: "./Assets/images/cloud.png" },
        { id: "island", src: "./Assets/images/island.png" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "ocean_h", src: "./Assets/images/ocean_h.gif" },
        { id: "engineSound", src: "./Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" }
    ];

    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; //global reference to assetManager
        assetManager.installPlugin(createjs.Sound); //enable sound preloading
        assetManager.loadManifest(assetManifest); //preloads assets listed in the manifest
        assetManager.on("complete", Start); //call Start when assets are finished loading
    }

    function Start(): void {
        console.log(`%c Game Started...`, "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; //global ref. to stage
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        //Setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;

        //Setup initial scene
        curState = config.Scene.START;
        managers.Game.curState = curState;
        Main();
    }

    //main game loop
    function Update(): void {
        curScene.Update();

        if (curState != managers.Game.curState) {
            curState = managers.Game.curState;
            Main();
        }

        stage.update();
    }

    function Main(): void {
        if (curScene) {
            curScene.Destroy();
            stage.removeAllChildren();
        }
        switch (curState) {
            case config.Scene.START:
                curScene = new scenes.Start();
                break;
            case config.Scene.LEVEL1:
                curScene = new scenes.Level1();
                break;
            case config.Scene.LEVEL2:
                curScene = new scenes.Level2();
                break;
            case config.Scene.LEVEL3:
                curScene = new scenes.Level3();
                break;
            case config.Scene.OVER:
                curScene = new scenes.Over();
                break;
        }

        stage.addChild(curScene);
    }

    window.addEventListener("load", Init);
})();
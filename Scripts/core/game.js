//IIFE - Immediately Invoked Function Expression
(function () {
    //function-scoped (game) variables
    var canvas;
    var stage;
    var assetManager;
    var curScene;
    var curState;
    var assetManifest = [
        { id: "clickMeButton", src: "/Assets/images/clickMeButton.png" },
        { id: "plane", src: "/Assets/images/plane.png" },
        { id: "cloud", src: "/Assets/images/cloud.png" },
        { id: "island", src: "/Assets/images/island.png" },
        { id: "ocean", src: "/Assets/images/ocean.gif" },
        { id: "engineSound", src: "/Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "/Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "/Assets/audio/yay.ogg" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; //global reference to assetManager
        assetManager.installPlugin(createjs.Sound); //enable sound preloading
        assetManager.loadManifest(assetManifest); //preloads assets listed in the manifest
        assetManager.on("complete", Start); //call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; //global ref. to stage
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    //main game loop
    function Update() {
        curScene.Update();
        stage.update();
    }
    function Main() {
        //add the scene to the stage
        curScene = new scenes.Level1();
        stage.addChild(curScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map
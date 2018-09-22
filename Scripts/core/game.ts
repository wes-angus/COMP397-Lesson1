//IIFE - Immediately Invoked Function Expression
(function () {
    //function-scoped (game) variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let clickMeButton: objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest = [
        { id: "clickMeButton", src: "/Assets/images/clickMeButton.png" }
    ];

    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; //global reference to assetManager
        assetManager.installPlugin(createjs.Sound); //enable sound preloading
        assetManager.loadManifest(assetManifest); //preloads assets listed in the manifest
        assetManager.on("complete", Start); //call Start when assets are finished loading
    }

    function Start(): void {
        console.log(`%c Game Somewhat Started...`, "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    //main game loop
    function Update(): void {
        //helloLabel.rotation += 5;
        stage.update();
    }

    function Main(): void {
        helloLabel = new objects.Label("Hello, World!", "60px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);

        clickMeButton = new objects.Button("clickMeButton", 320, 360, true);
        stage.addChild(clickMeButton);

        clickMeButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });
    }

    window.addEventListener("load", Init);
})();
//IIFE - Immediately Invoked Function Expression
(function () {
    //function-scoped (game) variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;
    let clickMeButton: createjs.Bitmap;

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
        helloLabel.rotation += 5;
        stage.update();
    }

    function Main(): void {
        helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getBounds().width * 0.5;
        helloLabel.regY = helloLabel.getBounds().height * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

        clickMeButton = new createjs.Bitmap("/Assets/images/clickMeButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 360;
        stage.addChild(clickMeButton);

        clickMeButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });

        clickMeButton.on("mouseover", function () {
            clickMeButton.alpha = 0.7;
        });

        clickMeButton.on("mouseout", function () {
            clickMeButton.alpha = 1.0;
        });
    }

    window.addEventListener("load", Start);
})();
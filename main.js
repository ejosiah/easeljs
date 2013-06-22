var stage;
var logo;
var g;
var Stage = createjs.Stage;
var Graphics = createjs.Graphics;
var Ticker = createjs.Ticker;
var Shape = createjs.Shape;

window.onload = function(){
	var convas = document.getElementById('canvas');
	stage = new Stage(canvas);
	
	g = new Graphics();
	g.setStrokeStyle(1);
	g.beginStroke(Graphics.getRGB(0, 0, 0));

	var s = new Shape(g);
	s.width = 640;
	s.height = 480;
	stage.addChild(s);

	logo = new createjs.Bitmap('img/html5.png');
	logo.regX = logo.image.width * 0.5;
	logo.regX = logo.image.height * 0.5;
	stage.addChild(logo);

	Ticker.setFPS(60);
	Ticker.addListener(window);
}

function tick(){
	logo.x += (stage.mouseX - logo.x) * 0.1;
	logo.y += (stage.mouseY - logo.y) * 0.1;
	g.lineTo(logo.x, logo.y);
	stage.update();
}
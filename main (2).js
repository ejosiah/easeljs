var Stage = createjs.Stage;
var Shape = createjs.Shape;
var Bitmap = createjs.Bitmap;
var Ticker = createjs.Ticker;
var Graphics = createjs.Graphics;

var stage, graphics, shape, wand;
var xOffset = 88;

window.onload = function(){
	var canvas = document.getElementById('canvas');
	stage = new Stage(canvas);
	
	wand = new Bitmap("wand.png");
	wand.regX = wand.width * 0.5;
	wand.regY = wand.height * 0.5;
	stage.addChild(wand);

	shape = new Shape();
	shape.width = stage.width;
	shape.height = stage.height;
	graphics = shape.graphics;
	graphics.setStrokeStyle(1);
	graphics.beginStroke(Graphics.getRGB(0,0,0));
	stage.addChild(shape);

	Ticker.setFPS(60);
	Ticker.addListener(window);
}

function tick(){
	wand.x += (stage.mouseX - wand.x) * 0.1;
	wand.y += (stage.mouseY - wand.y) * 0.1;
	graphics.lineTo(wand.x + xOffset, wand.y);
	stage.update();
}
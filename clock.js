(function(){

	// imports
	var Container = createjs.Container;
	var Bitmap = createjs.Bitmap;
	var Shadow = createjs.Shadow;


	var self, 
		shadow = new Shadow('#000', 0, 5, 4);

	var Clock = function(stageWidth, stageHeight){
		this.initialize(stageWidth, stageHeight);
	}

	var p = Clock.prototype = new Container();

	p.Container_initialize = p.initialize;

	p.initialize = function(stageWidth, stageHeight){
		self = this;
		

		self.Container_initialize();
		self.centerX = stageWidth * 0.5;
		self.centerY = stageHeight * 0.5;

		self.secondHand = secondHand();
		self.minuteHand = minuteHand();
		self.hourHand = hourHand();
		self.background = background();

		self.addChild(self.background);
		self.addChild(self.hourHand);
		self.addChild(self.minuteHand);
		self.addChild(self.secondHand);
		self.addEventListener('tick', self.tickHandler);


	};

	function secondHand(){
		var secondHand = new Bitmap('second.png');
		secondHand.regX = secondHand.image.width * 0.5;
		secondHand.regY = secondHand.image.height * 0.83;
		secondHand.x = self.centerX;
		secondHand.y = self.centerY;
		secondHand.shadow = shadow

		return secondHand;
	}

	function minuteHand(){
		var minuteHand = new Bitmap('minute.png');
		minuteHand.regX = minuteHand.image.width * 0.5;
		minuteHand.regY = minuteHand.image.height * 0.91;
		minuteHand.x = self.centerX;
		minuteHand.y = self.centerY;
		minuteHand.shadow = shadow;

		return minuteHand;
	}

	function hourHand(){
		var hourHand = new Bitmap('hour.png');
		hourHand.regX = hourHand.image.width * 0.5;
		hourHand.regY = hourHand.image.height * 0.89;
		hourHand.x = self.centerX;
		hourHand.y = self.centerY;
		hourHand.shadow = shadow;

		return hourHand;
	}

	function background(){
		var background = new Bitmap('clock_bg.png');
		background.regX = background.image.width * 0.5;
		background.regY = background.image.height * 0.5;
		background.x = self.centerX;
		background.y = self.centerY;
		background.shadow = new Shadow('#000', 0, 5, 4);;
		return background;
	}

	p.tickHandler = function(event){
		var time = new Date(), sAngle, mAngle, hAngle; 

		sAngle = time.getSeconds() * 6;
		mAngle = time.getMinutes() * 6;
		hAngle = (time.getHours() % 12) * 30 + (time.getMinutes() * 0.5);

		self.secondHand.rotation = sAngle;
		self.hourHand.rotation = hAngle;
		self.minuteHand.rotation = mAngle

	}
	window.Clock = Clock;
}());
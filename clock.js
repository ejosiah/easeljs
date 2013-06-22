(function(){

	// imports
	var Container = createjs.Container;
	var Bitmap = createjs.Bitmap;
	var self;

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

		self.secondHand = new Bitmap('second.png');
		self.secondHand.regX = self.secondHand.image.width * 0.5;
		self.secondHand.regY = self.secondHand.image.height * 0.83;
		self.secondHand.x = self.centerX;
		self.secondHand.y = self.centerY;


		self.minuteHand = new Bitmap('minute.png');
		self.minuteHand.regX = self.minuteHand.image.width * 0.5;
		self.minuteHand.regY = self.minuteHand.image.height * 0.91;
		self.minuteHand.x = self.centerX;
		self.minuteHand.y = self.centerY;

		self.hourHand = new Bitmap('hour.png');
		self.hourHand.regX = self.hourHand.image.width * 0.5;
		self.hourHand.regY = self.hourHand.image.height * 0.89;
		self.hourHand.x = self.centerX;
		self.hourHand.y = self.centerY;

		self.background = new Bitmap('clock_bg.png');
		self.background.regX = self.background.image.width * 0.5;
		self.background.regY = self.background.image.height * 0.5;
		self.background.x = self.centerX;
		self.background.y = self.centerY;

		self.addChild(self.background);
		self.addChild(self.hourHand);
		self.addChild(self.minuteHand);
		self.addChild(self.secondHand);
		self.addEventListener('tick', self.tickHandler);


	};

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
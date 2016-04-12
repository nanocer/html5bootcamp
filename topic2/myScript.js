

function Logger(mov){
	this.mov = mov;
}

Logger.prototype.show = function(){
	console.log("Movie "+this.mov.title	+ " created");
}

function Movie(id, title, year, duration){
	this.id = id;
	this.title = title;
	this.year = year;
	duration.duration = duration;
	this.actor = [];
	this.cast = [];
}

function Actor(name, age){
	this.name = name;
	this.age = age;
}


function EventEmitter(){

}

Movie.prototype = Object.create(EventEmitter.prototype);
Movie.prototype.constructor = Movie;

Actor.prototype = Object.create(EventEmitter.prototype);
Actor.prototype.constructor = Actor;


EventEmitter.prototype.on = function(action, log1){

	document.getElementById("playSW").addEventListener("click", this.emit);
	document.getElementById("pauseSW").addEventListener("click", this.emit);
	document.getElementById("resumeSW").addEventListener("click", this.emit);

	document.getElementById("playT").addEventListener("click", this.emit);
	document.getElementById("pauseT").addEventListener("click", this.emit);
	document.getElementById("resumeT").addEventListener("click", this.emit);

	log1.show();

}

EventEmitter.prototype.emit = function(action){
	document.getElementById("demo").innerHTML = action.target.value;
	
}

EventEmitter.prototype.off = function(){

	document.getElementById("playSW").removeEventListener("click", this.emit);
	document.getElementById("pauseSW").removeEventListener("click", this.emit);
	document.getElementById("resumeSW").removeEventListener("click", this.emit);

	document.getElementById("playT").removeEventListener("click", this.emit);
	document.getElementById("pauseT").removeEventListener("click", this.emit);
	document.getElementById("resumeT").removeEventListener("click", this.emit);

	document.getElementById("demo").innerHTML = ("Listeners off");	


}

Movie.prototype.play = function(){
	console.log("Playing "+this.title);
}

Movie.prototype.pause = function(){
	console.log(this.title+" is paused");
}

Movie.prototype.resume = function(){
	console.log("Resuming "+this.title);
}

Movie.prototype.addActor = function(actor){
	this.actor = actor;
}

Movie.prototype.addCast = function(cast){
	this.cast = cast;
}

Movie.prototype.showCast = function(){
	console.log(this.actor.name);
	console.log(this.cast[0].name);
	console.log(this.cast[1].name);
	console.log(this.cast[2].name);
	document.getElementById(this.id+"cast").innerHTML = this.actor.name+" , "+
														this.cast[0].name+" , "+
														this.cast[1].name+" , "+
														this.cast[2].name;

}

var starwars = new Movie("sw","Star Wars", "2015", "120");
var titanic = new Movie("tit","Titanic", "1997", "120");
var hford = new Actor("Harrison Ford", "70");
var castStarWars = [
 new Actor('Daisy Ridley', 50),
 new Actor('John Boyega', 50),
 new Actor('Adam Driver', 50)
];
var dicaprio = new Actor("Leonardo Di Caprio", "30");
var castTitanic = [
 new Actor('Kate Winslet', 50),
 new Actor('Billy Zane', 50),
 new Actor('Gloria Stuart', 50)
];

starwars.addActor(hford);
starwars.addCast(castStarWars);
titanic.addActor(dicaprio);
titanic.addCast(castTitanic);


function createMovie(){
	

	document.getElementById("title1").innerHTML = starwars.title;
	var newLog = new Logger(starwars);
	starwars.on("create", newLog);

	
	document.getElementById("title2").innerHTML = titanic.title;
	var newLog2 = new Logger(titanic);
	titanic.on("create", newLog2);

}

function cancel(){
	starwars.off();
}

var Social = {
			share: function(friend){
				document.getElementById("share1").addEventListener("click", function(){
				friend = document.getElementById("friend1").value;
				document.getElementById("desc1").innerHTML= "Share " + starwars.title+" with " + friend;
				});
				document.getElementById("share2").addEventListener("click", function(){
				friend = document.getElementById("friend2").value;
				document.getElementById("desc2").innerHTML= "Share " + titanic.title+" with " + friend;
				});
			},
			like: function(friend){
				document.getElementById("like1").addEventListener("click", function(){
				friend = document.getElementById("friend1").value;
				document.getElementById("desc1").innerHTML= friend +" likes "+ starwars.title;
				});
				document.getElementById("like2").addEventListener("click", function(){
					friend = document.getElementById("friend2").value;
					document.getElementById("desc2").innerHTML= friend +" likes "+ titanic.title;
				});
			}
}

var soc = Object.assign(Movie.prototype, Social);


var Sportsman = function(strategy) {
    this.strategy = strategy;
};

Sportsman.prototype.action = function() {
    return this.strategy();
};

var run = function() {
    console.log("Sportsman is running.");
};
 
var jump = function() {
    console.log("Sportsman is jumping.");
};
 
var stop = function() {
    console.log("Sportsman is stopping.");
};
 
 
var runSportsman = new Sportsman(run);
var jumpSportsman = new Sportsman(jump);
var stopSportsman = new Sportsman(stop);
 
runSportsman.action(); 
jumpSportsman.action(); 
stopSportsman.action();

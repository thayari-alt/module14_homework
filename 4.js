function Device(name) {
	this.name = name
}

function Computer(name) {
	this.name = name,
	this.playGame = function() {
		console.log('Game launched.')
	}
}

function Kettle(name) {
	this.name = name,
	this.boil = function() {
		console.log(`The ${name} is boiling.`)
	}
}

function Lamp(name) {
	this.name = name,
	this.shine = function() {
		console.log(`The ${name} is shining.`)
	}
}

Computer.prototype = new Device()
Kettle.prototype = new Device()
Lamp.prototype = new Device()

Device.prototype.turnOn = function(name) {
	console.log(`The ${name} is turned on.`)
}

Device.prototype.turnOff = function(name) {
	console.log(`The ${name} is turned оff.`)
}


const kettle = new Kettle('kettle')
const lamp = new Lamp('lamp')
const computer = new Computer('computer')
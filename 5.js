class Device {
	constructor(name) {
		this.name = name
		this.power = false
	}

	turnOn() {
		if (this.power) {
			console.log(`The ${this.name} is already turned on.`)
		}
		else {
			this.power = true
			console.log(`The ${this.name} is turned on.`)
		}
	}

	turnOff() {
		if (!this.power) {
			console.log(`The ${this.name} is already turned off.`)
		}
		else {
			this.power = false
			console.log(`The ${this.name} is turned off.`)
		}
	}
}

class Computer extends Device {
	constructor(name) {
		super(name)
	}

	playGame() {
		console.log('Game launched.')
	}
}

class Kettle extends Device {
	constructor(name) {
		super(name)
	}

	boil() {
		console.log(`The ${this.name} is boiling.`)
	}
}

class Lamp extends Device {
	constructor(name) {
		super(name)
	}

	shine() {
		console.log(`The ${this.name} is shining.`)
	}
}

const kettle = new Kettle('kettle')
const lamp = new Lamp('lamp')
const computer = new Computer('computer')
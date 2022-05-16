import Phaser, { Scene } from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config = {
	scale: {
		mode:Phaser.Scale.FIT
	},
	width: 2100,
	height: 525,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HelloWorldScene]
}

export default new Phaser.Game(config)

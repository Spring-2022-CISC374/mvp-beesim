import Phaser from 'phaser'

import Game from './scenes/Game'
import UI from './scenes/UIScene'
import GameOver from './scenes/GameOverScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		width: 2100,
		height: 1575
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: [Game, UI, GameOver]
	
}

export default new Phaser.Game(config)

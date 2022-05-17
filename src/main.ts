import Phaser from 'phaser'

import Game from './scenes/Game'
import UI from './scenes/UIScene'
import TitleScene from './scenes/TitleScene'

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
			debug: false
		}
	},
	scene: [TitleScene, Game, UI]
	
}

export default new Phaser.Game(config)

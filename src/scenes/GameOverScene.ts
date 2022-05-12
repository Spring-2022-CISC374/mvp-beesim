import { Game } from "phaser";

class GameOverScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameOverScene'});
    }

    preload () {
        this.load.image('gameover', 'assets/gameover.png');

    }
    create () {
        let background = this.add.sprite(0,0, 'gameover');
        background.setOrigin(0,0);
    }
}

export default GameOverScene; 
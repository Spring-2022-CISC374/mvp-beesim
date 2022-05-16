<<<<<<< HEAD
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

=======
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

>>>>>>> 8116766bee04b65503c7dcbfb308ce1f35e549df
export default GameOverScene; 
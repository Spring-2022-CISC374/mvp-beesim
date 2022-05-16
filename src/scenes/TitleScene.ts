<<<<<<< HEAD
class TitleScene extends Phaser.Scene {
    constructor() {
        super({key: 'TileScnene'});
    }

    preload () {
        this.load.image('background_image', 'assets/background_image.png');

    }
    create () {
        let background = this.add.sprite(0,0, 'background_image');
        background.setOrigin(0,0);

        let title_text = this.add.text(0,0, 'Start');
        title_text.setScale(3);
        //let result = title_text.fon

        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start("HelloWorldScene");
            }
        })
    }
}

=======
class TitleScene extends Phaser.Scene {
    constructor() {
        super({key: 'TileScnene'});
    }

    preload () {
        this.load.image('background_image', 'assets/background_image.png');

    }
    create () {
        let background = this.add.sprite(0,0, 'background_image');
        background.setOrigin(0,0);

        let title_text = this.add.text(0,0, 'Start');
        title_text.setScale(3);
        //let result = title_text.fon

        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start("HelloWorldScene");
            }
        })
    }
}

>>>>>>> 8116766bee04b65503c7dcbfb308ce1f35e549df
export default TitleScene; 
export default class TitleScene extends Phaser.Scene {
    private playButton: Phaser.GameObjects.Image;

    constructor() {
        super('TileScene');
        console.log("its title time")
    }

    preload () {
        this.load.image('titlescreen', 'assets/background-image-improved.png');
        this.load.image('playbutton', 'assets/play-game-button.png');
    }
    create () {
        const {width, height} = this.scale
        console.log(width, height)
        
        let background = this.add.sprite(0, 0, 'titlescreen');
        background.setOrigin(0,0);

        this.playButton = this.add.image(width * 0.5, height * 0.75, 'playbutton');
        this.playButton.setInteractive().on('pointerdown', () => {
            this.scene.switch('Game')
        })
        
        this.events.on(Phaser.Scenes.Events.WAKE, () => {
            this.wake();
            console.log("I Have Awoken")
        }, this);
    }
    
    private wake() {
        this.scene.stop("UIScene");
    }
}
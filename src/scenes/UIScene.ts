import Phaser from 'phaser'
import HelloWorldScene from './HelloWorldScene';
import eventsCenter from '../classes/eventCenter';

export default class UIScene extends Phaser.Scene
{
    private h1: Phaser.GameObjects.Sprite;
    private h2: Phaser.GameObjects.Sprite;
    private h3: Phaser.GameObjects.Sprite;

    constructor(){
        super('ui-scene')
    }

    create(): void {
        const x = 40;
        const y = 10;
        const fullWidth = 300;

        this.add.text(x, y - 36, 'Energy');

        this.createBarBackground(x, y, fullWidth);

        this.createHearts(x+360, y);

        /*
        this.anims.create({
            key: 'lose_heart',
            frames: this.anims.generateFrameNumbers('heart', { frames: [ 0, 2 ] } ),
            frameRate: 10,
            repeat: 1
        });

        this.anims.create({
            key: 'gain_heart',
            frames: this.anims.generateFrameNumbers('heart', { frames: [ 2, 0 ] } ),
            frameRate: 10,
            repeat: 1
        });
        */
    }

    private createBarBackground(x: number, y: number, fullWidth: number): void {
        const leftShadowCap = this.add.image(x, y, 'left-cap-shadow')
            .setOrigin(0, 0.5);

        const middleShadowCap = this.add.image(leftShadowCap.x + leftShadowCap.width, y, 'middle-shadow')
            .setOrigin(0, 0.5);
            middleShadowCap.displayWidth = fullWidth;

        this.add.image(middleShadowCap.x + middleShadowCap.displayWidth, y, 'right-shadow-cap')
            .setOrigin(0, 0.5);
                    
    }

    private createHearts(x: number, y: number): void {
        this.h1 = this.add.sprite(x, y, 'heart').setOrigin(0, 0.5).setScale(0.1);
        this.h2 = this.add.sprite(x + 30, y, 'heart').setOrigin(0, 0.5).setScale(0.1);
        this.h3 = this.add.sprite(x + 60, y, 'heart').setOrigin(0, 0.5).setScale(0.1);
    }
}
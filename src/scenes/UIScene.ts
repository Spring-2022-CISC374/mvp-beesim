import Phaser from 'phaser'
import HelloWorldScene from './Game';
import eventsCenter from '../classes/eventCenter';

export default class UIScene extends Phaser.Scene {
    private hearts: Phaser.Physics.Arcade.Sprite[];

    constructor() {
        super('ui-scene')
        this.hearts = [];
    }

    init() {
        console.log("its UI time")
    }

    preload() {

        this.load.image('left-shadow-cap', 'assets/barHorizontal_shadow_left.png')
        this.load.image('middle-shadow', 'assets/barHorizontal_shadow_mid.png')
        this.load.image('right-shadow-cap', 'assets/barHorizontal_shadow_right.png')
        
        this.load.image('left-green-cap', 'assets/barHorizontal_green_left.png')
        this.load.image('middle-green', 'assets/barHorizontal_green_mid.png')
        this.load.image('right-green-cap', 'assets/barHorizontal_green_right.png')
        
        this.load.spritesheet('heart', 'assets/hearts.png', {
            frameWidth: 300, frameHeight: 300
        })
    }

    create() {
        const {width, height} = this.scale // Width and Height

        this.createHearts(70, 225);
        this.createStaminaBar(55, 100, 750, 3.5)

        this.cameras.main.centerOn(width*.5, height*.5);
    }

    private createStaminaBar(x: number, y: number, fullWidth: number, scale: number): void {
        const leftShadowCap = this.add.image(x, y, 'left-shadow-cap')
            .setOrigin(0, 0.5).setScale(scale);

        const middleShadowCap = this.add.image(leftShadowCap.x + leftShadowCap.displayWidth, y, 'middle-shadow')
            .setOrigin(0, 0.5).setScale(scale);
            middleShadowCap.displayWidth = fullWidth;

        this.add.image(middleShadowCap.x + middleShadowCap.displayWidth, y, 'right-shadow-cap')
            .setOrigin(0, 0.5).setScale(scale);

        const leftGreenCap = this.add.image(x, y, 'left-green-cap')
            .setOrigin(0, 0.5).setScale(scale);

        const middleGreenCap = this.add.image(leftGreenCap.x + leftGreenCap.displayWidth, y, 'middle-green')
            .setOrigin(0, 0.5).setScale(scale);
            middleGreenCap.displayWidth = fullWidth;

        this.add.image(middleGreenCap.x + middleGreenCap.displayWidth, y, 'right-green-cap')
            .setOrigin(0, 0.5).setScale(scale);
        
        this.add.text((middleGreenCap.x + middleGreenCap.displayWidth) * 0.5, middleGreenCap.y, "Flight Stamina", {color:"black", fontStyle:"Verdana", resolution:18}).setOrigin(0.4, 0.5).setScale(5).setScrollFactor(0);
    }

    private createHearts(x: number, y: number): void {
        const h1 = this.add.image(x, y, 'heart').setScale(.4)
            .setOrigin(0, 0.5). setScrollFactor(0);

        const h2 = this.add.image(h1.x + h1.displayWidth + 15, y, 'heart').setScale(0.4)
            .setOrigin(0, 0.5). setScrollFactor(0);;

        this.add.image(h2.x + h2.displayWidth + 15, y, 'heart').setScale(0.4)
            .setOrigin(0, 0.5). setScrollFactor(0);;
    }
}
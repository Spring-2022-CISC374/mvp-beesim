import Phaser from 'phaser'
import HelloWorldScene from './Game';
import eventsCenter from '../classes/eventCenter';

export default class UIScene extends Phaser.Scene {
    private hearts: Phaser.GameObjects.Sprite[];
    private staminaBar: Phaser.GameObjects.Image[];
    private scoreText: Phaser.GameObjects.Text;

    private maxBarWidth = 750;

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

        this.load.image('flowercounter', 'assets/flower-counter.png')
        
        this.load.spritesheet('heart', 'assets/hearts.png', {
            frameWidth: 300, frameHeight: 300
        })
    }

    create() {
        const {width, height} = this.scale // Width and Height

        const flowercounterbox = this.makeFlowerCounter(1930, 130, 0.5);
        this.scoreText = this.add.text(flowercounterbox.x - 60, flowercounterbox.y, "0", {color:"black", resolution:18}).setOrigin(0.4, 0.5).setScale(5).setScrollFactor(0);
        eventsCenter.on('update-score-counter', this.updateScore, this)

        this.staminaBar = this.createStaminaBar(55, 100, this.maxBarWidth, 3.5)
        eventsCenter.on('update-stamina', this.updateStamina, this)

        this.hearts = this.createHearts(70, 225);

        this.cameras.main.centerOn(width*.5, height*.5);
    }

    private createStaminaBar(x: number, y: number, fullWidth: number, scale: number ): Phaser.GameObjects.Image[] {
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

        const rightGreenCap = this.add.image(middleGreenCap.x + middleGreenCap.displayWidth, y, 'right-green-cap')
            .setOrigin(0, 0.5).setScale(scale);
        
        this.add.text((middleGreenCap.x + middleGreenCap.displayWidth) * 0.5, middleGreenCap.y, "Flight Stamina", {color:"black", fontStyle:"Verdana", resolution:18}).setOrigin(0.4, 0.5).setScale(5).setScrollFactor(0);

        return [leftGreenCap, middleGreenCap, rightGreenCap]
    }

    private makeFlowerCounter(x,y,scale): Phaser.GameObjects.Image {
        const img = this.add.image(x, y, 'flowercounter').setScale(scale).setScrollFactor(0);
        return img;
    }

    private updateStamina(stamina: number) {
        const remaining = this.maxBarWidth * (stamina * 0.01);
        this.staminaBar[1].displayWidth = remaining;
        this.staminaBar[2].x = this.staminaBar[1].x + this.staminaBar[1].displayWidth;
        console.log("stamina updated")
    }

    private updateScore(score: number) {
        this.scoreText.text = score.toString();
    }

    private createHearts(x: number, y: number): Phaser.GameObjects.Sprite[] {
        const h1: Phaser.GameObjects.Sprite = this.add.sprite(x, y, 'heart').setScale(.4)
            .setOrigin(0, 0.5). setScrollFactor(0);

        const h2: Phaser.GameObjects.Sprite = this.add.sprite(h1.x + h1.displayWidth + 15, y, 'heart').setScale(0.4)
            .setOrigin(0, 0.5). setScrollFactor(0);;

        const h3: Phaser.GameObjects.Sprite = this.add.sprite(h2.x + h2.displayWidth + 15, y, 'heart').setScale(0.4)
            .setOrigin(0, 0.5). setScrollFactor(0);

        return [h1, h2, h3];
    }
}
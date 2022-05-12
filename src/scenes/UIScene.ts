import Phaser from 'phaser'
import HelloWorldScene from './HelloWorldScene';
import eventsCenter from '../classes/eventCenter';

export default class UIScene extends Phaser.Scene
{
    constructor(){
        super('ui-scene')
    }

    create(): void {
        const x = 40;
        const y = 10;
        const fullWidth = 300;

        this.add.text(x, y - 36, 'Energy');

        this.createBarBackground(x + fullWidth + 30, y, fullWidth);

        this.createBarBackground(x, y, fullWidth);
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
        const h1 = this.add.image(x, y, 'bear').setScale(0.05)
            .setOrigin(0, 0.5);

        const h2 = this.add.image(h1.x + h1.width + 15, y, 'bear').setScale(0.05)
            .setOrigin(0, 0.5);

        this.add.image(h2.x + h2.displayWidth + 15, y, 'bear').setScale(0.05)
            .setOrigin(0, 0.5);
    }
}
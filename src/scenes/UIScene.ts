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

    private createHearts(): void {

    }
}
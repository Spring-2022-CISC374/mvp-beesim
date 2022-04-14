import Phaser from 'phaser';
import { beeController, generatePlayer } from './player';

var score = 0;
var scoreText;
var energy = 1000;
var energyText;

export default class HelloWorldScene extends Phaser.Scene
{

    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private enemy?: Phaser.Physics.Arcade.Sprite;
    private plant?: Phaser.Physics.Arcade.Sprite;
    private keys?: Phaser.Types.Input.Keyboard.CursorKeys;

	constructor()
	{
		super('hello-world');
	}

	preload()
    {
        this.load.spritesheet('bee', 'assets/bee.png', {
            frameWidth: 512, frameHeight: 512
        })
            
        this.load.image('ground', 'assets/platform.png');
        this.load.image('bear', 'assets/Bear.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('flower', 'assets/tulip.png')
        

        this.load.image('left-cap', 'assets/barHorizontal_green_left.png');
        this.load.image('middle', 'assets/barHorizontal_green_mid.png');
        this.load.image('right-cap', 'assets/barHorizontal_green_right.png');

        this.load.image('left-cap-shadow', 'assets/barHorizontal_shadow_left.png');
        this.load.image('middle-shadow', 'assets/barHorizontal_shadow_mid.png');
        this.load.image('right-shadow', 'assets/barHorizontal_shadow_right.png');


    }

    create()
    {
        const fullWidth = 300;
        

        this.add.image(400,300,'sky');
        this.add.text(10, 12, 'Energy');
        this.createBarBackground(10, 50, fullWidth);
        this.platforms = this.physics.add.staticGroup();
        const ground = this.platforms.create(400,580, 'ground') as Phaser.Physics.Arcade.Sprite;
        ground.setScale(2).refreshBody();

        this.player = generatePlayer(this);

        this.enemy = this.physics.add.sprite(500, 450,'bear')
        this.enemy.setCollideWorldBounds(true)

        this.plant = this.physics.add.sprite(300, 450, 'flower')
        this.plant.setCollideWorldBounds(true)
        this.plant.setScale(.25)


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('bee', { 
                start: 6, end: 11
            }),
            frameRate: 10,
            repeat: 1
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('bee', {
                start: 0, end: 5
            }),
            frameRate: 10,
            repeat: 1
        })

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms);
        this.physics.add.collider(this.plant, this.platforms);

        this.keys = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(this.player, this.enemy, this.handleHitEnemy, undefined, this);
        this.physics.add.overlap(this.player, this.plant, this.handleHitPlant, undefined, this);
    
        this.scene.launch('ui-scene', { controller: this });

        scoreText = this.add.text(16, 80, 'Resources: 0', { fontSize: '32px', fill: '#000' });
        energyText = this.add.text(15, 35, 'Energy: 1000', { fontSize: '32px', fill: '#000' });
    }

    private handleHitEnemy(player: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject) {
        this.add.text(300, 200, 'Ouch');
        energy = energy - 1
        energyText.setText('Energy: ' + energy);
    }

    private handleHitPlant(player: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject) {
        this.add.text(200, 200, 'Yay, nectar!');
        score = score + 1
        scoreText.setText('Resources: ' + score);
    }

    private createBarBackground(x: number, y: number, fullWidth: number) {
        const leftShadowCap = this.add.image(x, y, 'left-cap')
            .setOrigin(0, 0.5);

        const middleShadowCap = this.add.image(leftShadowCap.x + leftShadowCap.width, y, 'middle')
            .setOrigin(0, 0.5);
            middleShadowCap.displayWidth = fullWidth;

        this.add.image(middleShadowCap.x + middleShadowCap.displayWidth, y, 'right-cap')
            .setOrigin(0, 0.5);
    }
    
    update() {
        beeController(this.keys, this.player);
    }
}

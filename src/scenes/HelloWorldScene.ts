import Phaser from 'phaser';

export default class HelloWorldScene extends Phaser.Scene
{

    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private enemy?: Phaser.Physics.Arcade.Sprite;
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


        this.player = this.physics.add.sprite(100,450,'bee');
        this.player.setBounce(0.0);
        this.player.setScale(0.20);
        this.player.setCollideWorldBounds(true)

        this.enemy = this.physics.add.sprite(500, 450,'bear')
        this.enemy.setCollideWorldBounds(true)

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

        this.keys = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(this.player, this.enemy, this.handleHitEnemy, undefined, this);
    
        this.scene.launch('ui-scene', { controller: this});


        
    }

    private handleHitEnemy(player: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject) {
        this.add.text(300, 200, 'Ouch');
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

        if(!this.keys)
        {
            return;
        }

        if(this.keys?.left?.isDown) 
        {
            this.player?.setVelocityX(-160);
            this.player?.anims.play('left', true);
        } 
        else if (this.keys?.right?.isDown){
            this.player?.setVelocityX(160);
            this.player?.anims.play('right', true);
        }
        else {
            this.player?.setVelocityX(0);
        }

        if (this.keys?.up?.isDown && this.player?.body.touching.down)
        {
            this.player?.setVelocityY(-330);
        }
    }
}

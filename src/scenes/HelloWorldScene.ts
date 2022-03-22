import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{

    private platforms?: Phaser.Physics.Arcade.StaticGroup
    private player?: Phaser.Physics.Arcade.Sprite
    private enemy?: Phaser.Physics.Arcade.Sprite
    private keys?: Phaser.Types.Input.Keyboard.CursorKeys

	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32, frameHeight: 48
        })
            
        this.load.image('ground', 'assets/platform.png')
        this.load.image('bear', 'assets/Bear.png')
        this.load.image('sky', 'assets/sky.png')
        
    }

    create()
    {
        this.add.image(400,300,'sky')
        this.platforms = this.physics.add.staticGroup()
        const ground = this.platforms.create(400,580, 'ground') as Phaser.Physics.Arcade.Sprite
        ground.setScale(2).refreshBody()


        this.player = this.physics.add.sprite(100,450,'dude')
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.enemy = this.physics.add.sprite(500, 450,'bear')
        this.enemy.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { 
                start: 0, end: 3

            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 5, end: 8
            }),
            frameRate: 10,
            repeat: -1
        })

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.enemy, this.platforms)

        this.keys = this.input.keyboard.createCursorKeys()

    }
    
    update() {

        if(!this.keys)
        {
            return
        }

        if(this.keys?.left?.isDown) 
        {
            this.player?.setVelocityX(-160)
            this.player?.anims.play('left', true)
        } 
        else if (this.keys?.right?.isDown){
            this.player?.setVelocityX(160)
            this.player?.anims.play('right', true)
        }
    }
}

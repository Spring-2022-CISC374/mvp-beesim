import Phaser from 'phaser';

export function generatePlayer(scene: Phaser.Scene): Phaser.Physics.Arcade.Sprite {
    let player: Phaser.Physics.Arcade.Sprite =  scene.physics.add.sprite(100,450,'bee');
    player.setBounce(0.0);
    player.setGravityY(250);
    player.setScale(0.20);
    player.setCollideWorldBounds(true)
    player.setMaxVelocity(250);
    return player;
}

/*
* Controls the bee
*/
export function beeController(keys?: Phaser.Types.Input.Keyboard.CursorKeys, player?: Phaser.Physics.Arcade.Sprite): void {
    if(!keys || !player) {
        return;
    }
    if(keys.left?.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } 
    else if (keys.right?.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);
    }

    if (keys.up?.isDown) {
        if (player.body.touching.down) {
            player?.setVelocityY(-200);
        } else {
            player?.setAccelerationY(-800);
        }
    }
    else {
        player?.setAccelerationY(0);
    }
}

/* COMMENT START
import Phaser from 'phaser';
import HelloWorldScene from '~/scenes/HelloWorldScene';

export class Player extends Phaser.Physics.Arcade.Sprite {
    public health: number;

    constructor(scene: Phaser.Scene, x: number, y: number, sprite: string | Phaser.Textures.Texture){
        super(scene, x, y, 'bee');
        this.health = 3;
    }

    static generatePlayer(scene: Phaser.Scene): Player {
        let player: Player =  new Player(scene, 100,450,'bee');
        player.setBounce(0.0);
        player.setGravityY(500);
        player.setScale(0.20);
        player.setCollideWorldBounds(true)
        player.setMaxVelocity(250);
        return player;
    }
COMMENT END */ 

    /*
    * Controls the bee
    */
/* COMMENT START
    beeController(keys?: Phaser.Types.Input.Keyboard.CursorKeys): void {
        if(!keys) {
            return;
        }
        if(keys.left?.isDown) {
            this.setVelocityX(-160);
            this.anims.play('left', true);
        } 
        else if (keys.right?.isDown) {
            this.setVelocityX(160);
            this.anims.play('right', true);
        }
        else {
            this.setVelocityX(0);
        }

        if (keys.up?.isDown) {
            if (this.body.touching.down) {
                this?.setVelocityY(-200);
            } else {
                this?.setAccelerationY(-1500);
            }
        }
        else {
            this?.setAccelerationY(0);
        }
    }
}
COMMENT END */
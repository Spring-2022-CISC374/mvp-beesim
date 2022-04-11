import Phaser from 'phaser';

export function generatePlayer(scene: Phaser.Scene): Phaser.Physics.Arcade.Sprite {
    let player: Phaser.Physics.Arcade.Sprite =  scene.physics.add.sprite(100,450,'bee');
    player.setBounce(0.0);
    player.setScale(0.20);
    player.setCollideWorldBounds(true)
    player.setMaxVelocity(250);
    return player;
}

export function beeController(keys?: Phaser.Types.Input.Keyboard.CursorKeys, player?: Phaser.Physics.Arcade.Sprite, canFly: boolean): boolean {
    if(!keys || !player) {
        return false;
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
            return true;
        } else {
            player?.setAccelerationY(-500);
        }
    }
    else {
        player?.setAccelerationY(0);
    }
}
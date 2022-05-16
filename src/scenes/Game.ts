import { World } from 'matter';
import Phaser, { Physics } from 'phaser';
var score = 0;
var scoreText;
var energy = 100;
var energyText;
var cloudsWhite, cloudsWhiteSmall;

export default class Game extends Phaser.Scene
{
    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private enemy?: Phaser.Physics.Arcade.Sprite;
    private plant?: Phaser.Physics.Arcade.Sprite;
    private keys?: Phaser.Types.Input.Keyboard.CursorKeys;

    private indexArr: number[];
    private points: number;
    private health: number;
    private hearts: Phaser.GameObjects.Sprite[];
    private canTakeDamage: boolean;
    private isGrounded: boolean;
    private flowers;
    private pickups;
    private flowerGroup;

	constructor()
	{
		super('hello-world');
        this.indexArr = [];
        this.health = 3;
        this.hearts = []
        this.canTakeDamage = true;
        this.isGrounded = true;
        this.points = 0;        
	}

    init() {
        this.keys = this.input.keyboard.createCursorKeys();
        this.flowerGroup = this.add.group();
    }

	preload()
    {
        this.load.spritesheet('bee', 'assets/cropped_bees.png', {
            frameWidth: 130, frameHeight: 118
        })
        this.load.spritesheet('heart', 'assets/hearts.png', {
            frameWidth: 300, frameHeight: 300
        })


        this.load.image('flower', 'assets/flower-tile.png', );
        this.load.image('tiles', 'assets/world_tiles.png', );
        this.load.tilemapTiledJSON('tilemap', 'assets/map.json');
            
        this.load.image('bear', 'assets/bear.png');
        this.load.image('sky', 'assets/sky.png');

        this.load.image('clouds-white', 'assets/clouds-white.png');
        this.load.image("clouds-white-small", 'assets/clouds-white-small.png');
        

        this.load.image('left-cap', 'assets/barHorizontal_green_left.png');
        this.load.image('middle', 'assets/barHorizontal_green_mid.png');
        this.load.image('right-cap', 'assets/barHorizontal_green_right.png');

        this.load.image('left-cap-shadow', 'assets/barHorizontal_shadow_left.png');
        this.load.image('middle-shadow', 'assets/barHorizontal_shadow_mid.png');
        this.load.image('right-shadow', 'assets/barHorizontal_shadow_right.png');
    }

    const bigfatarr: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    
    findcoords(array: number[]): void {
        let tmpArr: Phaser.Physics.Arcade.Sprite[] = [];
        let count = 0;
        for (let y = 0; y < 25; y++) {
            for (let x = 0; x < 100; x++) {
                if (array[y*100 + x] === 1) {
                    this.flowerGroup.add(this.physics.add.sprite(x * 21, y * 21, 'flower'))
                    
                    //tmpArr.push(this.physics.add.sprite(x, y, 'flower-tile'))
                    //this.physics.add.overlap(this.player!, tmpArr[count], this.handleHitPlant, undefined, this);
                    //count++;
                }
            }
        }
    }

    create()
    {

        const {width, height} = this.scale // Width and Height

        this.createPlayerAnims();
        // START OF MAPMAKING
        const map = this.make.tilemap({ key: 'tilemap'});
        const tileset = map.addTilesetImage('grass-world', 'tiles');

        const ground = map.createLayer('ground', tileset)
        ground.setCollisionByProperty({collides: true})
        ground.setDepth(49);

        const objectsLayer = map.getObjectLayer('objects')
        
        //var pickupGroup = this.add.group();

        objectsLayer.objects.forEach(objData => {
            const { x, y, name } = objData

            switch (name) {
                case 'player-spawn': {
                    this.player = this.generatePlayer( x!, y!);
                    this.player.setDepth(50);
                }
            }
            // this.physics.add.overlap(this.player!, pickupGroup, collectFlower, undefined, this);
        })

        function collectFlower(player, flower) {
            console.log('flower collected');
            score++;
        }



        // Here she blows
        this.findcoords(this.bigfatarr);
        this.physics.add.overlap(this.player!, this.flowerGroup, collectFlower, undefined, this);
        

        // END OF MAPMAKING

        // Bee anims
        
        this.physics.add.collider(this.player!, ground, this.regroundPlayer, undefined, this);

        this.cameras.main.startFollow(this.player!);
        this.cameras.main.setZoom(3.5);

        const fullWidth = 2100;

        const sky = this.add.image(width*0.5,height*0.5,'sky').setDepth(0);
        this.add.text(10, 12, 'Energy');
        this.createBarBackground(10, 50, fullWidth);
        this.hearts = this.createHearts(10 + fullWidth + 30, 50);

        cloudsWhite = this.add.tileSprite(640, 200, 1280, 400, "clouds-white");
        cloudsWhiteSmall = this.add.tileSprite(640, 200, 1280, 400, "clouds-white-small");
    
        this.scene.launch('ui-scene', { controller: this});
    }

    private regroundPlayer(player, ground) {
        if (player?.body.touching.up) {
            return;
        }
        this.isGrounded = true;
    }

    
    private collectFlower(player, pickup) {
        console.log('flower collected');
        score++;
    }

    // PLAYER FUNCTIONS
    private generatePlayer(x: number, y: number): Phaser.Physics.Arcade.Sprite {
        let player: Phaser.Physics.Arcade.Sprite =  this.physics.add.sprite( x, y, 'bee');
        player.setBounce(0.0);
        player.setGravityY(250);
        player.setScale(0.2);
        player.setCollideWorldBounds(true)
        player.setMaxVelocity(250);
        player.play("player-idle");
        return player;
    }

    private createPlayerAnims() {
        this.anims.create({
            key: "player-idle",
            frames: [{ key: "bee", frame: 3}]
        })

        this.anims.create({
            key: 'player-walking',
            frames: this.anims.generateFrameNumbers('bee', { 
                frames:  [1,2,3,2,1]
            }),
            frameRate: 10,
            repeat: 1
        })

        this.anims.create({
            key: 'player-flying',
            frames: this.anims.generateFrameNumbers('bee', {
                start: 0, end: 7
            }),
            frameRate: 10,
            repeat: 1
        })
    }
    
    /*
    * Controls the bee
    */
    private beeController(keys?: Phaser.Types.Input.Keyboard.CursorKeys, player?: Phaser.Physics.Arcade.Sprite): void {
        if(!keys || !player) {
            return;
        }
        if (this.isGrounded) {
            
            if(keys.left?.isDown) {
                player.flipX = false;
                player.setVelocityX(-100);
                player.anims.play('player-walking', true);
            } else if (keys.right?.isDown) {
                player.flipX = true;
                player.setVelocityX(100);
                player.anims.play('player-walking', true);
            } else {
                player.setVelocityX(0);
                player.setAccelerationX(0)
                player.anims.play('player-idle')
            } 
            
            if (keys.up?.isDown) {
                this.isGrounded = false;
                player.setVelocityY(-150);
            } else {
                player.setAccelerationY(100);
            }

        } else {
            if(keys.left?.isDown) {
                player.flipX = false;
                player.setAccelerationX(-200);
                player.anims.play('player-flying', true);
            } 
            else if (keys.right?.isDown) {
                player.flipX = true;
                player.setAccelerationX(200);
                player.anims.play('player-flying', true);
            } else {
                player.setAccelerationX(0);
                player.anims.play('player-flying', true);
            }
            
            if (keys.up?.isDown) {
                this.isGrounded = false;
                player.setAccelerationY(-500);
            }  else {
                player.setAccelerationY(0);
            }
        }
    
        
    }

    private handleHitEnemy(p: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject) {
        if (this.canTakeDamage) {
            if (this.health > 0) {
                this.health--;
                this.hearts[this.health].setFrame(2);
                this.canTakeDamage = false;
                this.knockback(this.player, this.enemy);
                this.canTakeDamage = true;
            }
            else {
                this.scene.start("GameOverScene");
            }
        }
    }

    private knockback(player?: Phaser.Physics.Arcade.Sprite, b?: Phaser.Physics.Arcade.Sprite) {
        const xdiff = player!.body.position.x - b!.body.position.x;
        const ydiff = player!.body.position.y - b!.body.position.y;
        const magnitude = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        const normalX = xdiff / magnitude;
        const normalY = ydiff / magnitude;
        player?.setVelocity(normalX * 500, normalY * 500);
    }

    
    private handleHitPlant(player: Phaser.GameObjects.GameObject, b: Phaser.GameObjects.GameObject) {
        this.add.text(100, 300, 'Yay, nectar!');
        for (let i = 0; i < 20; i++) {
            score = score + 1;
        scoreText.setText('Resources: ' + score);
        }
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

    private createHearts(x: number, y: number): Phaser.GameObjects.Sprite[] {
        let h1: Phaser.GameObjects.Sprite = this.add.sprite(x, y, 'heart').setScale(0.1)
            .setOrigin(0, 0.5);
            h1.setScrollFactor(0);

        let h2: Phaser.GameObjects.Sprite = this.add.sprite(h1.x + h1.displayWidth + 15, y, 'heart', 0).setScale(0.1)
            .setOrigin(0, 0.5);
            h1.setScrollFactor(0);

        let h3: Phaser.GameObjects.Sprite = this.add.sprite(h2.x + h2.displayWidth + 15, y, 'heart', 0).setScale(0.1)
            .setOrigin(0, 0.5);
            h3.setScrollFactor(0);
            return [h1,h2,h3];
    }
    
    update() {
        this.beeController(this.keys, this.player);

        cloudsWhite.tilePositionX += 0.5;
        cloudsWhiteSmall.tilePositionX += 0.25;

        //this.plant.tilePositionX += 1;
        //this.platforms.tilePositionX += 0.5;
    }
}

// event handling method from https://blog.ourcade.co/posts/2020/phaser3-how-to-communicate-between-scenes/
import Phaser from 'phaser'

const eventsCenter: Phaser.Events.EventEmitter = new Phaser.Events.EventEmitter();

export default eventsCenter;
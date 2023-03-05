export class Game2 extends Phaser.Scene
{
    constructor ()
    {
        super("Game2");
    }

    preload ()
    {
        this.load.image('image', '../../assets/test.png');
        console.log("2load")
    }

    create ()
    {
        this.add.image(50,10,'image')
        console.log("2create")
    }
}
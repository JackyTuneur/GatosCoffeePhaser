

export class Game extends Phaser.Scene
{
    constructor ()
    {
        super("Game");
    }

    preload ()
    {
        this.load.image('image', '../../assets/test.png');
        console.log("load")
    }

    create ()
    {
        this.add.image(10,10,'image')
        console.log("create")


        
        setTimeout(() => {
            this.scene.start('Game2')
          }, 2000)
    }
}
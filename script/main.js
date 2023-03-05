import { Game } from "./scene/game.js";
import { Game2 } from "./scene/game2.js"; 


var config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 800,
    height: 600,
    scene: [ Game, Game2 ]
};


const game = new Phaser.Game(config);


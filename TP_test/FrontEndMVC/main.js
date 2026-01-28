import Game from "./Game.js";
import GameView from "./GameView.js";
import GameController from "./GameController.js";

const game=new Game();
const gameView=new GameView(game);
console.log(game, gameView);
new GameController(game,gameView);

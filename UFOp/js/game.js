var game = new Phaser.Game(1024, 1024, Phaser.AUTO, 'gameDiv');

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('win', winState);

game.state.start('load');
var loadState = {
    preload : function() {
        game.load.image('firstLevel', '../assets/firstLevel.png');
        game.load.image('oneGrid', '../assets/oneGrid.png');
        game.load.image('mainGrid', '../assets/mainGrid.png');
        game.load.image('p1Grid', '../assets/p1Grid.png');
        game.load.image('tank', '../assets/tank.png');
        game.load.image('left', '../assets/left.png');
        game.load.image('right', '../assets/right.png');
        game.load.image('drive', '../assets/drive.png');
        game.load.image('play', '../assets/play.png');
        game.load.image('blockH', '../assets/blockH.png');
        game.load.image('blockV', '../assets/blockV.png');
        game.load.image('eagle', '../assets/eagle.png');
    },

    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }
}
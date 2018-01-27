var loadState = {
    preload : function() {
        game.load.image('firstLevel', '../assets/firstLevel.png');
        game.load.image('oneGrid', '../assets/oneGrid.png');
        game.load.image('tank', '../assets/tank.png');
        game.load.image('left', '../assets/left.png');
        game.load.image('right', '../assets/right.png');
        game.load.image('drive', '../assets/drive.png');
    },

    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }
}
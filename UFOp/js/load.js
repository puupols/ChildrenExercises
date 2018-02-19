var loadState = {
    preload : function() {
        game.load.image('firstLevel', '../assets/firstLevel.png');
        game.load.image('oneGrid', '../assets/oneGrid.png');
        game.load.image('mainGrid', '../assets/mainGrid.png');
        game.load.image('p1Grid', '../assets/p1Grid.png');
        game.load.image('tank', '../assets/tank.png');
        game.load.image('bullet', '../assets/bullet.png');
        game.load.spritesheet('leftButton', '../assets/leftButton.png', 60, 60, 2);
        game.load.spritesheet('rightButton', '../assets/rightButton.png', 60, 60, 2);        
        game.load.spritesheet('driveButton', '../assets/driveButton.png', 60, 60, 2)
        game.load.spritesheet('p1Button', '../assets/p1Button.png', 60, 60, 2);
        game.load.image('playButton', '../assets/playButton.png');        
        game.load.image('deleteButton', '../assets/deleteButton.png');
        game.load.image('blockH', '../assets/blockH.png');
        game.load.image('blockV', '../assets/blockV.png');
        game.load.image('eagle', '../assets/eagle.png');
    },

    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }
}
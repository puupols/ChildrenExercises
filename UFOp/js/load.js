var loadState = {
    preload : function() {
        game.load.image('space', '../assets/space.png');
        game.load.image('spaceship', '../assets/spaceship.png');
    },

    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }
}
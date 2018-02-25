var winState = (function(){
    
    var create = function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        text = game.add.text(game.world.width / 2, game.world.height / 2, 'UZVARA!!!', {font: "64px", fill: "#dd562f"});
        text.anchor.x = 0.5;
        text.anchor.y = 0.5;
        game.add.button(120, 120, 'begining', function(){
            game.state.start('menu');
        })
    }
    return{
        create : create
    }
})()
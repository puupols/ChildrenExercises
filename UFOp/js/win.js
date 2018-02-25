var winState = (function(){
    
    var create = function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        text = game.add.text(0, 0, 'Uzvara!!!');
    }
    return{
        create : create
    }
})()
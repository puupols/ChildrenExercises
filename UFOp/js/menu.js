var menuState ={
          
    create : function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        var levelConf = configuration.getAllLevels();
        var x = 0;
        var y = 0;
        
        var callStart = function(level){            
            game.state.start('play', true, false, level);
        }

        for(var key in levelConf.level){
            if(levelConf.level.hasOwnProperty(key)){
                button = game.add.button(x, y, null, callStart.bind(this, key));
                }
                var text = game.add.text(0, 0, key, {font: "64px"});                        
                button.addChild(text);
                if(x >= 1024 - 64){
                    x = 0
                    y = y + 64
                } else {
                    x = x + 64;                
                }                
            };
    },

    update : function(){

    }
}
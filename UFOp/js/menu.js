var menuState ={
          
    create : function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        var levelConf = configuration.getAllLevels();
        var x = 64;
        var y = 64;
        
        var callStart = function(level){            
            game.state.start('play', true, false, level);
        }

        for(var key in levelConf.level){
            if(levelConf.level.hasOwnProperty(key)){                
                var button = game.add.button(x, y, null, callStart.bind(this, key));
                var text = game.add.text(x, y, key, {font: "64px", fill: "#dd562f"});
                button.width = text.width
                button.height = text.height
                var text = game.add.text(x, y, key, {font: "64px", fill: "#dd562f"});                        
                if(x >= 1024 - 64){
                    x = 64
                    y = y + text.height + text.height / 2
                } else {
                    x = x + text.width + text.width / 2;                
                }                
                console.log(button.width)
                console.log(button.height)
            }
                                 
        };
    },

    update : function(){

    }
}
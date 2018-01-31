var playState = (function(){
    
    var levelConfig;
    
    var init = function(level){
        levelConfig = configuration.getLevelConfig(level);        
    };
    
    var create = function(){
        playGround.createGrids(levelConfig.gridCountX, levelConfig.gridCountY);
        playGround.createProgramWindows(levelConfig.gridCountX);
        buttons.createMoveButtons(levelConfig.gridCountX);

        var tank = tankUtil.createTank(levelConfig.tankGridPosition);        
    };

    var update = function(){
        
    }

    return{
        init : init,
        create : create,
        update : update

    }
})()
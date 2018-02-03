var playState = (function(){
    
    var levelConfig;
    var blocks;
    var eagles;
    var tank;
    
    var init = function(level){
        levelConfig = configuration.getLevelConfig(level);        
    };
    
    var create = function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        playGround.createGrids(levelConfig.gridCountX, levelConfig.gridCountY);
        playGround.createProgramWindows(levelConfig.gridCountX);
        playGround.createBlocks(levelConfig.blocksV, levelConfig.blocksH);
        playGround.createEagles(levelConfig.eagles);
        buttons.createMoveButtons(levelConfig.gridCountX);
        tank = tankUtil.createTank(levelConfig.tankGridPosition);        
    };

    var update = function(){
        //tank.rotation += 0.02;
    }

    return{
        init : init,
        create : create,
        update : update
    }
})()
var playState = (function(){
    
    var levelConfig;
    var blocks;
    var eagles;
    var program = ['DRIVE', 'DRIVE', 'LEFT', 'DRIVE', 'DRIVE']
    

    
    var init = function(level){
        levelConfig = configuration.getLevelConfig(level);        
    };
    
    var create = function(){
        game.stage.backgroundColor = 'rgb(96, 128, 56)';
        playGround.createGrids(levelConfig.gridCountX, levelConfig.gridCountY);
        playGround.createProgramWindows(levelConfig.gridCountX);
        playGround.createBlocks(levelConfig.blocksV, levelConfig.blocksH);
        playGround.createEagles(levelConfig.eagles);     
        tankUtil.createTank(levelConfig.tankGridPosition);   
        buttons.createMoveButtons(levelConfig.gridCountX);
        
        
    };

    var update = function(){
        if(buttons.shouldDriveX == true){
            if(tankUtil.tank.x != tankUtil.desiredPositionX){
                tankUtil.tank.body.velocity.x = 150
            } else {
                buttons.shouldDriveX = false;
                buttons.playPosition++;
                buttons.play();
            }
            
        }
    }

    return{
        init : init,
        create : create,
        update : update,
        program : program
    }
})()
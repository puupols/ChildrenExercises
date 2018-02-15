var playState = (function(){
    
    var levelConfig = {};
    var blocks;
    var eagles;
    var program = []
    

    
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
        tankUtil.createTank(levelConfig.tankGridPosition, levelConfig.tankAngle);
                
    };

    var update = function(){
        var tank = tankUtil.getTank();        
        if(buttons.getShouldDriveX() == 'true'){
            driveX(tank);
        } else if(buttons.getShouldRotate() == 'true'){
            rotate(tank);
        } else if(buttons.getShouldDriveY() == 'true'){
            driveY(tank);
        }
    }

    var driveX = function(tank){
        if(tank.x < tankUtil.getDesiredPositionX()){
            tank.body.velocity.x = 150;
        } else if(tank.x > tankUtil.getDesiredPositionX()){
            tank.body.velocity.x = -150;
        } else {
            tank.body.velocity.x = 0;
            buttons.setShouldDriveX('false');
            buttons.setPlayPosition(buttons.getPlayPosition() + 1);
            buttons.play();
        }        
    }

    var driveY = function(tank){
        if(tank.y < tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = 150;
        } else if(tank.y > tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = -150;
        } else {
            tank.body.velocity.y = 0;
            buttons.setShouldDriveY('false');
            buttons.setPlayPosition(buttons.getPlayPosition() + 1);
            buttons.play();
        }        
    }
    
    var rotate = function(tank){
        if(tank.angle < tankUtil.getDesiredAngle() - 1){
            tank.angle += 1;
        } else if(tank.angle > tankUtil.getDesiredAngle() + 1){
            tank.angle -= 1;
        } else {            
            buttons.setShouldRotate('false');            
            buttons.setPlayPosition(buttons.getPlayPosition() + 1);
            buttons.play();
        }
    }

    var getLevelConfig = function(){
        return levelConfig;
    }

    return{
        getLevelConfig: getLevelConfig,
        init : init,
        create : create,
        update : update,
        program : program
    }
})()
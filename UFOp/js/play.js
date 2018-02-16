var playState = (function(){
    
    var levelConfig = {};
    var blocks;
    var eagles;
    var mainProgram = []
    var p1Program = []
    

    
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
            callPlay(tank);            
        }        
    }

    var driveY = function(tank){
        if(tank.y < tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = 150;
        } else if(tank.y > tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = -150;
        } else {
            callPlay(tank);
        }        
    }
    
    var rotate = function(tank){
        if(tank.angle < tankUtil.getDesiredAngle() - 1){
            tank.angle += 1;
        } else if(tank.angle > tankUtil.getDesiredAngle() + 1){
            tank.angle -= 1;
        } else {
            callPlay(tank);
        }
    }

    var callPlay = function(tank){
        tank.body.velocity.x = 0;
        tank.body.velocity.y = 0;
        buttons.setShouldDriveY('false');
        buttons.setShouldDriveX('false');
        buttons.setShouldRotate('false');
        if(mainProgram[buttons.getMainPlayPosition()] == 'P1' && p1Program.length > buttons.getP1PlayPosition() + 1){
            buttons.setP1PlayPosition(buttons.getP1PlayPosition() + 1);
        } else {
            buttons.setMainPlayPosition(buttons.getMainPlayPosition() + 1);
            buttons.setP1PlayPosition(0);
        }        
        buttons.play();
    }

    var getLevelConfig = function(){
        return levelConfig;
    }

    return{
        getLevelConfig: getLevelConfig,
        init : init,
        create : create,
        update : update,
        mainProgram : mainProgram,
        p1Program : p1Program
    }
})()
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
        game.physics.startSystem(Phaser.Physics.ARCADE);
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
        var blocks = playGround.getBlocks();
        if(buttons.getShouldDriveX() == 'true'){
            tankUtil.driveX(tank);
        } else if(buttons.getShouldRotate() == 'true'){
            tankUtil.rotate(tank);
        } else if(buttons.getShouldDriveY() == 'true'){
            tankUtil.driveY(tank);
        }

        game.physics.arcade.collide(tank, blocks, killTank)
    }

    var killTank = function(){
        console.log('BOOM');
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
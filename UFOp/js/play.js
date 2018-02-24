var playState = (function(){
    
    var levelConfig = {};
    var blocks;
    var eagles;
    var mainProgram = []
    var p1Program = []
    var fireButton;
    

    
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
        if(playUtil.playStatus.shouldDriveX == 'true'){
            tankUtil.driveX(tank);
        } else if(playUtil.playStatus.shouldRotate == 'true'){
            tankUtil.rotate(tank);
        } else if(playUtil.playStatus.shouldDriveY == 'true'){
            tankUtil.driveY(tank);
        }

    if(weapon.bulletOptions.isFired){
        if(weapon.getBullet().x == weapon.bulletOptions.desiredPositionX && weapon.getBullet().y == weapon.bulletOptions.desiredPositionY){
            var tank = tankUtil.getTank();
            weapon.bulletOptions.isFired = false;
            weapon.getBullet().kill();
            tankUtil.callPlay(tank);            
        }        
    };


        
        game.physics.arcade.collide(tank, blocks, killTank)
    }

    var killTank = function(){
        playUtil.resetPlay();
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
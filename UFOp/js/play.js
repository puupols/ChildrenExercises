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
        playGround.createBlocks();
        playGround.createEagles();                
        buttons.createMoveButtons(levelConfig.gridCountX);
        tankUtil.createTank(levelConfig.tankGridPosition, levelConfig.tankAngle);  
    };

    var update = function(){
        var tank = tankUtil.getTank();        
        var gameBlocks = playGround.getGameBlocks();
        var borderBlocks = playGround.getBorderBlocks();
        if(playUtil.playStatus.shouldDriveX){
            tankUtil.driveX(tank);
        } else if(playUtil.playStatus.shouldRotate){
            tankUtil.rotate(tank);
        } else if(playUtil.playStatus.shouldDriveY){
            tankUtil.driveY(tank);
        }

    if(weapon.bulletOptions.isFired){
        if(weapon.getBullet().x == weapon.bulletOptions.desiredPositionX && weapon.getBullet().y == weapon.bulletOptions.desiredPositionY){
            var tank = tankUtil.getTank();
            weapon.bulletOptions.isFired = false;
            weapon.getBullet().kill();
            tankUtil.callPlay();            
        }      
        game.physics.arcade.overlap(gameBlocks, weapon.getBullet(), killBlock);
        game.physics.arcade.overlap(weapon.getBullet(), borderBlocks, killBullet);
        game.physics.arcade.overlap(weapon.getBullet(), playGround.getEagles(), killEagle);
    };


        game.physics.arcade.overlap(tank, borderBlocks, killTank);
        game.physics.arcade.overlap(tank, gameBlocks, killTank);                
    }

    var killBlock = function(block, bullet){
        block.kill();
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        tankUtil.callPlay();        
    };

    var killTank = function(){
        playUtil.resetPlay();
    };

    var killEagle = function(bullet, eagle){
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        eagle.kill();
        tankUtil.callPlay();
    };

    var killBullet = function(bullet){
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        tankUtil.callPlay();
    };


    var getLevelConfig = function(){
        return levelConfig;
    };

    return{
        getLevelConfig: getLevelConfig,
        init : init,
        create : create,
        update : update,
        mainProgram : mainProgram,
        p1Program : p1Program
    }
})()
var playUtil = (function(){

    var playStatus = {};
    playStatus.mainPlayPosition = 0;
    playStatus.p1PlayPosition = 0;
    playStatus.shouldDriveX = false;
    playStatus.shouldDriveY = false;
    playStatus.shouldRotate = false;

          
    var play = function(){
        buttons.mainButtons.forEach(function(button){
            button.animations.stop(null, true);
        });
        buttons.p1Buttons.forEach(function(button){
            button.animations.stop(null, true);
        }); 
        var tank = tankUtil.getTank();
        if(playStatus.mainPlayPosition >= playState.mainProgram.length){
            resetPlay();
        } else {
            var task = playState.mainProgram[playStatus.mainPlayPosition]            
            if (task == 'P1'){
                task = playState.p1Program[playStatus.p1PlayPosition];
                buttons.p1Buttons[playStatus.p1PlayPosition].animations.play('glow');
            }
            buttons.mainButtons[playStatus.mainPlayPosition].animations.play('glow');
            switch(task){
                case 'DRIVE' :                 
                _drive(task, tank);
                break;
                case 'RIGHT' :                
                _right(tank);
                break;
                case 'LEFT' :                
                _left(tank);
                break; 
                case 'SHOOT' :
                weapon.shoot();
                break;               
            }
        }        
    }

    var resetPlay = function(){
        tank = tankUtil.getTank();
        playStatus.mainPlayPosition = 0;
        playStatus.shouldDriveX = false;
        playStatus.shouldDriveY = false;
        playStatus.shouldRotate = false;
        tank.body.velocity.x = 0;
        tank.body.velocity.y = 0;
        var levelConfig = playState.getLevelConfig();
        tank.x = (playGround.grids[levelConfig.tankGridPosition].x + (playGround.grids[levelConfig.tankGridPosition].width / 2))
        tank.y = (playGround.grids[levelConfig.tankGridPosition].y + (playGround.grids[levelConfig.tankGridPosition].height / 2))
        tank.angle = levelConfig.tankAngle;
        tankUtil.setDesiredPositionX(0);
        tankUtil.setDesiredPositionY(0);
        tankUtil.setDesiredAngle(0);
        playGround.createBlocks();
        playGround.createEagles();
    }

    var _drive = function(task, tank){
        switch(tankUtil.getDesiredAngle()){
            case 90 :
            tankUtil.setDesiredPositionX(tank.x + playGround.grids[0].width);            
            playStatus.shouldDriveX = true;
            break;
            case -90 :
            tankUtil.setDesiredPositionX(tank.x - playGround.grids[0].width);
            playStatus.shouldDriveX = true;
            break;
            case 0 :
            tankUtil.setDesiredPositionY(tank.y - playGround.grids[0].height);
            playStatus.shouldDriveY = true;
            break;
            case 180 :
            case -180 :
            tankUtil.setDesiredPositionY(tank.y + playGround.grids[0].height);
            playStatus.shouldDriveY = true;
            break;
        }
    }

    var _right = function(tank){
        var desiredAngle = 0;
            desiredAngle = tankUtil.getDesiredAngle() + 90;
            if (desiredAngle > 180){
                desiredAngle = desiredAngle - 360;
                tank.angle = -179
            }
            tankUtil.setDesiredAngle(desiredAngle);
            playStatus.shouldRotate = true;
    }

    var _left = function(tank){
        var desiredAngle = 0;
            desiredAngle = tankUtil.getDesiredAngle() - 90;
            if(desiredAngle < -180){
                desiredAngle = desiredAngle + 360;
                tank.angle = 179
            }
            tankUtil.setDesiredAngle(desiredAngle);
            playStatus.shouldRotate = true;
    }

    var clearStage = function(){
        playState.mainProgram.splice(0, playState.mainProgram.length);
        playState.p1Program.splice(0, playState.p1Program.length);
        buttons.mainButtons.splice(0, buttons.mainButtons.length);
        buttons.p1Buttons.splice(0, buttons.p1Buttons.length);
        playUtil.playStatus.mainPlayPosition = 0;
        playUtil.playStatus.p1PlayPosition = 0;
        playUtil.playStatus.shouldDriveX = false;
        playUtil.playStatus.shouldDriveY = false;
        playUtil.playStatus.shouldRotate = false; 
    }

    return{
        clearStage : clearStage,
        play : play,
        resetPlay : resetPlay,
        playStatus : playStatus
    }
})()
var buttons = (function(){
    
    
    var mainPlayPosition = 0;
    var p1PlayPosition = 0;
    var selectedProgramWindow = 0;
    var shouldDriveX = false;
    var shouldDriveY = false;
    var shouldRotate = false;
    
    var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX].x + playGround.grids[gridCountX].width;
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, 0, 'left', _addLeft);
        var rightButton = game.add.button(girdEdge + leftButton.width, 0, 'right', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, 0, 'drive', _addDrive);
        var p1Button = game.add.button(girdEdge, leftButton.height, 'p1Button', _addP1);
        var playButton = game.add.button(girdEdge + p1Button.width, leftButton.height, 'play', play);
    }    

    var _addLeft = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('LEFT')
        } else if(selectedProgramWindow == 1)
        playState.p1Program.push('LEFT')
    };

    var _addRight = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('RIGHT')
        } else if (selectedProgramWindow == 1){
            playState.p1Program.push('RIGHT')
        }
        
    };

    var _addDrive = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('DRIVE')
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('DRIVE')
        }        
    };

    var _addP1 = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('P1')
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('P1')
        } 

    };
    
    var play = function(){
        var tank = tankUtil.getTank();
        if(mainPlayPosition >= playState.mainProgram.length){
            _resetPlay(tank);
        } else {
            var task = playState.mainProgram[mainPlayPosition]            
            if (task == 'P1'){
                task = playState.p1Program[p1PlayPosition]
            }
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
            }
        }        
    }

    var _resetPlay = function(tank){
        mainPlayPosition = 0;
        var levelConfig = playState.getLevelConfig();
        tank.x = (playGround.grids[levelConfig.tankGridPosition].x + (playGround.grids[levelConfig.tankGridPosition].width / 2))
        tank.y = (playGround.grids[levelConfig.tankGridPosition].y + (playGround.grids[levelConfig.tankGridPosition].height / 2))
        tank.angle = levelConfig.tankAngle;
        tankUtil.setDesiredPositionX(0);
        tankUtil.setDesiredPositionY(0);
        tankUtil.setDesiredAngle(0)
    }

    var _drive = function(task, tank){
        switch(tankUtil.getDesiredAngle()){
            case 90 :
            tankUtil.setDesiredPositionX(tank.x + playGround.grids[0].width);
            shouldDriveX = 'true';
            break;
            case -90 :
            tankUtil.setDesiredPositionX(tank.x - playGround.grids[0].width);
            shouldDriveX = 'true';
            break;
            case 0 :
            tankUtil.setDesiredPositionY(tank.y - playGround.grids[0].height);
            shouldDriveY = 'true';
            break;
            case 180 || -180 :
            tankUtil.setDesiredPositionY(tank.y + playGround.grids[0].height);
            shouldDriveY = 'true';
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
            shouldRotate = 'true';
    }

    var _left = function(tank){
        var desiredAngle = 0;
            desiredAngle = tankUtil.getDesiredAngle() - 90;
            if(desiredAngle < -180){
                desiredAngle = desiredAngle + 360;
                tank.angle = 179
            }
            tankUtil.setDesiredAngle(desiredAngle);
            shouldRotate = 'true';
    }

    var getMainPlayPosition = function(){
        return mainPlayPosition;
    }

    var setMainPlayPosition = function(x){
        mainPlayPosition = x;
    }

    var getP1PlayPosition = function(){
        return p1PlayPosition;
    }

    var setP1PlayPosition = function(x){
        p1PlayPosition = x;
    }
    
    var getShouldDriveX = function(){
        return shouldDriveX;
    }
    
    var setShouldDriveX = function(bool){
        shouldDriveX = bool;
    }

    var getShouldDriveY = function(){
        return shouldDriveY;
    }
    
    var setShouldDriveY = function(bool){
        shouldDriveY = bool;
    }

    var setShouldRotate = function(bool){
        shouldRotate = bool;
    }

    var getShouldRotate = function(){
        return shouldRotate;
    }

    var setSelectedProgramWindow = function(x){
        selectedProgramWindow = x
    }
    
    return {
        createMoveButtons : createMoveButtons,
        play : play,
        getMainPlayPosition : getMainPlayPosition,
        getP1PlayPosition : getP1PlayPosition,
        setP1PlayPosition : setP1PlayPosition,
        getShouldDriveX : getShouldDriveX,
        getShouldDriveY : getShouldDriveY,
        setMainPlayPosition : setMainPlayPosition,
        setShouldDriveX : setShouldDriveX,
        setShouldDriveY : setShouldDriveY,
        setShouldRotate : setShouldRotate,
        getShouldRotate : getShouldRotate,
        setSelectedProgramWindow : setSelectedProgramWindow
    }

})()
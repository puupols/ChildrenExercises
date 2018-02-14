var buttons = (function(){
    
    
    var playPosition = 0;
    var shouldDriveX = false;
    var shouldDriveY = false;
    var shouldRotate = false;
    
    var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX].x + playGround.grids[gridCountX].width;
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, 0, 'left', play);
        var rightButton = game.add.button(girdEdge + leftButton.width, 0, 'right', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, 0, 'drive', _addDrive);
    }    

    var _addLeft = function(){

    };

    var _addRight = function(){

    };

    var _addDrive = function(){

    };
    
    var play = function(){
        var task = playState.program[playPosition]
        var tank = tankUtil.getTank();
        switch(task){
            case 'DRIVE' : 
            switch(tankUtil.getDesiredAngle()){
                case 90 :
                tankUtil.setDesiredPositionX(tankUtil.getTank().x + playGround.grids[0].width);
                shouldDriveX = 'true';
                break;
                case -90 :
                tankUtil.setDesiredPositionX(tankUtil.getTank().x - playGround.grids[0].width);
                shouldDriveX = 'true';
                break;
                case 0 :
                tankUtil.setDesiredPositionY(tankUtil.getTank().y - playGround.grids[0].height);
                shouldDriveY = 'true';
                break;
                case 180 || -180 :
                tankUtil.setDesiredPositionY(tankUtil.getTank().y + playGround.grids[0].height);
                shouldDriveY = 'true';
                break;
            }
            break;
            case 'RIGHT' :
            var desiredAngle = 0;
            desiredAngle = tankUtil.getDesiredAngle() + 90;
            if (desiredAngle > 180){
                desiredAngle = desiredAngle - 360;
                tank.angle = -179
            }
            tankUtil.setDesiredAngle(desiredAngle);
            shouldRotate = 'true';
            break;
            case 'LEFT' :
            var desiredAngle = 0;
            desiredAngle = tankUtil.getDesiredAngle() - 90;
            if(desiredAngle < -180){
                desiredAngle = desiredAngle + 360;
                tank.angle = 179
            }
            tankUtil.setDesiredAngle(desiredAngle);

            shouldRotate = 'true';
            break;
        }        
    }

    var getPlayPosition = function(){
        return playPosition;
    }

    var setPlayPosition = function(x){
        playPosition = x;
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
    
    return {
        createMoveButtons : createMoveButtons,
        play : play,
        getPlayPosition : getPlayPosition,
        getShouldDriveX : getShouldDriveX,
        getShouldDriveY : getShouldDriveY,
        setPlayPosition : setPlayPosition,
        setShouldDriveX : setShouldDriveX,
        setShouldDriveY : setShouldDriveY,
        setShouldRotate : setShouldRotate,
        getShouldRotate : getShouldRotate
    }

})()
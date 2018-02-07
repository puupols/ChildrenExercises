var buttons = (function(){
    
    var playPosition = 0;
    var shouldDriveX = false;
    
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
        switch(task){
            case 'DRIVE' : 
            switch(tankUtil.currentDirection){
                case 'W' :
                tankUtil.desiredPositionX = tankUtil.tank.x + playGround.grids[0].height;
                shouldDriveX = true
            }
        }        
    }
    
    return {
        createMoveButtons : createMoveButtons,
        play : play,
        playPosition : playPosition,
        shouldDriveX : shouldDriveX
    }

})()
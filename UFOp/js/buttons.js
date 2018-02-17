var buttons = (function(){
    
    
    var mainPlayPosition = 0;
    var p1PlayPosition = 0;
    var selectedProgramWindow = 0;
    var shouldDriveX = false;
    var shouldDriveY = false;
    var shouldRotate = false;
    var mainButtons = [];
    var p1Buttons = [];
    
    var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX].x + playGround.grids[gridCountX].width;
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, 0, 'leftButton', _addLeft);
        var rightButton = game.add.button(girdEdge + leftButton.width, 0, 'rightButton', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, 0, 'driveButton', _addDrive);
        var p1Button = game.add.button(girdEdge, leftButton.height, 'p1Button', _addP1);
        var deleteButton = game.add.button(girdEdge + p1Button.width, leftButton.height, 'deleteButton', _deleteButton);
        var playButton = game.add.button(girdEdge + p1Button.width + deleteButton.width, leftButton.height, 'playButton', play);
    }    

    var _addLeft = function(){
        if(selectedProgramWindow == 0){            
            playState.mainProgram.push('LEFT')
            _addMainButton('leftButton');            
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('LEFT')
            _addP1Button('leftButton');
        }            
    };

    var _addRight = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('RIGHT')
            _addMainButton('rightButton');
        } else if (selectedProgramWindow == 1){
            playState.p1Program.push('RIGHT')
            _addP1Button('rightButton');
        }        
    };

    var _addDrive = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('DRIVE')
            _addMainButton('driveButton');
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('DRIVE')
            _addP1Button('driveButton');
        }        
    };

    var _addP1 = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('P1')
            _addMainButton('p1Button');
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('P1');
            _addP1Button('p1Button');
        } 

    };

    var _deleteButton = function(){
        if(selectedProgramWindow == 0){
            if(playState.mainProgram.length > 0){
                playState.mainProgram.pop();
                mainButtons[mainButtons.length - 1].destroy();
                mainButtons.pop();            
            }            
        } else if (selectedProgramWindow == 1){
            if(playState.p1Program.length > 0){
                playState.p1Program.pop();
                p1Buttons[p1Buttons.length - 1].destroy();
                p1Buttons.pop();
            }            
        }
    }

    var _addMainButton = function(button){
        var positionX = playGround.getMainGrid().x;
        var positionY = playGround.getMainGrid().y + 60;        
        var lastButton = mainButtons[mainButtons.length  - 1];
        if(lastButton){
            if(lastButton.x + lastButton.width >= playGround.getMainGrid().x + playGround.getMainGrid().width){
                positionX = playGround.getMainGrid().x;
                positionY = lastButton.y + lastButton.height;

            } else {
                positionX = lastButton.x + lastButton.width;
                positionY = lastButton.y;
            }            
        }
        var button = game.add.button(positionX, positionY, button);
        button.animations.add('glow', [0, 1], 10, true);
        mainButtons.push(button);
    };

    var _addP1Button = function(button){
        var positionX = playGround.getP1Grid().x;
        var positionY = playGround.getP1Grid().y + 60;        
        var lastButton = p1Buttons[p1Buttons.length  - 1];
        if(lastButton){
            if(lastButton.x + lastButton.width >= playGround.getP1Grid().x + playGround.getP1Grid().width){
                positionX = playGround.getP1Grid().x;
                positionY = lastButton.y + lastButton.height;

            } else {
                positionX = lastButton.x + lastButton.width;
                positionY = lastButton.y;
            }            
        }
        var button = game.add.button(positionX, positionY, button);
        button.animations.add('glow', [0, 1], 10, true);
        p1Buttons.push(button);
    }
    
    var play = function(){
        mainButtons.forEach(function(button){
            button.animations.stop(null, true);
        });
        p1Buttons.forEach(function(button){
            button.animations.stop(null, true);
        }) 
        var tank = tankUtil.getTank();
        if(mainPlayPosition >= playState.mainProgram.length){
            _resetPlay(tank);
        } else {
            var task = playState.mainProgram[mainPlayPosition]            
            if (task == 'P1'){
                task = playState.p1Program[p1PlayPosition];
                p1Buttons[p1PlayPosition].animations.play('glow');
            }
            mainButtons[mainPlayPosition].animations.play('glow');
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
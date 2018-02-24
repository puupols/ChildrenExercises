var buttons = (function(){
    
    
    
    var selectedProgramWindow = 0;
    
    var mainButtons = [];
    var p1Buttons = [];    
    
    var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX - 1].x + playGround.grids[gridCountX].width + (game.cache.getImage('blockV').width / 2);
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, 0, 'leftButton', _addLeft);
        var rightButton = game.add.button(girdEdge + leftButton.width, 0, 'rightButton', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, 0, 'driveButton', _addDrive);
        var shootButton = game.add.button(girdEdge + leftButton.width + rightButton.width + driveButton.width, 0, 'shootButton', _addShoot);
        var p1Button = game.add.button(girdEdge, leftButton.height, 'p1Button', _addP1);
        var deleteButton = game.add.button(girdEdge + p1Button.width, leftButton.height, 'deleteButton', _deleteButton);
        var playButton = game.add.button(girdEdge + p1Button.width + deleteButton.width, leftButton.height, 'playButton', playUtil.play);
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

    var _addShoot = function(){
        if(selectedProgramWindow == 0){
            playState.mainProgram.push('SHOOT')
            _addMainButton('shootButton');
        } else if(selectedProgramWindow == 1){
            playState.p1Program.push('SHOOT')
            _addP1Button('shootButton');
        } 
    }

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
        button.animations.add('glow', [0, 1], 5, true);
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
        button.animations.add('glow', [0, 1], 5, true);
        p1Buttons.push(button);
    } 

    var setSelectedProgramWindow = function(x){
        selectedProgramWindow = x
    }
    
    return {
        mainButtons : mainButtons,
        p1Buttons : p1Buttons,
        createMoveButtons : createMoveButtons,
        setSelectedProgramWindow : setSelectedProgramWindow
    }

})()
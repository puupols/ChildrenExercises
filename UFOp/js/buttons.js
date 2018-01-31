var buttons = (function(){
        var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX].x + playGround.grids[gridCountX].width;
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, gridHeight / 3, 'left', _addLeft);
        var rightButton = game.add.button(girdEdge + leftButton.width, gridHeight / 3, 'right', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, gridHeight / 3, 'drive', _addDrive);
    }

    var _addLeft = function(){


    };

    var _addRight = function(){

    };

    var _addDrive = function(){

    };    
    
    return {
        createMoveButtons : createMoveButtons
    }

})()
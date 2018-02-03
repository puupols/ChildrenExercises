var buttons = (function(){
        var createMoveButtons = function(gridCountX){
        var girdEdge = playGround.grids[gridCountX].x + playGround.grids[gridCountX].width;
        var gridHeight = playGround.grids[0].height;
        var leftButton = game.add.button(girdEdge, 0, 'left', _addLeft);
        var rightButton = game.add.button(girdEdge + leftButton.width, 0, 'right', _addRight);
        var driveButton = game.add.button(girdEdge + leftButton.width + rightButton.width, 0, 'drive', _addDrive);
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
var buttons = (function(){
    
    var createMoveButtons = function(){
        var leftButton = game.add.button(grid.grids[5].x + grid.grids[5].width, grid.grids[0].height / 3, 'left', _addLeft);
        var rightButton = game.add.button(grid.grids[5].x + grid.grids[5].width + leftButton.width, grid.grids[0].height / 3, 'right', _addRight);
        var driveButton = game.add.button(grid.grids[5].x + grid.grids[5].width + leftButton.width + rightButton.width, grid.grids[0].height / 3, 'drive', _addDrive);
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
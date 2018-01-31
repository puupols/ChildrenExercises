var playGround =  (function (){
    
    var grids = [];
    
    var createGrids = function (gridCountX, gridCountY){                
        var grid = game.add.sprite(0, 0, 'oneGrid');
        grids.push(grid);
        for(var y = 0; y < gridCountY; y++){
            for(var x = 0; x < gridCountX ; x++){            
                var grid = game.add.sprite((x * grids[0].width), (y * grids[0].height), 'oneGrid');
                grids.push(grid);
            }              
        }
    };

    var createProgramWindows = function (gridCountX){
        var mainGrid = game.add.button(grids[0].width * gridCountX, grids[0].height, 'mainGrid', _selectMainGrid())
        var p1Grid = game.add.button(grids[0].width * gridCountX, mainGrid.y + mainGrid.height, 'p1Grid', _selectP1Grid())
        
    };

    var _selectMainGrid = function(){

    };

    var _selectP1Grid = function(){

    };

    return {
        createGrids : createGrids,
        createProgramWindows : createProgramWindows,
        grids : grids
    }

})();
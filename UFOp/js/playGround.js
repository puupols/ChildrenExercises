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

    var createBlocks = function(blockVList, blockHList){        
        blocks = game.add.group();                
        blockVList.forEach(function(gridNum) {
          var newBlock = blocks.create(grids[gridNum].x  + grids[gridNum].width, grids[gridNum].y, 'blockV');
          newBlock.anchor.x = 0.5
        });

        blockHList.forEach(function(gridNum){
            var newBlock = blocks.create(grids[gridNum].x, grids[gridNum].y + grids[gridNum].height, 'blockH');
            newBlock.anchor.y = 0.5

        })
    };

    var createEagles = function(eaglesList){
        eagles = game.add.group();
        eaglesList.forEach(function(gridNum){
            var newEagle = eagles.create(grids[gridNum].x + (grids[gridNum].width / 2), grids[gridNum].y + (grids[gridNum].height / 2), 'eagle');
            newEagle.anchor.x = 0.5;
            newEagle.anchor.y = 0.5;
        });
    };

    var createProgramWindows = function (gridCountX){
        var mainGrid = game.add.button(grids[0].width * gridCountX, grids[0].height, 'mainGrid', _selectMainGrid)
        var p1Grid = game.add.button(grids[0].width * gridCountX, mainGrid.y + mainGrid.height, 'p1Grid', _selectP1Grid)
        
    };

    var _selectMainGrid = function(){
        buttons.setSelectedProgramWindow(0);
    };

    var _selectP1Grid = function(){
        buttons.setSelectedProgramWindow(1);
    };

    return {
        createGrids : createGrids,
        createProgramWindows : createProgramWindows,
        createBlocks : createBlocks,
        createEagles : createEagles,
        grids : grids
    }

})();
var playGround =  (function (){
    
    var grids = [];
    var mainGrid;
    var p1Grid;
    var blocks;
    
    var createGrids = function (gridCountX, gridCountY){  
        blocks = game.add.group(); 
        for(var y = 0; y < gridCountY; y++){            
            for(var x = 0; x < gridCountX ; x++){            
                var grid = game.add.sprite((x * game.cache.getImage('oneGrid').width), (y * game.cache.getImage('oneGrid').height), 'oneGrid');
                grids.push(grid);
                _createBorderBlocks(y,  x, gridCountY, gridCountX);
            }              
        }
        game.world.bringToTop(blocks);
    };

    var _createBorderBlocks = function(y, x, gridCountY, gridCountX){
        if(y == 0){
            _createBlock(grids[x].x, grids[y * gridCountY].y, 'blockH')            
        } else if(y == gridCountY - 1){
            _createBlock(grids[x].x, grids[y * gridCountY].y + game.cache.getImage('oneGrid').height, 'blockH');            
        }

        if(x == 0){
            _createBlock(grids[0].x, grids[y * gridCountY].y, 'blockV')
        } else if(x == gridCountX - 1){
            _createBlock(grids[x].x + grids[x].width, grids[y * gridCountY].y, 'blockV')
        }        
    }   

    var createBlocks = function(blockVList, blockHList){                
        blockVList.forEach(function(gridNum) {
            _createBlock(grids[gridNum].x  + grids[gridNum].width, grids[gridNum].y, 'blockV');
        });
        blockHList.forEach(function(gridNum){
            _createBlock(grids[gridNum].x, grids[gridNum].y + grids[gridNum].height, 'blockH')            
        })    
    };

    var _createBlock = function(x, y, type){
        var newBlock = blocks.create(x, y, type);
        if(type == 'blockV'){
            newBlock.anchor.x = 0.5;
        } else {
            newBlock.anchor.y = 0.5;
        }        
        game.physics.arcade.enable(newBlock);
        newBlock.enableBody = true;          
        newBlock.body.immovable = true;
    }

    var createEagles = function(eaglesList){
        eagles = game.add.group();
        eaglesList.forEach(function(gridNum){
            var newEagle = eagles.create(grids[gridNum].x + (grids[gridNum].width / 2), grids[gridNum].y + (grids[gridNum].height / 2), 'eagle');
            newEagle.anchor.x = 0.5;
            newEagle.anchor.y = 0.5;
        });
    };

    var createProgramWindows = function (gridCountX){
        mainGrid = game.add.button(grids[0].width * gridCountX + (game.cache.getImage('blockV').width / 2), grids[0].height, 'mainGrid', _selectMainGrid);
        p1Grid = game.add.button(grids[0].width * gridCountX + (game.cache.getImage('blockV').width / 2), mainGrid.y + mainGrid.height, 'p1Grid', _selectP1Grid);    
    };

    var _selectMainGrid = function(){
        buttons.setSelectedProgramWindow(0);
    };

    var _selectP1Grid = function(){
        buttons.setSelectedProgramWindow(1);
    };

    var getMainGrid = function(){
        return mainGrid;
    };

    var getP1Grid = function(){
        return p1Grid;
    };

    var getBlocks = function(){
        return blocks;
    }

    return {
        getBlocks : getBlocks,
        getMainGrid : getMainGrid,
        getP1Grid : getP1Grid,
        createGrids : createGrids,
        createProgramWindows : createProgramWindows,
        createBlocks : createBlocks,
        createEagles : createEagles,
        grids : grids
    }

})();
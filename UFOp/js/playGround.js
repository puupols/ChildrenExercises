var playGround =  (function (){
    
    var grids = [];
    var mainGrid;
    var p1Grid;
    var gameBlocks;
    var borderBlocks;
    var eagles;
    
    var createGrids = function (gridCountX, gridCountY){
        gameBlocks = game.add.group();
        borderBlocks = game.add.group();         
        for(var y = 0; y < gridCountY; y++){            
            for(var x = 0; x < gridCountX ; x++){            
                var grid = game.add.sprite((x * game.cache.getImage('oneGrid').width), (y * game.cache.getImage('oneGrid').height), 'oneGrid');
                grids.push(grid);
                _createBorderBlocks(y,  x, gridCountY, gridCountX);
            }              
        }
        game.world.bringToTop(borderBlocks);
        game.world.bringToTop(gameBlocks);
    };

    var _createBorderBlocks = function(y, x, gridCountY, gridCountX){
        if(y == 0){
            _createBlock(grids[x].x, grids[y * gridCountY].y, 'blockH', borderBlocks)            
        } else if(y == gridCountY - 1){
            _createBlock(grids[x].x, grids[y * gridCountY].y + game.cache.getImage('oneGrid').height, 'blockH', borderBlocks);            
        }

        if(x == 0){
            _createBlock(grids[0].x, grids[y * gridCountY].y, 'blockV', borderBlocks)
        } else if(x == gridCountX - 1){
            _createBlock(grids[x].x + grids[x].width, grids[y * gridCountY].y, 'blockV', borderBlocks)
        }        
    }   

    var createBlocks = function(){
        gameBlocks.killAll();
        var blockVList = playState.getLevelConfig().blocksV;
        var blockHList = playState.getLevelConfig().blocksH;                      
        blockVList.forEach(function(gridNum) {
            _createBlock(grids[gridNum].x  + grids[gridNum].width, grids[gridNum].y, 'blockV', gameBlocks);
        });
        blockHList.forEach(function(gridNum){
            _createBlock(grids[gridNum].x, grids[gridNum].y + grids[gridNum].height, 'blockH', gameBlocks)            
        })    
    };

    var _createBlock = function(x, y, type, blocks){
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

    var createEagles = function(){
        eaglesList = playState.getLevelConfig().eagles;
        if(eagles){
            eagles.killAll();
        }        
        eagles = game.add.group();
        eaglesList.forEach(function(gridNum){
            var newEagle = eagles.create(grids[gridNum].x + (grids[gridNum].width / 2), grids[gridNum].y + (grids[gridNum].height / 2), 'eagle');
            newEagle.anchor.x = 0.5;
            newEagle.anchor.y = 0.5;
            game.physics.arcade.enable(newEagle);
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

    var getGameBlocks = function(){
        return gameBlocks;
    };

    var getBorderBlocks = function(){
        return borderBlocks;
    };

    var getEagles = function(){
        return eagles;
    }

    return {
        getGameBlocks : getGameBlocks,
        getBorderBlocks : getBorderBlocks,
        getEagles : getEagles,
        getMainGrid : getMainGrid,
        getP1Grid : getP1Grid,
        createGrids : createGrids,
        createProgramWindows : createProgramWindows,
        createBlocks : createBlocks,
        createEagles : createEagles,
        grids : grids
    }

})();
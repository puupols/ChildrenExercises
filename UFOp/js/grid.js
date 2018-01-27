var grid =  (function (){
    
    var grids = [];
    
    var create = function (gridCountX, gridCountY){                
        var grid = game.add.sprite(0, 0, 'oneGrid');
        grids.push(grid);
        for(var y = 0; y < gridCountY; y++){
            for(var x = 0; x < gridCountX ; x++){            
                var grid = game.add.sprite((x * grids[0].width), (y * grids[0].height), 'oneGrid');
                grids.push(grid);
            }              
        }
    }

    return {
        create : create,
        grids : grids
    }

})();
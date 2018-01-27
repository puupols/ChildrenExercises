var tankUtil = (function(){
    
    var createTank = function (gridX, gridY){
        var tank = game.add.sprite((grid.grids[gridX].x + (grid.grids[gridX].width / 2)), (grid.grids[gridY].y + (grid.grids[gridY].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
        return tank
    }

    return {
        createTank : createTank
    }

})();
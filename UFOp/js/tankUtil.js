var tankUtil = (function(){
    
    var createTank = function (gridNumber){
        var tank = game.add.sprite((grid.grids[gridNumber].x + (grid.grids[gridNumber].width / 2)), (grid.grids[gridNumber].y + (grid.grids[gridNumber].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
        return tank
    }

    return {
        createTank : createTank
    }

})();
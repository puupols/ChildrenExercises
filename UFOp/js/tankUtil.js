var tankUtil = (function(){
    
    var createTank = function (gridNumber){
        var tank = game.add.sprite((playGround.grids[gridNumber].x + (playGround.grids[gridNumber].width / 2)), (playGround.grids[gridNumber].y + (playGround.grids[gridNumber].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
        return tank
    }

    return {
        createTank : createTank
    }

})();
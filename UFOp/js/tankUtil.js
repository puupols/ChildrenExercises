var tankUtil = (function(){
    
    var desiredPositionX
    var desiredPositionY
    var desiredDirection
    var currentDirection = 'W'
    var tank
    
    var createTank = function (gridNumber){
        tank = game.add.sprite((playGround.grids[gridNumber].x + (playGround.grids[gridNumber].width / 2)), (playGround.grids[gridNumber].y + (playGround.grids[gridNumber].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
    }

    return {
        createTank : createTank,
        desiredPositionX : desiredPositionX,
        desiredPositionY : desiredPositionY,
        desiredDirection : desiredDirection,
        currentDirection : currentDirection,
        tank : tank
    }
})();
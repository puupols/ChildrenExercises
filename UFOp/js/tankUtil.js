var tankUtil = (function(){
    
    var tank        
    
    desiredPositionX = 0;
    desiredPositionY = 0;
    desiredAngle = 0;
    currentDirection = 'W';

    var createTank = function (gridNumber){
        tank = game.add.sprite((playGround.grids[gridNumber].x + (playGround.grids[gridNumber].width / 2)), (playGround.grids[gridNumber].y + (playGround.grids[gridNumber].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
        game.physics.arcade.enable(tank);
    }

    var getTank = function(){
        return tank;
    }

    var getDesiredPositionX = function(){
        return desiredPositionX;
    }

    var getDesiredPositionY = function(){
        return desiredPositionY;
    }

    var getDesiredAngle = function(){
        return desiredAngle;
    }

    var getCurrentDirection = function(){
        return currentDirection;
    }

    var setCurrentDirection = function(x){
        currentDirection = x;
    }

    var setDesiredPositionX = function(x){
        desiredPositionX = x;
    }

    var setDesiredAngle = function(x){
        desiredAngle = x;
    }

    
    return {
        getTank : getTank,
        getDesiredPositionX : getDesiredPositionX,
        getDesiredPositionY : getDesiredPositionY,
        getDesiredAngle : getDesiredAngle,
        getCurrentDirection : getCurrentDirection,
        setDesiredPositionX : setDesiredPositionX,
        setDesiredAngle : setDesiredAngle,
        setCurrentDirection : setCurrentDirection,
        createTank : createTank
    };
})();
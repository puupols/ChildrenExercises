var tankUtil = (function(){
    
    var tank        
    
    desiredPositionX = 0;
    desiredPositionY = 0;
    desiredAngle = 0;

    var createTank = function (gridNumber, angle){
        tank = game.add.sprite((playGround.grids[gridNumber].x + (playGround.grids[gridNumber].width / 2)), (playGround.grids[gridNumber].y + (playGround.grids[gridNumber].height / 2)), 'tank');
        tank.anchor.setTo(0.5);
        tank.angle = angle;
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

    var setDesiredPositionX = function(x){
        desiredPositionX = x;
    }

    var setDesiredPositionY = function(y){
        desiredPositionY = y;
    }

    var setDesiredAngle = function(x){
        desiredAngle = x;
    }

    
    return {
        getTank : getTank,
        getDesiredPositionX : getDesiredPositionX,
        getDesiredPositionY : getDesiredPositionY,
        getDesiredAngle : getDesiredAngle,        
        setDesiredPositionX : setDesiredPositionX,
        setDesiredPositionY : setDesiredPositionY,
        setDesiredAngle : setDesiredAngle,       
        createTank : createTank
    };
})();
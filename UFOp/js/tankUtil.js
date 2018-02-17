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

    
    var driveX = function(tank){
        if(tank.x < tankUtil.getDesiredPositionX()){
            tank.body.velocity.x = 150;
        } else if(tank.x > tankUtil.getDesiredPositionX()){
            tank.body.velocity.x = -150;
        } else {
            callPlay(tank);            
        }        
    }

    var driveY = function(tank){
        if(tank.y < tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = 150;
        } else if(tank.y > tankUtil.getDesiredPositionY()){
            tank.body.velocity.y = -150;
        } else {
            callPlay(tank);
        }        
    }
    
    var rotate = function(tank){
        if(tank.angle < tankUtil.getDesiredAngle() - 1){
            tank.angle += 1;
        } else if(tank.angle > tankUtil.getDesiredAngle() + 1){
            tank.angle -= 1;
        } else {
            callPlay(tank);
        }
    }

    var callPlay = function(tank){
        tank.body.velocity.x = 0;
        tank.body.velocity.y = 0;
        playUtil.playStatus.shouldDriveY = false;
        playUtil.playStatus.shouldDriveX = false;
        playUtil.playStatus.shouldRotate = false;
        if(playState.mainProgram[playUtil.playStatus.mainPlayPosition] == 'P1' && playState.p1Program.length > playUtil.playStatus.p1PlayPosition + 1){
            playUtil.playStatus.p1PlayPosition = playUtil.playStatus.p1PlayPosition + 1;
        } else {
            playUtil.playStatus.mainPlayPosition = playUtil.playStatus.mainPlayPosition + 1;
            playUtil.playStatus.p1PlayPosition = 0;
        }        
        playUtil.play();
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
        driveX : driveX,
        driveY : driveY,
        rotate : rotate,
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
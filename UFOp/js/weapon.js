var weapon = (function(){
    var bullet
    var bulletOptions = [];
    
    var shoot = function(){
        var tank = tankUtil.getTank();
        var angle = tankUtil.getDesiredAngle();
        var x;
        var y;
        switch(angle){
            case 0 :
            x = tank.x;
            y = tank.y - tank.height / 2;
            bulletOptions.desiredPositionX = x;
            bulletOptions.desiredPositionY = y - (game.cache.getImage('oneGrid').height) + (tank.height / 2);
            bulletOptions.isFired = true;
            bulletOptions.velocityY = -150;
            bulletOptions.velocityX = 0;
            break;
            case 90 : 
            x = tank.x + tank.width / 2;
            y = tank.y;
            bulletOptions.desiredPositionX = x + (game.cache.getImage('oneGrid').width) - (tank.height / 2);
            bulletOptions.desiredPositionY = y;
            bulletOptions.isFired = true;            
            bulletOptions.velocityY = 0;
            bulletOptions.velocityX = 150;
            break;
            case -90 :
            x = tank.x - tank.width / 2;
            y = tank.y;
            bulletOptions.desiredPositionX = x - (game.cache.getImage('oneGrid').width) + (tank.height / 2);
            bulletOptions.desiredPositionY = y;
            bulletOptions.isFired = true;            
            bulletOptions.velocityY = 0;
            bulletOptions.velocityX = -150;
            break;
            case -180 :
            case 180 :
            x = tank.x;
            y = tank.y + tank.height / 2;
            bulletOptions.desiredPositionX = x;
            bulletOptions.desiredPositionY = y + (game.cache.getImage('oneGrid').height) - (tank.height / 2);
            bulletOptions.isFired = true;            
            bulletOptions.velocityY = 150;
            bulletOptions.velocityX = 0;
            break;
        }
        bullet = game.add.sprite(x, y, 'bullet');
        bullet.anchor.setTo(0.5);
        bullet.angle = tankUtil.getDesiredAngle();
        game.physics.arcade.enable(bullet);
        bullet.body.velocity.x = bulletOptions.velocityX;
        bullet.body.velocity.y = bulletOptions.velocityY;
        
    }
    var getBullet = function(){
        return bullet;
    };

    return {
        shoot : shoot,
        getBullet : getBullet,
        bulletOptions : bulletOptions
    }
})()
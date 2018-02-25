var killUtil = (function(){
    
    var killBlock = function(block, bullet){
        block.kill();
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        tankUtil.callPlay();        
    };

    var killTank = function(){
        playUtil.resetPlay();
    };

    var killEagle = function(bullet, eagle){
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        eagle.destroy();
        if(playGround.getEagles().length == 0){
            game.state.start('win');
        }else {
            tankUtil.callPlay();
        }
        
    };

    var killBullet = function(bullet){
        bullet.kill();
        weapon.bulletOptions.isFired = false;
        tankUtil.callPlay();
    };

    return{
        killBlock : killBlock,
        killTank : killTank,
        killEagle : killEagle,
        killBullet : killBullet 
    }
})()
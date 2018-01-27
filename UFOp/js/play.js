var playState = {
    
    create : function(){
        grid.create(5, 5);
        buttons.createMoveButtons();
        var tank = tankUtil.createTank(21);        
    },

    update : function(){
        
    }
}
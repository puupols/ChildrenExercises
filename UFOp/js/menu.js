var menuState ={
          
    create : function(){
        game.add.button(60, 60, 'firstLevel', function(){
            game.state.start('play', true, false, '1');
        })
    },

    update : function(){

    }
}
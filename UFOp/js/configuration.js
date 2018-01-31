var configuration = (function(){

    var getLevelConfig = function(level){
        
        
        var levelConfig = { 'level' : {
            '1' : {
                'gridCountX' : '5',
                'gridCountY' : '5',
                'tankGridPosition' : '21'

            },

            '2' : {
                'gridCountX' : '3',
                'gridCountY' : '5',
                'tankGridPosition' : '13'
            }
        }}

        return levelConfig.level[level];
    };

    return {
        getLevelConfig : getLevelConfig
    }

})()
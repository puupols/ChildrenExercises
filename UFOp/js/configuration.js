var configuration = (function(){

    var levelConfig = { 'level' : {
        '1' : {
            'gridCountX' : '5',
            'gridCountY' : '5',
            'tankGridPosition' : '20',
            'tankAngle' : '0',
            'blocksV' : ['1' , '6' , '13'],
            'blocksH' : ['8', '9', '15'],
            'eagles' : ['2', '13', '4']
        },

        '2' : {
            'gridCountX' : '3',
            'gridCountY' : '3',
            'tankGridPosition' : '4',
            'tankAngle' : '0',
            'blocksV' : [],
            'blocksH' : ['0', '1', '2'],
            'eagles' : ['0']
        }
    }};

    var getLevelConfig = function(level){
        return levelConfig.level[level];
    };

    var getAllLevels = function(){
        return levelConfig;
    };

    return {
        getLevelConfig : getLevelConfig,
        getAllLevels : getAllLevels
    }

})()
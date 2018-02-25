var configuration = (function(){

    var levelConfig = { 'level' : {
        '1' : {
            'gridCountX' : '1',
            'gridCountY' : '5',
            'tankGridPosition' : '4',
            'tankAngle' : '0',
            'blocksV' : [],
            'blocksH' : [],
            'eagles' : ['0']
        },

        '2' : {
            'gridCountX' : '1',
            'gridCountY' : '5',
            'tankGridPosition' : '4',
            'tankAngle' : '0',
            'blocksV' : [],
            'blocksH' : [2],
            'eagles' : ['0']
        },

        '3' : {
            'gridCountX' : '5',
            'gridCountY' : '5',
            'tankGridPosition' : '20',
            'tankAngle' : '0',
            'blocksV' : ['1' , '6' , '13'],
            'blocksH' : ['8', '9', '15'],
            'eagles' : ['2', '13', '4']
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
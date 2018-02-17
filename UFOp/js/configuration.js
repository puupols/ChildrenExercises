var configuration = (function(){

    var getLevelConfig = function(level){     
        
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
                'gridCountY' : '5',
                'tankGridPosition' : '13',
                'tankAngle' : '90',
                'blocksV' : ['5'],
                'blocksH' : ['5'],
                'eagles' : ['3']
            }
        }}

        return levelConfig.level[level];
    };

    return {
        getLevelConfig : getLevelConfig
    }

})()
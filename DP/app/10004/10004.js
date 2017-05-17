define(['durandal/app', 'durandal/system', 'knockout', 'share'], function (app, system, ko, shareData) {
    //var anObj = { 100: 'a', 2: 'b', 7: 'c' };
    return {
        DataContext: shareData,

        data: [
            { name: '1' },
            { name: '2' },
            { name: '3' },
        ],

        Trans: {
            "100": 'a', "2": 'b', "7": 'c'
        }
    };

});
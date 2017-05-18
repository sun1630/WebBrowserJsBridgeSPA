define(['durandal/app', 'durandal/system', 'knockout', 'share'], function (app, system, ko, shareData) {
    //var anObj = { 100: 'a', 2: 'b', 7: 'c' };
    var key = ko.observable();

    return {
        delkey: key,
        DataContext: shareData.DataContext,

        data: [
            { name: '1' },
            { name: '2' },
            { name: '3' },
        ],

        Trans: {
            "100": 'a', "2": 'b', "7": 'c'
        },
        del: function () {

            for (var i = 0; i < this.DataContext.TransList().length; i++) {
                if (this.DataContext.TransList()[i].propName == this.delkey()) {
                    this.DataContext.TransList().splice(i, 1);
                } 
            }

            this.DataContext.TransList().push({
                propName: 'T100',
                propValue: {
                    amount: 1000
                }})

            delete this.DataContext["Trans"][this.delkey()];



            //for (var item in this.DataContext.TransList) {
            //    if (item.propName == this.delkey()) {

            //    }
            //}
           
        }
    };

});
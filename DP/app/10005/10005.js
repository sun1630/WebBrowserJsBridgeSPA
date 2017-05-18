define(['durandal/app', 'durandal/system', 'knockout', 'share', 'vmProvide'], function (app, system, ko, dm, vmp) {
   
    var model= new vmp({
        name: '',
        data: {
            //System: dm.System,
            //Teller: dm.Teller,
            //TellerName :{
            //    value:shareData.Teller.Name,
            //    metadata{}

            //},
            //Teller2: {
            //    NAME: {
            //        value: shareData.Teller.Name,
            //        metadata: {
            //        }
            //    }
            //},
            TransNo: {
                value: 'T00001',
                metadata: {
                    rule: {
                        required: true,
                        readony: true
                    }
                }
            }
            //},
            //TransAmount: {
            //    value: 1000,
            //    metadata: {
            //        rule: {
            //            required: true
            //        },
            //        format: function (value) {
            //            return value;
            //        }
            //    }
            //},
            //Address: []
        }
    })

    return  model;
});
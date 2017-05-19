define(['durandal/app', 'durandal/system', 'knockout', 'share', 'vmProvide'], function (app, system, ko, dm, vmp) {

    var model = new vmp({
        name: '',
        data: {
            System: dm.System,
            Teller: dm.Teller,
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
                        required: 'this is required',
                        readonly: true
                    }
                }
            },
            vmpTransNo: {
                value: ''
            },
            TransAmount: {
                value: 1000,
                metadata: {
                    rule: {
                        required: true
                    },
                    format: function (value) {
                        return value;
                    }
                }
            },
            //Address: []
        },
        methods: {
            changeBranchName: function () {
                this.System.BranchNo('S0002',true);
                this.System.BranchName('上海分行');
            },
            alertTransNo: function () {
                alert(this.TransNo() + ' : ' + this.TransAmount());
            },
            changeTransNo: function () {
                this.TransNo(this.vmpTransNo(), false);
            }
        }
    })

    return model;
});
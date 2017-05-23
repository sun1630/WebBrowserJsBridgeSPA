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
            Province: {
                value: [
                    { code: '001', value: '北京市' },
                    { code: '002', value: '上海市' }
                ]
            },
            CityData: {
                value: [
                    { code: '001001', value: '海淀区', parent: '001' },
                    { code: '001002', value: '昌平区', parent: '001' },
                    { code: '002001', value: '浦东新区', parent: '002' },
                    { code: '002002', value: '普陀区', parent: '002' },
                ]
            },
            ProvinceCode: {
                value: ''
            },
            City: {
                value: []
            }
        },
        methods: {
            changeBranchName: function () {
                this.System.BranchNo('S0002', true);
                this.System.BranchName('上海分行');
            },
            alertTransNo: function () {
                alert(this.TransNo() + ' : ' + this.TransAmount());
            },
            changeTransNo: function () {
                this.TransNo(this.vmpTransNo(), false);
            },
            changepv: function () {
                var code = this.ProvinceCode();
                var tm = [];
                this.CityData().forEach(function (item) {
                    if (item.parent == code) {
                        tm.push(item);
                    }
                })
                //for (var c in this.CityData()) {
                //    if (c.parent.code == this.Province().code) {
                //        tm.push(c);
                //    }
                //}
                this.City(tm);
            }
        }
    })

    return model;
});
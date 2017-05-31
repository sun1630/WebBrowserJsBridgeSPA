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
            Customer: {
                name: 'zhangsan',
                age: 28
            },
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
            ProvinceCode: {
                value: ''
            },
            CityData: {
                value: [
                    { code: '001001', value: '海淀区', parent: '001' },
                    { code: '001002', value: '昌平区', parent: '001' },
                    { code: '002001', value: '浦东新区', parent: '002' },
                    { code: '002002', value: '普陀区', parent: '002' },
                ]
            },
            City: {
                value: []
            },
            CityCode: {
                value: ''
            },
            addr: {
                value: [
                    {
                        code: '001',
                        value: '北京市',
                        children: [
                            { code: '001001', value: '朝阳区' },
                            { code: '001002', value: '丰台区' },
                        ]
                    },
                    {
                        code: '002',
                        value: '上海市',
                        children: [
                            { code: '002001', value: '虹口区' },
                            { code: '002002', value: '黄浦区' },
                        ]
                    }
                ]
            },
            addrChildren: [],
            addrCode: {
                value: ''
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
                var tm = this.CityData().filter(function (item) {
                    return item.parent === code;
                });
                //for (var c in this.CityData()) {
                //    if (c.parent.code == this.Province().code) {
                //        tm.push(c);
                //    }
                //}
                this.City(tm);
            },
            changeAddr: function () {
                var code = this.addrCode();
                var tm = this.addr().filter(function (item) {
                    return item.code === code;
                });
                this.addrChildren(tm[0].children);
            }
        }
    })

    return model;
});
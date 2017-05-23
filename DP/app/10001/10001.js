define(['durandal/app', 'durandal/system', 'knockout', 'share', 'vmProvide'], function (app, system, ko, dm, vmp) {
    return new vmp({
        data: {
            Transaction: dm.Transaction,
            customerName: {
                value: '',
                metadata: {
                    rule: {
                        required: 'this is required',
                        readonly: true
                    }
                }
            },
            amount: {
                value: '' 
            }
        },
        methods: {
            AddTransaction: function () {
                this.Transaction.customerName('张三', true);
                this.Transaction.amount(1000);
            }
        }
    });

});
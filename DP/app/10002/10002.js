define(['durandal/app', 'durandal/system', 'knockout', 'share', 'vmProvide'], function (app, system, ko, dm, vmp) {
    return new vmp({
        data: {
            Transaction: dm.Transaction
        },
        methods: {
            UpdateTransaction: function () {
                this.Transaction.customerName('李四', true);
                this.Transaction.amount(10);
            }
        }
    });

}); 
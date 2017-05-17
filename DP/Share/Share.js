define(['knockout'], function (ko) {

    var system = (function () {
        function sys() {
            this._systemid = ko.observable('sys001');
        }

        Object.defineProperty(sys, 'systemid', {
            get: function () {
                return this._systemid();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(sys, 'systemidW', {
            set: function (newValue) {
                this._systemid(newValue);
            },
            enumerable: true,
            configurable: true
        });
        return sys;
    }())

    ShareManager.DataContext = (function () {
        function Data() {
            if (!debugInWebBrowser) {
                this._fullName = ko.observable(
                    'default share wangwu'
                );
            }
            else {
                this._fullName = ko.observable(
                    window.external.DataSynchronizer.GetExternalName()
                );
            }
            this._age = 20;
            this._externalName = 'js externalName';
            //this.Trans = { };

            //this.system = new system();
        }
        //this.Trans = {
        //    "T2": {
        //        amount: 100
        //    }
        //};
        //this.Trans["T1"] = {
        //    amount: 100
        //};

        //for (var i = 0; i < 10; i++) {
        //    this.Trans["T" + i] = {
        //        amount: 100
        //    };
        //}

        Object.defineProperty(Data.prototype, "fullName", {
            get: function () {
                return this._fullName();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Data.prototype, "fullNameW", {
            set: function (newName) {
                this._fullName(newName);
            },
            enumerable: true,
            configurable: true
        });

        return Data;
    }());

    var r = new ShareManager.DataContext();
    //原因不明  2017-05-17
    r.Trans = {
    };

    for (var i = 0; i < 10; i++) {
        r.Trans ["T" + i] = {
            amount: i * 100
        };
    }

    if (debugInWebBrowser) {
        window
            .external
            .DataSynchronizer
            .AddJavaScriptListener(function (msg) {
                r.fullNameW = msg;
            });
    }

    r.alertA = function () {
        alert(r.fullName);
    }

    return r;




});
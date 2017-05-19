define(['knockout', 'knockout.validation'], function (ko) {

    ko.validation.init({
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        messageTemplate: null
    }, true);

    ko.extenders.logChange = function (target, option, option2) {
        target.subscribe(function (newValue) {
            console.log("========================");
            console.log(option);
            //console.log(target());
            OnValueChanged(option, target, newValue);
        });
        return target;
    };

    ko.extenders.readonly = function (target, readonly) {
        var computed = ko.computed({
            read: target,
            write: function () {
                if (arguments.length <= 1) {
                    if (!computed.canWrite()) {
                        //var aa = target();
                        //target(aa);
                        console.log("Observable in read only mode");

                        return;
                    }
                }
                target(arguments[0]);
            }
        });
        computed.canWrite = ko.observable(!readonly);
        return computed;
    };


    return {
        System: {
            BranchNo: ko.observable('B0001').extend({ required: 'this is required', readonly: true }),
            BranchName: ko.observable('北京分行').extend({ required: 'this is required' }),
        },
        Teller: {
            TellerNo: ko.observable('T0001').extend({ required: 'this is required', readonly: true }),
            TellerName: ko.observable('Tel-张三').extend({ required: 'this is required' }),
        }
    }



    //var system = (function () {
    //    function data() {
    //        if (!debugInWebBrowser) {
    //            this._BranchNo = ko.observable('B0001');
    //        }
    //        else {
    //            this._BranchNo = ko.observable(
    //                window.external.DataSynchronizer.GetExternalName()
    //            );
    //        }
    //        this._BranchName = ko.observable('北京市分行');
    //    }

    //    Object.defineProperty(data.prototype, 'BranchNo', {
    //        get: function () {
    //            return this._BranchNo();
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });

    //    Object.defineProperty(data.prototype, 'BranchName', {
    //        get: function () {
    //            return this._BranchName();
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });
    //    Object.defineProperty(data.prototype, 'BranchNameW', {
    //        set: function (newValue) {
    //            this._BranchName(newValue);
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });
    //    return data;
    //}());


    //var teller = (function () {
    //    function data() {
    //        if (!debugInWebBrowser) {
    //            this._TellerNo = ko.observable('T0001');
    //        }
    //        else {
    //            this._TellerNo = ko.observable(
    //                window.external.DataSynchronizer.GetExternalName()
    //            );
    //        }
    //        this._TellerName = ko.observable('T-李四');
    //    }

    //    Object.defineProperty(data.prototype, 'TellerNo', {
    //        get: function () {
    //            return this._TellerNo();
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });

    //    Object.defineProperty(data.prototype, 'TellerName', {
    //        get: function () {
    //            return this._TellerName();
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });
    //    Object.defineProperty(data.prototype, 'TellerNameW', {
    //        set: function (newValue) {
    //            this._TellerName(newValue);
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });
    //    return data;
    //}());


    //ShareManager.DataContext = (function () {
    //    function Data() {
    //        if (!debugInWebBrowser) {
    //            this._fullName = ko.observable(
    //                'default share wangwu'
    //            );
    //        }
    //        else {
    //            this._fullName = ko.observable(
    //                window.external.DataSynchronizer.GetExternalName()
    //            );
    //        }
    //        this._age = 20;
    //        this._externalName = 'js externalName';
    //        //this.Trans = { };

    //    }
    //    //this.Trans = {
    //    //    "T2": {
    //    //        amount: 100
    //    //    }
    //    //};
    //    //this.Trans["T1"] = {
    //    //    amount: 100
    //    //};

    //    //for (var i = 0; i < 10; i++) {
    //    //    this.Trans["T" + i] = {
    //    //        amount: 100
    //    //    };
    //    //}

    //    Object.defineProperty(Data.prototype, "fullName", {
    //        get: function () {
    //            return this._fullName();
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });

    //    Object.defineProperty(Data.prototype, "fullNameW", {
    //        set: function (newName) {
    //            this._fullName(newName);
    //        },
    //        enumerable: true,
    //        configurable: true
    //    });

    //    return Data;
    //}());

    //var r = new ShareManager.DataContext();
    //var sys = new system();
    //var tel = new teller();



    ////原因不明  2017-05-17
    //r.Trans = {
    //};

    //for (var i = 0; i < 10; i++) {
    //    r.Trans["T" + i] = {
    //        amount: i * 100
    //    };
    //}

    //r.TransList = ko.observableArray();

    //r.TransList = ko.computed(function () {
    //    var result = [];
    //    for (var propName in r.Trans) {
    //        if (r.Trans.hasOwnProperty(propName)) {
    //            result.push({
    //                propName: propName,
    //                propValue: {
    //                    amount: 100
    //                }
    //                //propName: propName, propValue: r.Trans[propName], templateName: function (data) {
    //                //    if (data.propValue() instanceof Array) {
    //                //        return "list_templ";
    //                //    } else {
    //                //        return "scalar_templ";
    //                //    }
    //                //}
    //            });
    //        }
    //    }
    //    return result
    //})



    //if (debugInWebBrowser) {
    //    window
    //        .external
    //        .DataSynchronizer
    //        .AddJavaScriptListener(function (msg) {
    //            r.fullNameW = msg;
    //        });
    //}

    //r.alertA = function () {
    //    alert(r.fullName);
    //}

    //return {
    //    System: sys,
    //    Teller: tel,
    //    DataContext: r
    //};




});
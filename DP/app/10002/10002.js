define(['durandal/app', 'durandal/system', 'knockout'], function (app, system, ko) {
    var vm = (function () {
        function person() {
            //this._fullName = ko.observable('default wangwu');
            if (!debugInWebBrowser) {
                this._fullName = ko.observable(
                    //window.external.PeripheringDevice.GetExternalName()
                    'default wangwu'
                );
            }
            else {
                this._fullName = ko.observable(
                    window.external.DataSynchronizer.GetExternalName()
                    //'default wangwu'
                );
            }
            this._age = 20;
            this._externalName = 'js externalName';
        }
        Object.defineProperty(person.prototype, "fullName", {
            get: function () {
                return this._fullName();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(person.prototype, "fullNameW", {
            set: function (newName) {
                this._fullName(newName);
            },
            enumerable: true,
            configurable: true
        });

        //Object.defineProperty(person.prototype, "age", {
        //    get: function () {
        //        return this._fullName;
        //    },
        //    enumerable: true,
        //    configurable: true
        //});
        //Object.defineProperty(person.prototype, "ageW", {
        //    set: function (newName) {
        //        this._fullName = newName;
        //    },
        //    enumerable: true,
        //    configurable: true
        //});

        return person;
    }());
    var r = new vm();
    if (debugInWebBrowser) {
        window
            .external
            .DataSynchronizer
            .AddJavaScriptListener(function (msg) {
                r.fullNameW = msg;
            });
    }

    r.alertA = function () {
        alert(this.fullName);
    }

    //vm.alertA = function () {
    //    alert('aaaaaa');

    //}

    return r;
});
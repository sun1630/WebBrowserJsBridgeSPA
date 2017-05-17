define(['durandal/app', 'durandal/system', 'knockout', 'share'], function (app, system, ko, data) {
    var vm = (function () {
        function person() {
            if (!debugInWebBrowser) {
                this._fullName = ko.observable(
                   'default zhangsan'
               );
            }
            else {
                this._fullName = ko.observable(
                    window.external.DataSynchronizer.GetExternalName()
                );
            }
            this._age = 20;
            this._externalName = 'js externalName';
            this.dataContextB = data;
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
        return person;
    }());

    var r = new vm();

    if (debugInWebBrowser) {
        //window
        //    .external
        //    .DataSynchronizer
        //    .AddJavaScriptListener(function (msg) {
        //        r.fullNameW = msg;
        //    });
    }

    r.alertA = function () {
        alert(this.fullName);
    }

    return r;
});
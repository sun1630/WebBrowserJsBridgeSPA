﻿define(['knockout'], function (ko) {

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
        }
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
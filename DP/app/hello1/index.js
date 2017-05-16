define(['durandal/app', 'durandal/system', 'knockout'], function (app, system, ko) {

    var vm = (function () {
        function person() {
            this._fullName = ko.observable('王五');
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
        return person;
    }());

    var canSayHello = ko.computed(function () {
        return name ? true : false;
    });
    var r = new vm();

    if (debugInWebBrowser) {
        window.external.DataSynchronizer.AddJavaScriptListener(function (msg) {
            r.fullNameW = msg;
        });

    }


    return {
        displayName: 'What is your name?',
        name: r.fullName,
        sayHello: function() {
            alert(this.name)
        },
        canSayHello: canSayHello,
        activate: function() {
            system.log('Lifecycle : activate : hello');
        },
        binding: function () {
            system.log('Lifecycle : binding : hello');
            return { cacheViews:false }; //cancels view caching for this module, allowing the triggering of the detached callback
        },
        bindingComplete: function () {
            system.log('Lifecycle : bindingComplete : hello');
        },
        attached: function (view, parent) {
            system.log('Lifecycle : attached : hello');
        },
        compositionComplete: function (view) {
            system.log('Lifecycle : compositionComplete : hello');
        },
        detached: function (view) {
            system.log('Lifecycle : detached : hello');
        }
    };
});
define(['knockout', 'knockout.validation'], function (ko) {

    ko.validation.init({
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        messageTemplate: null
    }, true);

    ko.extenders.logChange = function (target, option,option2) {
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
                        var aa = target();
                        target(aa);
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


    return function (opt) {

        var local = function (ctx) {
            for (var d in opt.data) {
                var field = opt.data[d];

                if (field.hasOwnProperty('value')) {
                    if (field.metadata && field.metadata.rule) {
                        var ext = {};
                        var rules = Object.keys(field.metadata.rule);
                        for (var key in rules) {
                            switch (rules[key]) {
                                case 'required': ext.required = field.metadata.rule[rules[key]]; break;
                                case 'readonly': ext.readonly = field.metadata.rule[rules[key]]; break;
                            }
                        }
                        ext.logChange = { root: local,path:d};
                        this[d] = field instanceof Array ? ko.observableArray(field.value).extend(ext) : ko.observable(field.value).extend(ext);

                    } else {
                        this[d] = field instanceof Array ? ko.observableArray(field.value).extend(ext) : ko.observable(field.value).extend({ readonly: false });
                    }
                } else {
                    this[d] = field;
                }
            }

            for (var f in opt.methods) {
                this[f] = opt.methods[f];//   opt.methods[fun].bind(Object.assign(this, ctx));
            }
            return this;
        }
        return new local();
    };
})
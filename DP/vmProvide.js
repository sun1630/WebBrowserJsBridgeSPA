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
                        ext.logChange = { root: local, path: d };

                        if (field.value instanceof Array) {
                            this[d] = ko.observableArray(field.value).extend(ext);
                            this["selected" + d] = ko.observable();
                        } else {
                            this[d] = ko.observable(field.value).extend(ext);
                        }
                    } else {
                        if (field.value instanceof Array) {
                            this["selected" + d] = ko.observable();
                            this[d] = ko.observableArray(field.value).extend(ext);
                        } else {
                            this[d] = ko.observable(field.value).extend({ readonly: false });
                        }
                    }
                } else {
                    //有问题  system,teller,{} 都属于Object 无法区分  ，暂时以字段是否是function 来判断
                    if (field instanceof Object) {
                        var keys = Object.keys(field);
                        for (var i in keys) {
                            if (!field[keys[i]] instanceof Function) {
                                field[keys[i]] = ko.observable(field[keys[i]]);
                            }
                        }
                        this[d] = field;
                    }

                    if (field instanceof Array) {
                        this[d] = ko.observableArray(field);
                    }
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
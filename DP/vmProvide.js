define(['knockout', 'knockout.validation'], function (ko) {

    ko.validation.init({
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        messageTemplate: null
    }, true);


    return function (opt) {

        var local = function (ctx) {
            for (var d in opt.data) {
                var _self = this;
                var field = opt.data[d];
                //if (field.hasOwnProperty())

                this[d] = ko.observable(field.value);//instanceof Array ? ko.observableArray(field) : ko.observable(field);

                this[d].extend({ required: "Please enter a first name" });

                //_self['m_' + d] = ko.observable(field);


                //Object.defineProperty(_self, d, {
                //    get: function () {

                //        return _self['m_' + d]().value;
                //    },
                //    enumerable: true,
                //    configurable: true
                //});

                //_self[d].extend({
                //    required: true
                //})

                console.log(d);
            }
            return this;
        }
        return new local();
    };
})
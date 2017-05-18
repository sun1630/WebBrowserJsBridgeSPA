define(['durandal/app', 'durandal/system', 'knockout'], function (app, system, ko) {
    ko.extenders.numeric = function (target, precision) {
        //create a writable computed observable to intercept writes to our observable
        var result = ko.pureComputed({
            read: target,  //always return the original observables value
            write: function (newValue) {
                var current = target(),
                    roundingMultiplier = Math.pow(10, precision),
                    newValueAsNum = isNaN(newValue) ? 0 : +newValue,
                    valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

                //only write if it changed
                if (valueToWrite !== current) {
                    target(valueToWrite);
                } else {
                    //if the rounded value is the same, but a different value was written, force a notification for the current field
                    if (newValue !== current) {
                        target.notifySubscribers(valueToWrite);
                    }
                }
            }
        }).extend({ notify: 'always' });

        //initialize with current value to make sure it is rounded appropriately
        result(target());

        //return the new computed observable
        return result;
    };

    function AppViewModel(one, two) {
        this.myNumberOne = ko.observable(one).extend({ numeric: 0 });
        this.myNumberTwo = ko.observable(two).extend({ numeric: 2 });
    }

    ko.applyBindings(new AppViewModel(221.2234, 123.4525));

});
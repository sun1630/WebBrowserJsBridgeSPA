define(['durandal/app', 'durandal/system', 'knockout'], function (app, system, ko) {
    // return new

    var ps = {
        cus: {
            name: 'sun'
        }
    }
    var path = 'cus.name';
    var newValue = 'zhiqiang';

    var arrs = path.split('.');
    var item = ps;
    for (var i = 0; i < arrs.length; i++) {
        if (Object.prototype.toString.call(ps[arrs[i]]) === "[object String]") {
            ps[arrs[i]] = newValue;
        } else {
            item = nextNode(item, arrs[i], newValue);
        }
    }
    function nextNode(target, nextNode, Value) {
        if (Object.prototype.toString.call(target[nextNode]) === "[object String]") {
            target[nextNode] = Value;
        }
        return target[nextNode];
    }



    var aa = ps.cus.name;


    return '';

});
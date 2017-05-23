define(['share'], function (data) {
    if (debugInWebBrowser) {
        window
            .external
            .DataSynchronizer
            .AddJavaScriptListener(function (path, newValue) {
                var arrs = path.split('.');
                var item = data;
                for (var i = 0; i < arrs.length; i++) {
                    item = nextNode(item, arrs[i], newValue);
                    console.log(item);
                }
                function nextNode(target, nextNode, Value) {
                    if (Object.prototype.toString.call(target[nextNode]) === "[object String]") {
                        target[nextNode] = Value;
                    }

                    if (typeof target[nextNode] == 'function') {
                        target[nextNode](Value);
                    }

                    return target[nextNode];
                }
            });
    }
})


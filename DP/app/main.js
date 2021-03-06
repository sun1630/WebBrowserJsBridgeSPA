﻿requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'knockout.validation': '../lib/knockout/knockout.validation.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',

        //2017-05-16 yxy
        'share': '../share/share',

        'vmProvide': '../vmProvide',
        'spa': '../spa'


    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

(function (arg) {
    arg.ShareManager = arg.ShareManager || null;
    window.ShareManager = window.ShareManager || arg;
}(window.ShareManager || {})
);


function OnValueChanged(target,sender, newValue)
{
    console.log(target);
    console.log(sender );
    console.log(newValue);
    // 通知C# 更新统一数据层

}



define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap', 'spa'], function (system, app, viewLocator) {

    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('shell');
    });
});
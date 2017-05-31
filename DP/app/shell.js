define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                                {
                                    route: '10001',
                                    moduleId: '10001/10001',
                                    title: '10001',
                                    nav: 1
                                },
                                {
                                    route: '10002',
                                    moduleId: '10002/10002',
                                    title: '10002',
                                    nav: 1
                                },
                                {
                                    route: '10003',
                                    moduleId: '10003/10003',
                                    title: '10003',
                                    nav: 1
                                },
                                {
                                    route: '10004',
                                    moduleId: '10004/10004',
                                    title: '10004',
                                    nav: 1
                                },
                                {
                                    route: '10005',
                                    moduleId: '10005/10005',
                                    title: '10005',
                                    nav: 1
                                },
                                {
                                    route: '10006',
                                    moduleId: '10006/10006',
                                    title: '10006',
                                    nav: 1
                                },
                                //{ route: 'view-composition',                    moduleId: 'viewComposition/index',      title: 'View Composition',      nav: true },
                                //{ route: 'modal',                               moduleId: 'modal/index',                title: 'Modal Dialogs',         nav: 3 },
                                //{ route: 'event-aggregator',                    moduleId: 'eventAggregator/index',      title: 'Events',                nav: 2 },
                                //{ route: 'widgets',                             moduleId: 'widgets/index',              title: 'Widgets',               nav: true },
                                //{ route: 'master-detail',                       moduleId: 'masterDetail/index',         title: 'Master Detail',         nav: true },
                                //{ route: 'knockout-samples*details',            moduleId: 'ko/index',                   title: 'Knockout Samples',      nav: true },
                                //{ route: 'keyed-master-details/:id*details',    moduleId: 'keyedMasterDetail/master',   title: 'Keyed Master Detail',   hash: '#keyed-master-details/:id' }


            ]).buildNavigationModel()
              .mapUnknownRoutes('10001/10001', 'not-found')
              .activate();
        }
    };
});
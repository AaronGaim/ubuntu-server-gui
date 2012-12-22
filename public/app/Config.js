var require = {
    baseUrl: '/app',
    paths: {
        // Core Libs
        jquery: '../libs/jquery/jquery-1.8.2.min',
        underscore: '../libs/underscore/underscore',
        backbone: '../libs/backbone/backbone',
        marionette: '../libs/backbone.marionette/backbone.marionette',

        // Addons
        backbone_dualstorage: '../libs/backbone.dualstorage/backbone.dualstorage',
        backbone_modelbinder: '../libs/backbone.modelbinder/Backbone.ModelBinder',
        backbone_routefilter: '../libs/backbone.routefilter/backbone.routefilter',

        // Bootstrap & jQuery Plugins
        bootstrap_modal: '../css/sass-twitter-bootstrap/js/bootstrap-modal',
        bootstrap_tooltip: '../css/sass-twitter-bootstrap/js/bootstrap-tooltip',
        bootstrap_popover: '../css/sass-twitter-bootstrap/js/bootstrap-popover',
        bootstrap_transition: '../css/sass-twitter-bootstrap/js/bootstrap-transition',
        joyride: '../libs/zurb-joyride/jquery.joyride-2.0.2',
        gauge: '../libs/gauge.js/dist/gauge',
        contextmenu: '../libs/contextmenu/contextmenu',

        // Misc
        text: '../libs/require/text',
        socket_io: '../libs/socket.io-client/dist/socket.io',

        // Testing Libs
        mocha: '../libs/mocha/mocha',
        sinon: '../libs/sinon/sinon-1.5.0',
        chai: '../libs/chai/chai',
        sinon_chai: '../libs/chai/plugins/sinon-chai'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone_dualstorage': {
            deps: ['backbone']
        },
        'bootstrap_modal': {
            deps: ['jquery'],
            exports: 'jQuery.fn.modal'
        },
        'bootstrap_tooltip': {
            deps: ['jquery']
        },
        'bootstrap_popover': {
            deps: ['jquery']
        },
        'bootstrap_transition': {
            deps: ['jquery']
        },
        'joyride': {
            deps: ['jquery'],
            exports: 'jQuery.fn.joyride'
        },
        'gauge': {
            deps: ['jquery'],
            exports: 'Donut'
        },
        'contextmenu': {
            exports: 'contextmenu'
        },
        'socket_io': {
            exports: 'io'
        }
    }
};
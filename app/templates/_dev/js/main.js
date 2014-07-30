/* jshint undef: false, unused: false, -W020 */
/* global Gumby,jQuery */
(function($, window, document, undefined) {
    'use strict';


    //------------------------  CONSOLE FIX
    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    //------------------------  CONSOLE END


    $(function() {
        // JQUERY READY, MY FUNCTIONS HERE
        console.log('Ulla boilerplate ready!!!');

        if (!Modernizr.csstransitions || !Modernizr.cssanimations) {
            $('#warning').addClass('active');
        }

        $('.open-popup-link').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 500,
            callbacks: {
                open: function() {
                    // $(this.content).addClass('active');
                },
                close: function() {
                    // $(this.content).removeClass('active');
                }
            },
            midClick: true
        });
        $('.open-popup-warning').magnificPopup();
        // $('.open-popup-warning').magnificPopup('open');


    });



})(jQuery, this, this.document);
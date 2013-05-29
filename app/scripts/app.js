/*global define */
define(["jquery","Wig"], function ($, Wig) {
    'use strict';
    return {
        run : function(){
                $('ul').attr('data-mode', 'tab-container');
                $('ul').addClass('wig');
                var li = $('ul li:first');
                var li2 = $('ul li:last');


                li.attr('data-target', 'p:first');
                li2.attr('data-target', 'p:last');

                li.attr('data-tab', 'true');
                li2.attr('data-tab', 'true');
                
                var wig = new Wig();
                wig.start();
              }
    }
});


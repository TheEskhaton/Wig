/*global define */
define(["jquery","Wig"], function ($, Wig) {
    'use strict';
    return {
        run : function(){
                var li = $('ul li:first');
                li.addClass('wig');
                
                li.attr('data-mode', 'set-style');
                li.attr('data-target', 'p');
                li.attr('data-style', 'color:red;');
                
                var wig = new Wig();
                wig.start();
              }
    }
});


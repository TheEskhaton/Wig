/*global define */
define(["jquery","Wig"], function ($, Wig) {
    'use strict';
    return {
        run : function(){
                var li = $('ul li:first');
                li.addClass('wig');
                Wig.set('something',123);                
                li.attr('data-mode', 'set-style');
                li.attr('data-target', 'p');
                li.attr('data-style', 'color:red;');
                
                console.log(Wig.get('something'));

                var wig = new Wig();
                wig.start();
              }
    }
});


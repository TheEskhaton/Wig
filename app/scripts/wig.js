define("Wig", ["jquery"],function($){ 

    var Wig = function(selector){
        selector = selector || '.wig';
        this.$el = $(selector);
        return this;
    };
    
    var setupEvent = function($el, cb){
        var evt = $el.data('on') || 'click';
        $el.on(evt, cb);
    }

    /* MODES START */

    var toggleVisibility = function($el){
        setupEvent($el, function(){
            var $this = $(this);
            var $target = $($this.data('target'));
            $target.css('display') == 'none' ?  $target.show() : $target.hide();
        });
    }
    
    var loadAjax = function($el){
        var $target = $($el.data('target'));
        var url = $el.data('url');
        setupEvent($el ,function(){
            $.get(url, function(content){
                $target.html(content);
            });
        });
    }
    
    var setStyle = function($el){
        var $target = $($el.data('target'));
        var style = $el.data('style');
        setupEvent($el, function(){
            $target.attr('style', style);
        });
    }
    
    /* MODES END*/

    var modeMap = {
        'toggle-visible' : toggleVisibility,
        'load-ajax' : loadAjax,
        'set-style' : setStyle
    }

    Wig.prototype = {           
        start: function(){
                   this.$el.each(function(){
                        var $this = $(this);
                        var mode = $this.data('mode');
                        if(mode)modeMap[mode]($this);
                   });
               }
    };
    
    Wig.addMode = function(name, cb){
        modeMap[name] = cb;
    }

    return Wig;
})

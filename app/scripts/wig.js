define("Wig", ["jquery"],function($){ 

    var globalData = {};

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
    
    var toggleStyle = function($el){
        var $target = $($el.data('target'));
        var styleOne = $el.data('style-one');
        var styleTwo = $el.data('style-two');
        setupEvent($el, function(){
            var targetStyle = $target.attr('style');
            targetStyle == styleOne ? $target.attr('style', styleTwo) : $target.attr('style', styleOne);
        });
    }
    
    var tabContainer = function($el){
        var $tabChildren = $el.children().filter(function(){ return $(this).data('tab') == true });
        console.log($tabChildren);
        var hideTabs = function(){
           $tabChildren.each(function(){
                var $this = $(this);
                var $target = $($this.data('target'));
                $target.hide();
            });
        }
        setupEvent($tabChildren, function() {
            var $this = $(this);
            hideTabs();
            var $target = $($this.data('target'));
            $target.show();
 
        });
       
    }
    /* MODES END*/

    var modeMap = {
        'toggle-visible' : toggleVisibility,
        'load-ajax' : loadAjax,
        'set-style' : setStyle,
        'toggle-style' : toggleStyle,
        'tab-container' : tabContainer
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
    
    /* STATIC HELPERS */

    Wig.addMode = function(name, cb){
        modeMap[name] = cb;
    }
    
    Wig.get = function(key){
        return globalData[key];        
    }
    
    Wig.set = function(key, value){
        globalData[key] = value;
    }
    
    /* STATIC HELPERS END */

    return Wig;
})

/**
 * DOM鎿嶄綔
 */
(function() {

    my.DOM = {
        /**
         * 鏍规嵁id鑾峰彇鍏冪礌
         * @param {String} id
         */
        get : function(id) {
            return document.getElementById(id);
        },
        /**
         * 鑾峰彇鍏冪礌鐨凜SS鏍峰紡鍊�
         * @param {DOM Object} element
         * @param {String} name
         */
        getStyleValue : function(element, name) {
            if(element.currentStyle) {
                return element.currentStyle[name];
            } else {
                var style = document.defaultView.getComputedStyle(element, null);
                return style[name];
            }
        },
        /**
         * 闅愯棌鍏冪礌
         * @param {DOM Object} element
         */
        hide : function(element) {
            element.style.display = 'none';
        },
        /**
         * 鏄剧ず鍏冪礌
         * @param {DOM Object} element
         */
        show : function(element) {
            element.style.display = 'block';
        },
        /**
         * 鍒犻櫎鍏冪礌
         * @param {DOM Object} element
         */
        remove : function(element) {
            element.parentNode.removeChild(element);
        },
        /**
         * 妫€鏌ュ厓绱犳槸鍚﹀叿鏈夋煇涓猚lass鏍峰紡
         * @param {DOM Object} element
         * @param {String} className
         */
        hasClass : function(element, className) {
            var names = element.className.split(/\s+/);
            for(var i = 0; i < names.length; i++) {
                if(names[i] == className) {
                    return true;
                }
            }
            return false;
        },
        /**
         * 涓哄厓绱犳坊鍔燾lass鏍峰紡
         * @param {DOM Object} element
         * @param {String} className
         */
        addClass : function(element, className) {
            if(!this.hasClass(element, className)) {
                element.className += ' ' + className;
            }
        },
        /**
         * 浠庡厓绱犱笂绉婚櫎class鏍峰紡
         * @param {DOM Object} element
         * @param {String} className
         */
        removeClass : function(element, className) {
            if(this.hasClass(element, className)) {
                var names = element.className.split(/\s+/), newClassName = [];
                for(var i = 0; i < names.length; i++) {
                    if(names[i] != className) {
                        newClassName.push(names[i]);
                    }
                }
                element.className = newClassName.join(' ');
            }
        }
    }

})();

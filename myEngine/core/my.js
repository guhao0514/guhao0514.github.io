/**
 * myEngine瀹氫箟
 */
(function() {
    var my = {
        /**
         * 渚涘叏灞€寮曠敤鐨勭┖鍑芥暟
         */
        fn : new Function(),
        /**
         * 閫氳繃鍘熷瀷瀹炵幇鐨勭被缁ф壙
         * @param {Function} childClass
         * @param {Function} parentClass
         */
        inherit : function(childClass, parentClass) {
            var Constructor = new Function();
            Constructor.prototype = parentClass.prototype;
            childClass.prototype = new Constructor();
            childClass.prototype.constructor = childClass;
            childClass.superclass = parentClass.prototype;

            if(childClass.prototype.constructor == Object.prototype.constructor) {
                childClass.prototype.constructor = parentClass;
            }
        },
        /**
         * 鎵╁睍鍜岃鐩栦竴涓璞＄殑灞炴€�
         * @param {Object} obj
         * @param {Object} newProperties
         */
        extend : function(obj, newProperties) {
            var key;

            for(key in newProperties) {
                if(newProperties.hasOwnProperty(key)) {
                    obj[key] = newProperties[key];
                }
            }

            return obj;
        },
        /**
         * 鎷疯礉瀵硅薄
         * @param {Object} obj
         * @param {Function} targetClass
         * @param {Object} newProperties
         */
        copy : function(obj, targetClass, newProperties) {
            if( typeof obj !== 'object') {
                return obj;
            }

            var value = obj.valueOf();
            if(obj != value) {
                return new obj.constructor(value);
            }

            var o;
            if( obj instanceof obj.constructor && obj.constructor !== Object) {
                if(targetClass) {
                    o = new targetClass();
                } else {
                    o = my.clone(obj.constructor.prototype);
                }

                for(var key in obj) {
                    if(targetClass || obj.hasOwnProperty(key)) {
                        o[key] = obj[key];
                    }
                }
            } else {
                o = {};
                for(var key in obj) {
                    o[key] = obj[key];
                }
            }

            if(newProperties) {
                for(var key in newProperties) {
                    o[key] = newProperties[key];
                }
            }

            return o;
        },
        /**
         * 鍏嬮殕瀵硅薄
         * @param {Object} obj
         */
        clone : function(obj) {
            my.__cloneFunc.prototype = obj;
            return new my.__cloneFunc();
        },
        /**
         * @private
         */
        __cloneFunc : function() {
        },
        /**
         * 閫氳繃闂寘瀹炵幇鐨勪簨浠朵唬鐞�
         * @param {Function} func
         * @param {Object} scope
         */
        delegate : function(func, scope) {
            scope = scope || window;

            if(arguments.length > 2) {
                var args = Array.prototype.slice.call(arguments, 2);

                return function() {
                    return func.apply(scope, args);
                }
            } else {
                return function() {
                    return func.call(scope);
                }
            }
        }
    }

    window.my = my;
})();

/**
 * 绠楁暟杩愮畻鍑芥暟
 */
(function() {

    my.Math = {
        /**
         * 鑾峰彇闅忔満鏁�
         * @param {Number} min
         * @param {Number} max
         */
        random : function(min, max) {
            return Math.floor((max - min + 1) * Math.random()) + min;
        },
        /**
         * 1瑙掑害瀵瑰簲鐨勫姬搴�
         */
        pointtoradian : Math.PI / 180
    }

})();

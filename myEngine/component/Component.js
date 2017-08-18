/**
 * 缁勪欢鍩虹被
 */
(function() {

    var Component = function(cfg) {

        /**
         * 鍒濆鍖栫姸鎬�
         */
        this.initialized = false;

        /**
         * read only
         * 鐖跺鍣ㄧ粍浠�
         */
        this.parent = null;

        // 鎵╁睍灞炴€�
        my.extend(this, cfg);
    }
    /**
     * 浜嬩欢瀹氫箟
     * oninit 鍒濆鍖�
     * ondestory 閿€姣�
     */
    Component.prototype.oninit = my.fn;
    Component.prototype.ondestory = my.fn;

    /**
     * 缁勪欢鍒濆鍖�
     */
    Component.prototype.init = function() {
        this.initialized = true;
        this.oninit();
    }
    /**
     * 缁勪欢閿€姣�
     */
    Component.prototype.destory = function() {
        if(this.parent) {
            this.parent.removeChild(this);
            this.parent = null;
        }
        
        this.ondestory();
        this.oninit = this.ondestory = null;
    }

    my.Component = Component;
})();

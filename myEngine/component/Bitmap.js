/**
 * 鍥剧墖缁勪欢
 */
(function() {

    var Bitmap = function(cfg) {
        /**
         * 鍥剧墖瀵硅薄
         */
        this.image = null;
        /**
         * 閲嶅缁樺埗
         */
        this.repeat = false;
        /**
         * @private
         */
        this.__pattern = null;
		

        Bitmap.superclass.constructor.call(this, cfg);
    }
    my.inherit(Bitmap, my.DisplayObject);

    /**
     * 缁樺埗鍥剧墖
     * @param {Context Object} context
     */
    Bitmap.prototype.draw = function(context) {
        if(this.repeat) {
            if(!this.__pattern) {
                this.__pattern = context.createPattern(this.image, 'repeat');
            }
            context.fillStyle = this.__pattern;
            context.fillRect(0, 0, this.width, this.height);
        } else {
            context.drawImage(this.image, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
        }
        Bitmap.superclass.draw.call(this);
    }
    /**
     * 閿€姣佸浘鍍忓璞�
     */
    Bitmap.prototype.destory = function() {
        this.image = null;
        Bitmap.superclass.destory.call(this);
    }

    my.Bitmap = Bitmap;
})();

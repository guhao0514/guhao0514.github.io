/**
 * 鍙鍖栫粍浠跺熀绫�
 */
(function() {

    var DisplayObject = function(cfg) {

        /**
         * 缁樺埗鏃剁殑x杞翠綅缃�
         */
        this.x = 0;
        /**
         * 缁樺埗鏃剁殑y杞翠綅缃�
         */
        this.y = 0;
        /**
         * 瀹藉害
         */
        this.width = 0;
        /**
         * 楂樺害
         */
        this.height = 0;
        /**
         * 閫忔槑搴�
         */
        this.alpha = 1;
        /**
         * 鏃嬭浆瑙掑害
         */
        this.rotation = 0;
        /**
         * 姘村钩缈昏浆
         */
        this.flipX = false;
        /**
         * 鍨傜洿缈昏浆
         */
        this.flipY = false;
        /**
         * 姘村钩缂╂斁
         */
        this.scaleX = 1;
        /**
         * 鍨傜洿缂╂斁
         */
        this.scaleY = 1;
        /**
         * read only
         * 鏄剧ず鐘舵€�
         */
        this.visible = true;

        DisplayObject.superclass.constructor.call(this, cfg);
    }
    /**
     * 缁ф壙鑷狢omponent绫�
     */
    my.inherit(DisplayObject, my.Component);

    /**
     * 浜嬩欢瀹氫箟
     * onshow 鏄剧ず
     * onhide 闅愯棌
     * onupdate 鐘舵€佹洿鏂�
     * onrender 娓叉煋
     * ondraw 鍦ㄧ敾甯冧笂缁樺埗
     */
    DisplayObject.prototype.onshow = my.fn;
    DisplayObject.prototype.onhide = my.fn;
    DisplayObject.prototype.onupdate = my.fn;
    DisplayObject.prototype.onrender = my.fn;
    DisplayObject.prototype.ondraw = my.fn;

    /**
     * 鏄剧ず缁勪欢
     */
    DisplayObject.prototype.show = function() {
        this.visible = true;
        this.onshow();
    }
    /**
     * 闅愯棌缁勪欢
     */
    DisplayObject.prototype.hide = function() {
        this.visible = false;
        this.onhide();
    }
    /**
     * 鏇存柊鐘舵€�
     * @param {Number} deltaTime
     */
    DisplayObject.prototype.update = function(deltaTime) {
        if(this.onupdate) {
            this.onupdate();
        }
    }
    /**
     * @private
     * 鍙樺舰澶勭悊
     */
    DisplayObject.prototype.__transform = function(context) {
        context.translate(this.x, this.y);

        // 閫忔槑搴�
        if(this.alpha < 1) {
            context.globalAlpha = this.alpha;
        }

        // 鏃嬭浆
        if(this.rotation % 360 > 0) {
            var offset = [this.width / 2, this.height / 2];
            context.translate(offset[0], offset[1]);
            context.rotate(this.rotation % 360 / 180 * Math.PI);
            context.translate(-offset[0], -offset[1]);
        }

        // 缈昏浆
        if(this.flipX || this.flipY) {
            context.translate(this.flipX ? this.width : 0, this.flipY ? this.height : 0);
            context.scale(this.flipX ? -1 : 1, this.flipY ? -1 : 1);
        }

        // 缂╂斁
        if(this.scaleX != 1 || this.scaleY != 1) {
            context.scale(this.scaleX, this.scaleY);
        }
    }
    /**
     * 娓叉煋缁勪欢
     * @param {Context Object} context
     */
    DisplayObject.prototype.render = function(context) {
        if(!this.visible || this.alpha <= 0) {
            return false;
        }

        // 淇濆瓨褰撳墠鐢诲竷鐘舵€�
        context.save();
        // 鍙樺舰娓叉煋甯�
        this.__transform(context);
        this.draw(context);
        // 鎭㈠鐢诲竷鐘舵€�
        context.restore();

        this.onrender();
    }
    /**
     * 鍦ㄧ敾甯冧笂缁樺埗缁勪欢
     * @param {Context Object} context
     */
    DisplayObject.prototype.draw = function(context) {
        this.ondraw();
    }
    /**
     * 缁勪欢閿€姣佹柟娉�
     */
    DisplayObject.prototype.destory = function() {
        this.onshow = this.onhide = this.onupdate = this.onrender = this.ondraw = null;
        DisplayObject.superclass.destory.call(this);
    }

    my.DisplayObject = DisplayObject;
})();

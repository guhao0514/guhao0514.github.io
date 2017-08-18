 /**
 * 閫愬抚鍔ㄧ敾缁勪欢
 */
(function() {

    var Animation = function(cfg) {

        /**
         * 鍔ㄧ敾鍥剧墖
         */
        this.img = null;
        /**
         * 甯у垪琛�
         * @format {
         *     x: 0,
         *     y: 0,
         *     duration: 0,
         *     collRect: [[left, top, width, height]]
         * }
         */
        this.frames = [];
        /**
         * 寰幆鎾斁
         */
        this.loop = true;
        /**
         * 鎾斁鍊嶉€�
         */
        this.speed = 1;
        /**
         * @read only
         * 鎾斁鐘舵€�
         */
        this.playing = false;
        /**
         * @read only
         * 姝ｅ湪鎾斁鐨勫抚绱㈠紩(绗竴甯т粠0寮€濮�)
         */
        this.currentFrameIndex = 0;
        /**
         * @read only
         * 姝ｅ湪鎾斁鐨勫抚瀵硅薄
         */
        this.currentFrame = null;
        /**
         * @private
         * 褰撳墠甯у凡鎾斁娆℃暟
         */
        this.currentPlayeTimes = 0; //鍦ˋnimation鍐呴儴鑷畾涔夎繖鏍凤紝鏄负浜嗚瀵硅薄鑷帶鍒惰嚜宸辩殑甯у彉鎹紝闂存帴褰卞搷杩欎釜鏁板€煎揩鎱㈠氨鏄埛鏂癱anvas閫熺巼鐨勫揩鎱�
		/**
		 * 澶氬皯娆＄晫闈㈠埛鏂版洿鎹竴甯�
		 */
		this.maxPlayTimes = 4 ;    
 
    }
 


    /**
     * 鍒濆鍖�
     */
     Animation.prototype.init=function(imageName,getFrameMethod,framesName){
	       this.img = my.ImageManager.get(imageName);
		   this.frames = getFrameMethod(framesName);   
		   this.currentFrameIndex = 0;
		   this.currentFrame= this.frames[this.currentFrameIndex];
		   this.currentFramePlayed = 0;
     }

    /**
     * normal鐘舵€佹洿鏂�
     */
	 Animation.prototype.update=function(){
	       if(this.currentPlayeTimes>=this.maxPlayTimes){
		      if(this.currentFrameIndex>= this.frames.length-2){ 
			       this.currentFrameIndex=0;
			  }else{			  
			       this.currentFrameIndex++;
			  }
		      this.currentFrame=this.frames[this.currentFrameIndex];
			  this.currentPlayeTimes=0;
		   }else{
		      this.currentPlayeTimes++;    
		   }
    }
	   
    Animation.prototype.draw=function(ct,x,y,w,h){
	       var f = this.currentFrame;
		   ct.drawImage(this.img,f.x,f.y,w,h,x,y,w,h);
    }

    my.Animation = Animation;
})();

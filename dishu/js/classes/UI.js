(function() {
    /**
     * UI鎺у埗
     */
    var UI = function() {
        // 棰勫鐣岄潰
        this.gameCover = my.DOM.get('gameCover');
        // 娓告垙涓讳綋
        this.gameBody = my.DOM.get('gameBody');
        // 娓告垙缁撴潫
        this.gameOver = my.DOM.get('gameOver');
        // 鍒嗘暟
        this.number = my.DOM.get('number');
	    /**
         * 寰楀垎
         */
        this.score = 0;
		//瀛樺湪鐭╅樀,琛ㄧず鍦ㄩ偅涓潙瀛樺湪鍦伴紶
		this.existMatrix;
		this.hammer;
		this.mouse0;
		this.mouse1;
		this.mouse2;
		this.mouse3;
		this.mouse4;
		this.star;
		this.scoreObject;
		this.mousePress=false;
    }
    /**
     * UI浜嬩欢瀹氫箟
     */
    // 鎵撳紑澹伴煶
    UI.prototype.onsoundopen = my.fn;
    // 鍏抽棴澹伴煶
    UI.prototype.onsoundclose = my.fn;
    // 寮€濮�
    UI.prototype.onplay = my.fn;
	// 甯姪
	UI.prototype.onshowHelp=my.fn;
    // 鏆傚仠
    UI.prototype.onpause = my.fn;
    // 缁х画娓告垙
    UI.prototype.onresume = my.fn;
    // 鍑嗗
    UI.prototype.onretry = my.fn;

    /**
     * @private
     * 鍒濆鍖栧０闊虫帶鍒舵寜閽�
     */
    UI.prototype.__initBtnSound = function() {
        var btnSound = my.DOM.get('btnSound'), UI = this;
        btnSound.onclick = my.delegate(function() {
            if(my.DOM.hasClass(btnSound, 'disabled')) {
                my.DOM.removeClass(btnSound, 'disabled');
                this.onsoundopen();
            } else {
                my.DOM.addClass(btnSound, 'disabled');
                this.onsoundclose();
            }
        }, this, btnSound);
    }
	
    /**
     * @private
     * 鍒濆鍖栧紑濮嬫父鎴忔寜閽�
     */
    UI.prototype.__initBtnPlay = function() {
        var btnPlay = my.DOM.get('btnPlay'), self = this;
        btnPlay.onclick = function() {
            self.onplay();
        }
    }
    /**
     * @private
     * 鍒濆鍖栨殏鍋滄寜閽�
     */
    UI.prototype.__initBtnPause = function() {
	    var btnPause = my.DOM.get('btnPause'), UI = this;
        btnPause.onclick = my.delegate(function() {
            if(my.DOM.hasClass(btnPause, 'disabled')) {
                my.DOM.removeClass(btnPause, 'disabled');
                this.onreadystart();
            } else {
                my.DOM.addClass(btnPause, 'disabled');
                this.onpause();
            }
        }, this, btnPause);
    }
    /**
     * @private
     * 鍒濆鍖栧噯澶囨寜閽�
     */
    UI.prototype.__initBtnRetry = function() {
        var btnRetry = my.DOM.get('btnRetry'), self = this;
        btnRetry.onclick = function() {
            self.onretry();
        }
    }
    /**
     * @private
     * 鍒濆鍖栧府鍔╂寜閽�
     */
    UI.prototype.__initBtnHelp = function() {
        var btnHelp = my.DOM.get('btnHelp'),self = this;
        btnHelp.onclick = function() {
			 my.DOM.show(my.DOM.get('HelpDiv'));
			 my.DOM.hide(my.DOM.get('gameCover'));
        }
		var backMenu = my.DOM.get('btnBack');  //甯姪閲岄潰鐨勮繑鍥炰富鑿滃崟
		backMenu.onclick = function(){
			 my.DOM.hide(my.DOM.get('HelpDiv'));
			 my.DOM.show(my.DOM.get('gameCover'));		    
		}
		var aboutme = my.DOM.get('btnAboutMe'); //閫€鍑猴紝鍏充簬鎴戯紝杩欎釜娌′粈涔�
		var str ="鍏跺疄娌℃湁閫€鍑哄暒=_=|||\n鍥犱负鏄疄鍦ㄦ槸娌℃湁鍏朵粬閿瀹炵幇(鍥z)\n灏辨嬁閫€鍑洪敭杩欎釜婊ョ鍏呮暟銆倊~~~(>_<)~~~~ \n澶у鏈変粈涔堥棶棰樿瘽锛屽彲浠ュ幓鎴戠殑blog閫涢€涳紝鐣欒█\n(*^__^*) 鍢诲樆鈥︹€nhttp:\/\/blog.sina.com.cn\/codingforme"
		aboutme.onclick = function(){
		     alert(str);
		}
    }
     /**
     * @private
     * 鍒濆鍖栧け璐ョ晫闈㈡寜閽�
     */
    UI.prototype.__initBtnFail = function() {
        var btnRetry = my.DOM.get('btnRetry'),self = this;
        btnRetry.onclick = function() {
			self.onretry();
        }
		var btnBackToMenu = my.DOM.get('btnBackToMenu');  //澶辫触閲岄潰鐨勮繑鍥炰富鑿滃崟
		btnBackToMenu.onclick = function(){
			self.toCover();    
		}
    }
	/**
     * @private
     * 涓嬩竴鍏�
     */
    UI.prototype.__initBtnSuccess = function() {
        var nextLoding = my.DOM.get('nextLoding'),self = this;
        nextLoding.onclick = function() {
			my.DOM.hide(my.DOM.get('nextLoding')); 
			self.onresume();
        }
    }
     /**
	 * 榧犳爣浜嬩欢鐨勬敞鍐�
	 */
	 UI.prototype.__initMouseEventListener=function(){
	     var canvas =  my.DOM.get('gameBody'),self = this;
	     canvas.onmouseover = function(){ 
		      this.style.cursor='none';
		 }
		 canvas.onmouseout = function(){
		      this.style.cursor='';
		 }
	     canvas.onmousemove = function(e){
		  	 if(self.hammer){
			    var even = window.event || e;  //涓轰簡鍏煎鍚勭娴忚鍣紝鐢变簬娌℃湁婊氬姩鏉★紝鎵€浠ヤ笉鐢ㄥ叾浠栧鐞�
		        self.hammer.x = even.clientX; self.hammer.x -=300; 
		        self.hammer.y = even.clientY; self.hammer.y -=40;
	          }
		 }
	     canvas.onmousedown = function(){
		     self.mousePress = true;
		 }	
	     canvas.onmouseup = function(e){
		     self.mousePress = false;
			 var even = window.event || e;  
			 self.__pengzhuang(self,even.clientX-300, even.clientY-40);
		 }		 
	 }

    /**
     * 閿ゅ瓙涓庡湴榧犵殑纰版挒妫€娴�
     */
	 UI.prototype.__pengzhuang = function(self,x,y){
	    
	     outerloop:    
         for(i=0;i<3;i++){
           for(j=0;j<3;j++){
			     if(self.existMatrix[i][j]==1){
                    var it0 = self.mouse0[i][j],it1 = self.mouse1[i][j],it2 = self.mouse2[i][j],it3 = self.mouse3[i][j],it4 = self.mouse4[i][j];
                    if(self.__boundTest(self,it0,x,y,i,j)) {self.__caculateScore(self,"mouse0",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it1,x,y,i,j)) {self.__caculateScore(self,"mouse1",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it2,x,y,i,j)) {self.__caculateScore(self,"mouse2",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it3,x,y,i,j)) {self.__caculateScore(self,"mouse3",x,y,i,j); break outerloop};
					if(self.__boundTest(self,it4,x,y,i,j)) {self.__caculateScore(self,"mouse4",x,y,i,j); break outerloop};
				 }
             }
        }
		 
	 }
     /* 
	  *it寰呮娴嬪璞�
	  */
 
	 UI.prototype.__boundTest=function(self,it,x,y,i,j){
		  if(it.state=='normal'){
                 if(x>it.x && y>(it.y-50) && x<(it.x+it.width) && y<(it.y+it.height-50)){
                      it.state = 'dead';
					  self.star[i][j].state = 'show';
				      self.star[i][j].y=it.y;//閲嶇疆鏄熸槦y杞翠綅缃�
					  Audio.play('no_hit');
					  return true;

                  }
           }
		   return false;
	 }
    /**
	 * 鍒嗘暟璁＄畻
	 */
	 UI.prototype.__caculateScore = function(self,type,x,y,i,j){
	      switch(type)
          {
             case "mouse0":self.scoreObject[i][j].scoreType=4; this.score+=this.score*0.2; break;                          //+20%
             case "mouse1":self.scoreObject[i][j].scoreType=3; this.score+=100;            break;                          //+100
             case "mouse2":self.scoreObject[i][j].scoreType=0; this.score+=500;            break;                          //+500
             case "mouse3":self.scoreObject[i][j].scoreType=2; this.score-=100;if(this.score<0) this.score=0; break;       //-100
             case "mouse4":self.scoreObject[i][j].scoreType=1; this.score/=2;              break;                          //x/2
          }
		   self.scoreObject[i][j].x=x;self.scoreObject[i][j].y=y;
		   this.setNumber(~~this.score);  //璁剧疆鍒嗘暟
	 }

    /**
     * 鍒濆鍖栫晫闈㈠強浜嬩欢
     */
    UI.prototype.init = function() {
        this.__initBtnSound();
        this.__initBtnPlay();
        this.__initBtnPause();
        this.__initBtnFail();
		this.__initBtnSuccess();
        this.__initBtnRetry();
		this.__initBtnHelp();
		this.__initMouseEventListener();
		
    }
    /**
     * 璁剧疆鍒嗘暟
     * @param {Number} number
     */
    UI.prototype.setNumber = function(number) {
        var numberChar = number.toString().split('');
        for(var i = 0; i < numberChar.length; i++) {
            numberChar[i] = '<span class="number' + numberChar[i] + '"></span>';
        }
        this.number.innerHTML = numberChar.join('');
    }
    /**
     * 鏄剧ず鎴栭殣钘忔殏鍋滄寜閽�
     * @param {Boolean} state
     */
    UI.prototype.btnPauseVisible = function(state) {
        if(state) {
            my.DOM.show(my.DOM.get('btnPause'));
        } else {
            my.DOM.hide(my.DOM.get('btnPause'));
        }
    }

    /**
     * 鍒囨崲鍒伴澶囩晫闈�
     */
    UI.prototype.toCover = function() {
        my.DOM.hide(this.gameBody);
        my.DOM.hide(this.gameOver);
        my.DOM.show(this.gameCover);
    }
    /**
     * 鍒囨崲鍒版父鎴忎富浣撶晫闈�
     */
    UI.prototype.toBody = function() {
        my.DOM.hide(this.gameOver);
        my.DOM.hide(this.gameCover);
        my.DOM.show(this.gameBody);
    }
    /**
     * 鍒囨崲鍒版父鎴忕粨鏉熺晫闈�
     */
    UI.prototype.toOver = function() {
        my.DOM.hide(this.gameCover);
        my.DOM.hide(this.gameBody);
        my.DOM.show(this.gameOver);
    }

	 
	 
	 
    window.UI = UI;
})();

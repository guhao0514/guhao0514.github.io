/**
 * Mouse Hit娓告垙绫�
 */
(function() {

    var MouseHit = function(cfg) {

        /**
         * 閿ゅ瓙
         */
        this.hammer = null;

         /**
         * 鍦伴紶,鏈�5绉�
         */
        this.mouse0=[];
		this.mouse1=[];
		this.mouse2=[];
		this.mouse3=[];
		this.mouse4=[];
        /**
         * 鍦伴紶鍒濆鍖杧杞翠綅缃�
         */
        this.mouseX = [
		               [130,322,516],
					   [106,322,522],
					   [97,322,544]
		];
		/**
         * 鍦伴紶鍒濆鍖杫杞翠綅缃�
         */
        this.mouseY = [170,262,362];
		this.mouseType=[106];
    	//瀛樺湪鐭╅樀,琛ㄧず鍦ㄩ偅涓潙瀛樺湪鍦伴紶
		this.existMatrix=[
		                  [0,0,0],
						  [0,0,0],
						  [0,0,0]
		];
		/**
		 * 鏄熸槦
		 */
		this.star = [];
       /**
         * 鍒嗘暟甯х被
         */
		this.scoreObject = [];

        /**
         * UI瀵硅薄
         */
        this.ui = null;

        /**
         * 棰勫鏃堕棿
         */
        this.readyTime = 0;

        /**
         * 鏄惁鍗冲皢寮€濮�
         */
        this.isGo = false;
        /**
         * canvas涓婁笅鏂�
         */
	    this.canvas;
        this.context; 
        // 鍦伴紶娲�
        this.bg_hole;
        // 鍦伴紶娲為伄鎺�
        this.bg_holeHide;
		//鍑嗗3,2,1鏁板瓧锛孏ame over
		this.startNumber= my.ImageManager.get('icon');
		//璁℃椂鏉�
		this.timeRoller = my.ImageManager.get('time_roller');
		//璁℃椂鏁帮紝涓嶆墦绠楃敤涓€涓柊鐨剆etInterval鏉ュ仛 
		this.timeCaculator =0;
		//绗嚑鍏筹紝鍒濆鏄涓€鍏�
		this.dijiguan = 1; 
        //姣忓叧杩囧叧鍒嗘暟,绗竴榛樿涓�2000		
		this.requireScore =2000; 
		this.readyInterval;
		this.drawMouseInterval;
		this.drawCanvasInterval;
    }

    
    /**
     * @private
     * 鍒涘缓閿ゅ瓙
     */
    MouseHit.prototype.__createHammer = function() {
        var hammer = new Hammer();
        this.hammer = hammer;
    }

    /**
     * @private
     * 鍒涘缓鍒嗘暟瀵硅薄
     */
    MouseHit.prototype.__createScoreObject = function() {
      for(i=0;i<3;i++)
	   {
	        var arr = [];
            for(j=0;j<3;j++)
			{
		      var score = new Score();
			  arr[j] = score;
			}
			this.scoreObject[i] = arr;
		}
    }
	
   /**
     * @private
     * 鍒涘缓鍦伴紶 
     */
    MouseHit.prototype.__createMouse = function() {

	   for(i=0;i<3;i++)
	   {
	        var arr = [],arr1 = [],arr2 = [],arr3 = [],arr4 = [];
            for(j=0;j<3;j++)
			{
              var mouse0 = new Mouse(),mouse1=new Mouse(),mouse2=new Mouse(),mouse3=new Mouse(),mouse4=new Mouse();
			  mouse0.init('mouse1',this.mouseX[i][j],this.mouseY[i],106);
			  mouse1.init('mouse2',this.mouseX[i][j],this.mouseY[i],106);
			  mouse2.init('mouse3',this.mouseX[i][j],this.mouseY[i],106);	  
              mouse3.init('mouse4',this.mouseX[i][j],this.mouseY[i]-12,120);
			  mouse4.init('mouse5',this.mouseX[i][j],this.mouseY[i]-25,130);
              arr[j] = mouse0,arr1[j] = mouse1,arr2[j] = mouse2,arr3[j] = mouse3,arr4[j] = mouse4;
			}
			this.mouse0[i] = arr,this.mouse1[i] = arr1,this.mouse2[i] = arr2,this.mouse3[i] = arr3,this.mouse4[i] = arr4;
		}
    }
    /**
     * @private
     * 鍒涘缓鏄熸槦
     */
    MouseHit.prototype.__createStar = function() {
	  
	   for(i=0;i<3;i++)
	   {
	        var arr = [];
            for(j=0;j<3;j++)
			{
		      var star = new Star();
		      star.init(this.mouseX[i][j]+10,this.mouseY[i]); // y杞翠笉鏄繀瑕佺殑锛屽埌鏃剁鎾炴椂浼氶噸缃�
			  arr[j] = star;
			}
			this.star[i] = arr;
		}
    }	
    /**
     * @private
     * 鍒涘缓鍦烘櫙
     */
    MouseHit.prototype.__createScene = function() {
        // 鍦伴紶娲�
        this.bg_hole = new my.Bitmap({
            image : my.ImageManager.get('bg_hole'),
            width : 750,
            height : 550
        });
     
        // 鍦伴紶娲為伄鎺�
        this.bg_holeHide = new my.Bitmap({
            image : my.ImageManager.get('bg_holeHide'),
            width : 750,
            height : 550
        });
        
    }
    /**
     * 鍒涘缓UI瀵硅薄
     */
    MouseHit.prototype.__createUI = function() {
        var ui = new UI(), MouseHit = this;
        ui.init();

        ui.onretry = function() {
            //Audio.play('ogg_background');

            this.toBody();
            MouseHit.stateInit();
        }
        this.ui = ui;
    	this.ui.hammer=this.hammer;
		this.ui.mouse0=this.mouse0;
		this.ui.mouse1=this.mouse1;
		this.ui.mouse2=this.mouse2;
		this.ui.mouse3=this.mouse3;
		this.ui.mouse4=this.mouse4;
		this.ui.star=this.star;
		this.ui.scoreObject=this.scoreObject;
		this.ui.existMatrix=this.existMatrix;
		
    }
    /**
     * 鍒濆鍖栨父鎴�
     */
    MouseHit.prototype.init = function() {
		this.__createScoreObject();
        this.__createHammer();
		this.__createMouse();
		this.__createStar();		
        this.__createScene();
        this.__createUI();
        this.canvas =  my.DOM.get('maincanvas');
        this.context = this.canvas.getContext('2d');
    }

    
    /**
     * 棰勫鐘舵€�
     * @return {Boolean} 杩斿洖棰勫鐘舵€佹槸鍚﹀畬姣�
     */
    MouseHit.prototype.ready = function(self,index) {
		
		self.__drawReadyScreen(self);
		switch(index){
		    
			case 0:self.context.drawImage(self.startNumber,449,296,51,87,360,300,51,87);Audio.play('begin_music');break;    //缁樺埗3
			case 1:self.context.drawImage(self.startNumber,390,296,54,87,360,300,54,87);Audio.play('begin_music');break;    //缁樺埗2
			case 2:self.context.drawImage(self.startNumber,329,296,52,87,360,300,52,87);Audio.play('begin_music');break;    //缁樺埗1
			case 3:self.context.drawImage(self.startNumber,15,296,293,87,245,300,293,87);Audio.play('second_music');break;   //缁樺埗start
			case 4:clearInterval(this.readyInterval); //娓呴櫎姝nterval浜嬩欢
			       self.ui.btnPauseVisible(true);
				   self.__setIntervalFunc(self);  //鍚姩setInterval浜嬩欢  
		}
		
    }
	/**
	 *棰勫鐘舵€佷笅鑳屾櫙缁樺埗
	 */
	MouseHit.prototype.__drawReadyScreen = function(self){
		self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height);   
	    self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height);   
	}
	/**
	 *璁℃椂鏉＄粯鍒�
	 *passPix 杩囧幓鍍忕礌
	 */
	MouseHit.prototype.__drawTimeRoller = function(self,passPix){
		self.context.drawImage(self.timeRoller,0,80,373,68,183,149,220,40);
		self.context.drawImage(self.timeRoller,0,152,373-passPix,40,182+passPix,163,220-passPix,25);
	    self.context.drawImage(self.timeRoller,0,0,373,80,183,143,220,51);
	}
	/**
	 * 娓告垙涓讳綋鍦ㄨ繖閲岃缃畇etInterval浜嬩欢
	 */
	MouseHit.prototype.__setIntervalFunc = function(self){
	    this.drawCanvasInterval = setInterval(function(){
		   self.drawScreen(self);
		   self.__checkIsPass(self);   //鍏冲崱鍒ゆ柇锛屾渶鍚庨樁娈靛姞鐨勶紝灏变涪鍦ㄨ繖閲�
		}, 30);
	    this.drawMouseInterval = setInterval(function(){
		   self.randomSelectMouse(self);
		}, 2000);
		
	}
    /**
	 * 鍏冲崱鍒ゆ柇
	 */
	MouseHit.prototype.__checkIsPass = function(self){
	
	    if(self.timeCaculator>2100){             //鍏冲崱鏃堕棿鍒�
		    clearInterval(self.drawCanvasInterval);//涓嶅啀
			clearInterval(self.drawMouseInterval);//涓嶅啀闅忔満浜х敓鍦伴紶
		    self.timeCaculator=0;
		    if(self.ui.score>=self.requireScore){    //杩囧叧
			    self.requireScore+=400;              //姣忓叧鍔�200
				my.DOM.get('currentScore').innerHTML=~~self.ui.score;
				my.DOM.get('requireScore').innerHTML=~~self.requireScore;
				my.DOM.show(my.DOM.get('nextLoding')); //涓嬩竴鍏崇晫闈㈡斁杩欓噷
			    self.dijiguan++;
				self.ui.score=0;
				self.ui.setNumber(0);
				Audio.play('game_pass');
		        //閲嶆柊璁剧疆		
			  }else{                             //涓嶈繃鍏�
				self.requireScore=2000;
				self.dijiguan=1;
				self.ui.toOver();//澶辫触鐣岄潰
				my.DOM.get('score').innerHTML="浣犵殑寰楀垎锛�"+~~self.ui.score;
				self.ui.score=0;
				Audio.play('over_music');
			  }
		     
		}else{
		   self.__drawTimeRoller(self,self.timeCaculator/10); //缁樺埗璁℃椂鏉�
		   self.timeCaculator++;
		} 
	
	}
	/**
	 * 闅忔満鏄剧幇鍦伴紶
	 */
	MouseHit.prototype.randomSelectMouse = function(self){
		 var createNum = my.Math.random(1,2);
		 for(var i=1;i<=createNum;i++){
		     var a = my.Math.random(0,2);
			 var b = my.Math.random(0,2);
			 if(self.existMatrix[a][b]==1){  // 瀛樺湪鍦伴紶锛屼笉浜х敓鍦伴紶
			     i--;
			 }else{
			    self.existMatrix[a][b]=1;    //璁剧疆宸插瓨鍦ㄥ湴榧 
				var k = my.Math.random(0,4);
				if(k==0){self.mouse0[a][b].state='normal';}
				else if(k==1){self.mouse1[a][b].state='normal';}
				else if(k==2){self.mouse2[a][b].state='normal';}
				else if(k==3){self.mouse3[a][b].state='normal';}
				else {self.mouse4[a][b].state='normal';}
			 }
		 }
	}
	MouseHit.prototype.drawMouse = function(self,i,j){
		self.mouse0[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse1[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse2[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse3[i][j].draw(self.context,self.existMatrix,i,j);
		self.mouse4[i][j].draw(self.context,self.existMatrix,i,j);
	}
	MouseHit.prototype.drawScreen = function(self){
		self.context.clearRect(0, 0, self.context.canvas.width, self.context.canvas.height);  //娓呴櫎canvas
	    self.context.drawImage(self.bg_hole.image, 0, 0, self.bg_hole.width, self.bg_hole.height);   //鑳屾櫙锛屽苟涓嶅畬鍏ㄥ崰婊℃暣涓猚anvas锛屾墍浠ヨ閲嶆柊娓呭睆
        for(j=0;j<3;j++)
		  self.drawMouse(self,0,j); //绗竴琛屽湴榧 
		for(j=0;j<3;j++) 
		  self.star[0][j].draw(self.context);  //绗竴琛屾槦鏄�
	 	self.context.drawImage(self.bg_holeHide.image,0,0,self.bg_holeHide.width,302, 0, 0, self.bg_holeHide.width,302);   //绗竴琛岄伄鎺╂礊
        for(j=0;j<3;j++)
		  self.drawMouse(self,1,j); //绗簩琛屽湴榧 
		for(j=0;j<3;j++) 
		  self.star[1][j].draw(self.context);  //绗簩琛屾槦鏄�
        self.context.drawImage(self.bg_holeHide.image,0,302,self.bg_holeHide.width,100, 0, 302, self.bg_holeHide.width,100); //绗簩琛岄伄鎺╂礊 
        for(j=0;j<3;j++)
		  self.drawMouse(self,2,j); //绗笁琛屽湴榧 
		for(j=0;j<3;j++) 
		  self.star[2][j].draw(self.context);  //绗笁琛屾槦鏄�
		self.context.drawImage(self.bg_holeHide.image,0,400,self.bg_holeHide.width,100, 0, 400, self.bg_holeHide.width,100); //绗笁琛岄伄鎺╂礊 	
		for(i=0;i<3;i++) 
		  for(j=0;j<3;j++) 
		     self.scoreObject[i][j].draw(self.context);      //鍒嗘暟瀵硅薄
		self.hammer.draw(self.context,self.ui.mousePress);//閿ゅ瓙
	}
	
	
    /**
     * 鍒濆鍖栫姸鎬�
     */
    MouseHit.prototype.stateInit = function() {
        
		this.ui.setNumber(0);//鍒濆鍖栧垎鏁�
        this.__drawReadyScreen(this);
        // UI
        this.ui.btnPauseVisible(false);
        var self = this;
		var index= 0;
		this.readyInterval = setInterval(function(){   //setInterval鏈€濂芥槸杩欐牱鍐欙紝鍦ㄦ帶鍒跺拰浼犲弬鏁版柟闈㈤兘鏈夊ソ澶�
	        self.ready(self,index);
			index++;
		},1000);
    }
	
    window.MouseHit = MouseHit;
})();

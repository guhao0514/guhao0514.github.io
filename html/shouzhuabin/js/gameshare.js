(function(window){if(!window.LBGAME)window.LBGAME={};LBGAME.Ua=function(){var ua=window.navigator.userAgent,type="pc";if(/MicroMessenger/.test(ua))type="weixin";if(/CM/.test(ua))type="cm";if(/(Gkuwan)/gi.test(ua))type="kuwan";return type;};LBGAME.Share={shareData:{},updateData:function(obj){this.shareData=obj;switch(LBGAME.Ua()){case "weixin":if(!obj.call)this.weixinFun(obj);break;case "cm":if(!window.android)return
shareFun(window.android);break;case "kuwan":if(!window.updateclient)return
shareFun(window.updateclient);break;default:}
if(obj.fun)obj.fun();function shareFun(d){d.updatesharedata(obj.title,obj.imgUrl,obj.cont,obj.url);if(obj.call)d.sharescore();}},getJson:function(a){var b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4&&b.status==200){a.callback(b.responseText)}};b.open("get",a.url);b.send(null)},setShareUrl:function(setfun){this.getJson({url:"./jumpCloud.json?t="+new Date().getTime(),callback:function(b){var a=JSON.parse(b);var host=window.location.href;try{var gameType=host.match(/tx024\.com\/hotdog\/(.*)\//)[1];}catch(e){return}
if(/tx024\.com\//.test(host)&&LBGAME.Ua()=='weixin'){window.location.href="http://q"+(Math.floor(Math.random()*5000))+"."+a.jumphost+"/hotdog/"+gameType+"/?t="+(new Date()).valueOf();}
var link="http://q"+(Math.floor(Math.random()*5000))+"."+a.jumphost+"/hotdog/"+gameType+"/?t="+(new Date()).valueOf();setfun(link);}});},weixinFun:function(){wx.onMenuShareTimeline({title:LBGAME.Share.shareData.title,link:LBGAME.Share.shareData.url,desc:LBGAME.Share.shareData.cont,imgUrl:LBGAME.Share.shareData.imgUrl,success:function(){},cancel:function(){}});wx.onMenuShareAppMessage({title:LBGAME.Share.shareData.title,link:LBGAME.Share.shareData.url,desc:LBGAME.Share.shareData.cont,imgUrl:LBGAME.Share.shareData.imgUrl,success:function(){},cancel:function(){}});wx.onMenuShareWeibo({title:LBGAME.Share.shareData.title,link:LBGAME.Share.shareData.url,desc:LBGAME.Share.shareData.cont,imgUrl:LBGAME.Share.shareData.imgUrl,success:function(){},cancel:function(){}});document.addEventListener("WeixinJSBridgeReady",function a(){WeixinJSBridge.on("menu:share:appmessage",function(c){WeixinJSBridge.invoke("sendAppMessage",{img_url:LBGAME.Share.shareData.imgUrl,link:LBGAME.Share.shareData.url,desc:LBGAME.Share.shareData.cont,title:LBGAME.Share.shareData.title},function(d){if(LBGAME.Share.shareData.doneJump=="")return
document.location.href=LBGAME.Share.shareData.doneJump})});WeixinJSBridge.on("menu:share:timeline",function(c){WeixinJSBridge.invoke("shareTimeline",{img_url:LBGAME.Share.shareData.imgUrl,img_width:"300",img_height:"300",link:LBGAME.Share.shareData.url,desc:LBGAME.Share.shareData.cont,title:LBGAME.Share.shareData.title},function(d){if(LBGAME.Share.shareData.doneJump=="")return
document.location.href=LBGAME.Share.shareData.doneJump})});WeixinJSBridge.on("menu:share:weibo",function(c){WeixinJSBridge.invoke("shareWeibo",{content:LBGAME.Share.shareData.cont,url:LBGAME.Share.shareData.url},function(d){if(LBGAME.Share.shareData.doneJump=="")return
document.location.href=LBGAME.Share.shareData.doneJump})})},false);},createTip:function(){var tip=document.createElement("div");tip.id="LBGAME_share";tip.setAttribute("style","position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;z-index: 100;display: block;");if(LBGAME.Ua=="pc"){tip.style.background="url(icon.png) center bottom rgba(0,0,0,.6) no-repeat";}else{tip.style.background="url('icon.png') 50% 0 rgba(0,0,0,.6) no-repeat";}
tip.addEventListener("click",function(){tip.style.display="none";},false);document.getElementsByTagName("body")[0].appendChild(tip);},show:function(){var s=document.getElementById("LBGAME_share");if(!s)LBGAME.Share.createTip();else{s.style.display="block"}},hide:function(){var s=document.getElementById("LBGAME_share");if(s)s.style.display="none";}};})(window);
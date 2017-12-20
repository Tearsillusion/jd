

window.onload=function(){
     //延时菜单
     var oD=document.getElementById('left-content');
     var oDl=oD.getElementsByTagName('dl');
     var oProduct=document.getElementById('product');
     var oWrap=oProduct.getElementsByClassName('wrap');
     var clock=null;
     //轮播图变量
     var oPic=document.getElementById('pic');
     var oLunbo=document.getElementById('lunbo');
     var oImg=oPic.getElementsByTagName('a');
     var oPrev=document.getElementById('left-span');
     var oNext=document.getElementById('right-span');
     var oControl=document.getElementById('control-img');
     var oLis=oControl.getElementsByTagName('li');
     var iNow=0;
     var contentWidth=oPic.clientWidth;
     var timer=null;

     //倒计时变量
     // var oDay=document.getElementById('day');
     // var oHour=document.getElementById('hour');
     // var oMinute=document.getElementById('minute');
     // var oSecond=document.getElementById('second');
     // var timer2=null;
     
     //右侧回到顶部
     function backTop(){
        var huadong=document.getElementById('huadong');
        var toTop=document.getElementById('toTop');
        var toTopLlist=document.getElementById('to-top-list');
        var timer=null;
        var flag=true;
        var viewHeight=document.documentElement.clientHeight||document.body.clientHeight;
        
        window.onscroll=function(){
             var scrollY=document.body.scrollTop||document.documentElement.scrollTop;
             if(scrollY>=viewHeight*0.7){
                   toTopLlist.style.opacity=1;
             }
             if(scrollY<viewHeight*0.3){
                   toTopLlist.style.opacity=0;
             }
             if(!flag){
                  clearInterval(timer);  
             }
             flag=false;
        }
        
        toTop.onclick=function(){
            timer=setInterval(function(){
                var oTo=document.body.scrollTop||document.documentElement.scrollTop;
                var speed=Math.floor((-oTo/5));
                oTo+=speed;
                flag=true;
                document.body.scrollTop=document.documentElement.scrollTop=oTo;
                if(oTo==0){
                    clearInterval(timer);
                }
            },50);
        }

        //改变li背景
     }
     backTop();
     //倒计时
     // countTime();
     // timer2=setInterval(countTime,1000);
     // function countTime(){
     //    var date=new Date();
     //     var then=new Date(2017,8,24,7,0,0);
     //     var distance=Math.floor((then-date)/1000);
     //     var d=Math.floor(distance/86400);
     //     var h=Math.floor(distance%86400/3600);
     //     var m=Math.floor(distance%86400%3600/60);
     //     var s=distance%60;
     //     function to(num){
     //        return num>=10?num:'0'+num;
     //     }
     //     if(distance>0){
     //        oDay.innerText=to(d);
     //         oHour.innerText=to(h);
     //         oMinute.innerText=to(m);
     //         oSecond.innerText=to(s);
     //     }else{
     //         clearInterval(timer2);
     //          oDay.innerText=0;
     //         oHour.inerText=0;
     //         oMinute.innerText=0;
     //         oSecond.innerText=0;
     //     }
         
     // }
     //轮播图
     for(var i=1;i<oImg.length;i++){
          oImg[i].style.left=contentWidth+'px';   
     }
     oNext.onclick=function(){
          oImg[iNow].style.left=-contentWidth+'px';
          iNow++;
          iNow%=oImg.length;
          oImg[iNow].style.left=contentWidth+'px';
          oImg[iNow].style.left=0; 
          lisMove();
     }
     oPrev.onclick=function(){
         oImg[iNow].style.left=contentWidth+'px';
         iNow--;
         if(iNow<0){
            iNow=oImg.length-1;
         }
         oImg[iNow].style.left=-contentWidth+'px';
         oImg[iNow].style.left=0;
         lisMove();
     }
     for(var i=0;i<oLis.length;i++){
        oLis[i].index=i;
        oLis[i].onclick=function(){
           for(var i=0;i<oLis.length;i++){
             oLis[i].className='';
           }
           var that=this.index;
           oLis[that].className='active';
           if(that<iNow){
             oImg[iNow].style.left=contentWidth+'px';
             oImg[that].style.left=-contentWidth+'px'; 
           }else{
            oImg[iNow].style.left=-contentWidth+'px';
            oImg[that].style.left=contentWidth+'px'; 
           }
           iNow=that;
           oImg[iNow].style.left=0;
        }
     }
     autoPlay();

     oLunbo.onmouseover=function(){
        clearInterval(timer);
     }
     oLunbo.onmouseout=function(){
        autoPlay();
     }
     function lisMove(){
         for(var i=0;i<oLis.length;i++){
             oLis[i].className='';
          } 
          oLis[iNow].className='active'; 
     }
     function autoPlay(){
         timer=setInterval(function(){
          oImg[iNow].style.left=-contentWidth+'px';
          iNow++;
          iNow%=oImg.length;
          oImg[iNow].style.left=contentWidth+'px';
          oImg[iNow].style.left=0; 
          lisMove();
     
     },1000);
     }
     //二级延时菜单
     function menu(){
     for(var i=0;i<oDl.length;i++){
        oDl[i].index=i;
        oWrap[i].index=i;
        oDl[i].onmouseover=show;
        oDl[i].onmouseout=hide; 
        oWrap[i].onmouseover=show;
        oWrap[i].onmouseout=hide;
      } 
     }
    function show(){
       clearTimeout(clock);
       for(var i=0;i<oWrap.length;i++){
          oWrap[i].style.zIndex=i+1;
          oWrap[i].style.display='none';
          oDl[i].className='';
       }
       oWrap[this.index].style.zIndex=10;
       oWrap[this.index].style.display='block';
       oDl[this.index].className='hover';
    }
    function hide(){
         that=this;
         clock=setTimeout(function(){
         oWrap[that.index].style.zIndex=that.index+1;
         oWrap[that.index].style.display='none';
         oDl[that.index].className='';
          },100);   
    }
    menu();
}  


// 中间大的banner图效果
window.onload=function(){
       	  var oText=document.getElementById('text');
       	     oText.onclick=function(){
       	  	 oText.value='';
       	  }
    var oBanner=document.getElementsByClassName('banner_wrap')[0];
    var aLi=oBanner.getElementsByTagName('li');
    var oFl=document.getElementsByClassName('chaoshi_btn_fl')[0];
    var oFr=document.getElementsByClassName('chaoshi_btn_fr')[0];
    var num=0;
    var timer=null;
    var index=0;
    var oBottom=document.getElementsByClassName('bottom_nav')[0];
    var aA=oBottom.getElementsByTagName('a'); 
 //    setInterval(function(){
	// 	aLi[num].className = 'unselect';
	// 	num++;
	// 	num%=aLi.length;
	// 	var index = num;
	// 	aLi[index].className = 'select';
	// },2000);
	 
	
	
	//向右点击切换图片 
	
    oFr.onclick=function(){
    	index++;
    	index%=aLi.length;
    	for(var i=0;i<aLi.length;i++){
           aLi[i].className='unselect';
           aA[i].className='';
    	}
    	aA[index].style.zIndex=1;
    	aA[index].className='current';
    	aLi[index].className='select';
    }



    // //向左点击切换图片
    oFl.onclick=function(){
    	index--;
    	if(index<0){
    		index=aA.length-1;
    	}
    	index%=aLi.length;
    	for(var i=0;i<aLi.length;i++){
    	   aA[i].style.zIndex=0;
           aLi[i].className='unselect';
           aA[i].className='';
    	}
    	aA[index].style.zIndex=1;
    	aA[index].className='current';
    	aLi[index].className='select';
    }
    //定时器
    function autoPlay(){
    	clearInterval(timer);
    	timer=setInterval(function(){
    		index++;
    		index%=aLi.length;
    		for(var i=0;i<aLi.length;i++){
    			aLi[i].className='unselect';
    			aA[i].className='';
    		}
    		aA[index].className='current';
    		aLi[index].className='select';
    	},2000)
    }
    autoPlay();
    //当鼠标进入，关闭定时器
    oBanner.onmouseover=function(){
    	clearInterval(timer);
    }
    oFl.onmouseover=function(){
    	clearInterval(timer);
    }
    oFr.onmouseover=function(){
    	clearInterval(timer);
    }
     oBanner.onmouseout=autoPlay;


    //倒计时
    
    var aTime=document.getElementsByClassName('time_all')[0];
    var oTime=aTime.getElementsByTagName('span');
    var iNow=null;
    var iNew=null;
    var t=0;
    var timer2=null;
    function toTwo(n){
    	return n<10 ? '0'+n:''+n;
    }
    function getTime(){
    	iNew=new Date(2017,9,22,21,0,0)
    	clearInterval(timer2)
    	timer2=setInterval(function(){
    	iNow=new Date();	
    	t=Math.floor((iNew-iNow)/1000);
    	if(t>=0){
    		oTime[0].innerHTML=toTwo(Math.floor(t%86400/3600));
    		oTime[1].innerHTML=toTwo(Math.floor(t%86400%3600/60));
    		oTime[2].innerHTML=toTwo(t%60);
    	}
    	else{
    		clearInterval(timer2)
    	}
      },1000)	


    }
    getTime();
}
//侧边栏效果
$(function(){
    $(window).scroll(function(){
        var $scrollTop=$(document).scrollTop();
        scrollTop=parseInt($scrollTop);       
        if(scrollTop>520){
            $("nav ul").fadeIn('slow');
        }
        if(scrollTop<520){
            $("nav ul").fadeOut('slow');
        }
        if(scrollTop>1500&&scrollTop<1800){
            $("nav ul li").eq(1).addClass('navclass').siblings()
            .removeClass('navclass');
        }
        if(scrollTop<1500){
            $("nav ul li").eq(0).addClass('navclass').siblings()
            .removeClass('navclass');
        }
    })
})
//设置回到顶部
$(function(){
     $("nav ul li").last().on("click", function() {
      $('body,html').animate({
       scrollTop: 0
      }, 300);
       return false;
     });
    });
$(function(){
     $("nav ul li").eq(1).on("click", function() {
      $('body,html').animate({
       scrollTop: 1600
      }, 300);
       return false;
     });
    });
$(function(){
     $("nav ul li").eq(0).on("click", function() {
      $('body,html').animate({
       scrollTop: 1100
      }, 300);
       return false;
     });
    });




















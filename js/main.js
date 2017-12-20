window.onload=function (){


	//$符选择器
	function $(id){

		return document.getElementById(id);
	}

	var oBanner=$('banner-show');

	var aA=oBanner.getElementsByTagName('a');

	var prev=$('flowLeft');

	var next=$('flowRight');

	var oScroll=$('banner-scroll');

	var aSpan=oScroll.getElementsByTagName('span');

	var index=0;

	var timer=null;

	//切换下一张图片
	next.onclick=function (){

		index++;

		index%=aA.length;
		
		for (var i = 0; i < aA.length; i++) {

			aA[i].style.opacity=0;
			aA[i].style.zIndex=0;
			aSpan[i].className='';
		}

		aA[index].style.opacity=1;
		aA[index].style.zIndex=1;
		aSpan[index].className='active';

	}

	// 切换上一张图片
	prev.onclick=function (){

		index--;

		if (index<0) {

			index=aA.length-1;
		}

		index%=aA.length;
		
		for (var i = 0; i < aA.length; i++) {

			aA[i].style.opacity=0;
			aA[i].style.zIndex=0;
			aSpan[i].className='';
		}

		aA[index].style.opacity=1;
		aA[index].style.zIndex=1;
		aSpan[index].className='active';

	}

	//图片切换控制
	for (var i = 0; i < aA.length; i++) {

		aSpan[i].index=i;

		aSpan[i].onmouseover=function (){

			for (var i = 0; i < aSpan.length; i++) {

				aSpan[i].className='';
			}

			aA[index].style.opacity=0;

			aA[index].style.zIndex=0;

			aA[this.index].style.opacity=1;

			aA[this.index].style.zIndex=1;

			index=this.index;

			this.className='active';
		}
	}

	//开启定时器，让图片自动切换
	function autoPlay(){

		clearInterval(timer);

		timer=setInterval(function (){

			index++;

			index%=aA.length;
			
			for (var i = 0; i < aA.length; i++) {

				aA[i].style.opacity=0;
				aA[i].style.zIndex=0;
				aSpan[i].className='';
			}

			aA[index].style.opacity=1;
			aA[index].style.zIndex=1;
			aSpan[index].className='active';
		},2000)
	}

	autoPlay();

	//鼠标移入，关闭定时器
	oBanner.onmouseover=function (){

		clearInterval(timer);
		next.style.display='block';	
		prev.style.display='block';	
	}

	//鼠标移出，开启定时器
	oBanner.onmouseout=function (){
		autoPlay();
		next.style.display='none';	
		prev.style.display='none';	
	}

	//搜索框
	var oText=document.getElementsByClassName('search-text')[0];

	oText.onfocus=function (){

		this.placeholder='';
	}

	oText.onblur=function (){

		this.placeholder='抽奖赢PAD';
	}

	//左右滑动，切换新闻 

	var aTab=document.getElementsByClassName('tab');
	var oLine=$('underline');
	var aNews=document.getElementsByClassName('news');
	
	aTab[0].onmouseover=function (){

		oLine.style.cssText='transform:translateX(0)';
		aNews[0].style.display='block';
		aNews[1].style.display='none';

	}

	aTab[1].onmouseover=function (){

		oLine.style.cssText='transform:translateX(56px)';
		aNews[0].style.display='none';
		aNews[1].style.display='block';
	}

	//倒计时效果
	// 天：Math.floor(t/86400)
	// 时：Math.floor(t%86400/3600)
	// 分：Math.floor(t%86400%3600/60)
	// 秒：Math.floor(t%60)

	var aTime=document.getElementsByClassName('textTime');
 
	function toTwo(n){

		return n<10 ? '0' + n: '' + n;
	}

	function getTime(){

		var iNow=new Date();

		var iNew=new Date(2017,8,13,9,34,0);

		var t=Math.floor((iNew-iNow)/1000);

		if(t>=0){

			aTime[0].innerHTML=toTwo(Math.floor(t%86400/3600));
			aTime[1].innerHTML=toTwo(Math.floor(t%86400%3600/60));
			aTime[2].innerHTML=toTwo(t%60);
		}

		else{

			clearInterval(timer2);
		}
	}
	//初始化时间
	getTime();

	var timer2=setInterval(function (){

		getTime();

	},1000)

}


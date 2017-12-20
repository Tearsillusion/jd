// 导航顶部
var Glo=$('Glo');
var OImg=$('OImg');
Glo.onmouseover=function () {
	OImg.style.display='block';
	Glo.style.background='#fff';
	OImg.style.color='#863177';
	OImg.style.border='1px solid #863177';
	OImg.style.borderTop='none';
}
Glo.onmouseout=function () {
	OImg.style.display='none';
	Glo.style.background='#eee'
	
}
//轮播图左边隐藏部分

var secLeftseover=$('sec-leftseover');
var oUL=secLeftseover.getElementsByTagName('ul');
var hIde=$('hide');
var oDL=hIde.getElementsByTagName('dl');
var arrBackground=['#fff','red','blue','pink','green','red','blue','pink','green','pink','#fff'];
var timer=null;

	for (var i = 0; i < oUL.length; i++) {

		oUL[i].index=i;
		
		oUL[i].onmouseover=function(){

			for (var j = 0; j <oUL.length; j++) {
				oUL[j].style.background='';
				
			}
			
			oUL[this.index].style.background='#fff';
			hIde.style.display='block';
			hIde.style.background=arrBackground[this.index];		
		}
		
		


}
	
function delary(){
for (var i = 0; i < oUL.length; i++) {

			oUL[i].index=i;
			oUL[i].onmouseout=function(){
			
			hIde.style.display='none';	
			oUL[this.index].style.background='';	
		}		
	}
}	
timer=setTimeout(delary,2000);
	hIde.onmouseover=function(){
		clearTimeout(timer);
		hIde.style.display='block';
		oUL[this.index].style.background='#fff';
	}
	hIde.onmouseout=function(){
		hIde.style.display='none';
		oUL[this.index].style.background='';
	}	

//轮播图
	
	var btnl=$('btnl');
	var btnr=$('btnr');
	var imgCAR=$('imgCAR');
	var aUL=$('aUL');
	var aLi=aUL.getElementsByTagName('li');
	var secCAR=$('secCAR');
	var secBox=$('secbox');
	var num=0;
	var TimeName=null;
	var flag=true;
	var arrImg=['images/global-img/15.jpg','images/global-img/16.jpg','images/global-img/17.jpg','images/global-img/18.jpg','images/global-img/019.jpg'];
	var arrBackground=['yellow','#50E6F5','yellow','#B3F7E7','#15CDD9'];
	
		
	for (var i = 0; i < arrImg.length; i++) {
			arrImg[i].index=i;
			
		btnr.onclick=function(){
			for (var j = 0;  j< arrImg.length; j++) {
					aLi[j].className='';
			}
				num++;

				if (num==arrImg.length) {
				num=0;
			}
				imgCAR.src=arrImg[num];
				aLi[num].className='Red';
				secBox.style.background=arrBackground[num];
				
		}
		btnl.onclick=function(){
			for (var j = 0;  j< arrImg.length; j++) {
					aLi[j].className='';
			}
			num--;
			if (num==-1) {
				num=arrImg.length-1
			}
			imgCAR.src=arrImg[num];
			aLi[num].className='Red';
			secBox.style.background=arrBackground[num];
			
		}

		
	}
for(var i=0; i<aLi.length; i++){
	aLi[i].index=i;
	clearInterval(TimeName);
	aLi[i].onclick=function(){

			num=this.index;
			for (var j = 0;  j< aLi.length; j++) {
					aLi[j].className='';
			}
			 imgCAR.src=arrImg[num];
			aLi[this.index].className='Red';
			secBox.style.background=arrBackground[num];
			
		
			
		}
		aLi[i].onmouseover=function(){
			clearInterval(TimeName);
		}

}

	 function Time(){
			if (flag) {
				num++
				if (num==arrImg.length) {
					num=arrImg.length-1;
					flag=false;
				}
			}
			if (flag==false) {
				num--;
				if (num==-1) {
					num=0;
					flag=true;
				}
			}
			for (var j = 0;  j< aLi.length; j++) {
					aLi[j].className='';
			}
			imgCAR.src=arrImg[num];
			aLi[num].className='Red';
			secBox.style.background=arrBackground[num];
			
			
	
	}
	clearInterval(TimeName);

	TimeName=setInterval(Time,2000);

	imgCAR.onmouseover=function(){
			Block();
		}
	btnr.onmouseover=function(){
			Block();
		}
	btnr.onmouseover=function(){
			Block();
		}
	imgCAR.onmouseout=function(){
			None ();

	}
	btnl.onmouseout=function(){
			None ();

	}
	btnl.onmouseout=function(){
			None ();

	}
	

		function Block(){
			clearInterval(TimeName);
			btnl.style.display='block';
			btnr.style.display='block';
		}
	
		function None () {
			TimeName=setInterval(Time,2000);
			btnl.style.display='none';
			btnr.style.display='none';
		}
	

 // 右边每日丶领卷 
 	var secRtopdesc=$('secRtopdesc');
 	var secRtop=$('secRtop');
 	var secRtopdescAli=secRtopdesc.getElementsByTagName('li');
 	for (var i = 0; i < secRtopdescAli.length; i++) {
 			secRtopdescAli[i].index=i;
 		secRtopdescAli[i].onmouseover=function(){
 				for (var j = 0; j < i; j++) {
 					secRtopdescAli[j].className='';
 					
 				}
 				secRtopdescAli[this.index].className='black';
 				secRtop.style.left=-254*this.index+'px';
 				console.log(this.index);

 		}
 	}
 	
//全球特卖-商品
	var SalContainBar=$('Sal-contain-bar');
	var SalContainBarA=SalContainBar.getElementsByTagName('a');
	console.log(SalContainBarA);
	var SalContainBarLi=SalContainBar.getElementsByTagName('li');

	var SalContainContent=$('Sal-contain-content');
	var SalContainContentUl=SalContainContent.getElementsByTagName('ul');
	
	SalContainContentUl[1].style.display='none'
	SalContainContentUl[2].style.display='none'

	for (var i = 0; i < SalContainBarLi.length; i++) {

		SalContainBarLi[i].index=i;

		SalContainBarLi[i].onclick=function(){

			for (var j = 0; j < SalContainBarLi.length; j++) {

				SalContainBarLi[j].className='';
				SalContainContentUl[j].style.display='none';
				// SalContainBarA[j].style.borderRight='1px solid #aaa';
			}

			SalContainBarLi[this.index].className='white';
			SalContainContentUl[this.index].style.display='block';
			// SalContainBarA[this.index].style.borderRight='none';
			if(this.index==1){

				SalContainBarA[0].style.borderRight='none';
				SalContainBarA[1].style.borderRight='none';

			}
			if (this.index==0) {

				SalContainBarA[1].style.borderRight='1px solid #aaa';
			}
			if(this.index==2){	

				SalContainBarA[0].style.borderRight='1px solid #aaa';
				SalContainBarA[1].style.borderRight='none';
				SalContainBarA[2].style.borderRight='none';
			}
//全球特卖-横幅	
	Banner (this.index)

		}
		
	}
	Banner (0);

	function Banner (index){

		var SalContainImg=document.getElementsByClassName('Sal-contain-Img')[index];
		var SalContainImgP=SalContainImg.getElementsByTagName('p');
		var SalContainI=SalContainImg.getElementsByTagName('i');

		for (var i = 0; i < SalContainImgP.length; i++) {

			SalContainImgP[i].index=i;
			SalContainI[i].style.left=29+SalContainImgP[i].offsetWidth+'px';
					
			}
		}
// 全球特卖-商品倒计时
	
	function TimeNum(){
		var nowTime=new Date();
		var newTime=new Date("2017/9/20 13:30:30");
		var Coundown=newTime-nowTime;
		var h=parseInt(Coundown/3600000);
	  	var s=parseInt((Coundown%3600000)/60000);
	  	var ss=parseInt(((Coundown%3600000)%60000)/1000);
	  
	    document.getElementById("h").innerHTML=h;
	    document.getElementById("s").innerHTML=s;
	    document.getElementById("ss").innerHTML=ss;
	   
}
	setInterval(TimeNum,1000);
// 进度条

	
	var count=0;
	function Bar(){

	var SalContainImg=document.getElementById('Sal-contain-Img');
	var SalContainImgLi=SalContainImg.getElementsByTagName('li');

	for (var i = 0; i < SalContainImgLi.length; i++) {

 	SalContainImgLi[i].index=i;

	var bar=document.getElementsByClassName('bar')[i];

	var Num=document.getElementsByClassName('Num')[i];

	bar.style.width=count+'px'
	Num.innerHTML=count;
	
	count++;

	if (count>=110) {

			count=0;
		}
	}
			
}
setInterval(Bar,10000);
// 国家体育馆
	var stadiumMap=$('stadium-map');
	var stadiumMapLi=stadiumMap.getElementsByTagName('li');

	var stadiumBackground=$('stadium-background');
	var stadiumBackgroundLi=stadiumBackground.getElementsByTagName('li');

	var arrBackgroundColor=[

			'#e13a3a','#00934b','#2259b8',
			'blue','green','pink',
			'#00934b','#e13a3a','green',
			'#2259b8'

			];
	for (var s = 0; s < stadiumMapLi.length; s++) {

		stadiumMapLi[s].index=s;

		stadiumMapLi[s].onmouseover=function(){

			for (var j = 0; j < s; j++) {

				stadiumBackgroundLi[j].style.display='none';
				stadiumMapLi[j].className='';
				stadiumMapLi[j].style.background='';


			}

			stadiumBackgroundLi[this.index].style.display='block';

			stadiumMapLi[this.index].style.background=arrBackgroundColor[this.index];
		}
	}
// 侧边栏	
	 var sidebar=$('sidebar');
	 var sidebarUl=$('sidebarUl');
	 var sidebarLi=sidebarUl.getElementsByTagName('li');
	 var c=0;
	 var f=true;
	 console.log(sidebarLi);

	 window.onscroll=function(){

		var Windowtop=document.documentElement.scrollTop||document.body.scrollTop; 

		console.log(top);

		if (Windowtop>=136) {

			sidebar.style.display='block';
			sidebar.style.position='fixed';
		}
		else{
			sidebar.style.display='none';
		}
		for (var k = 0; k < sidebarLi.length; k++) {
			
			this.index=k;
			
			m=(this.index+1)*590;
			// console.log(m);
		console.log(this.index);
			if (Windowtop>=m) {
			
				for (var j = 0; j < k; j++) {

				sidebarLi[j].style.background='';
			}
				sidebarLi[this.index].style.background='#EBE2EB';
			}
			if (m>Windowtop) {
				for (var j = this.index; j < this.index; j--) {

				sidebarLi[j].style.background='#EBE2EB';
			}
				sidebarLi[this.index].style.background='';
			}
			
			// console.log(this.index);
		}
	}
// 全球名店
	
	var Walmart=$('Walmart');
	var eBay=$('eBay');
	var WalmartTriangle=$('Walmart-Triangle');
	var WalmartImg=$('WalmartImg');
	var eBayImg=$('eBayImg');
	eBay.onmouseover=function(){
		Walmart.style.background='#fff';
		Walmart.style.color='#000';
		WalmartTriangle.style.left='56%';
		WalmartImg.style.display='none';
		eBayImg.style.display='block';
		eBay.style.background='#222';
		eBay.style.color='#fff';

	}
	Walmart.onmouseover=function(){
		eBay.style.background='#fff';
		eBay.style.color='#000';
		eBayImg.style.display='none';
		Walmart.style.background='#222';
		Walmart.style.color='#fff';
		WalmartTriangle.style.left='35%';
		WalmartImg.style.display='block';
	}

// 猜你喜欢

	var loveBottomLeft=$('love-bottom-left');
	var loveBottomRight=$('love-bottom-right');
	var loveBottomLi=$('love-bottom-Li');
	var loveHide=$('love-hide');
	var loveHideUl=loveHide.getElementsByTagName('ul');
	var step=0;

			
	loveBottomRight.onclick=function(){

		step++;
			
		if (step>5) {

			step=6;
		}
		loveBottomLi.style.left=162.88*step+'px';
	loveHide.style.left=-211*step+'px';
		
	}	
	loveBottomLeft.onclick=function(){
				
		
		step--;
		if (step<1) {
			step=0;
		}
		loveBottomLi.style.left=162.88*step+'px';
		loveHide.style.left=-211*step+'px';
		}	
			





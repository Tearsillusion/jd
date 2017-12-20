 cbtab();
function cbtab(){
	var oDivr=document.getElementsByClassName('cbright');
	var oDivl=document.getElementsByClassName('cbleft');
    var oTab=document.getElementsByClassName('cbtab');
    var oUL=document.getElementById('cbul');
    var oLi=oUL.getElementsByTagName('li');
    var num=0;
    var arr=[];
    var arr1=['张味记 野猪黑猪肉 武夷山脉林间...',
    '【冰鲜】皇港世家 丹麦进口冰鲜刺身三文鱼 400g 盒装',
    '蔬氏 翡冷翠风情蔬菜沙拉 300g',
    '【冷鲜肉】泰森 新鲜鸡小胸 500g/袋 烧烤食材健身食材',
    '佳农 进口香蕉 2kg 单根装 新鲜水果',
    '大渔场 加拿大进口鲜活波士顿龙虾 1000g/只 盒装 海鲜水产']
    oTab[0].style.transform='scale(2.3)';
    oTab[1].style.transform='translateX(-160px)';
    oTab[5].style.transform='translateX(145px)';
     for (var i = 2; i < 5; i++) {
        oTab[i].style.transform='translateX(220px)';
        arr.push(oTab[i]);
        }
    oLi[0].style.background='#aaa';
    oDivl[0].onclick=function(){
        document.onselectstart = new Function("return false");
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.opacity='0';
            arr[i].style.transform='translateX(220px)';
        }
    	num--;
    	if (num<0) {
    		num=5;
    	}
        oTab[num].style.transform='translateX(0)';
        oTab[num].style.transform='scale(2.3)';
    	for (var i=0;i<6; i++) {
    		oLi[i].style.background='';
    	}
    	oLi[num].style.background='#aaa';
        $('.cbjiage a:first').html(arr1[num]);
    	var n=num+1;
    	if (n>5) {
    		n=0;
    	}
       oTab[n].style.transform='translateX(-160px)';
       var c=n+1
       if (c>5) {
        c=0;
       }
        oTab[c].style.transform='translateX(-210px)';
       arr.unshift(oTab[c]);
       oTab[c].style.opacity='0';
    	var m=num-1;
    	if(m<0){
    		m=5;
    	}
        arr.pop();  
        oTab[m].style.transform='translateX(145px)';  
        oTab[m].style.opacity='1';  
    }
    for (var i = 0; i < arr.length; i++) {
            arr[i].style.opacity='0';
            arr[i].style.transform='translateX(-220px)';
        }
    oDivr[0].onclick=function(){
        document.onselectstart = new Function("return false");
         for (var i = 0; i < arr.length; i++) {
            arr[i].style.opacity='0';
            arr[i].style.transform='translateX(-220px)';
        }
    	num++;
    	if (num>5) {
    		num=0;
    	}
    	oTab[num].style.transform='translateX(0)';
        oTab[num].style.transform='scale(2.3)';
    	for (var i=0;i<6; i++) {
    		oLi[i].style.background='';
    	}
    	oLi[num].style.background='#aaa';
        $('.cbjiage a:first').html(arr1[num]);
    	var n=num+1;
    	if (n>5) {
    		n=0;
    	}
        arr.shift();    
    	oTab[n].style.transform='translateX(-160px)';
        oTab[n].style.opacity='1';
    	var m=num-1;
    	if(m<0){
    		m=5;
    	} 
        oTab[m].style.transform='translateX(145px)'; 
         var c=m-1
       if (c<0) {
        c=5;
       }
        oTab[c].style.transform='translateX(210px)';
        oTab[c].style.opacity='0';
        arr.push(oTab[c]);
    }
}
timer();
setInterval(timer, 1000)
function timer(){
    var now=new Date();
    var after1=new Date(17,0,0);
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var sec=now.getSeconds();
    var oDiv=document.getElementsByClassName('t');
    var oDiv1=document.getElementsByClassName('t1');
    var right1=document.getElementById('right1');
    var right2=document.getElementById('right2');
    var left1=document.getElementById('left1');
    var left2=document.getElementById('left2');
    if (hours>9||hours<17) {
        right1.style.display='block';
        right2.style.display='none';
        left1.style.display='block';
        left2.style.display='none';
        function zao(){
            var hour=16-hours;
            oDiv[0].innerHTML='0'+hour;
            var min=59-minutes
            if (min<10) {
                oDiv[1].innerHTML='0'+min;
            }
            else{
                 oDiv[1].innerHTML=min;
            }
            var sec1=59-sec;
            if (sec1<10) {
                oDiv[2].innerHTML='0'+sec1;
            }
            else{
                 oDiv[2].innerHTML=sec1;
            }
        }   
    }
    zao()
    if (hours>16||hours<10) {
        right1.style.display='none';
        right2.style.display='block';
        left1.style.display='none';
        left2.style.display='block';
        function wan(){
            var hour=0;
            if (hours<24&&hours>16) {
                hour=23-hours+10;
                oDiv1[0].innerHTML=hour;
            }
            else{
                hour=9-hours;
                oDiv1[0].innerHTML='0'+hour;
            }
            
            var min=59-minutes
            if (min<10) {
                oDiv1[1].innerHTML='0'+min;
            }
            else{
                 oDiv1[1].innerHTML=min;
            }
            var sec1=59-sec;
            if (sec1<10) {
                oDiv1[2].innerHTML='0'+sec1;
            }
            else{
                 oDiv1[2].innerHTML=sec1;
            }
        }
        wan()   
    }
}
ultab();
function ultab(){
    var ulTab=document.getElementsByClassName('tab');
    var tabL=document.getElementById('tab-l');
    var tabR=document.getElementById('tab-r');
    for (var i=1; i<3; i++) {
        ulTab[i].style.transform='translateX(1200px)';
        ulTab[i].style.opacity='0';
    }
    var m=0;
    tabR.onclick=function(){ 
        m++; 
        if (m>2) {
        m=2;
        }    
        ulTab[m-1].style.transform='translateX(-1200px)';
        ulTab[m-1].style.opacity='0';
        ulTab[m].style.transform='translateX(0)';
        ulTab[m].style.opacity='1';            
    }
    tabL.onclick=function(){     
        m--;
        if (m<0) {
        m=0;
        }
        ulTab[m].style.transform='translateX(0)';
        ulTab[m].style.opacity='1';
        ulTab[m+1].style.transform='translateX(1200px)';
        ulTab[m+1].style.opacity='0';      
    }

}
$(function(){
    var n=1;
   var div= $('.divfour');
   for (var i = 0; i < div.length; i++) {
        div[i].style.opacity='0';
    }
    div[1].style.opacity='1';
    div[0].style.transform='translateY(-35px)';
    div[2].style.transform='translateY(35px)';
    var timer=setInterval(fourtimer,2000);
    function fourtimer(){
        div[n].style.transform='translateY(-35px)';
        div[n].style.opacity='0';
        var m=n-1;
        if (m<0) {
            m=2
        }
        div[m].style.transform='translateY(35px)';

        n=n+1;
        if (n>2) {
            n=0
        }
        div[n].style.transform='translateY(0px)';
        div[n].style.opacity='1';
    } 
});
$(function(){
    $('.b4icon2').mouseover(function (){
        $('.b4icon2').css({"opacity":"0","transform":"translateY(-115px)"});
        $('.b4img2').css({'opacity':'1','transform':'translateY(-115px)'});
        $('.b4img3').css({'opacity':'0','transform':'translateY(0px)'});
        $('.b4img1').css('opacity','0');
        $('.b4icon1').css('opacity','1');
        $('.b4icon3').css({'opacity':'1','transform':'translateY(0px)'});
    })
    $('.b4icon3').mouseover(function (){
        $('.b4icon2').css({"opacity":"1","transform":"translateY(-115px)"});
        $('.b4img3').css({'opacity':'1','transform':'translateY(-230px)'});
        $('.b4img1').css('opacity','0');
        $('.b4img2').css('opacity','0');
        $('.b4icon1').css('opacity','1');
        $('.b4icon3').css({"opacity":"0","transform":"translateY(-115px)"});
    })
    $('.b4icon1').mouseover(function (){
        $('.b4icon2').css({"opacity":"1","transform":"translateY(0px)"});
        $('.b4img3').css({'opacity':'0','transform':'translateY(0px)'});
        $('.b4img1').css('opacity','1');
        $('.b4img2').css('opacity','0');
        $('.b4icon1').css('opacity','0');
        $('.b4icon3').css({"opacity":"1","transform":"translateY(0px)"});
    })
})
$(function(){
    $(window).scroll( function() {
        var $scrollTop=$(document).scrollTop();
        scrollTop=parseInt($scrollTop);
        if (scrollTop>2000) {
            $('#navigation').fadeIn('slow');
        }
        if (scrollTop<2000) {
            $('#navigation').fadeOut('slow');
         }
        if (scrollTop>2450&&scrollTop<3000) {
            
            $('#nav-1').addClass('navclick').siblings()
        .removeClass('navclick');
         }
        else if (scrollTop>3000&&scrollTop<3550) {
            $('#nav-2').addClass('navclick').siblings()
        .removeClass('navclick');
         }
   } );
    $('#nav-1').click(function(){
        $('#nav-1').addClass('navclick').siblings()
        .removeClass('navclick');
    })
    $('#nav-2').click(function(){
        $('#nav-2').addClass('navclick').siblings()
        .removeClass('navclick');
    })
})
$(function(){
    setInterval(fourtimer, 1000)
    function fourtimer(){
        var nowtime = new Date().getTime();
        var wtime = new Date("2017,9,25").getTime();
        var lefttime = (wtime-nowtime)/1000; 
        var day = parseInt(lefttime/60/60/24);
        var hour = parseInt(lefttime/60/60%24);
        var min = parseInt(lefttime/60%60);
        var sec = parseInt(lefttime%60);
        $('.fourtimer').html('剩余'+day+'天'+hour+'时'
            +min+'分'+sec+'秒')
    }
})

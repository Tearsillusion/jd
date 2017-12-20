/**
 * Created by 一个有点酷的路人 on 2017/9/13.
 */
/*实现顶部导航栏效果*/
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var oSection = document.getElementById('fix');
    var oFloat = document.getElementById('float');
    if(scrollTop >= 136){
        oFloat.style.opacity = 1;
    }else{
        oFloat.style.opacity = 0;
    }

}



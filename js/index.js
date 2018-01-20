/**
 * Created by admin on 2017/9/19.
 */
// 界面尺寸修正
var doc = document,
    win = window,
    oBody = doc.documentElement || doc.body,
    resize = "onorientationchange" in win ? "orientationchange" : "resize";
rem();
addEventListener(resize, rem, false);
function rem() {
    /*doc.body.clientWidth是获取当前的body的宽度，640是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px*/
    oBody.style.fontSize = 100 * (doc.body.clientWidth / 640) + "px";
    console.log(oBody.style.fontSize);
}
// 轮播图
var mySwiper = new Swiper ('#swiper1', {
    autoplay: 3000,
    loop: true,
    paginationClickable:true, //让分页器可以点击切换

    // 如果需要分页器
    pagination: '.swiper-pagination'
});
// header部分
var oHeader =document.getElementsByClassName('content')[0];
 window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop >200)
        oHeader.style.background="red";
    else
        oHeader.style.background="transparent";
};
// swiper2部分
var mySwiper1 =new Swiper ('#swiper2', {
    // slidesPerView:2.5,
    // slidesPerGroup:2,
    // spaceBetween:30
    // freeMode:true
});
// swiper3部分
var mySwiper2 = new Swiper ('#swiper3', {
    autoplay: 3000,
    loop: true,
    paginationClickable:true, //让分页器可以点击切换

    // 如果需要分页器
    pagination: '.swiper-pagination'
});
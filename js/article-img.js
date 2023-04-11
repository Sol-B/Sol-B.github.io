const body = document.querySelector("body");
// 文章中所有的图片
const articleImg = document.querySelectorAll("#js_articleImg");
// 图片背景
const BackgroundBoard = document.querySelector("#js_BackgroundBoard");
// 关闭按钮
const closeButton = document.querySelector("#js_closeButton");


// 图片点击监听函数
articleImg.forEach((value, index)=>{
    value.addEventListener('click', ()=>{

        // 显示黑色背景
        BackgroundBoard.setAttribute('style', 'display:block; overflow:hidden;');
        // 显示关闭图标
        closeButton.setAttribute('style', 'display: block;');

        // 注入点击的图片
        BackgroundBoard.innerHTML = value.innerHTML;
        // 防止图片打开后有滚动条
        body.setAttribute('style', 'overflow: hidden;');

    } );
});


// 关闭按钮监听函数
closeButton.addEventListener('click', ()=>{
    // 关闭并隐藏
    BackgroundBoard.setAttribute('style', 'display: none;');
    closeButton.setAttribute('style', 'display: none;');
    // 图片关闭后打开滚动条
    body.setAttribute('style', 'overflow: ');
});
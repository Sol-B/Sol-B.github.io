// 获取所有pre标签
const preCode = document.getElementsByTagName('pre');
// 获取js_C_article
const C_article = document.querySelector("#js_C_article");
// 预设pre宽度变量
let preWidth;

// 大于900px为桌面端有固定值，小于为移动端。
if(C_article.clientWidth>=900){
    preWidth = C_article.clientWidth - 30;
}else{
    preWidth = C_article.clientWidth - 120;
};

// 转化伪数组给pre长度赋值
Array.from(preCode).forEach((value, index)=>{
    value.setAttribute('style', 'width: '+ preWidth +'px;');
});
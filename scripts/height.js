var imgHeight = document.querySelector('.img-header').clientHeight + 'px';
document.querySelector('.header').style.height = imgHeight;

window.onresize = function(event){
   var imgHeight = document.querySelector('.img-header').clientHeight + 'px';
   document.querySelector('.header').style.height = imgHeight; 
}
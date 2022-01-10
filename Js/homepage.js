//let btn = document.getElementById('daily');
//btn.addEventListener('click', function(){
    //alert(document.referrer);
//});

const date = new Date();
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
var nowdate = year + "年" + month + "月" + day + "日";
   
    
window.onload = function () {
  let daily1 = document.getElementById('daily');
  daily1.addEventListener('click', function () {
    location.href = "../html/daily_second.html?data=" + encodeURIComponent(nowdate);
  })
}
let year = 2020; // DBの設計によるけど
let month = 0;   // 細かく分けた構造ならこのままいける
let day = 0;
const where = ["病院","金閣寺"];
const who = ["孫","友人"];
const what = ["お喋りした","団子食べた"];
const how = ["対面","お金を払って"];

function GetRandomNumber_Where(){
  let where_num = Math.floor( Math.random() * 2 );
  console.log(where_num);
  return where_num;
}

function GetRandomNumber_Who(){
  let who_num = Math.floor( Math.random() * 2 );
  console.log(who_num);
  return who_num;
}

function GetRandomNumber_What(){
  let what_num = Math.floor( Math.random() * 2 );
  console.log(what_num);
  return what_num;
}

function GetRandomNumber_How(){
  let how_num = Math.floor( Math.random() * 2 );
  console.log(how_num);
  return how_num;
}

window.addEventListener("DOMContentLoaded", () => {
    const forward_btn = document.getElementById("forward-text");
    const pho = document.getElementById("QuizQuestion-photo");
    let quiz_location = document.getElementById("Q_location");
    let quiz_man = document.getElementById("Q_man");
    let quiz_did = document.getElementById("Q_did");
    let quiz_case = document.getElementById("Q_case");
    let quiz_year = document.getElementsByClassName("year");
    let quiz_month = document.getElementsByClassName("month");
    let quiz_date = document.getElementsByClassName("date");

    // 「前へ」ボタンで文章を変更
    forward_btn.addEventListener("click", () => {

      let where_num = GetRandomNumber_Where(); // 乱数生成
      let who_num = GetRandomNumber_Who();
      let what_num = GetRandomNumber_What();
      let how_num = GetRandomNumber_How();

      if(getComputedStyle(pho).display == "none"){
        pho.style.display = "block"; // 写真エリアを表示
        quiz_year[0].innerText = year;
        quiz_month[0].innerText = month + 1;
        quiz_date[0].innerText = day + 1;
        quiz_location.innerText = where[where_num] + "で";
        quiz_man.innerText = who[who_num] + "と";
        quiz_did.innerText = what[what_num];
        quiz_case.innerText = how[how_num];
      } else {
        pho.style.display = "none"; // 写真エリアを消す
        quiz_year[0].innerText = year + 1;
        quiz_month[0].innerText = month + 1;
        quiz_date[0].innerText = day + 1;
        quiz_location.innerText = where[where_num] + "で";
        quiz_man.innerText = who[who_num] + "と";
        quiz_did.innerText = what[what_num];
        quiz_case.innerText = how[how_num];
      }
      if(day < 30){
        day++;
      }else{
        month++;
        day = 0;
      }
      
    })
})
var data = sessionStorage.getItem('seldate');
console.log('選択されているのは' + data);
document.getElementById("date").innerHTML = data;

window.onload = function () {
  let daily = document.getElementById("save");
  daily.addEventListener('click', function () {
    location.href = "../html/daily_second.html?data=" + encodeURIComponent(data);
  })
}



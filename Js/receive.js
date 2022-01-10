window.onload = function () {
    let data = location.href.split("?")[1];//jusinページのURL参照　？でURLを分けて、左側が[0],右側が[1]　今回は右側の「Data=・・・・・」部をとってきた
    let text = data.split("=")[1];//上でとった「Data＝・・・・・」という値を=で分けて、右側をtextに入れる
    document.getElementById("message").innerHTML = decodeURIComponent("Question　[ジャンル："+text+"]");//messageIDのタグにtextの文章をエンコードして入れる
}
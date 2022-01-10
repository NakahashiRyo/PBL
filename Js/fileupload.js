

function previewFile(file) {
  // プレビュー画像を追加する要素
  const preview = document.getElementById("preview");

  // FileReaderオブジェクトを作成
  const reader = new FileReader();

  // ファイルが読み込まれたときに実行する
  reader.onload = function (e) {
    const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
    const img = document.createElement("img"); // img要素を作成
    img.src = imageUrl; // 画像のURLをimg要素にセット
    const newdiv = document.createElement("div");
    newdiv.classList.add("filechoice-imagebody");
    preview.appendChild(newdiv);
    newdiv.appendChild(img); // #previewの中に追加
    const batsu = document.createElement("button");
    const batsutxt = document.createTextNode("☓");
    batsu.appendChild(batsutxt);
    newdiv.appendChild(batsu);
    batsu.addEventListener("click",function(){
      const show = window.confirm('本当に削除してよろしいでしょうか?');
      if (show == true){
        preview.removeChild(newdiv);
      }
    });
  }

  // いざファイルを読み込む
  reader.readAsDataURL(file);
}


// <input>でファイルが選択されたときの処理
const fileInput = document.getElementById("filechoice-js");
const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    previewFile(files[i]);
  }
}
fileInput.addEventListener("change", handleFileSelect);
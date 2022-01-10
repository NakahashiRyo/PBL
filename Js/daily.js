window.onload = function () {
  var url = new URL(window.location.href);
  console.log(url);
  var params = url.searchParams;
  var date1 = params.get("data");
  document.getElementById("date").innerHTML = date1;
  console.log('選択されているのは ' + date1);
  sessionStorage.setItem('seldate', date1);
}










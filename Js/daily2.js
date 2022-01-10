var data = sessionStorage.getItem('seldate');
console.log('選択されているのは' + data);
document.getElementById("date").innerHTML = data;

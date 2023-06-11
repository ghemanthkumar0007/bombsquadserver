function show(){
  var value = document.getElementById("playerstoshow").value;
  var table = document.getElementById("table");
  var rows = table.getElementsByTagName("tr");
  var boolv = Number.isInteger(parseInt(value));
  if(boolv==true){
    for (var i = 1; i < (rows.length); i++){
      var row = document.getElementById(String(i));
      row.style.display = "";
      if(i>parseInt(value)){
        row.style.display = "none";
      }
    }
  }
  alert("Upto "+String(value)+" number of row(s) of player stats table is/are shown.");
}
function search() {
  var input, filter, table, tr, td, i, txtValue, value;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  value = document.getElementById("playerstoshow").value;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        if(i>parseInt(value)){
          tr[i].style.display = "none";
        } else {
          tr[i].style.display = "";
        }
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function gaccount(account) {
  var inv43200, inv43210;
  inv43210 = document.getElementById('43210I');
  var mhr = new XMLHttpRequest();
  mhr.onreadystatechange = function (e) {
    if (mhr.readyState == 4 && mhr.status == 200) {
      inv43210.innerHTML = mhr.responseText;
      var a43210 = document.getElementById(String(account));
      if (a43210!=null) {
        a43210.style.display = "";
      var id = a43210.getAttributeNode("id")
      a43210.removeAttributeNode(id)
      }
    }
  }
  mhr.open("GET", "43210I.html", true);
  mhr.setRequestHeader('Content-type', 'text/html');
  mhr.send();
}
function f43210(){
  var con = document.getElementById('43210F')
  ,   xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
      con.innerHTML = xhr.responseText;
      show();
    }
  }
  xhr.open("GET", "43210F.html", true);
  xhr.setRequestHeader('Content-type', 'text/html');
  xhr.send();
}
function load(){
  var url_string = window.location.href;
  var url = new URL(url_string);
  var port = url.searchParams.get("port");
  var account = url.searchParams.get("account");
  if(String(port)!=="null"){
    if(String(port)==="43210"){
      f43210();
    }
  }
  if(String(account)!=="null"){
    gaccount(String(account));
  }
}
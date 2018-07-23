function check(){
  var flag = 0;
  if(document.field.form1.value == ""){
		flag = 1;
    window.alert('お会計金額を入力してください');
  }
	else if(document.field.form2.value == ""){
		flag = 1;
    window.alert('合計人数を入力してください');

  }
  if(flag==1){
  window.alert('お会計金額と合計の人数を入力してください');
  return false;
  }
  else{
  btnYES(); // 実行
  }
}

var wari;
function getPrice() {
  var getprice = document.getElementById( "price" ).value;
  document.getElementById( "outputprice" ).innerHTML = getprice;
}

function Wari() {
  var getprice = document.getElementById( "price" ).value;
  var person = document.getElementById( "persons" ).value;
  if(!getprice){
    document.field.form2.value="";
    window.alert("合計金額を入力してください");
    return;
  }
  wari = getprice/person;
  document.getElementById( "wariprice" ).innerHTML = wari;
}

function btnYES(){
var ct2=document.getElementById("contents2");
ct2.style.display='block';
}

function nonAl() {
  var wari=document.getElementById( "wariprice" ).innerHTML;
  var nonalprice = wari*0.8;
  document.getElementById( "nonAlprice" ).innerHTML = nonalprice;
}

function Alprice() {
  var person = document.getElementById( "persons" ).value;  //参加人数
  var person2 = document.getElementById( "persons2" ).value;  //飲んで無い人数
  var person3 = person-person2; //お酒を飲んだ人数
  var alprice = ((wari*0.2)*person2); //飲んでる人の追加額(割り勘金額＊0.2*未飲酒人数)
  var alprice2 = parseInt(wari+(alprice/person3),10);  //(割り勘額+(追加額/飲酒人数))
  document.getElementById("Alprice").innerHTML = alprice2;
}

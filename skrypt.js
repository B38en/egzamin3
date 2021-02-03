function policz(){
var p=document.getElementById('p').value;
var wnk=document.getElementById("wnk");
var puchy= Math.ceil(p/4);
wnk.innerHTML='Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi:'+puchy;
}
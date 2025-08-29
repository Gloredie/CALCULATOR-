

let display = document.getElementById("display");
function addNum(value){
  display.value += value;
}
 
function calculate(){
  display.value = eval(display.value);
if(display.value =="Infinity"){
    alert("Can't devide by Zero");
    display.value="";
  }
}
function clearAll(){
  display.value = "";
}
function DEL(){
  display.value = display.value.slice(0,-1);
}
document.getElementById("btn1").onclick=function add(){
  let a =  document.getElementById("input1").value;
  a =Number(a);
  if(isNaN(a)){
    document.getElementById("final").innerHTML="Please add a number"
  }else if(a==''){
    document.getElementById("final").innerHTML="plese enter a temparature value"
  }
  else if(document.getElementById("input2").checked){
    a=a+273.23;
    document.getElementById("final").innerHTML=a+"K"
  }else if(document.getElementById("input3").checked){
    a=a*(9/5)+32;
    document.getElementById("final").innerHTML=a+"F"
  }else{
    document.getElementById("final").innerHTML="plese select celcious or faranaite button"
  }
}
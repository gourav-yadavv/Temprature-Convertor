var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");


cel.addEventListener('input',function (){
   let c = this.value;
   let f = (c * 9/5) + 32 ;
   fah.value = f;
   let k = Number(c) + 273.15 ;
   kel.value = k;
   
});

fah.addEventListener('input',function (){
    let f = this.value;
    let c = (f - 32) * 5/9;
    cel.value = c;
    let k =(f - 32) * 5/9 + 273.15 ;
    kel.value= k;
});

kel.addEventListener('input',function (){
    let k = this.value;
    let c = k - 273.15;
    cel.value = c;
    let f = (k - 273.15) * 9/5 + 32 ;
    fah.value= f;
});

var f = document.getElementsByClassName("inp");

//input focus event
for(let i=0;i< f.length;i++)
{
    f[i].addEventListener('focus',myFocusfunction);
}
function myFocusfunction(){
for(let i=0;i< f.length;i++)
   {
       f[i].style.background ="black" ;
       f[i].style.color="white";
       f[i].style.border ="3px solid yellow";
       f[i].style.borderRadius = "15px";
   }

};

//input blur event
var b = document.getElementsByClassName("inp");
for(let i=0;i<  b.length;i++)
{
       b[i].addEventListener('blur',myBlurfunction);
}
function myBlurfunction(){
   
for(let i=0;i< b.length;i++)
{
    b[i].style.background ="white" ;
}
};




 


 

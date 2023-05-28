function clock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    
    let ampm= h>=12 ? "PM" :"AM";
    if(h>12){
        h-=12;
    }
    else if(h==0){
        h=12;
    }
    if(h<10){
        document.getElementById("hours").innerHTML="0"+h;
    }
    else{
        document.getElementById("hours").innerHTML=h;
    }
    if(m<10){
        document.getElementById("minutes").innerHTML="0"+m;
    }
    else{
        document.getElementById("minutes").innerHTML=m;
    }
    if(s<10){
        document.getElementById("seconds").innerHTML="0"+s;
    }
    else{
        document.getElementById("seconds").innerHTML=s;
    }
    document.getElementById("period").innerHTML=" "+ampm;
}
setInterval(clock,1000);
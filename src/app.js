
import Protocool from './Protocool';

let c64 = new Protocool(start,{computer:"c64",zoom:2});


function start(){
    c64.set_charset_color("white");
    c64.print("playing around with protocool64",5,10);

    //interrupt();
}

function interrupt(){

    let x = Math.floor(Math.random()*40);
    let y = Math.floor(Math.random()*13);
    let c = Math.floor(Math.random()*16);
    let char = Math.floor(Math.random()*255);
    c64.set_charset_color(c);
    c64.print_char([char],x,y+12);

    requestAnimationFrame(interrupt);
}


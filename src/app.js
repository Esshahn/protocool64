import "@babel/polyfill";
import C64 from './C64';

let c64 = new C64(start,{background_color:"brown",border_color:"yellow",charset_color:"white",zoom:1});


function start(){
    c64.print("playing around with protocool64",5,10);
    //c64.reset();
    //c64.set_border_color("grey");
    /*
    //c64.set_border_color("grey");
    //c64.set_background_color("red");

    c64.set_char_color("white");
    c64.print("hello world!",5,8);
    c64.set_char_color("yellow");
    c64.print("playing around with protocool64",5,10);
    c64.clear_char(5,8);

    interrupt();
    */
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


foo();

async function foo() {
     let a = await 1;
     console.log("bern");
  }

  
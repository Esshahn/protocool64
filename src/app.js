import C64 from './C64';

let c64 = new C64(start);

function start(){

    c64.reset();
    c64.scale(1);

    c64.set_border_color("brown");
    c64.set_background_color("red");

    c64.set_char_color("white");
    c64.print("hello world!",5,8);
    c64.set_char_color("yellow");
    c64.print("playing around with protocool64",5,10);

    interrupt();

}

function interrupt(){

    let x = Math.floor(Math.random()*40);
    let y = Math.floor(Math.random()*25);
    let c = Math.floor(Math.random()*16);
    let char = Math.floor(Math.random()*255);
    c64.set_char_color(c);
    c64.print_char([char],x,y);

    requestAnimationFrame(interrupt);
}


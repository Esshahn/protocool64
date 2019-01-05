
import Protocool from './Protocool';

let machine = new Protocool(start,{computer:"vc20",zoom:1});

function start(){
    
   machine.print("is this the real life?",0,6);
   machine.print("is this just fantasy?",0,7);
   machine.print("caught in a landslide",0,8);
   machine.print("no escape from reality",0,9);
   //interrupt();
}

function interrupt(){
    machine.set_charset_color( machine.random( machine.get_colors()) );
    machine.print_char( [machine.random(255)], machine.random(machine.get_columns()), machine.random(machine.get_rows()));
    requestAnimationFrame(interrupt);
}
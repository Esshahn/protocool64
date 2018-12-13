
import Protocool from './Protocool';

let machine = new Protocool(start,{computer:"plus/4",zoom:2});

function start(){
    interrupt();
}

function interrupt(){
    machine.set_charset_color( machine.random( machine.get_colors()) );
    machine.print_char( [machine.random(255)], machine.random(40), machine.random(18) + 7);
    requestAnimationFrame(interrupt);
}


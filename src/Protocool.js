

/*

    TODO

    - set screen ram (print_char at $xxxx)
    - set color ram (print_char at $xxxx)



*/

/*

        C64 Class
        generates a canvas that mimics a C64 screen
        and provides basic prototyping features for creating C64 games

        usage
        let machine = new C64(background color, border color)

*/

import { get_config } from "./config.js";
import "@babel/polyfill";

export default class Protocool
{
    
    constructor(callback,options) //)
    {
        this.load = require('load-asset');
        this.computers = get_config();
        this.callback = callback;

        if(!options.computer) options.computer = "c64";
        if(!options.zoom) options.zoom = 1;

        this.computer = this.computers[options.computer];
        this.zoom = options.zoom;
        
        this.computer.charmap =
        {
            "@":0, "A":1, "B":2, "C":3, "D":4, "E":5, "F":6, "G":7, "H":8, "I":9, "J":10,
            "K":11, "L":12, "M":13, "N":14, "O":15, "P":16, "Q":17, "R":18, "S":19, "T":20,
            "U":21, "V":22, "W":23, "X":24, "Y":25, "Z":26, "[":27, "]":29, " ":32, "!":33,
            "'":34, "(":40, ")":41, "*":42, "+":43, ",":44, "-":45, ".":46, "0":48, "1":49,
            "2":50, "3":51, "4":52, "5":53, "6":54, "7":55, "8":56, "9":57, ":":58, ";":59,
            "=":61, "?":63
        }

        this.c_display = document.createElement('canvas');
        this.c_display.id = "display";
        this.c_display.width = this.computer["outer_width"];
        this.c_display.height = this.computer["outer_height"];

        this.c_border = document.createElement('canvas');
        this.c_border.id = "border";
        this.c_border.width = this.computer["outer_width"];
        this.c_border.height = this.computer["outer_height"];

        this.c_colram = document.createElement('canvas');
        this.c_colram.id = "colram";
        this.c_colram.width = this.computer["width"];
        this.c_colram.height = this.computer["height"];

        this.c_screen = document.createElement('canvas');
        this.c_screen.id = "screen";
        this.c_screen.width = this.computer["width"];
        this.c_screen.height = this.computer["outer_height"];

        this.display = this.c_display.getContext('2d', { alpha: false });
        this.border = this.c_border.getContext('2d', { alpha: false });
        this.colram = this.c_colram.getContext('2d', { alpha: false });
        this.screen = this.c_screen.getContext('2d', { alpha: true });
        
        document.getElementById("output-canvas").appendChild(this.c_display);
        
        this.setup();
        
    }

    async setup()
    {
        await this.load_charset("./files/c64-charset.bin");
        this.set_border_color(this.computer.border_color);
        this.set_background_color(this.computer.colram_color);
        this.scale(this.zoom);
        this.update();
        this._mouse_init();
        this.reset();
        this.callback();
    }

    _check_color(color)
    {
        // checks if color is either a string or a number
        if (typeof color === "number") 
        {
            return Object.keys(this.computer.colors)[color];
        } else {
            return color;
        }
    }


    set_border_color(color)
    {  
        this.computer.border_color = this._check_color(color);
        this.border.fillStyle = this.computer.colors[this.computer.border_color];
        this.border.fillRect(0, 0, this.c_border.width, this.c_border.height);
        this.update();
    }

    set_background_color(color)
    {
        this.computer.colram_color = this._check_color(color); 
        this.colram.fillStyle = this.computer.colors[this.computer.colram_color];
        this.colram.fillRect(0, 0, this.c_colram.width, this.c_colram.height);
        this.update();
    }

    clear()
    { 
        this.screen.clearRect(0, 0, this.computer.width, this.computer.height);
    }

    update()
    {
        this.display.drawImage(this.c_border,0,0);
        this.display.drawImage(this.c_colram,(this.computer["outer_width"]-this.computer["width"])/2,(this.computer["outer_height"]-this.computer["height"])/2);
        this.display.drawImage(this.c_screen,(this.computer["outer_width"]-this.computer["width"])/2,(this.computer["outer_height"]-this.computer["height"])/2);
    }

    scale(factor)
    {
        this.zoom = factor;
        document.getElementById("display").style.width = this.c_display.width * this.zoom +"px";
        this.status("scale: "+this.zoom *100+"%","system");
    }

    status(message,level)
    {
        let color;

        switch(level)
        {
            case "error": 
                color = "red";
                break;
            case "system":
                color = "yellow";
                break;
            default:
                color = "white";
        }
        document.getElementById("status").innerHTML += '<p style = "color:'+color+';">'+message+'</p>';
    }


    async load_charset(filename)
    { 
        let array_buffer = await this.load({url:filename,type:'binary'});
        let charset = this._convert_charset(array_buffer);
        this._create_charset(charset,this.computer.charset_color);        
    }

    _convert_charset(array_buffer)
    {
        let charset_bytes = [];
        let charset = []; 
        var byte_array = new Uint8Array(array_buffer);
        var line_counter = 0;
        for (var i = 0; i < byte_array.byteLength; i++) 
        {
            let binary = ("0000000" + byte_array[i].toString(2)).slice(-8);
            charset_bytes.push(binary);

            line_counter ++;
            if (line_counter == 8)
            {
                charset.push(charset_bytes);
                line_counter = 0;
                charset_bytes = [];
            }
        }
        return charset;
    }

    _create_charset(charset,color)
    {
        
        this.charset = [];
        color = this._check_color(color);

        let char;
        for (let chars = 0; chars < charset.length; chars++)
        {

            char = document.createElement('canvas');
            char.id = chars;
            char.width = 8;
            char.height = 8;
            char.ctx = char.getContext('2d');
            char.ctx.fillStyle = this.computer.colors[color];
            
            for(let y=0; y<8; y++)
            {
                for(let x=0; x<8; x++)
                {
                    char.ctx.fillRect(x, y, charset[chars][y][x], charset[chars][y][x]);
                }
            }
            
            this.charset.push(char);
        }
        
    }

    set_charset_color(color)
    {
        this.computer.charset_color = this.computer.colors[this._check_color(color)];
        this.change_charset_color();
    }

    change_charset_color()
    {
        for(let i=0; i< this.charset.length; i++)
        {
            this.charset[i].ctx.globalCompositeOperation = 'source-in';
            this.charset[i].ctx.fillStyle = this.computer.charset_color;
            this.charset[i].ctx.fillRect(0,0,8,8);
        }
    }

    clear_char(x,y)
    { 
        this.screen.clearRect(x*8, y*8, 8, 8); 
    }

    print(text,x,y,use_high_charset = false)
    {
        // print text like "hello"

        for (let i=0; i<text.length;i++)
        {
            let character = this.computer.charmap[text[i].toUpperCase()];
            if (use_high_charset) character+= 128;
            this.clear_char(x+i,y);
            this.screen.drawImage(this.charset[character],x*8+8*i,y*8);
        }
        
        this.update();
    }

    print_char(array,x,y)
    {
        // print characters based on charcode, like 43,56,78

        for (let i=0; i<array.length;i++)
        {
            this.clear_char(x+i,y);
            this.screen.drawImage(this.charset[array[i]],x*8+8*i,y*8);
        }
        
        this.update();
    }

    reset()
    {
        this.clear();
        this.set_background_color(this.computer["colram_color_default"]);
        this.set_border_color(this.computer["border_color_default"]);
        this.set_charset_color(this.computer["charset_color_default"]);
        
        for (let line=0; line < this.computer.reset_text.length; line++)
        {
            this.print(this.computer.reset_text[line][0],this.computer.reset_text[line][1],this.computer.reset_text[line][2]);
        }

    }

    _mouse_init()
    {
        this.c_display.addEventListener('mousemove', this._get_mouse_position.bind(this), false);
    }


    _get_mouse_position(event)
    {  
        var rect = document.getElementById("display").getBoundingClientRect();
        var x_offset = (this.c_border.width - this.c_colram.width)/2 ;
        var y_offset = (this.c_border.height - this.c_colram.height)/2;
        var x = Math.floor((event.clientX - rect.left) / this.zoom - x_offset);
        var y = Math.floor((event.clientY - rect.top) / this.zoom - y_offset);
        var xc = Math.floor(x/8);
        var yc = Math.floor(y/8);
        var screen_ram = ("$0"+(1024 + yc*40 + xc).toString(16)).slice(-5);
        var color_ram = ("$"+(55296 + yc*40 + xc).toString(16)).slice(-5);
        document.getElementById("mouse").innerHTML = "X:"+x + " Y:"+ y + " | XC:" + xc + " YC:" + yc + " | SR:"+ screen_ram + " | CR:"+ color_ram;
    }



    async load_asset (url,type) 
    {
        // https://github.com/mattdesl/load-asset

        let asset = await this.load({url:url,type:type});
        console.log(asset);
        return asset;
    }


}
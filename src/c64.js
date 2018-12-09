import $ from "jquery";

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

export default class C64
{
    
    constructor(callback,options = {background_color:"blue",border_color:"light_blue",charset_color:"light_blue",zoom:1}) //)
    {

        this.colors = 
        {
            black:"#000000",white:"#ffffff",red:"#67372d",cyan:"#73a3b1",
            purple:"#6e3e83",green:"#5b8d48",blue:"#362976",yellow:"#b7c576",
            orange:"#6c4f2a",brown:"#423908",light_red:"#98675b",dark_grey:"#444444",
            grey:"#6c6c6c",light_green:"#9dd28a",light_blue:"#6d5fb0",light_grey:"#959595"
        }

        this.charmap =
        {
            "@":0, "A":1, "B":2, "C":3, "D":4, "E":5, "F":6, "G":7, "H":8, "I":9, "J":10,
            "K":11, "L":12, "M":13, "N":14, "O":15, "P":16, "Q":17, "R":18, "S":19, "T":20,
            "U":21, "V":22, "W":23, "X":24, "Y":25, "Z":26, "[":27, "]":29, " ":32, "!":33,
            "'":34, "(":40, ")":41, "*":42, "+":43, ",":44, "-":45, ".":46, "0":48, "1":49,
            "2":50, "3":51, "4":52, "5":53, "6":54, "7":55, "8":56, "9":57, ":":58, ";":59,
            "=":61, "?":63
        }

        this.callback = callback;
        this.colram_color = options.background_color;
        this.border_color = options.border_color;
        this.charset_color = options.charset_color;
        this.zoom = options.zoom;

        this.c_display = document.createElement('canvas');
        this.c_display.id = "display";
        this.c_display.width = 384;
        this.c_display.height = 272;

        this.c_border = document.createElement('canvas');
        this.c_border.id = "border";
        this.c_border.width = 384;
        this.c_border.height = 272;

        this.c_colram = document.createElement('canvas');
        this.c_colram.id = "colram";
        this.c_colram.width = 320;
        this.c_colram.height = 200;

        this.c_screen = document.createElement('canvas');
        this.c_screen.id = "screen";
        this.c_screen.width = 320;
        this.c_screen.height = 200;

        this.display = this.c_display.getContext('2d', { alpha: false });
        this.border = this.c_border.getContext('2d', { alpha: false });
        this.colram = this.c_colram.getContext('2d', { alpha: false });
        this.screen = this.c_screen.getContext('2d', { alpha: true });
        
        this.load_charset("c64-charset.bin");
        
        this.set_border_color(this.border_color);
        this.set_background_color(this.colram_color);
        this.scale(this.zoom);

        $("#output-canvas").append(this.c_display);
        this.update();
        this.mouse_init();
    }

    check_color(color)
    {
        // checks if color is either a string or a number
        if (typeof color === "number") 
        {
            return Object.keys(this.colors)[color];
        } else {
            return color;
        }
    }


    set_border_color(color)
    {
        
        this.border_color = this.check_color(color);
        this.border.fillStyle = this.colors[this.border_color];
        this.border.fillRect(0, 0, this.c_border.width, this.c_border.height);
        this.update();
 
    }

    set_background_color(color)
    {

        this.colram_color = this.check_color(color); 

        this.colram.fillStyle = this.colors[this.colram_color];
        this.colram.fillRect(0, 0, this.c_colram.width, this.c_colram.height);
        this.update();
    }

    update()
    {
        this.display.drawImage(this.c_border,0,0);
        this.display.drawImage(this.c_colram,32,35);
        this.display.drawImage(this.c_screen,32,35);
    }

    scale(factor)
    {
        this.zoom = factor;
        $("#display").css('width', this.c_display.width * factor);
        this.status("scale: "+factor *100+"%","system");
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
        $("#status").append('<p style = "color:'+color+';">'+message+'</p>');
    }

    load_charset(filename)
    {  
        var oReq = new XMLHttpRequest();
        oReq.open("GET", "./files/"+filename, true);
        oReq.responseType = "arraybuffer";
        let charset_bytes = [];
        let charset = [];
        
        oReq.onload = (oEvent) => {
          var arrayBuffer = oReq.response; // Note: not oReq.responseText
          if (arrayBuffer) {
            var byteArray = new Uint8Array(arrayBuffer);
            var line_counter = 0;
            for (var i = 0; i < byteArray.byteLength; i++) {
                let binary = ("0000000" + byteArray[i].toString(2)).slice(-8);
                charset_bytes.push(binary);

                line_counter ++;
                if (line_counter == 8)
                {
                    charset.push(charset_bytes);
                    line_counter = 0;
                    charset_bytes = [];
                }
            }
          }
          this.charset_data = charset;
          this.create_charset(charset,this.charset_color);
          this.callback();
        };
        
        oReq.send(null);
        this.status("charset data loaded","system");
        
    }

    create_charset(charset,color)
    {
  
        this.charset = [];
        color = this.check_color(color);

        let char;
        
        for (let chars = 0; chars < charset.length; chars++)
        {

            char = document.createElement('canvas');
            char.id = chars;
            char.width = 8;
            char.height = 8;
            char.ctx = char.getContext('2d');
            char.ctx.fillStyle = this.colors[color];
            
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
        this.charset_color = this.colors[this.check_color(color)];
        this.change_charset_color();
    }

    change_charset_color()
    {
        for(let i=0; i< this.charset.length; i++)
        {
            this.charset[i].ctx.globalCompositeOperation = 'source-in';
            this.charset[i].ctx.fillStyle = this.charset_color;
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
            let character = this.charmap[text[i].toUpperCase()];
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
        this.set_background_color("blue");
        this.set_border_color("light_blue");
        this.set_charset_color("light_blue");
        
        this.print("**** commodore 64 basic v2 ****",4,1);
        this.print("64k ram system  38911 basic bytes free",1,3);
        this.print("ready.",0,5);
    }

    mouse_init()
    {
        this.c_display.addEventListener('mousemove', this.get_mouse_position.bind(this), false);
    }


    get_mouse_position(event)
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
        $("#mouse").html("X:"+x + " Y:"+ y + " | XC:" + xc + " YC:" + yc + " | SR:"+ screen_ram + " | CR:"+ color_ram);
    }



}
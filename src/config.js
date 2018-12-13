export function get_config()
{

    let config =
    {
        "c64":
        {
            "colors":
            {
                black:"#000000",white:"#ffffff",red:"#67372d",cyan:"#73a3b1",
                purple:"#6e3e83",green:"#5b8d48",blue:"#362976",yellow:"#b7c576",
                orange:"#6c4f2a",brown:"#423908",light_red:"#98675b",dark_grey:"#444444",
                grey:"#6c6c6c",light_green:"#9dd28a",light_blue:"#6d5fb0",light_grey:"#959595"  
            },
            "reset_text":
            [ 
                ["**** commodore 64 basic v2 ****",4,1],
                ["64k ram system  38911 basic bytes free",1,3],
                ["ready.",0,5]
            ],
            "width": 320,
            "height": 200,
            "outer_width": 384,
            "outer_height": 272,
            "chars_x": 40,
            "chars_y": 25,
            "colram_color_default": "blue",
            "border_color_default": "light_blue",
            "charset_color_default": "light_blue"
        },
        "c128":
        {
            "colors":
            {
                black:"#000000",white:"#ffffff",red:"#67372d",cyan:"#73a3b1",
                purple:"#6e3e83",green:"#5b8d48",blue:"#362976",yellow:"#b7c576",
                orange:"#6c4f2a",brown:"#423908",light_red:"#98675b",dark_grey:"#444444",
                grey:"#6c6c6c",light_green:"#9dd28a",light_blue:"#6d5fb0",light_grey:"#959595"  
            },
            "reset_text":
            [ 
                ["commodore basic v7.0 122365 bytes free",1,1],
                ["(c)1986 commodore electronics, ltd.",3,2],
                ["(c)1977 microsoft corp.",9,3],
                ["all rights reserved",11,4],
                ["ready.",0,6]
            ],
            "width": 320,
            "height": 200,
            "outer_width": 384,
            "outer_height": 272,
            "chars_x": 40,
            "chars_y": 25,
            "colram_color_default": "grey",
            "border_color_default": "light_green",
            "charset_color_default": "light_green"
        },
        "c16":
        {
            "colors":
            {
                0:"#000000",1:"#3B3B3B",2:"#7C1A0F",3:"#00575E",4:"#6300AE",5:"#056700",6:"#2E1EC2",7:"#465300",
                8:"#722E00",9:"#5F4200",10:"#395A00",11:"#790070",12:"#006600",13:"#0D33B1",14:"#3C15C4",15:"#296000",
                16:"#000000",17:"#4D4D4D",18:"#8B2F26",19:"#00676E",20:"#731ABB",21:"#1F7700",22:"#4133D0",23:"#586400",
                24:"#814100",25:"#6F5300",26:"#4B6A00",27:"#881B7F",28:"#00760B",29:"#2545BF",30:"#4E2BD1",31:"#3C7000",
                32:"#000000",33:"#565656",34:"#923930",35:"#036F76",36:"#7B25C2",37:"#2A7E00",38:"#4A3CD6",39:"#606C00",
                40:"#894A00",41:"#775C00",42:"#537200",43:"#8F2687",44:"#097E18",45:"#2F4EC6",46:"#5735D8",47:"#457800",
                48:"#000000",49:"#666666",50:"#A04B43",51:"#1E7E85",52:"#8A39D0",53:"#3D8D00",54:"#5B4EE3",55:"#707C00",
                56:"#985B00",57:"#866C00",58:"#648100",59:"#9E3A96",60:"#228D2E",61:"#425FD3",62:"#6748E5",63:"#578700",
                64:"#000000",65:"#949494",66:"#CA7C75",67:"#57AAB0",68:"#B56CF7",69:"#70B814",70:"#8A7EFF",71:"#9DA800",
                72:"#C18A40",73:"#B1990D",74:"#92AD00",75:"#C76DC0",76:"#5AB763",77:"#748DFA",78:"#9579FF",79:"#86B200",
                80:"#000000",81:"#B0B0B0",82:"#E49993",83:"#77C6CC",84:"#D08BFF",85:"#8ED33D",86:"#A79CFF",87:"#B9C31F",
                88:"#DCA762",89:"#CCB539",90:"#AFC81C",91:"#E28CDA",92:"#7AD282",93:"#92AAFF",94:"#B197FF",95:"#A3CD21",
                96:"#000000",97:"#CCCCCC",98:"#FEB5AF",99:"#95E0E6",100:"#EAA8FF",101:"#ABED60",102:"#C2B8FF",103:"#D4DE46",
                104:"#F6C281",105:"#E7D15C",106:"#CAE344",107:"#FBA8F4",108:"#98ECA0",109:"#AFC6FF",110:"#CCB3FF",111:"#BFE748",
                112:"#000000",113:"#FFFFFF",114:"#FFEBE5",115:"#CCFFFF",116:"#FFDEFF",117:"#E1FF9D",118:"#F7EDFF",119:"#FFFF87",
                120:"#FFF7BB",121:"#FFFF99",122:"#FEFF85",123:"#FFDFFF",124:"#CFFFD6",125:"#E4FAFF",126:"#FFE8FF",127:"#F3FF88"
            },
            "reset_text":
            [ 
                ["commodore basic v3.5 12277 bytes free",1,1],
                ["ready.",0,3]
            ],
            "width": 320,
            "height": 200,
            "outer_width": 384,
            "outer_height": 272,
            "chars_x": 40,
            "chars_y": 25,
            "colram_color_default": 113,
            "border_color_default": 110,
            "charset_color_default": 0
        },
        "plus/4":
        {
            "colors":
            {
                0:"#000000",1:"#3B3B3B",2:"#7C1A0F",3:"#00575E",4:"#6300AE",5:"#056700",6:"#2E1EC2",7:"#465300",
                8:"#722E00",9:"#5F4200",10:"#395A00",11:"#790070",12:"#006600",13:"#0D33B1",14:"#3C15C4",15:"#296000",
                16:"#000000",17:"#4D4D4D",18:"#8B2F26",19:"#00676E",20:"#731ABB",21:"#1F7700",22:"#4133D0",23:"#586400",
                24:"#814100",25:"#6F5300",26:"#4B6A00",27:"#881B7F",28:"#00760B",29:"#2545BF",30:"#4E2BD1",31:"#3C7000",
                32:"#000000",33:"#565656",34:"#923930",35:"#036F76",36:"#7B25C2",37:"#2A7E00",38:"#4A3CD6",39:"#606C00",
                40:"#894A00",41:"#775C00",42:"#537200",43:"#8F2687",44:"#097E18",45:"#2F4EC6",46:"#5735D8",47:"#457800",
                48:"#000000",49:"#666666",50:"#A04B43",51:"#1E7E85",52:"#8A39D0",53:"#3D8D00",54:"#5B4EE3",55:"#707C00",
                56:"#985B00",57:"#866C00",58:"#648100",59:"#9E3A96",60:"#228D2E",61:"#425FD3",62:"#6748E5",63:"#578700",
                64:"#000000",65:"#949494",66:"#CA7C75",67:"#57AAB0",68:"#B56CF7",69:"#70B814",70:"#8A7EFF",71:"#9DA800",
                72:"#C18A40",73:"#B1990D",74:"#92AD00",75:"#C76DC0",76:"#5AB763",77:"#748DFA",78:"#9579FF",79:"#86B200",
                80:"#000000",81:"#B0B0B0",82:"#E49993",83:"#77C6CC",84:"#D08BFF",85:"#8ED33D",86:"#A79CFF",87:"#B9C31F",
                88:"#DCA762",89:"#CCB539",90:"#AFC81C",91:"#E28CDA",92:"#7AD282",93:"#92AAFF",94:"#B197FF",95:"#A3CD21",
                96:"#000000",97:"#CCCCCC",98:"#FEB5AF",99:"#95E0E6",100:"#EAA8FF",101:"#ABED60",102:"#C2B8FF",103:"#D4DE46",
                104:"#F6C281",105:"#E7D15C",106:"#CAE344",107:"#FBA8F4",108:"#98ECA0",109:"#AFC6FF",110:"#CCB3FF",111:"#BFE748",
                112:"#000000",113:"#FFFFFF",114:"#FFEBE5",115:"#CCFFFF",116:"#FFDEFF",117:"#E1FF9D",118:"#F7EDFF",119:"#FFFF87",
                120:"#FFF7BB",121:"#FFFF99",122:"#FEFF85",123:"#FFDFFF",124:"#CFFFD6",125:"#E4FAFF",126:"#FFE8FF",127:"#F3FF88"
            },
            "reset_text":
            [ 
                ["commodore basic v3.5 60671 bytes free",1,1],
                ["3-plus-1 on key f1",1,2],
                ["ready.",0,4]
            ],
            "width": 320,
            "height": 200,
            "outer_width": 384,
            "outer_height": 272,
            "chars_x": 40,
            "chars_y": 25,
            "colram_color_default": 113,
            "border_color_default": 110,
            "charset_color_default": 0
        }
    }

    return config;
}
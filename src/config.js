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
        }
    }

    return config;
}
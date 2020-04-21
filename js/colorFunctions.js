export function addShade(amount, color) {
    let r = parseInt("0x" + color.substring(1,3));
    let g = parseInt("0x" + color.substring(3,5));
    let b = parseInt("0x" + color.substring(5,7));
    r = r * amount ;
    g = g * amount ;
    b = b * amount ;
    r = maxColor(r);
    g = maxColor(g);
    b = maxColor(b);
    return("#" + fullColorHex(r,g,b))
};

export function addTint(amount, color) {
    let r = parseFloat(parseInt("0x" + color.substring(1,3)));
    let g = parseFloat(parseInt("0x" + color.substring(3,5)));
    let b = parseFloat(parseInt("0x" + color.substring(5,7)));
    r = 255 - (255 - r) * amount ;
    g = 255 - (255 - g) * amount ;
    b = 255 - (255 - b) * amount ;
    r = maxColor(r);
    g = maxColor(g);
    b = maxColor(b);
    return("#" + fullColorHex(r,g,b));
};

function fullColorHex(r,g,b){
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
};

function rgbToHex(rgb){
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function maxColor(value){
    if(value > 255){
        value = 255;
    }
    if(value < 0){
        value = 0;
    }
    value = Math.round(value);
    return(value);
}
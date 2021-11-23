/**
 * Función que limpia los espacios en blanco: tabulaciones, barra espaciadora, intro
 * @param {String} text Texto bruto con espacios en blanco
 * @returns {String} Texto formateado sin espacios en blanco
 */
// const clearBlankSpaces = text => {    
//     text = text.replace(/^\s+/,"");
//     text = text.replace(/\s+$/,"");
//     return text = text.replace(/\s+/g," ");
// }
const clearBlankSpaces = text => (text = text.replace(/^\s+|\s+$/,"")) && (text = text.replace(/\s+$/,"")) && (text = text.replace(/\s+/g," "));
export {clearBlankSpaces}; //Las exportaciones por defecto puede coger cualquier nombre en el import
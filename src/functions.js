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




/**
 * 
 * @param {Object RegExp} expReg Expresión regular a validar
 * @param {String} texto Cadena de caracteres para validar
 * @returns {Boolean} Si la expresión regular es validado devolverá true
 */
 const expRegBool = (expReg,texto) => expReg.test(texto);


 export {clearBlankSpaces,expRegBool}; //Las exportaciones por defecto puede coger cualquier nombre en el import
/*  Collapsed
────────────────────────────────────────────────────── 
script.js
────────────────────────────────────────────────────── */

color_theme = 'deepSkyBlue'

token = 'color: hsl(195, 100%, 100%); background-color: '+ color_theme +'; padding: 2px 5px; border-radius: 10px;'

stx_1 = 'color: red;'
stx_2 = 'color: blue;'
stx_2_2 = 'color: blue; text-decoration: underline;'
stx_3 = 'color: green;'
stx_4 = 'color: purple;'
stx_4_2 = 'color: purple; text-decoration: underline;'



console.groupCollapsed('%cDevelopment%c', 'font-size: 12px; font-weight: normal; color: hsl(195, 100%, 46%); background-color: hsl(195, 100%, 97%); border: 1px solid hsl(195, 100%, 58%); border-radius: 40px; padding: 3px 6px; margin: 1px 0 3px', '')



console.group('Caracteres')
console.log('Barra invertida: %c\\%c', token, '')
console.log('Barra vertical (pipe): %c|%c', token, '')
console.log('Sinal de multiplicação: %c×%c', token, '')
console.groupEnd(); console.log('')

console.group('HTML - Referências De Entidade de Caracteres')
console.log('Espaço ( ): %c&nbsp;%c', token, '')
console.log('Menor que (<): %c&lt;%c', token, '')
console.groupEnd(); console.log('')

console.group('Fontes Seguras da Web')
console.log("font-family: 'Times New Roman', Times, Georgia, Helvetica, Arial, Verdana, 'Courier New', Courier;")
console.groupEnd(); console.log('')

console.groupCollapsed('Configurar um Servidor Web Local')
console.log(`
1 - Coloque isso no Terminal ou Prompt de comando:

%ccd %c/Users/user/Library/Mobile Documents/com~apple~CloudDocs/Todos/🤖 Informática/Aplicações/Development%c
%cpython -m SimpleHTTPServer %c8000%c

2 - Coloque o seguinte URL no navegador para acessar o conteúdo do diretório especificado em um servidor HTTP local na porta especificada (neste caso, na porta 8000, que também é a porta padrão):

%clocalhost:%c8000%c

`, stx_1, stx_2_2, '', stx_1, stx_4, '', stx_1, stx_2, '')
console.groupEnd(); console.log('')

console.group('VS Code')

    console.group('Tips')
    console.log('- Para selecionar várias palavras idênticas, selecione uma e fique fazendo Ctrl + D.')
    console.groupEnd(); console.log('')

    console.group('Emmets')
    console.log('Element#ID_$@I.Class_1.Class_2[Atrib_1=... Atrib_2]{Content $}*N')
    console.groupEnd()

console.groupEnd(); console.log('')

console.group('Outros')
console.log('Legibilidade: n => {  } %c⇔%c function (n) {  }', 'font-size: 16px; margin-top: -7px', '')
console.log('Link de um JSON gigante: https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json')
console.groupEnd(); console.log('')



console.groupEnd()










//------------------------------------------------------------------------------------------

//console.log('%cStart%c', 'color: hsl(195, 100%, 100%); background-color: deepSkyBlue; padding: 2px 5px; border-radius: 10px', '')
/* 
token_l = token +'border-top-right-radius: 0px; border-bottom-right-radius: 0px;'
token_m = token +'border-radius: 0px;'
token_r = token +'border-top-left-radius: 0px; border-bottom-left-radius: 0px;'

token_underline = token +'text-decoration: underline;'
token_underline_l = token_underline +'border-top-right-radius: 0px; border-bottom-right-radius: 0px;'
token_underline_m = token_underline +'border-radius: 0px;'
token_underline_r = token_underline +'border-top-left-radius: 0px; border-bottom-left-radius: 0px;'
 */
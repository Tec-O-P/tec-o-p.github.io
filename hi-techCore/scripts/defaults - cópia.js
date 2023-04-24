/*
┌──────────────────────────────────────────────────────┐
│                                                   gmes-defaults.js                                                   │
└──────────────────────────────────────────────────────◈ */


/* 
var inst = {

    x: 0,
    add: function(arg) {

        this.x += arg

        return this
    },
    mult: function(arg) {

        this.x *= arg

        return this
    },
    log: function() {

        console.log(this.x)

        return this
    }
}

inst.add(5).add(2).mult(2).add(6).log()

console.log('-----------------------------')
 */

/*  
◈──────────────────────────────────────────────────────◈
TODO: Global Variables
◈──────────────────────────────────────────────────────◈ */

var _ = '──────────────────────────────────'

var __ = '◈───────────────────────────────────────────────────◈'

var $is_cellphone = innerWidth <= 500 || innerHeight <= 500

var $is_mobile = innerWidth <= 1366 && innerHeight <= 1366

var $color_theme = 'DeepSkyBlue' // VÍNCULO: Váriável SCSS

/*
◈──────────────────────────────────────────────────────◈
TODO: Error Function
◈──────────────────────────────────────────────────────◈ */

function error(errorMessage) {
    
  var errorTag = document.createElement('div')

   errorTag.classList.add('error')

    errorTag.textContent = errorMessage

    document.body.appendChild(errorTag)

    errorTag.addEventListener('click', function(evt) {

        evt.currentTarget.classList.toggle('top')
    })

    console.error('Error Spot')
}


/*
◈──────────────────────────────────────────────────────◈
TODO: CSL Function
◈──────────────────────────────────────────────────────◈ */

var csl = {

    log: function() {
    
        for (csl_index = 0; csl_index < arguments.length; csl_index++) {
        
            console.log(arguments[csl_index])
        }

        return this
    },

    bold: function() {
    
        for (csl_index = 0; csl_index < arguments.length; csl_index++) {
        
            console.log()
    
            console.log('%c'+ arguments[csl_index] +'%c', 'font-weight: bold', '')
        }

        return this
    },

    category: function(arg) {
    
        console.log('%c'+ arg +'%c', 'font-size: 12px; font-weight: normal; color: hsl(195, 100%, 46%); background-color: hsl(195, 100%, 97%); border: 1px solid hsl(195, 100%, 58%); border-radius: 40px; padding: 2px 6px; margin: 1px 0 2px', '')

        return this
    },

    group1: function() {

        console.group(arguments[0])
    
        return this
    },

    group1Collapsed: function() {

        console.groupCollapsed(arguments[0])

        return this
    },

    group2: function() {

        console.group('%c'+ arguments[0] +'%c', 'font-size: 12px; font-weight: normal; color: hsl(195, 100%, 46%); background-color: hsl(195, 100%, 97%); border: 1px solid hsl(195, 100%, 58%); border-radius: 40px; padding: 2px 6px; margin: 1px 0 2px', '')
    
        return this
    },

    group2Collapsed: function() {

        console.groupCollapsed('%c'+ arguments[0] +'%c', 'font-size: 12px; font-weight: normal; color: hsl(195, 100%, 46%); background-color: hsl(195, 100%, 97%); border: 1px solid hsl(195, 100%, 58%); border-radius: 40px; padding: 2px 6px; margin: 1px 0 2px', '')

        return this
    },

    groupEnd: function() {
    
        console.groupEnd()
    
        for (csl_index = 0; csl_index < arguments.length; csl_index++) {
        
            console.log(arguments[csl_index])
        }

        return this
    },

    topic: function(arg) {
    
        this.log(__, arg, __)

        return this
    },
    
    ticket: function(input, color) {
    
        console.log('%c'+ input +'%c', 'font-size: 11px; color: hsl(195, 100%, 100%); background-color: '+ color +'; padding: 2px 5px; border-radius: 10px; font-weight: bold; ', '')
    }, 

    dl: function() {
    
        for (csl_dl_index = 0; csl_dl_index < arguments.length; csl_dl_index++) {

            if ((csl_dl_index % 3) === 0) {

                console.log('')
                
            } else if ((csl_dl_index % 3) === 1)  {

                console.log('%c'+ arguments[csl_dl_index] +'%c', 'font-weight: bold', '')
                
            } else if ((csl_dl_index % 3) === 2)  {

                console.log(arguments[csl_dl_index])

            } else {

                console.error(arguments[csl_dl_index])
            }
        }
    }
}

//csl.error('Error', 'Input: '+ input, 'Input type: '+ typeof input)


/* Teste: */// csl.log(1, 'a', true, [2, 'b', false])

/*
◈──────────────────────────────────────────────────────◈
TODO: Wait Function
◈──────────────────────────────────────────────────────◈ */

function wait(t) { // t em segundos

    t = t * 1000

    t0 = performance.now()
    
    while(performance.now() - t0 <= t) {  }
}

/*
◈──────────────────────────────────────────────────────◈
TODO: (OFF) <details>
◈──────────────────────────────────────────────────────◈ */
/* 
var allDetails = document.querySelectorAll('details')

allDetails.forEach(function (details) {

    details.addEventListener("toggle", function(event) {

        var newSummaryEl = details.querySelector(':scope > summary > div')

        if (details.open) {
          
            newSummaryEl.style.listStyleType = 'disclosure-open'

        } else {

            newSummaryEl.style.listStyleType = 'disclosure-closed'
        }
    })
})
 */


/*
◈──────────────────────────────────────────────────────◈
TODO: smart()
◈──────────────────────────────────────────────────────◈ */
/* 
function smart() {

    //csl.log(runCodeAsString(arguments[0])) 

    var tagsAsString = arguments[0]
    var tags = runCodeAsString(arguments[0])
    csl.log(_, tagsAsString, tags, _)
    var commandsAsString = arguments[1]
    var tagIsNotList = (tags.length === undefined)
    
    if (tagIsNotList) {

        runCodeAsString(tagsAsString + commandsAsString)
        
    } else {
        
        // try {
                
                for (i = 0; i < tags.length; i++) {
                    
                    // runCodeAsString(tagsAsString +' + [i] + '+ commandsAsString)

                    runCodeAsString(`csl.log(${tags[i]})`)
                }
                

                // tags.forEach(function (tag) {
                
                //     // runCodeAsString(tagsAsString +' + [i] + '+ commandsAsString)

                //     runCodeAsString(`csl.log(tag)`)

                //     //csl.log(tag)
                // })
                


            

            console.log('Ok!')
                
                // for (i = 0; i < 3; i++) {
                    
                //     runCodeAsString(`csl.log(i)`)
                // }
            
        // } catch (e) { console.error(e) }
    }
}

var e = document.createElement('e')
e.textContent = 'E'
document.body.append(e)

var e = document.createElement('e')
e.textContent = 'E'
document.body.append(e)

var e = document.createElement('e')
e.textContent = 'E'
document.body.append(e)

var es = document.querySelectorAll('e')

// csl.log(e.length)
// csl.log(es)

smart(`es`, `.style.color = 'deepSkyblue'`)
 */


/*  TODO:    1 ▶ Tests
◈──────────────────────────────────────────────────────◈ */
/* 
inputs = [
    
]

inputs.forEach(function (input) {

    
})
*/

/*
◈──────────────────────────────────────────────────────◈
TODO: Smart Selector
◈──────────────────────────────────────────────────────◈ */

// Nodelists Live E Static

/*** targets(listOfSelectors, referenceElement) ***/    
/* 
targets = function(listOfSelectors, referenceElement) {

    var refElement = referenceElement || document

    var elements = refElement.querySelectorAll(':scope '+ listOfSelectors)

    if (elements.length === 1) {

        return elements[0]

    } else {
        return  elements
    }
}




targets('.box > p:nth-of-type(2)').style.color = 'red'

var box2 = targets('.box2')
targets('p:nth-of-type(3)', box2).style.fontWeight = 'bold'
 */
// targets('.box p:nth-of-type(2)').style.textDecoration = 'underline'


/*
◈──────────────────────────────────────────────────────◈
TODO: Elemenctor (Elementador)
◈──────────────────────────────────────────────────────◈ */

/*  

Falta implementar:

- Append()

- ... .prop += ...

- Não dar erro quando for tentar executar algo nos elementos do slot e não encontrar nenhum, apenas mostrar um aviso (agrupando todos os avisos deste tipo), e somente mostrar se estiver em desenvolvimento.

- document.createElement()

- intervalo do for

- for dentro do for

Documentação

> Informações principais (Inacabado)

>> Elemenctor.each()

O método Elemenctor.each() aplica o encadeamento (como string) em seu argumento em cada um dos elementos do slot. 

elemenctor.each(chainingAsString, interval1, interval2, ...)

interval = [startIndex, endIndex]

end = collection.length - 1

Por padrão, o valor de startIndex é 0, e o de endIndex é end.

elemenctor.each(chainingAsString) 
<=> elemenctor.each(chainingAsString, [ , ]) 
<=> elemenctor.each(chainingAsString, [0 , ]) 
<=> elemenctor.each(chainingAsString, [ , end]) 
<=> elemenctor.each(chainingAsString, [0 , end]) 
<=> for (i = 0; i < collection.length; i++) { chaining }

elemenctor.each(chainingAsString, [startIndex, endIndex]) 
<=> for (i = startIndex; i < endIndex + 1; i++) { chaining }

elemenctor.each(chainingAsString, [startIndex, end]) 
<=> for (i = startIndex; i < collection.length; i++) { chaining }

elemenctor.each(chainingAsString, [end, endIndex]) 
<=> for (i = collection.length - 1; i < endIndex + 1; i++) { chaining }

elemenctor.each(chainingAsString, [end, end]) 
<=> for (i = collection.length - 1; i < collection.length; i++) { chaining }

elemenctor.each(chainingAsString, ['last - 2', end]) 
<=> for (i = collection.length - 3; i < collection.length; i++) { chaining }
// Obs: var x = -5; runCodeAsString(('last + '+ x).replace(end, '8')) => 3

>> Outros

seleciona 1+ elementos do documento HTML que correspondem ao seletor, ou grupo de seletores CSS especificados. Este método aceita lista de seletores (vários seletores separados com vírgulas)

Este método retorna um objeto NodeList com os elementos especificados, estes elementos também são objetos.

Caso não haja nenhuma correspondência com os elementos especificados, um NodeList vazio é retornado. 

Para acessar o n-ésimo elemento de um NodeList, faz-se NodeList[n-1], onde o 1º nó filho é atribuído ao índice 0.

querySelectorAll() retorna um NodeList static (estático), o que isso significa será explicado mais adiante.

Obs.: Se os seletores especificados incluem um pseudo-elemento CSS, a lista retornada será vazia.

Obs.: Assim como em document.querySelector(), caracteres que não fazem parte da sintaxe CSS padrão devem ser escapados usando um caractere de barra invertida ('\').

> Observações:

- Ao criar uma instância de objeto da classe Elemenctor com o prefixo 'ect_', será criada automaticamente uma variável com o mesmo nome mas sem o prefixo, porém, a variável só será criada se ela já não tiver sido declarada, ou se tiver sido declarada sem nenhum valor. Esta variável criada sem o prefixo terá como valor uma referência à propriedade 'slot' da instância criada.

- Não use ect_obj.slot.length ou obj.length pois podem dar erro dependendo do caso, use ect_obj.length.

- Se deseja alterar o valor da propriedade slot de uma instância de Elemenctor, faça 'ect_obj.slot = ...', não faça 'obj = ...', pois isso mudará o valor apenas dessa variável, não da propriedade slot da instância.

- O encadeamento de membros do método each() pode iniciar com ou sem um ponto (.).

- A entrada do método each() aceita métodos apenas se o método estiver no final do encadeamento.

- O método each() não aceita números octodecimais com a sintaxe antiga (p. ex., 010).

- O método each() aceita no máximo 7 snippets por instrução.

 */

function newElemenctor(objName, CSSselectorsList, referenceElement) {
    
    class Elemenctor {
        constructor(CSSselectorsList, referenceElement) {

            var referenceElement = referenceElement || document

            var selectedElements = referenceElement.querySelectorAll(':scope '+ CSSselectorsList)

            this._slot = (function() {
                
                if (selectedElements.length === 0) {
        
                    return null // Valor padrão do JavaScript
                    
                } else if (selectedElements.length === 1) {
                    
                    return selectedElements[0]

                } else if (selectedElements.length > 1) {
                    
                    return selectedElements
                }

            })()

            this.length = selectedElements.length
        }

        get slot(){ return this._slot }

        set slot(value) { // !!! 
            
            /* {1, 2} Obs.:
            document.querySelector('notExistElement') // null
            document.querySelector('notExistElement').length // Error
            document.querySelectorAll('notExistElement') // []
            document.querySelectorAll('notExistElement').length // 0
            document.querySelectorAll('notExistElement')[0] // undefined
            */

            //····································································◈ Update value !!!

            // csl.log(_, value, _)

            if (value.length === 0) { // {1}

                this._slot = null

            } else if (value.length === 1) {

                this._slot = value[0]

            } else if (value.length > 1) {

                this._slot = value
            }

            //····································································◈ Update length

            var slotIsNotList = !((this._slot instanceof NodeList) || (this._slot instanceof HTMLCollection))

            if (slotIsNotList) { // {2}

                if (this.slot instanceof Node) {
                    
                    this.length = 1

                } else {
                    
                    this.length = 0
                }

            } else {
                
                this.length = this._slot.length
            }
        }

        each() {

            var numberOfCodes = arguments.length

            if (numberOfCodes === 1) {

                var outFromAllCodes
                
            } else if (numberOfCodes > 1) {
                
                var outFromAllCodes = []
            }

            for (var each_code_i = 0; each_code_i < numberOfCodes; each_code_i++) {

                var inputCodeAsString = arguments[each_code_i]

                //····································································◈ Execution Steps
                {
                
                csl.group2(`Execution Steps: obj.each('`+ inputCodeAsString.trim() +`')`)

                csl.dl('', 'inputCodeAsString', inputCodeAsString) 
        
                var codeAsString = initialAdjusts(inputCodeAsString)
                csl.dl('','codeAsString = initialAdjusts(inputCodeAsString)', codeAsString) 

                var jokerCharsWithIndexes = getJokerCharacters(codeAsString)
                csl.dl('','jokerCharsWithIndexes = getJokerCharacters(codeAsString)', jokerCharsWithIndexes) 

                var snippetsAsStringWithData = sliceCode(codeAsString, jokerCharsWithIndexes)
                csl.dl('','snippetsAsStringWithData = \nsliceCode(codeAsString, jokerCharsWithIndexes)', snippetsAsStringWithData) 

                var readySnippets = revertStringTypeOfValues(snippetsAsStringWithData)
                csl.dl('','readySnippets = \nrevertStringTypeOfValues(snippetsAsStringWithData)', readySnippets) 

                var outFrom1Code = run(readySnippets, this.slot)
                csl.dl('','outFrom1Code = run(readySnippets, this.slot)',outFrom1Code, '')

                csl.groupEnd()   
                

                /*
                var codeAsString = initialAdjusts(inputCodeAsString)

                var jokerCharsWithIndexes = getJokerCharacters(codeAsString)

                var snippetsAsStringWithData = sliceCode(codeAsString, jokerCharsWithIndexes)

                var readySnippets = revertStringTypeOfValues(snippetsAsStringWithData)

                var outFrom1Code = run(readySnippets, this.slot)
                */



                if (numberOfCodes === 1) {

                    outFromAllCodes = outFrom1Code
                    
                } else if (numberOfCodes > 1) {
                    
                    outFromAllCodes.push(outFrom1Code)
                }

                }

                //····································································◈ Functions
                    
                function initialAdjusts(inputCodeAsString) {
                    
                    var codeAsString = inputCodeAsString.trim()

                    if (codeAsString[0] === '.') { // Retirar o 1º caractere se este for um ponto (.).
                        codeAsString = codeAsString.slice(1)
                    }

                    return codeAsString
                }

                function getJokerCharacters (codeAsString) {  // !!!
                    
                    // String para testar esta função: `     .Isso.é.uma.stg(d)["test.d"].unit = " 'Todas "+ as. +"[sntxs]' d= stg ${em} aspas."     `

                    var jokerCharsWithIndexes = []

                    var checkingSingleQuoteStg = false
                    var checkingDoubleQuoteStg = false
                    var checkingBacktickQuoteStg = false // Crase é backtick em inglês
                    
                    var checkingStg = false
                    var equalsCharacterFound = false
                    var openParenthesesCharacterFound = false

                    for (i = 0; i < codeAsString.length; i++) {
                            
                        if((codeAsString[i] === "'") && (!checkingDoubleQuoteStg) && (!checkingBacktickQuoteStg)) { // Verificar aspas simples

                            checkingSingleQuoteStg = !checkingSingleQuoteStg
                            checkingStg = !checkingStg
                        } 
                        
                        if((codeAsString[i] === '"') && (!checkingSingleQuoteStg) && (!checkingBacktickQuoteStg)) { // Verificar aspas duplas

                            checkingDoubleQuoteStg = !checkingDoubleQuoteStg
                            checkingStg = !checkingStg
                        } 
                        
                        if((codeAsString[i] === '`') && (!checkingSingleQuoteStg) && (!checkingDoubleQuoteStg)) {  // Verificar crase

                            checkingBacktickQuoteStg = !checkingBacktickQuoteStg
                            checkingStg = !checkingStg
                        } 

                        if(!checkingStg) {

                            if ((codeAsString[i] === '=') && (!openParenthesesCharacterFound)) {
                                
                                equalsCharacterFound = true

                                jokerCharsWithIndexes.push({ character: codeAsString[i], index: i })   
                            
                            } else if ((codeAsString[i] === '(') && (!equalsCharacterFound)) { 
                                
                                openParenthesesCharacterFound = true

                                jokerCharsWithIndexes.push({ character: codeAsString[i], index: i })   

                            } else if ((codeAsString[i] === ',') && openParenthesesCharacterFound) { 

                                jokerCharsWithIndexes.push({ character: codeAsString[i], index: i })   

                            } else if ((codeAsString[i] === ')') && openParenthesesCharacterFound) { 
                                
                                openParenthesesCharacterFound = false

                                jokerCharsWithIndexes.push({ character: codeAsString[i], index: i })   

                            } else if ((!equalsCharacterFound) && (!openParenthesesCharacterFound)) {
                                
                                if ((codeAsString[i] === '.') || (codeAsString[i] === '[') || (codeAsString[i] === ']')) {

                                    jokerCharsWithIndexes.push({ character: codeAsString[i], index: i })   
                                }
                            }
                        }
                    }

                    return jokerCharsWithIndexes
                }

                function sliceCode(codeAsString, jokerCharsWithIndexes) {
                    
                    var snippets = []

                    var jokerChars_qtParentheses = 0

                    jokerCharsWithIndexes.forEach(function (jokerCharWithIndex) {
                    
                        if (jokerCharWithIndex.character === '(') {

                            jokerChars_qtParentheses++
                        }
                    })

                    var numberOfSnippets = (jokerCharsWithIndexes.length + 1) - jokerChars_qtParentheses

                    for (i = 0; i < numberOfSnippets; i++) {

                        var snippet = { }
                            
                        if (i === 0) {

                            if (jokerCharsWithIndexes.length > 0) {

                                snippet.self = codeAsString.slice(0, jokerCharsWithIndexes[i].index).trim()

                            } else if (jokerCharsWithIndexes.length === 0) {

                                snippet.self = codeAsString
                            }

                            snippet.isValue = false
                            
                        } else if (i === jokerCharsWithIndexes.length) {

                            snippet.self = codeAsString.slice(jokerCharsWithIndexes[i - 1].index + 1).trim()

                            if ((jokerCharsWithIndexes[jokerCharsWithIndexes.length - 1].character === ')') || (jokerCharsWithIndexes[jokerCharsWithIndexes.length - 1].character === '=')) {
                                
                                snippet.isValue = true

                            } else {
                                
                                snippet.isValue = false
                            }

                        } else {

                            snippet.self = codeAsString.slice(jokerCharsWithIndexes[i - 1].index + 1, jokerCharsWithIndexes[i].index).trim()

                            if (jokerCharsWithIndexes[i - 1].character === '.') {
                                
                                snippet.isValue = false

                            } else {

                                snippet.isValue = true
                            }
                        }

                        snippets.push(snippet)
                    }

                    return snippets
                }

                function revertStringTypeOfValues(snippetsAsStringWithData) {
                    
                    readySnippets = [ ]

                    snippetsAsStringWithData.forEach(function (snippetAsStringWithData, i) {
                    
                        if (snippetAsStringWithData.isValue === true) {

                            // console.log(i, snippetAsStringWithData.self)

                            readySnippets.push(runCodeAsString(snippetAsStringWithData.self)) 

                        } else {
                            
                            readySnippets.push(snippetAsStringWithData.self) 
                        }
                    })

        /* 
                    snippets_stringType.forEach(function (snippet) {
                    
                        if (   
                            (snippet[0] === '-') || (snippet[0] === '.') || 
                            (snippet[0] === '0') || (snippet[0] === '1') || (snippet[0] === '2') || (snippet[0] === '3') || (snippet[0] === '4') || 
                            (snippet[0] === '5') || (snippet[0] === '6') || (snippet[0] === '7') || (snippet[0] === '8') || (snippet[0] === '9')   
                        ) {
                            
                            readySnippets.push({ snippet: Number(snippet), type: 'number value' })

                        } else if(
                            ((snippet[0] === "'") && (snippet[snippet.length - 1] === "'")) || // Aspas simples
                            ((snippet[0] === '"') && (snippet[snippet.length - 1] === '"')) || // Aspas duplas
                            ((snippet[0] === '`') && (snippet[snippet.length - 1] === '`')) // Crases
                        ) {

                            if ((snippet[0] === "'") && (snippet[snippet.length - 1] === "'")) { // Retira aspas simples
                            
                                snippet = snippet.slice(1, -1)
            
                            } else if ((snippet[0] === '"') && (snippet[snippet.length - 1] === '"')) { // Retira aspas duplas
                                
                                snippet = snippet.slice(1, -1)
            
                            } else if ((snippet[0] === '`') && (snippet[snippet.length - 1] === '`')) { // Retira crases
                                
                                snippet = snippet.slice(1, -1)
                            }
                            
                            readySnippets.push({ snippet: snippet, type: 'string value' })

                        } else if((snippet === 'true') || (snippet === 'false')) {  // O objeto Boolean não foi usado aqui para criar o valor booleano pois pode causar resultados inesperados.

                            if (snippet === 'true') {
                                
                                readySnippets.push({ snippet: true, type: 'boolean value' })
                                
                            } else {

                                readySnippets.push({ snippet: false, type: 'boolean value' })
                            }

                        } else if((snippet[0] === '[') && (snippet[snippet.length - 1] === ']')) {

                            // "[1, 'a', true]" 

                            snippet = snippet.slice(1, -1)

                            // "1, 'a', true"

                            snippet = snippet.split(',')

                            // ["1", " 'a'", " true"]

                            snippet.forEach(function (item) { item.trim() })

                            // ["1", "'a'", "true"]

                            
                            // snippet = revertStringTypeOfValues(snippet)

                            // console.log('[Log]: ')
                            // console.log(snippet)
                            // console.log('Ok!')
                            

                            readySnippets.push({ snippet: snippet, type: 'array value' })
                            //readySnippets.push({ snippet: JSON.parse(snippet), type: 'array value' })

                        } 
                        // else if() {
                            
                        //     readySnippets.push('object value')

                        // } else if() {
                            
                        //     // /ab+c/
                        //     readySnippets.push('regexp value')

                        // }  
                        else { // Nome/palavra reservada <=> Palavra-chave ou variável
                            
                            // readySnippets.push('reserved word')
                            readySnippets.push({ snippet: snippet, type: "isn't value" })
                        }
                    })
        */
                    return readySnippets
                }

                function run(readySnippets, slot) {

                    var slotIsList = !(slot.length === undefined)

                    var $ = readySnippets

                    var propertyValue

                    var outFrom1Code
            
                    if (!slotIsList) {

                        outFrom1Code = buildInstruction(slot)
                        
                    } else {

                        outFrom1Code = [ ]

                        for (var each_code_run_i = 0; each_code_run_i < slot.length; each_code_run_i++) {

                            outFrom1Code.push(buildInstruction(slot[each_code_run_i]))
                        }
                    }

                    function buildInstruction(slot) {
                        {
                        var JCWI = jokerCharsWithIndexes
                        
                        if (readySnippets.length === 1) {
                            
                            propertyValue = slot[$[0]]

                        } else if (readySnippets.length === 2) {

                            if (JCWI[0].character === '.') {
                                
                                propertyValue =  slot [$[0]] [$[1]]

                            } else if (JCWI[0].character === '=') {

                                propertyValue =  slot [$[0]] = $[1]
                                
                            } else if (JCWI[0].character === '(') {
                                
                                propertyValue = slot [$[0]] ($[1])
                            }

                        } else if (readySnippets.length === 3) {

                            if (JCWI[1].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]]

                            } else if (JCWI[1].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] = $[2]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',')) {

                                propertyValue = slot[$[0]] ($[1], $[2])

                            } else if (JCWI[1].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] ($[2])
                            }  

                        } else if (readySnippets.length === 4) {

                            if (JCWI[2].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]]

                            } else if (JCWI[2].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] = $[3]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3])

                            } else if (JCWI[2].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3])
                            }

                        } else if (readySnippets.length === 5) {

                            if (JCWI[3].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]]

                            } else if (JCWI[3].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] = $[4]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4])

                            } else if (JCWI[3].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4])
                            }

                        } else if (readySnippets.length === 6) {

                            if (JCWI[4].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]]

                            } else if (JCWI[4].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] = $[5]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5])

                            } else if (JCWI[4].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5])
                            }

                        } else if (readySnippets.length === 7) {

                            if (JCWI[5].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]]

                            } else if (JCWI[5].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] = $[6]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5], $[6])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5], $[6])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5], $[6])

                            } else if ( (JCWI[4].character === '(') && 
                                            (JCWI[5].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5], $[6])

                            } else if (JCWI[5].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] ($[6])
                            }

                        } else if (readySnippets.length === 8) {

                            if (JCWI[6].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]]

                            } else if (JCWI[6].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] = $[7]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6], $[7])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5], $[6], $[7])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5], $[6], $[7])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5], $[6], $[7])

                            } else if ( (JCWI[4].character === '(') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5], $[6], $[7])

                            } else if ( (JCWI[5].character === '(') && 
                                            (JCWI[6].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] ($[6], $[7])

                            } else if (JCWI[6].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] ($[7])
                            }

                        } else if (readySnippets.length === 9) {

                            if (JCWI[7].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]]

                            } else if (JCWI[7].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] = $[8]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5], $[6], $[7], $[8])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5], $[6], $[7], $[8])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5], $[6], $[7], $[8])

                            } else if ( (JCWI[4].character === '(') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5], $[6], $[7], $[8])

                            } else if ( (JCWI[5].character === '(') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] ($[6], $[7], $[8])

                            } else if ( (JCWI[6].character === '(') && 
                                            (JCWI[7].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] ($[7], $[8])

                            } else if (JCWI[7].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] ($[8])
                            }

                        } else if (readySnippets.length === 10) {

                            if (JCWI[8].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] [$[9]]

                            } else if (JCWI[8].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] = $[9]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[4].character === '(') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[5].character === '(') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] ($[6], $[7], $[8], $[9])

                            } else if ( (JCWI[6].character === '(') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] ($[7], $[8], $[9])

                            } else if ( (JCWI[7].character === '(') && 
                                            (JCWI[8].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] ($[8], $[9])

                            } else if (JCWI[8].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] ($[9])
                            }
                            
                        } else if (readySnippets.length === 11) {

                            if (JCWI[9].character === '.') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] [$[9]] [$[10]]

                            } else if (JCWI[9].character === '=') {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] [$[9]] = $[10]
                                
                            } else if ( (JCWI[0].character === '(') && 
                                            (JCWI[1].character === ',') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[1].character === '(') && 
                                            (JCWI[2].character === ',') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] ($[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[2].character === '(') && 
                                            (JCWI[3].character === ',') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] ($[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[3].character === '(') && 
                                            (JCWI[4].character === ',') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] ($[3], $[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[4].character === '(') && 
                                            (JCWI[5].character === ',') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] ($[4], $[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[5].character === '(') && 
                                            (JCWI[6].character === ',') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] ($[5], $[6], $[7], $[8], $[9])

                            } else if ( (JCWI[6].character === '(') && 
                                            (JCWI[7].character === ',') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] ($[6], $[7], $[8], $[9])

                            } else if ( (JCWI[7].character === '(') && 
                                            (JCWI[8].character === ',') && 
                                            (JCWI[9].character === ',')) {
                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] ($[7], $[8], $[9])

                            } else if ( (JCWI[8].character === '(') && 
                                            (JCWI[9].character === ',')) {

                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] ($[8], $[9])

                            } else if (JCWI[9].character === '(') {
                                
                                propertyValue = slot[$[0]] [$[1]] [$[2]] [$[3]] [$[4]] [$[5]] [$[6]] [$[7]] [$[8]] ($[9])
                            }
                            
                        }
                        }
/* 
                        function buildMethod() {
                            
                            // csl.log(_, $, _)
                            
                            if ((JCWI[0].character === '(') && (JCWI[1].character === ',')) {
                                
                                return slot[$[0]] ($[1], $[2])

                            } else {
                                
                                return slot[$[0]] [$[1]] ($[2])
                            }
                        }

                        function buildMethod_OLD(snippets, qtSnippetsInsideParentheses) {
                
                            var qtSnippets = snippets.length
                            
                            var $ = snippets
                
                            var stg = `slot`
                            
                            for (var i = 0; i < (qtSnippets - qtSnippetsInsideParentheses); i++) {
                
                                stg += `[$[`+ i +`]]`
                            }
                
                            stg += `(`
                
                            for (var i = (qtSnippets - qtSnippetsInsideParentheses); i < qtSnippets; i++) {
                            
                                if (i !== (qtSnippets - qtSnippetsInsideParentheses)) {
                                    stg += `,`
                                }
                
                                stg += `$[`+ i +`]`
                            }
                
                            stg += `)`
                            
                            csl.log(_, slot, $, stg, _)

                            return runCodeAsString(stg)

                            // return Function('"use strict";return (' + stg + ')')()

                            // return Function('"use strict";return (' + stg + ')')()( newElemenctor, each )

                            // return eval?.("'use strict';(" + stg + ")")
                        }
 */
                        return propertyValue
                    }

                    return outFrom1Code
                }
            }

            return outFromAllCodes
        }
    }

    {
    var obj =  window[objName] = new Elemenctor(CSSselectorsList, referenceElement)

    var objHasPrefix = (objName.slice(0, 4) === 'ect_') 

    var objWithoutPrefixIsFree = theVariableIsFree(objName.slice(4))
    
    if (objHasPrefix) {

        if (objWithoutPrefixIsFree) {
        
            window[''+objName.slice(4)+''] = window[objName].slot
            
        } else {
            
            console.warn(`A new variable '`+ objName.slice(4) +`' was not created because it has already been declared and has a value.`)
        }
    }

    return obj
    }
}


/*  TODO:        2 ▶ Tests
◈──────────────────────────────────────────────────────◈ */

//····································································◈ Variables
{
var ectTests_p = document.querySelector('.ectTests p')

/*  
var ect_span1 = new Elemenctor('.c_span1', ectTests_p)
var ect_span2to4 = new Elemenctor('.ectTests .c_span2, .ectTests .c_span3')
var ect_span3 = new Elemenctor('.ectTests .c_span3')
var ect_span4 = new Elemenctor('.ectTests .c_span4')
var ect_span1to4 = new Elemenctor('.ectTests .c_span1, .ectTests .c_span2, .ectTests .c_span3, .ectTests .c_span4')
var ect_span5 = new Elemenctor('.ectTests .c_span5')
var ect_span5to6 = new Elemenctor('.ectTests .c_span5, .ectTests .c_span6')
var ect_notExistSpan = new Elemenctor('.ectTests .c_notExistSpan')
*/

newElemenctor('ect_notExistSpan', '.ectTests .c_notExistSpan')
newElemenctor('ect_span1', '.c_span1', ectTests_p)
newElemenctor('ect_span2', '.ectTests .c_span2')
newElemenctor('ect_span3', '.ectTests .c_span3')
newElemenctor('ect_span4', '.ectTests .c_span4')
newElemenctor('ect_span5', '.ectTests .c_span5')
newElemenctor('ect_span6', '.ectTests .c_span6')
newElemenctor('ect_span7', '.ectTests .c_span7')
newElemenctor('ect_span10', '.ectTests .c_span10')
newElemenctor('ect_span14', '.ectTests .c_span14')
newElemenctor('ect_span20', '.ectTests .c_span20')
newElemenctor('ect_span1to4', '.ectTests .c_span1, .ectTests .c_span2, .ectTests .c_span3, .ectTests .c_span4')
newElemenctor('ect_span2to4', '.ectTests .c_span2, .ectTests .c_span3, .ectTests .c_span4')
newElemenctor('ect_span3to5', '.ectTests .c_span3, .ectTests .c_span4, .ectTests .c_span5')
newElemenctor('ect_span5to6', '.ectTests .c_span5, .ectTests .c_span6')
newElemenctor('ect_span10to12', '.ectTests .c_span10, .ectTests .c_span11, .ectTests .c_span12')

newElemenctor('ect_img1', '.ectTests .c_img1')
newElemenctor('ect_img2', '.ectTests .c_img2')

newElemenctor('ect_box1', '.ectTests .box1')
newElemenctor('ect_box2', '.ectTests .box2')
newElemenctor('ect_box3', '.ectTests .box3')
newElemenctor('ect_box4', '.ectTests .box4')
newElemenctor('ect_box5', '.ectTests .box5')
newElemenctor('ect_box6', '.ectTests .box6')
newElemenctor('ect_box7', '.ectTests .box7')
newElemenctor('ect_box8', '.ectTests .box8')
newElemenctor('ect_box9', '.ectTests .box9')
// newElemenctor('ect_box10', '.ectTests .box10')

newElemenctor('ect_ball1', '.ectTests .ball1')
newElemenctor('ect_ball2', '.ectTests .ball2')
newElemenctor('ect_ball3', '.ectTests .ball3')
newElemenctor('ect_ball4', '.ectTests .ball4')
newElemenctor('ect_ball5', '.ectTests .ball5')
newElemenctor('ect_ball6', '.ectTests .ball6')
newElemenctor('ect_ball7', '.ectTests .ball7')
newElemenctor('ect_ball8', '.ectTests .ball8')
newElemenctor('ect_ball9', '.ectTests .ball9')
newElemenctor('ect_ball10', '.ectTests .ball10')

newElemenctor('ect_ball_1_1', '.ectTests .ball_1_1')
newElemenctor('ect_ball_1_2', '.ectTests .ball_1_2')
newElemenctor('ect_ball_1_3', '.ectTests .ball_1_3')
newElemenctor('ect_ball_1_4', '.ectTests .ball_1_4')
newElemenctor('ect_ball_1_5', '.ectTests .ball_1_5')
newElemenctor('ect_ball_1_6', '.ectTests .ball_1_6')
newElemenctor('ect_ball_1_7', '.ectTests .ball_1_7')
newElemenctor('ect_ball_1_8', '.ectTests .ball_1_8')
newElemenctor('ect_ball_1_9', '.ectTests .ball_1_9')
newElemenctor('ect_ball_1_10', '.ectTests .ball_1_10')

newElemenctor('ect_ball_2_1', '.ectTests .ball_2_1')
newElemenctor('ect_ball_2_2', '.ectTests .ball_2_2')
newElemenctor('ect_ball_2_3', '.ectTests .ball_2_3')
newElemenctor('ect_ball_2_4', '.ectTests .ball_2_4')
newElemenctor('ect_ball_2_5', '.ectTests .ball_2_5')
newElemenctor('ect_ball_2_6', '.ectTests .ball_2_6')
newElemenctor('ect_ball_2_7', '.ectTests .ball_2_7')
newElemenctor('ect_ball_2_8', '.ectTests .ball_2_8')
newElemenctor('ect_ball_2_9', '.ectTests .ball_2_9')
newElemenctor('ect_ball_2_10', '.ectTests .ball_2_10')

newElemenctor('ect_ball_3_1', '.ectTests .ball_3_1')
newElemenctor('ect_ball_3_2', '.ectTests .ball_3_2')
newElemenctor('ect_ball_3_3', '.ectTests .ball_3_3')
newElemenctor('ect_ball_3_4', '.ectTests .ball_3_4')
newElemenctor('ect_ball_3_5', '.ectTests .ball_3_5')
newElemenctor('ect_ball_3_6', '.ectTests .ball_3_6')
newElemenctor('ect_ball_3_7', '.ectTests .ball_3_7')
newElemenctor('ect_ball_3_8', '.ectTests .ball_3_8')
newElemenctor('ect_ball_3_9', '.ectTests .ball_3_9')
newElemenctor('ect_ball_3_10', '.ectTests .ball_3_10')

newElemenctor('ect_ball_4_1', '.ectTests .ball_4_1')
newElemenctor('ect_ball_4_2', '.ectTests .ball_4_2')
newElemenctor('ect_ball_4_3', '.ectTests .ball_4_3')
newElemenctor('ect_ball_4_4', '.ectTests .ball_4_4')
newElemenctor('ect_ball_4_5', '.ectTests .ball_4_5')
newElemenctor('ect_ball_4_6', '.ectTests .ball_4_6')
newElemenctor('ect_ball_4_7', '.ectTests .ball_4_7')
newElemenctor('ect_ball_4_8', '.ectTests .ball_4_8')
newElemenctor('ect_ball_4_9', '.ectTests .ball_4_9')
newElemenctor('ect_ball_4_10', '.ectTests .ball_4_10')

newElemenctor('ect_ball_5_1', '.ectTests .ball_5_1')
newElemenctor('ect_ball_5_2', '.ectTests .ball_5_2')
newElemenctor('ect_ball_5_3', '.ectTests .ball_5_3')
newElemenctor('ect_ball_5_4', '.ectTests .ball_5_4')
newElemenctor('ect_ball_5_5', '.ectTests .ball_5_5')
newElemenctor('ect_ball_5_6', '.ectTests .ball_5_6')
newElemenctor('ect_ball_5_7', '.ectTests .ball_5_7')
newElemenctor('ect_ball_5_8', '.ectTests .ball_5_8')
newElemenctor('ect_ball_5_9', '.ectTests .ball_5_9')
newElemenctor('ect_ball_5_10', '.ectTests .ball_5_10')

newElemenctor('ect_ball_6_1', '.ectTests .ball_6_1')
newElemenctor('ect_ball_6_2', '.ectTests .ball_6_2')
newElemenctor('ect_ball_6_3', '.ectTests .ball_6_3')
newElemenctor('ect_ball_6_4', '.ectTests .ball_6_4')
newElemenctor('ect_ball_6_5', '.ectTests .ball_6_5')
newElemenctor('ect_ball_6_6', '.ectTests .ball_6_6')
newElemenctor('ect_ball_6_7', '.ectTests .ball_6_7')
newElemenctor('ect_ball_6_8', '.ectTests .ball_6_8')
newElemenctor('ect_ball_6_9', '.ectTests .ball_6_9')
newElemenctor('ect_ball_6_10', '.ectTests .ball_6_10')

newElemenctor('ect_ball_7_1', '.ectTests .ball_7_1')
newElemenctor('ect_ball_7_2', '.ectTests .ball_7_2')
newElemenctor('ect_ball_7_3', '.ectTests .ball_7_3')
newElemenctor('ect_ball_7_4', '.ectTests .ball_7_4')
newElemenctor('ect_ball_7_5', '.ectTests .ball_7_5')
newElemenctor('ect_ball_7_6', '.ectTests .ball_7_6')
newElemenctor('ect_ball_7_7', '.ectTests .ball_7_7')
newElemenctor('ect_ball_7_8', '.ectTests .ball_7_8')
newElemenctor('ect_ball_7_9', '.ectTests .ball_7_9')
newElemenctor('ect_ball_7_10', '.ectTests .ball_7_10')

newElemenctor('ect_ball_8_1', '.ectTests .ball_8_1')
newElemenctor('ect_ball_8_2', '.ectTests .ball_8_2')
newElemenctor('ect_ball_8_3', '.ectTests .ball_8_3')
newElemenctor('ect_ball_8_4', '.ectTests .ball_8_4')
newElemenctor('ect_ball_8_5', '.ectTests .ball_8_5')
newElemenctor('ect_ball_8_6', '.ectTests .ball_8_6')
newElemenctor('ect_ball_8_7', '.ectTests .ball_8_7')
newElemenctor('ect_ball_8_8', '.ectTests .ball_8_8')
newElemenctor('ect_ball_8_9', '.ectTests .ball_8_9')
newElemenctor('ect_ball_8_10', '.ectTests .ball_8_10')

newElemenctor('ect_ball_9_1', '.ectTests .ball_9_1')
newElemenctor('ect_ball_9_2', '.ectTests .ball_9_2')
newElemenctor('ect_ball_9_3', '.ectTests .ball_9_3')
newElemenctor('ect_ball_9_4', '.ectTests .ball_9_4')
newElemenctor('ect_ball_9_5', '.ectTests .ball_9_5')
newElemenctor('ect_ball_9_6', '.ectTests .ball_9_6')
newElemenctor('ect_ball_9_7', '.ectTests .ball_9_7')
newElemenctor('ect_ball_9_8', '.ectTests .ball_9_8')
newElemenctor('ect_ball_9_9', '.ectTests .ball_9_9')
newElemenctor('ect_ball_9_10', '.ectTests .ball_9_10')

newElemenctor('ect_ball_10_1', '.ectTests .ball_10_1')
newElemenctor('ect_ball_10_2', '.ectTests .ball_10_2')
newElemenctor('ect_ball_10_3', '.ectTests .ball_10_3')
newElemenctor('ect_ball_10_4', '.ectTests .ball_10_4')
newElemenctor('ect_ball_10_5', '.ectTests .ball_10_5')
newElemenctor('ect_ball_10_6', '.ectTests .ball_10_6')
newElemenctor('ect_ball_10_7', '.ectTests .ball_10_7')
newElemenctor('ect_ball_10_8', '.ectTests .ball_10_8')
newElemenctor('ect_ball_10_9', '.ectTests .ball_10_9')
newElemenctor('ect_ball_10_10', '.ectTests .ball_10_10')
}
//····································································◈ Método each()
/* 
        ect_box1.each(`append(ball_1_1)`)
        ect_box2.each(`append(ball_2_1, ball_2_2)`)
        ect_box3.each(`append(ball_3_1, ball_3_2, ball_3_3)`)
        ect_box4.each(`append(ball_4_1, ball_4_2, ball_4_3, ball_4_4)`)
        ect_box5.each(`append(ball_5_1, ball_5_2, ball_5_3, ball_5_4, ball_5_5)`)
        ect_box6.each(`append(ball_6_1, ball_6_2, ball_6_3, ball_6_4, ball_6_5, ball_6_6)`)
        ect_box7.each(`append(ball_7_1, ball_7_2, ball_7_3, ball_7_4, ball_7_5, ball_7_6, ball_7_7)`)
        ect_box8.each(`append(ball_8_1, ball_8_2, ball_8_3, ball_8_4, ball_8_5, ball_8_6, ball_8_7, ball_8_8)`)
        ect_box9.each(`append(ball_9_1, ball_9_2, ball_9_3, ball_9_4, ball_9_5, ball_9_6, ball_9_7, ball_9_8, ball_9_9)`)
        // ect_box10.each(`append(ball_10_1, ball_10_2, ball_10_3, ball_10_4, ball_10_5, ball_10_6, ball_10_7, ball_10_8, ball_10_9, ball_10_10)`)
        // box.append(ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10)
 */

/* 
        // var $ = ['append', ball1, ball2]

        // var slot = document.querySelector('.ectTests .box')

        // buildMethod($, 2)

        // function buildMethod(snippets, qtSnippetsInsideParentheses) {
                
        //     var qtSnippets = snippets.length
            
        //     var $ = snippets

        //     var stg = `slot`
            
        //     for (var i = 0; i < (qtSnippets - qtSnippetsInsideParentheses); i++) {

        //         stg += `[$[`+ i +`]]`
        //     }

        //     stg += `(`

        //     for (var i = (qtSnippets - qtSnippetsInsideParentheses); i < qtSnippets; i++) {
            
        //         if (i !== (qtSnippets - qtSnippetsInsideParentheses)) {
        //             stg += `,`
        //         }

        //         stg += `$[`+ i +`]`
        //     }

        //     stg += `)`

        //     csl.log(_, slot, $, stg, _)

        //     return runCodeAsString(stg)
        // }
 */


/* 
csl.log(_).group1('Método each()')
{
    csl.log('').group1('Special Cases')

        var v = 'Azure'; 
        ect_span1.each(`
        .style.backgroundColor = v      `)

        ect_span2.each('style.backgroundColor = "Seashell"')
        ect_span3.each('style.backgroundColor = `PapayaWhip`')
        ect_span4.each("style.backgroundColor = 'hsl(180, 65%, 91%)'")
        ect_span5.each("style.backgroundColor = `hsl(271, 68%, 96%)`")
        ect_span6.each(`style.backgroundColor = 'hsl(271, 68%, 96%)'`)
        ect_span7.each(`style.backgroundColor = "hsl(29, 76%, 94%)"`)

        ect_img1.each(`style.opacity = .4`)
        ect_img2.each(`style.filter = 'hue-rotate(calc(80deg + 80deg))'`)

    csl.groupEnd('')

    csl.log('').group1('Applying 1 instruction')

        //··································◈ 1 Snippet per instruction

        csl.bold('', '1 Snippet per instruction:', '')

        //·················◈ Applying to 1 element

        csl.log('span4.textContent: '+ ect_span4.each('textContent'))

        //·················◈ Applying to 2+ elements

        csl.log(ect_span2to4.each('hidden'))

        //··································◈ 2 Snippets per instruction

        csl.bold('', '2 Snippets per instruction:', '')

        //·················◈ Applying to 1 element
 
        csl.log(ect_span1.each("style.color"))
        ect_span1.each(`textContent = span1.textContent + '∆'`)
        csl.log(ect_span1.each('hasChildNodes()'))
        csl.log(ect_span1.each(`getAttribute('class')`))
        
        //·················◈ Applying to 2+ elements

        csl.log(ect_span1to4.each("style.color"))
        ect_span2to4.each(`className = span3.className + ' rounded'`)
        csl.log(ect_span2to4.each('hasChildNodes()'))
        csl.log(ect_span2to4.each(`getAttribute('style')`))

        //··································◈ 3 Snippets per instruction

        csl.bold('', '3 Snippets per instruction:', '')

        //·················◈ Applying to 1 element

        csl.log(ect_span1.each("parentElement.style.lineHeight"))
        ect_span1.each(`style.backgroundColor = 'Azure'`)
        csl.log(ect_span1.each('parentElement.hasChildNodes()'))
        csl.log(ect_span1.each(`parentElement.getAttribute('style')`))
        ect_span1.each(`insertAdjacentText('beforeend', '+')`)

        //·················◈ Applying to 2+ elements

        csl.log(ect_span3to5.each("parentElement.style.lineHeight"))
        ect_span3to5.each("style.textDecoration = 'underline'")
        csl.log(ect_span3to5.each('parentElement.hasChildNodes()'))
        csl.log(ect_span3to5.each(`parentElement.getAttribute('style')`))
        ect_span3to5.each(`insertAdjacentText('beforeend', '+')`)

        //··································◈ 4+ Snippets per instruction

        csl.bold('', '4+ Snippets per instruction:', '')

        //·················◈ Applying to 1 element

        ect_span3.each(`parentElement.insertAdjacentHTML('beforeend', '<span class="spans">A</span> ')`)

        csl.log(ect_span20.each('parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement'))

        //·················◈ Applying to 2+ elements

        ect_span3to5.each(`parentElement.insertAdjacentHTML('beforeend', '<span class="spans">B</span> ')`)

    csl.log('').groupEnd('')

    csl.group1('Applying 2+ instructions')

        ect_span10.each(`
        style.fontWeight = 'bold'`, 
        `style.fontStyle = 'italic'`, 
        `style.textDecoration = 'underline'`)

        ect_span10to12.each(`
        style.borderRadius = '10px'`, 
        `style.borderWidth = '3px'`, 
        `style.borderStyle = 'double'`)

    csl.groupEnd('')
}
csl.groupEnd(_)

//····································································◈

csl.group1Collapsed('Mudando o slot (testando o valor e length do slot, inicialmente e seus setters:)')
{
    csl.log('', '- Slot vazio inicialmente (ect_notExistSpan):', '')

    csl.log(ect_notExistSpan)

    ect_notExistSpan.slot = document.querySelectorAll('.ectTests .c_span2, .ectTests .c_span3')
    csl.log(ect_notExistSpan)

    ect_notExistSpan.slot = document.querySelectorAll('.ectTests .c_span5')
    csl.log(ect_notExistSpan)

    ect_notExistSpan.slot = document.querySelectorAll('notExistElement')
    csl.log(ect_notExistSpan)

    csl.log('', '- Slot com 1 elemento inicialmente (ect_span5):', '')

    csl.log(ect_span5)

    ect_span5.slot = document.querySelectorAll('.ectTests .c_span2, .ectTests .c_span3')
    csl.log(ect_span5)

    ect_span5.slot = document.querySelectorAll('.ectTests .c_span5')
    csl.log(ect_span5)

    ect_span5.slot = document.querySelectorAll('notExistElement')
    csl.log(ect_span5)

    csl.log('', '- Slot com 2+ elementos inicialmente (ect_span5to6):', '')

    csl.log(ect_span5to6)

    ect_span5to6.slot = document.querySelectorAll('.ectTests .c_span2, .ectTests .c_span3')
    csl.log(ect_span5to6, ect_span5to6.slot[0], ect_span5to6.slot[1])

    ect_span5to6.slot = document.querySelectorAll('.ectTests .c_span5')
    csl.log(ect_span5to6)

    ect_span5to6.slot = document.querySelectorAll('notExistElement')
    csl.log(ect_span5to6, '')
}
csl.groupEnd(_)

//····································································◈

csl.group1Collapsed('Teste de escopo de um objeto Elemenctor')
{
    csl.log('', `Acessando 'ect_span13' e 'span13' globalmente (eles foram definidos dentro de uma função):`, ``)

    try { csl.log(ect_span13) } catch (e) { console.error(e) }
    try { csl.log(span13) } catch (e) { console.error(e) }

    csl.log('', `Acessando 'ect_span13' e 'span13' localmente (ou seja, acessando dentro da função em que eles foram definidos):`, ``)

    accessingEct_span13AndSpan13()

    function accessingEct_span13AndSpan13() {
        
        newElemenctor('ect_span13', '.ectTests .c_span13')

        csl.log(ect_span13)
        csl.log(span13)
    }
}
csl.groupEnd(_)

//····································································◈ 

var span8 = 1 // !!!

newElemenctor('ect_span8', '.ectTests .c_span8')

csl.log(ect_span8, span8, _)

//····································································◈ 

csl.log('Encadeando a função de criar um objeto elemenctor:')

newElemenctor('ect_span9', '.ectTests .c_span9').slot = 
document.querySelectorAll('.ectTests .c_span5, .ectTests .c_span9')

csl.log(ect_span9)*/
/* */

/*
◈──────────────────────────────────────────────────────◈
TODO: Lightning X
◈──────────────────────────────────────────────────────◈ */

var LX = document.querySelectorAll('.lightningX')

/*  
◈──────────────────────────────────────────────────────◈
TODO: Text Icons - Generator
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('.noText').forEach(function (item) {

    item.textContent = ''
})

/*  
◈──────────────────────────────────────────────────────◈
TODO: <abbr> C/ A Classe 'interrogation'
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('abbr.interrogation').forEach(function (abbr) {

    abbr.innerHTML = '<button onclick="lightbox(`'+ abbr.title +'`)" >'+ abbr.textContent +'</button>'
    abbr.title = ''
})

/*  
◈──────────────────────────────────────────────────────◈
TODO: Switches & Buttons
◈──────────────────────────────────────────────────────◈ */

function switch_event(arg) {

    if(arg.classList.contains('disabled')) {
        
    } else {
        arg.classList.toggle('on')
    }
}

/*
// Usando e.target fica bugado:

var switches = document.querySelectorAll('.switch')

for (i = 0; i < switches.length; i++) {
    
    switches[i].onclick = function(e) {

        if(e.target.parentNode.classList.contains('disabled')) {
            return
        }
    
        e.target.parentNode.classList.toggle('on')
    }
}
*/


/*  TODO:    1 ▶ Switches, Buttons, And Anchors All Type Button
◈──────────────────────────────────────────────────────◈ */

var $is_safari_for_desktop_or_is_a_mobile_browser = navigator.vendor.indexOf('Apple') !== -1
var $is_safari_for_desktop_or_is_a_tablet_browser = $is_safari_for_desktop_or_is_a_mobile_browser && !($is_cellphone)

function switches_buttons_and_anchors__type_button($switches_or_buttons_or_anchors) {

    /*
    var $color_shadow_box_inset_switch_type_button_dark = 'hsla(0, 0%, 0%, 0.33)' // VÍNCULO: Váriável SCSS
    var $color_shadow_box_inset_element_type_button_clear = 'white' // VÍNCULO: Váriável SCSS
    var $bg_element_type_button_clear_blue = 'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.15) 46%, hsla(0, 0%, 100%, 0.64), white), hsl(193, 100%, 80%)' // VÍNCULO: Váriável SCSS
    */
    
    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

            // --------- Concerto de bugs ---------

            // Bug Fix 1 - As sombras internas criadas pelo box-shadow ('box-shadow: inset ...') dos elementos com qualquer uma das classes 
            // 'pill' ou 'rounded' PODEM não renderizar corretamente no Safari para desktop dependendo do tamanho da janela (seja o 
            // tamanho horizontal ou vertical):

            // if (($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded')) && $is_safari_for_desktop_or_is_a_tablet_browser) { 
            // 
            //     $swt_or_btn_or_a.classList.remove('pill')
            //     $swt_or_btn_or_a.classList.remove('rounded')
            // }

            // Bug Fix 2 - Os elementos com as classes 'button_icon' e 'rounded' ficam muito grandes no mobile:

            /*
            if ($swt_or_btn_or_a.classList.contains('button_icon') && $swt_or_btn_or_a.classList.contains('rounded') && $is_mobile) { 

                $swt_or_btn_or_a.classList.remove('rounded')
                $swt_or_btn_or_a.classList.add('pill')
            }
            */

            // --------- Variáveis ---------
            
            // Obs.: As variáveis '$swt_or_btn_or_a_width' e '$swt_or_btn_or_a_height' não foram colocadas aqui pois 
            // a largura e altura dos botões variam desde o do início até o final desta função.

            var $piece_label = $swt_or_btn_or_a.querySelector(':scope .piece_label')
            var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
            var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')

            if ($piece_icon !== null) {

                var $piece_icon_width = Number(getComputedStyle($piece_icon).getPropertyValue('width').slice(0,-2)) 
                var $piece_icon_height = Number(getComputedStyle($piece_icon).getPropertyValue('height').slice(0,-2)) 
                var $piece_icon_area = $piece_icon_width * $piece_icon_height
                var $piece_icon_size_default = 32
                var $swt_or_btn_or_a__type_button_icon_min_size = 50
            }
            
            if ($piece_text !== null) {  

                // var $piece_text_width = Number(getComputedStyle($piece_text).getPropertyValue('width').slice(0,-2)) 
                var $piece_text_height = Number(getComputedStyle($piece_text).getPropertyValue('height').slice(0,-2)) 
                var $piece_text_height_of_1_line = 35.84
                // var $piece_text_height_of_2_lines = 57.69
            }

            /* 
            // Variável  $smallest_initial_dimension:
            if($swt_or_btn_or_a.classList.contains('button_full') && !$swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('text_below')) { var $smallest_initial_dimension = 54 }
            if($swt_or_btn_or_a.classList.contains('button_full') && !$swt_or_btn_or_a.classList.contains('rounded') && $swt_or_btn_or_a.classList.contains('text_below')) { var $smallest_initial_dimension = 92.69 }
            if($swt_or_btn_or_a.classList.contains('button_text') && !$swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 41.84 }
            if($swt_or_btn_or_a.classList.contains('button_icon') && !($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded'))) { var $smallest_initial_dimension = 50 }
            if($swt_or_btn_or_a.classList.contains('button_icon') && $swt_or_btn_or_a.classList.contains('pill') && !$swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 56 }
            if($swt_or_btn_or_a.classList.contains('rounded')) { var $smallest_initial_dimension = 56 }

            var $swt_or_btn_or_a_is_square = !($swt_or_btn_or_a.classList.contains('pill') || $swt_or_btn_or_a.classList.contains('rounded'))
            */

            // --------- Brilho ---------

            var $shine = $swt_or_btn_or_a.querySelector(':scope .button_shine_top') 

            if ($shine === null) {

                var $shine = document.createElement('div')

                $shine.classList.add('button_shine_top')

                if ($piece_label !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_label').insertAdjacentElement('afterbegin', $shine) } 
                else if ($piece_icon !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_icon').insertAdjacentElement('beforebegin', $shine) }
                else if ($piece_text !== null) { $swt_or_btn_or_a.querySelector(':scope .piece_text').insertAdjacentElement('beforebegin', $shine) }
            }

            /* 
            // --------- Definir o border-radius dos ícones ---------

            if ($piece_icon !== null) { $piece_icon.style.borderRadius = 1/4 * Math.min($piece_icon_width, $piece_icon_height) +'px' }

            // --------- Definir o preenchimento dos 'button_full' e 'button_text', ambos com 'pill' --------- 

            var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

            if($swt_or_btn_or_a.classList.contains('pill')) {

                if($swt_or_btn_or_a.classList.contains('button_full')) { 

                    var $swt_or_btn_or_a_height_of_1_row = 54

                    if ($swt_or_btn_or_a_height > $swt_or_btn_or_a_height_of_1_row) {

                        var $padding_top_and_bottom = 11 + 0.09 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  

                        $swt_or_btn_or_a.style.paddingTop = $padding_top_and_bottom +'px' 
                        $swt_or_btn_or_a.style.paddingBottom = $padding_top_and_bottom +'px'  
                        $swt_or_btn_or_a.style.paddingRight = 20 + 0.17 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row) +'px'     

                    } else {

                        $swt_or_btn_or_a.style.paddingRight = '20px' 
                    }

                    if(!$swt_or_btn_or_a.classList.contains('text_below')) {

                        $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.29 * ($piece_icon_height - $piece_icon_size_default)) +'px'  
                    }
                }

                if($swt_or_btn_or_a.classList.contains('button_text')) {

                    var $swt_or_btn_or_a_height_of_1_row = 42

                    if ($swt_or_btn_or_a_height > $swt_or_btn_or_a_height_of_1_row) {
                        
                        var $padding_top_and_bottom = 10 + 0.1 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  
                        var padding_left_and_right = 13 + 0.15 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_height_of_1_row)  

                        $swt_or_btn_or_a.style.padding = $padding_top_and_bottom +'px '+ padding_left_and_right +'px'  

                    } else {

                        $swt_or_btn_or_a.style.paddingLeft = '13px' 
                        $swt_or_btn_or_a.style.paddingRight = '13px' 
                    } 
                }
            }

            // --------- Definir o preenchimento dos 'button_full' sem a classe 'text_below' e com 'rounded' --------- 

            if($swt_or_btn_or_a.classList.contains('button_full') && $swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('text_below')) {

                if ($piece_icon_width === $piece_icon_height) {
                    
                    $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.06 * ($piece_icon_height - $piece_icon_size_default)) +'px'

                } else {

                    $swt_or_btn_or_a.style.paddingLeft = 18 + Math.max(0, 0.22 * ($piece_icon_height - $piece_icon_size_default)) +'px'
                }
            }

            // --------- Definir o preenchimento dos 'button_icon' ---------

            if($swt_or_btn_or_a.classList.contains('button_icon')) {
            
                if($swt_or_btn_or_a_is_square) {

                    $swt_or_btn_or_a.style.padding = (9/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                } 
                
                if($swt_or_btn_or_a.classList.contains('pill')) {

                    if($piece_icon_width === $piece_icon_height) {

                        if($piece_icon_width <= 32 || $piece_icon_height <= 32) {

                            $swt_or_btn_or_a.style.padding = (12/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'

                        } else {

                            $swt_or_btn_or_a.style.padding = (11/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                        }

                    } else if ($piece_icon_width > $piece_icon_height) {

                        $swt_or_btn_or_a.style.padding = (10/32) * $piece_icon_height +'px '+ (13/32) * $piece_icon_height +'px'

                    }  else if ($piece_icon_width < $piece_icon_height) {

                        $swt_or_btn_or_a.style.padding = (13/32) * $piece_icon_width +'px '+ (10/32) * $piece_icon_width +'px'
                    }
                }
                
                if($swt_or_btn_or_a.classList.contains('rounded')) {

                    if($piece_icon_width <= 32 || $piece_icon_height <= 32) {

                        $swt_or_btn_or_a.style.padding = (12/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'

                    } else {

                        $swt_or_btn_or_a.style.padding = (11/32) * Math.min($piece_icon_width, $piece_icon_height) +'px'
                    }
                }
            }

            // ---------- Definir o raio das bordas dos botões normais (quadrados) e de seus brilhos ----------

            if($swt_or_btn_or_a_is_square) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 
                
                $swt_or_btn_or_a.style.borderRadius = 1/4 * Math.min($swt_or_btn_or_a_width, $swt_or_btn_or_a_height) +'px' 

                var $shine_width = Number(getComputedStyle($shine).getPropertyValue('width').slice(0,-2)) 
                var $shine_height = Number(getComputedStyle($shine).getPropertyValue('height').slice(0,-2)) 

                $shine.style.borderRadius = 1/4 * Math.min($shine_width, 2 * $shine_height) - 2 +'px' 
            } 

            // ---------- Definir a posição horizontal e a largura do brilho dos botões com a classe 'pill' ----------

            if($swt_or_btn_or_a.classList.contains('pill')) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                if($swt_or_btn_or_a_width >= $swt_or_btn_or_a_height) {

                    var $shine_x = (12/54) * ($swt_or_btn_or_a_height) +'px'  

                } else {

                    var $a = (12/54) * ($swt_or_btn_or_a_width) - (0.2 * ($swt_or_btn_or_a_height - $swt_or_btn_or_a_width))
                    var $b = 0.094 * $swt_or_btn_or_a_width

                    var $shine_x = Math.max($a, $b) +'px'
                } 
        
                $shine.style.left = $shine_x 
                $shine.style.width = 'calc(100% - 2 * '+ $shine_x +')'
            }
            */

            // ---------- Arredondar 'button_full's e 'button_text's com a classe 'rounded' ---------- 

            if($swt_or_btn_or_a.classList.contains('rounded') && !$swt_or_btn_or_a.classList.contains('button_icon') && !$swt_or_btn_or_a.classList.contains('text_below')) {

                var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                var $swt_or_btn_or_a_width_ceil = Math.ceil($swt_or_btn_or_a_width)
                var $swt_or_btn_or_a_height_ceil = Math.ceil($swt_or_btn_or_a_height)

                if($swt_or_btn_or_a_width_ceil > $swt_or_btn_or_a_height_ceil) {
            
                    $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_width_ceil + 'px'
            
                } else if ($swt_or_btn_or_a_width_ceil < $swt_or_btn_or_a_height_ceil) {
            
                    $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                    $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                }

                // Maneira alternativa:

                // if($swt_or_btn_or_a_width >= $swt_or_btn_or_a_height) { 

                //     var $padding_top_current =  Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-top').slice(0,-2))
                //     var $padding_bottom_current =  Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-bottom').slice(0,-2))

                //     $swt_or_btn_or_a.style.paddingTop = $padding_top_current + 1/2 * ($swt_or_btn_or_a_width - $swt_or_btn_or_a_height) + 'px'
                //     $swt_or_btn_or_a.style.paddingBottom = $padding_bottom_current + 1/2 * ($swt_or_btn_or_a_width - $swt_or_btn_or_a_height) + 'px'

                // } else {  

                //     $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                //     $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px'
                // }
            }

            // ---------- Posição e preenchimento da etiqueta de hover dos botões de ícone ---------- 

            if($swt_or_btn_or_a.classList.contains('button_icon')) {

                if ($piece_text !== null) {

                    var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                    var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

                    $piece_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor '$piece_text_width' antes do elemento '$piece_text' ser ocultado.

                    if (!$swt_or_btn_or_a.classList.contains('disabled')) {

                        if ($swt_or_btn_or_a_height >= $swt_or_btn_or_a__type_button_icon_min_size) {

                            var $y0 = 45 + Math.max(0, $piece_text_height - $piece_text_height_of_1_line) 
                            var $y_offset = Math.max(0, Math.min(15, 0.00028 * (($swt_or_btn_or_a_width * $swt_or_btn_or_a_height) - ($swt_or_btn_or_a__type_button_icon_min_size * $swt_or_btn_or_a__type_button_icon_min_size))))

                            $piece_text.style.top = -1 * ($y0 + $y_offset) + 'px'  
                        }
                    }

                    /*
                    // Padding:

                    if ($piece_text_height > Math.ceil($piece_text_height_of_2_lines)) { // Altura para 3+ linhas.

                        $piece_text.style.paddingTop = '10px'  
                        $piece_text.style.paddingLeft = '11px'
                        $piece_text.style.paddingRight = '11px'
                
                    } else {

                        $piece_text.style.paddingLeft = '9px'
                        $piece_text.style.paddingRight = '9px'
                    } 
                    */
                }
            }
            
            // --------- Definir os estilos dos 'button_full' com 'text_below' --------- 

            if($swt_or_btn_or_a.classList.contains('button_full') && $swt_or_btn_or_a.classList.contains('text_below')) {

                /*  
                if($swt_or_btn_or_a_is_square) {

                    var $icon_margin_T = Math.max(10, 0.00050 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00036 * $piece_icon_area) 
                    var $icon_margin_LR = Math.max(10, 0.00050 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px '
                    $piece_icon.style.marginBottom = $icon_margin_B +'px '
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = $icon_margin_B +'px'
                } 

                if ($swt_or_btn_or_a.classList.contains('pill')) { 

                    var $icon_margin_T = Math.max(10, 0.00050 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00043 * $piece_icon_area)  
                    var $icon_margin_LR = Math.max(12, 0.0011 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px'
                    $piece_icon.style.marginBottom = $icon_margin_B +'px'
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = 1.14 * $icon_margin_B +'px'

                    var $text_margin_LR = 12

                    $piece_text.style.marginLeft = $text_margin_LR +'px'  
                    $piece_text.style.marginRight = $text_margin_LR +'px'   

                    $swt_or_btn_or_a.style.paddingRight = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('padding-left').slice(0,-2))  +'px'
                }  

                if($swt_or_btn_or_a.classList.contains('rounded')) {

                    var $icon_margin_T = Math.max(20, 0.00073 * $piece_icon_area)
                    var $icon_margin_B = Math.max(10, 0.00036 * $piece_icon_area) 
                    var $icon_margin_LR = Math.max(10, 0.00050 * $piece_icon_area)
            
                    $piece_icon.style.marginTop = $icon_margin_T +'px '
                    $piece_icon.style.marginBottom = $icon_margin_B +'px '
                    $piece_icon.style.marginLeft = $icon_margin_LR +'px'  
                    $piece_icon.style.marginRight = $icon_margin_LR +'px'

                    $swt_or_btn_or_a.style.paddingBottom = $icon_margin_B +'px'

                    var $text_margin_LR = 10 + 0.0035 * $piece_icon_area

                    $piece_text.style.marginLeft = $text_margin_LR +'px'  
                    $piece_text.style.marginRight = $text_margin_LR +'px'   
                }
                */
            
                if($swt_or_btn_or_a.classList.contains('rounded')) { // Arredondar botões com a classe 'rounded'.
            
                    var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
                    var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 
                
                    var $swt_or_btn_or_a_width_ceil = Math.ceil($swt_or_btn_or_a_width)
                    var $swt_or_btn_or_a_height_ceil = Math.ceil($swt_or_btn_or_a_height)
                
                    if($swt_or_btn_or_a_width_ceil >= $swt_or_btn_or_a_height_ceil) { 
                
                        $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_width_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                        $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_width_ceil + 'px'
                
                    } else {
                
                        $swt_or_btn_or_a.style.width = $swt_or_btn_or_a_height_ceil + 'px'
                        $swt_or_btn_or_a.style.height = $swt_or_btn_or_a_height_ceil + 'px' // <- Esta instrução tem como único propósito arredondar a largura do switch.
                    }
                }
            }

            /*  
            // --------- Definir o box-shadow --------- 

            var $swt_or_btn_or_a_width = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('width').slice(0,-2)) 
            var $swt_or_btn_or_a_height = Number(getComputedStyle($swt_or_btn_or_a).getPropertyValue('height').slice(0,-2)) 

            var $constant_of_increase = (1/(136)) * (Math.max(   (Math.min($swt_or_btn_or_a_width, $swt_or_btn_or_a_height) - $smallest_initial_dimension), 0   ))

            var $OFF_square_delta_blur = 5 * $constant_of_increase 
            var $OFF_square_delta_spread = 2 * $constant_of_increase
            var $OFF_pill_and_rounded_delta_blur = 4 * $constant_of_increase
            var $OFF_pill_and_rounded_delta_spread = 3 * $constant_of_increase

            var $ON_square_delta_blur = 5 * $constant_of_increase 
            var $ON_square_delta_spread = 5 * $constant_of_increase 
            var $ON_pill_and_rounded_delta_blur = 7 * $constant_of_increase 
            var $ON_pill_and_rounded_delta_spread = 5 * $constant_of_increase 

            var $box_shadow_out_clear_square = '0px 0px 12px 0px '+ $color_theme
            var $box_shadow_out_clear_no_square = '0px 0px 12px 0px '+ $color_theme

            update_button_boxShadow($swt_or_btn_or_a)

            function update_button_boxShadow() {

                if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) { 

                    if($swt_or_btn_or_a.classList.contains('switch')) { 

                        if(!$swt_or_btn_or_a.classList.contains('on')) { // OFF

                            if($swt_or_btn_or_a_is_square) {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (8 + $OFF_square_delta_blur) +'px '+ (1 + $OFF_square_delta_spread) +'px '+ $color_shadow_box_inset_switch_type_button_dark

                            } else {
                                
                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (10 + $OFF_pill_and_rounded_delta_blur) +'px '+ (1 + $OFF_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_switch_type_button_dark
                            }

                        } else { // ON

                            if($swt_or_btn_or_a_is_square) {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (4 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_square

                            } else {

                                $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (4 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_no_square
                            }
                        }

                    } else if ($swt_or_btn_or_a.nodeName === 'BUTTON') { // NORMAL (NO HOVER)

                        set_button_no_hover_box_shadow($swt_or_btn_or_a)
                    }
                }
            }

            // 'if' necessário para que um switch não fique com mais do que 1 evento de 
            //'click' caso esta função venha a ser executada novamente no mesmo switch:
            if(!$swt_or_btn_or_a.have_power_effect) {

                $swt_or_btn_or_a.have_power_effect = true

                if($swt_or_btn_or_a.classList.contains('switch')) {

                    $swt_or_btn_or_a.addEventListener('click', function() {

                        update_button_boxShadow($swt_or_btn_or_a)
                    })
                }
            }

            // 'if' necessário para que um <button> não fique com mais do que 1 evento de 'mouseenter' 
            // e de 'mouseleave' caso esta função venha a ser executada novamente no mesmo <button>:
            if(!$swt_or_btn_or_a.have_hover_effect) { 

                $swt_or_btn_or_a.have_hover_effect = true

                if($swt_or_btn_or_a.nodeName === 'BUTTON') {

                    $swt_or_btn_or_a.addEventListener('mouseenter', function() { // HOVER EFFECT

                        if(!$swt_or_btn_or_a.classList.contains('disabled')) { // ENABLED 

                            // 'if' necessário para que caso o botão mude para o tipo 'image', não apareça o efeito de hover nele:
                            if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

                                $swt_or_btn_or_a.style.background = $bg_element_type_button_clear_blue

                                if($swt_or_btn_or_a_is_square) {

                                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (5 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_square

                                } else {

                                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (5 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', '+ $box_shadow_out_clear_no_square
                                }
                            }
                        }    
                    })

                    $swt_or_btn_or_a.addEventListener('mouseleave', function() { // HOVER LEAVE EFFECT (Estado normal)

                        if(!$swt_or_btn_or_a.classList.contains('disabled')) { // ENABLED

                            // 'if' necessário para que caso o botão mude para o tipo 'image', não apareça o efeito de hover nele:
                            if($swt_or_btn_or_a.classList.contains('button_full') || $swt_or_btn_or_a.classList.contains('button_text') || $swt_or_btn_or_a.classList.contains('button_icon')) {

                                $swt_or_btn_or_a.style.background = ''

                                set_button_no_hover_box_shadow($swt_or_btn_or_a)
                            }
                        }    
                    })
                }
            }

            function set_button_no_hover_box_shadow($swt_or_btn_or_a) {

                if($swt_or_btn_or_a_is_square) {

                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_square_delta_blur) +'px '+ (6 + $ON_square_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', 0px 0px 0px 1px hsl(195, 100%, 77%)'

                } else { 

                    $swt_or_btn_or_a.style.boxShadow = 'inset 0px 0px '+ (9 + $ON_pill_and_rounded_delta_blur) +'px '+ (6 + $ON_pill_and_rounded_delta_spread) +'px '+ $color_shadow_box_inset_element_type_button_clear +', 0px 0px 0px 1px hsl(195, 100%, 77%)'
                }
            }
            */
        }
    })
}

switches_buttons_and_anchors__type_button(document.querySelectorAll('.switch.button_full, .switch.button_text, .switch.button_icon, button.button_full, button.button_text, button.button_icon, a.button_full, a.button_text, a.button_icon'))


/*  TODO:    1 ▶ Switches, Buttons, And Anchors All Type Image
◈──────────────────────────────────────────────────────◈ */

function switches_buttons_and_anchors__type_image($switches_or_buttons_or_anchors) {

    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        if($swt_or_btn_or_a.classList.contains('image')) {

            var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
            var $piece_icon_width = Number(getComputedStyle($piece_icon).getPropertyValue('width').slice(0,-2)) 
            var $piece_icon_height = Number(getComputedStyle($piece_icon).getPropertyValue('height').slice(0,-2)) 
            var $piece_icon_area = $piece_icon_width * $piece_icon_height

            var $piece_icon_min_size = 48

            var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')

            if ($piece_text !== null) {  

                // var $piece_text_width = Number(getComputedStyle($piece_text).getPropertyValue('width').slice(0,-2)) 
                var $piece_text_height = Number(getComputedStyle($piece_text).getPropertyValue('height').slice(0,-2)) 
            }

            var $piece_text_height_of_1_line = 35.84
            var $piece_text_height_of_2_lines = 57.69

            /*
            // --------- Arredondar os ícones --------- 
            
            $piece_icon.style.borderRadius = 1/4 * Math.min($piece_icon_width, $piece_icon_height) +'px' 
            */

            // ---------- Propriedade top da etiqueta de hover ---------- 

            if ($piece_text !== null) { 

                $piece_text.style.display = 'none' // Esta propriedade foi aplicada aqui para que o JS consiga pegar o valor '$piece_text_height' antes do elemento '$piece_text' ser ocultado.

                if (!$swt_or_btn_or_a.classList.contains('disabled')) {

                    var $y0 = 45 + Math.max(0, $piece_text_height - $piece_text_height_of_1_line)
                    var $y_offset = Math.min(15, 0.00028 * ($piece_icon_area - ($piece_icon_min_size * $piece_icon_min_size)))

                    $piece_text.style.top = -1 * ($y0 + $y_offset) + 'px'
                }
            }

            /*  
            // ---------- Padding da etiqueta de hover ---------- 

            if ($piece_text !== null) {

                if ($piece_text_height > Math.ceil($piece_text_height_of_2_lines)) { // Altura para 3+ linhas.
                    
                    $piece_text.style.paddingTop = '10px'  
                    $piece_text.style.paddingLeft = '11px'
                    $piece_text.style.paddingRight = '11px'

                } else {

                    $piece_text.style.paddingLeft = '9px'
                    $piece_text.style.paddingRight = '9px'
                } 
            }
            */
        }
    })
}

switches_buttons_and_anchors__type_image(document.querySelectorAll('.switch.image, button.image, a.image'))


/*  TODO:    1 ▶ Update Switches & Buttons
◈──────────────────────────────────────────────────────◈ */

function update_switches_buttons_and_anchors($switches_or_buttons_or_anchors, type_number) {

    $switches_or_buttons_or_anchors.forEach(function ($swt_or_btn_or_a) {

        // --------- Desfazer alterações dos tipos --------- 

        var $piece_icon = $swt_or_btn_or_a.querySelector(':scope .piece_icon')
        var $piece_text = $swt_or_btn_or_a.querySelector(':scope .piece_text')
        var $shine = $swt_or_btn_or_a.querySelector(':scope .button_shine_top') 

        $swt_or_btn_or_a.style.width = '' 
        $swt_or_btn_or_a.style.height = ''
        $swt_or_btn_or_a.style.padding = ''
        $swt_or_btn_or_a.style.borderRadius = ''
        $swt_or_btn_or_a.style.boxShadow = ''

        if ($piece_icon !== null) {  

            $piece_icon.style.borderRadius = ''
            $piece_icon.style.margin = ''
        }

        if ($piece_text !== null) {  

            $piece_text.style.display = 'inline'
            $piece_text.style.padding = ''
            $piece_text.style.margin = ''
            $piece_text.style.top = ''
        }

        if ($shine !== null) { // <- Verifica se o brilho existe.

            $swt_or_btn_or_a.querySelector(':scope .button_shine_top').remove()

            /* $shine.style.width = ''; $shine.style.borderRadius = ''; $shine.style.left = '' */
        }
        
        // --------- Mudar tipo --------- 

        if ((1 <= type_number && type_number <= 17 && $swt_or_btn_or_a.classList.contains('switch')) || (1 <= type_number && type_number <= 14)) { 

            $swt_or_btn_or_a.classList.remove('button_full')
            $swt_or_btn_or_a.classList.remove('button_text')
            $swt_or_btn_or_a.classList.remove('button_icon')
            $swt_or_btn_or_a.classList.remove('text_below')
            $swt_or_btn_or_a.classList.remove('pill')
            $swt_or_btn_or_a.classList.remove('rounded')
            $swt_or_btn_or_a.classList.remove('image')
            $swt_or_btn_or_a.classList.remove('key_full')
            $swt_or_btn_or_a.classList.remove('key_text')
            $swt_or_btn_or_a.classList.remove('inverted')
            
            if (type_number == 01) { $swt_or_btn_or_a.classList.add('button_full') }
            if (type_number == 02) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 03) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 04) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 05) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 06) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 07) { $swt_or_btn_or_a.classList.add('button_text')  }
            if (type_number == 08) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 09) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 10) { $swt_or_btn_or_a.classList.add('button_icon')  }
            if (type_number == 11) { $swt_or_btn_or_a.classList.add('button_icon'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 12) { $swt_or_btn_or_a.classList.add('button_icon'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 13) { $swt_or_btn_or_a.classList.add('image')  }
            if (type_number == 14) { $swt_or_btn_or_a.classList.add('image'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 15) { $swt_or_btn_or_a.classList.add('key_full')  }
            if (type_number == 16) { $swt_or_btn_or_a.classList.add('key_text')  }
            if (type_number == 17) { $swt_or_btn_or_a.classList.add('key_text'); $swt_or_btn_or_a.classList.add('inverted') }
        }
    })

    // --------- Atualizar switches e buttons --------- 
    
    switches_buttons_and_anchors__type_button($switches_or_buttons_or_anchors)
    switches_buttons_and_anchors__type_image($switches_or_buttons_or_anchors)
}

/*
function update_switches_buttons_and_anchors_resize() {  

    update_switches_buttons_and_anchors(document.querySelectorAll('.switch.button_full, .switch.button_text, .switch.button_icon, button.button_full, button.button_text, button.button_icon, a.button_full, a.button_text, a.button_icon, .switch.image, button.image, a.image'))
}

window.addEventListener('resize', update_switches_buttons_and_anchors_resize)
*/
 
/*  
◈──────────────────────────────────────────────────────◈
TODO: Choices 
◈──────────────────────────────────────────────────────◈ */

var choice_anchorClicked = null
var choice_anchorClickedBefore = null /* <- Variável necessária para 
salvar o valor de 'choice_anchorClicked' antes de se clicar em uma opção 
desabilitada, já que ao fazer isso, ela será alterada, e depois retorná-la ao seu 
valor anterior. Isso é necessário, pois 'choice_anchorClicked' determina a 
opção que aparece em um 'dropdown' quando ele está fechado.
*/
 
var dropdown_open = false

function choice(arg) {

    var dropdown_liClicked = null

    if(arg.classList.contains('dropdown')) {

        if(arg.classList.contains('dropdown_open')) {

                for(var i = 0; i < arg.children.length; i++) { 

                    if(arg.children[i].children[0] === choice_anchorClicked) {

                        dropdown_liClicked = arg.children[i]
                        break
                    }
                }

            if(choice_anchorClicked !== 'disabled') {

                for(var i = 0; i < arg.children.length; i++) { 

                    arg.children[i].style = 'display: none'
                }

                if(dropdown_liClicked !==  null) {

                    dropdown_liClicked.style = 'display: inline-flex'

                } else {

                    arg.children[0].style = 'display: inline-flex'
                }



                var $shine = document.createElement('div') 

                $shine.classList.add('choice_shine_top')
            
                arg.insertAdjacentElement('afterbegin', $shine)
            }

        } else {

            if(arg.classList.contains('disabled')) { 
                
                return 
            }

            

            var $shine = arg.querySelector(':scope .choice_shine_top') 

            if ($shine !== null) {

                $shine.remove()
            }



            arg.children[0].style = 'display: none'
            
            for(var i = 1; i < arg.children.length; i++) { 

                arg.children[i].style = 'display: inline-flex'
            } 

            if(choice_anchorClicked !== null) {
                
                for(var i = 1; i < arg.children.length - 1; i++) { 

                    arg.children[i].children[0].classList.remove('on')
                }

                choice_anchorClicked.classList.add('on')
            }
        }
            
        if(choice_anchorClicked !== 'disabled') {

            document.querySelector('html').classList.toggle('overflow_hidden')
            arg.classList.toggle('dropdown_open')

        } else {
            choice_anchorClicked = choice_anchorClickedBefore
        }

    } else {

        if(choice_anchorClicked === null || choice_anchorClicked === 'disabled') { return }

        for(var i = 0; i < arg.children.length; i++) { 

            arg.children[i].children[0].classList.remove('on')
        }

        choice_anchorClicked.classList.add('on')

        choice_anchorClicked = null
    }
}

function choice_option(arg) { 

    if(arg.classList.contains('disabled')) { 

        choice_anchorClickedBefore = choice_anchorClicked

        choice_anchorClicked = 'disabled'

    } else {
        choice_anchorClicked =  arg
    }
}

/* Espaço no final ('li' invisível) do menu dos dropdowns: */

var allChoicesD = document.querySelectorAll('.dropdown')

for(var i = 0; i < allChoicesD.length; i++) { 

var e = document.createElement("li")

    allChoicesD[i].appendChild(e)
}


/*  TODO:    1 ▶ Shine
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('.choice').forEach(function ($choice) {

    if($choice.classList.contains('horizontal')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.querySelector(':scope li:nth-of-type(1)').insertAdjacentElement('afterbegin', $shine)

        var $choice_parts = $choice.querySelectorAll(':scope a') 
        
        $choice_parts.forEach(function (part) {

            var $shine = document.createElement('div') 

            $shine.classList.add('choice_shine_top')
        
            part.insertAdjacentElement('afterbegin', $shine)
        })
    }

    if($choice.classList.contains('vertical')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.querySelector(':scope li:nth-of-type(1)').insertAdjacentElement('afterbegin', $shine) 
    }

    if($choice.classList.contains('dropdown')) {

        var $shine = document.createElement('div') 

        $shine.classList.add('choice_shine_top')

        $choice.insertAdjacentElement('afterbegin', $shine)
    }
})


/*
◈──────────────────────────────────────────────────────◈
TODO: Slider
◈──────────────────────────────────────────────────────◈ */

var sliders = document.querySelectorAll('.slider')

sliders.forEach(function (slider) {

    var slider_naturalWidth = ((slider.firstElementChild.naturalWidth/0.93) + 4) + 'px' // 4px são das bordas
    var slider_naturalHeight = (slider.firstElementChild.naturalHeight + 4) + 'px' // 4px são das bordas

    if (!(slider.style.maxWidth || slider.style.maxHeight)) {
            
        slider.style.maxWidth = slider_naturalWidth
        slider.style.maxHeight = slider_naturalHeight
    }

    // Slider Full Screen:

    slider.addEventListener('click', function(evt) {

        if (this.parentElement.classList.contains('slider_fullScreen')) {
            
        } else {

            document.querySelector('html').classList.add('overflow_hidden') 
                    
            var slider_width_initial = slider.style.width
            // var slider_height_initial = slider.style.height
            var slider_maxWidth_initial = slider.style.maxWidth
            var slider_maxHeight_initial = slider.style.maxHeight
            
            slider.style.width = slider_naturalWidth
            // slider.style.height = slider_naturalHeight
            slider.style.maxWidth = '100vw'
            slider.style.maxHeight = '100vh'

            var div_slider_fullScreen = document.createElement('div')

            div_slider_fullScreen.classList.add('slider_fullScreen')

            div_slider_fullScreen.addEventListener('click', function(evt) {
            
                this.insertAdjacentElement('afterend', this.firstElementChild)
                this.remove()
            
                slider.style.width = slider_width_initial
                // slider.style.height = slider_height_initial
                slider.style.maxWidth = slider_maxWidth_initial
                slider.style.maxHeight = slider_maxHeight_initial

                document.querySelector('html').classList.remove('overflow_hidden')
            })

            this.insertAdjacentElement('beforebegin', div_slider_fullScreen)

            div_slider_fullScreen.insertAdjacentElement('afterbegin', this)
        }
    })
})


/*  
◈──────────────────────────────────────────────────────◈
TODO: Lightbox
◈──────────────────────────────────────────────────────◈ */
{

var lightbox_html = document.createElement("div");

lightbox_html.classList.add("lightbox")

lightbox_html.innerHTML = `
<div>
        <a class="lightbox_closeArea" onclick="lightbox_close(this)"></a> 
        <div class="lightbox_layout">
            <img src="" alt="" class="lightbox_img">
            <div class="lightbox_text"></div>
        </div>
</div>
`

document.body.appendChild(lightbox_html);

function lightbox(txt, img, width) { 

    document.querySelector('html').classList.add('overflow_hidden') 

    document.querySelector('.lightbox_text').innerHTML = txt

    if(img === undefined) {
        document.querySelector('.lightbox_img').setAttribute('src', '') 
        document.querySelector('.lightbox_img').classList.remove('lightbox_img_marginBottom')
    } else {
        document.querySelector('.lightbox_img').setAttribute('src', img) 
        document.querySelector('.lightbox_img').classList.add('lightbox_img_marginBottom')
    } 
 
    if(width === undefined) {
        document.querySelector('.lightbox_img').style = 'width: auto' 
    } else {
        document.querySelector('.lightbox_img').style = 'width: '+ width
    }

    document.querySelector('.lightbox').style = 'display: flex'

    lightbox_animation_show()
}

function lightbox2(txt, img, width) { 

    document.querySelector('.lightbox_img').classList.add('lightbox_img_rounded')

    lightbox(txt, img, width)
}

//------ Lightbox - Show Animation ------//

{ 
    var lightbox_ = document.querySelector('.lightbox')
    var dy = 130 // Última alteração: -20
    var t = 0.25 // Última alteração: -0.05

    function lightbox_animation_show() {

        animation(t) // Unidade: s

        function animation(duration) {

            var  timestamp_firstRepetition
                
            function step(timestamp) {
                
                if (timestamp_firstRepetition === undefined) { timestamp_firstRepetition = timestamp  }
                
                var elapsed = timestamp - timestamp_firstRepetition

                var elapsed_seconds = elapsed/1000 

                if (isNaN(duration)) { var $t = elapsed_seconds } else { var $t = Math.min(elapsed_seconds, duration) }
                
                //---------------------------------------------------------------------------------------
                    
                    lightbox_.style.opacity = ($t/t)
                    lightbox_.style.transform = 'translateY(' + ((dy * ((1/t) * $t)) - dy) + 'px)'
            
                //---------------------------------------------------------------------------------------

                if (isNaN(duration)) { window.requestAnimationFrame(step) } else { if ($t < duration) { window.requestAnimationFrame(step) } }
            } 

            window.requestAnimationFrame(step)
        }
    }
}

function lightbox_close(arg) {

    // As variáveis desta animação de fechar o lightbox estão na animação de abrir.

    animation(t) // Unidade: s

    function animation(duration) {

        var  timestamp_firstRepetition
            
        function step(timestamp) {
            
            if (timestamp_firstRepetition === undefined) { timestamp_firstRepetition = timestamp  }
            
            var elapsed = timestamp - timestamp_firstRepetition

            var elapsed_seconds = elapsed/1000 

            if (isNaN(duration)) { var $t = elapsed_seconds } else { var $t = Math.min(elapsed_seconds, duration) }
            
            //---------------------------------------------------------------------------------------
            
            lightbox_.style.opacity = (1 - ($t/t)) 
            lightbox_.style.transform = 'translateY(' + (($t/t) * dy) + 'px)'
    
            //---------------------------------------------------------------------------------------

            if (isNaN(duration)) { window.requestAnimationFrame(step) } else { if ($t < duration) { window.requestAnimationFrame(step) } }
        
            // Nota: Tive que colocar este 'if' dentro da lógica da animação, pois o JS não espera a animação terminar para executar os códigos posteriores à animação.
            if ($t === duration) { 

                document.querySelector('html').classList.remove('overflow_hidden')
                document.querySelector('.lightbox_img').classList.remove('lightbox_img_rounded')
                arg.parentNode.parentNode.style = 'display: none';  
            }
        }

        window.requestAnimationFrame(step)
    }
    
}

}

/*
◈──────────────────────────────────────────────────────◈
TODO: Code Viewer
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('.codeViewer').forEach(function (codeViewer) {

    var assets = codeViewer.querySelector(':scope .assets')
    var assets_dts = codeViewer.querySelectorAll(':scope .assets > div > dt')
    var assets_btns = codeViewer.querySelectorAll(':scope .assets > div > dt button')
    var assets_dds = codeViewer.querySelectorAll(':scope .assets > div > dd')

    var assets_dts_container = document.createElement('div')
    assets_dts_container.classList.add('assets_dts_container')

    if(assets !== null) {
        assets.prepend(assets_dts_container)

        assets_dts.forEach(function (assets_dt) {
        
            assets_dts_container.append(assets_dt)
        })
    }
    
    assets_dts_container.addEventListener('click', function(evt) {

        assets_btns.forEach(function (assets_btn) {
        
            assets_btn.classList.remove('on')
            evt.target.classList.add('on')
        })

        assets_dds.forEach(function (assets_dd) {
        
            assets_dd.style.display = 'none'
        })

        assets_btns.forEach(function (assets_btn, i) {
        
            if (evt.target === assets_btn) {

                assets_dds[i].style.display = 'block'
            }
        })
    })

    codeViewer.style.display = 'block' // Bug fix: Coloquei os 'codeViewer's ocultos inicialmente via CSS, e coloquei para o exibi-los usando JavaScript logo assim que forem manipulados por ele. Isso é necessário porque o JavaScript demora um pouco para ser executado, o que faz com que o HTML seja exibido brevemente antes de ser manipulado pelo JavaScript.
})





/* 
div.addEventListener('click', function fct(evt) {

    if (evt.target.id === "btn1") { display.textContent = '1' }
    if (evt.target.id === "btn2") { display.textContent = '2' }
    if (evt.target.id === "btn3") { display.textContent = '3' }
})
 */
/*  
◈──────────────────────────────────────────────────────◈
TODO: Button Hide
◈──────────────────────────────────────────────────────◈ */

var all_button_hide = document.querySelectorAll('.button_hide')

for(var i = 0; i < all_button_hide.length; i++) {

    all_button_hide[i].setAttribute('onclick', 'button_hide(this)')
}

function button_hide(arg) {

    localStorage.setItem(arg.parentNode.id, arg.parentNode.id)
    
    arg.parentNode.style = 'display: none'
} 

//Show alll no clicked:

for(var i = 0; i < all_button_hide.length; i++) {

    if(all_button_hide[i].parentNode.id !== localStorage.getItem(all_button_hide[i].parentNode.id)) {

        all_button_hide[i].parentNode.style = 'display: block' 
    }
} 

/*
◈──────────────────────────────────────────────────────◈
TODO: The Variable Is Free
◈──────────────────────────────────────────────────────◈ */

// Esta função retornará true se a variável não tiver sido declarada, ou se tiver sido declarada sem nenhum valor

function theVariableIsFree(variableNameAsString) {
    
    return (typeof window[variableNameAsString] === 'undefined')
}

//····································································◈ Tests
/*
// var testando_theVariableIsFree_1 // Esta variável não é para ser definida no teste, ou seja, a mantenha comentada

var testando_theVariableIsFree_2

var testando_theVariableIsFree_3 = 'Ok'

csl.log(_,
    '[Log]: '+ theVariableIsFree('testando_theVariableIsFree_1'),
    '[Log]: '+ theVariableIsFree('testando_theVariableIsFree_2'),
    '[Log]: '+ theVariableIsFree('testando_theVariableIsFree_3'),
_)
*/

/*  
◈──────────────────────────────────────────────────────◈
TODO: Is-A-Number Function
◈──────────────────────────────────────────────────────◈ */

/* 
 A função isAN() (Is-A-Number) verifica eficientemente se um valor é 
numérico, ela é oposta à isNaN() e corrige todos os bugs dela. Ela retorna 'true' para valores dos tipos number, bigInt, string, e para as propriedades dos objetos Number e Math que podem ser representados por números.
*/

var checkingOnlyIntegerPartOfBigIntAsString = false

function isAN(x) {

    if(typeof x === 'bigint') {

        checkingOnlyIntegerPartOfBigIntAsString = false

        // return x
        return true
    }

    if(typeof x === 'string') {

        x = x.trim()

        if(x === '') {
            
            checkingOnlyIntegerPartOfBigIntAsString = false
            return false
        }

        // Bug fix de valores como '-0b10', '-0o10', e '-0x10':
            
        if(x[0] === '-') { 

            var x_withoutTheMinusSign = x.slice(1)

            if (isAN(x_withoutTheMinusSign) === true) {
                
                checkingOnlyIntegerPartOfBigIntAsString = false
                return true
            }
        }

        // Retornar 'true' para um valor 'bigInt' dentro de uma 'string':

        if (!checkingOnlyIntegerPartOfBigIntAsString) {
            
            if(x[x.length - 1] === 'n') {

                var x_integerPart = x.slice(0, -1)

                checkingOnlyIntegerPartOfBigIntAsString = true

                if (isAN(x_integerPart) === true) {
                    
                    return true
                }
            }
        }

        // Retornar 'true' para propriedades de valores numéricos do objeto 'Math' como strings:

        if( (x === 'Number.EPSILON') || 
            (x === 'Number.MAX_SAFE_INTEGER') || 
            (x === 'Number.MAX_VALUE') || 
            (x === 'Number.MIN_SAFE_INTEGER') || 
            (x === 'Number.MIN_VALUE') || 
            (x === 'Number.POSITIVE_INFINITY') || 
            (x === 'Number.NEGATIVE_INFINITY') ) {

            checkingOnlyIntegerPartOfBigIntAsString = false
            return true
        }

        // Retornar 'true' para constantes matemáticas do objeto 'Math' como strings:

        if( (x === 'Math.PI') || 
            (x === 'Math.SQRT2') || 
            (x === 'Math.SQRT1_2') || 
            (x === 'Math.E') || 
            (x === 'Math.LN2') || 
            (x === 'Math.LN10') || 
            (x === 'Math.LOG2E') || 
            (x === 'Math.LOG10E') ) {

            checkingOnlyIntegerPartOfBigIntAsString = false
            return true
        }
    }

    if(typeof x === 'boolean' || x instanceof Array || x === null) {

        checkingOnlyIntegerPartOfBigIntAsString = false
        return false
    }

    checkingOnlyIntegerPartOfBigIntAsString = false
    return !isNaN(x)
}

/* ---------------- Testes ------------------ */

/*  
console.log("Resultados dos testes que devem dar 'true':")
csl.log(

isAN(0),
isAN(1),
isAN(-1),
isAN(37.5),
isAN(+37.5),
isAN(-37.5),
isAN(0.),
isAN(.5),
isAN(-.5),
isAN(1e+2),
isAN(+1e+2),
isAN(+1e-2),
isAN(-1e+2),
isAN(-1e-2),
isAN(0b10),
isAN(0o10),
isAN(010),
isAN(0x10),
isAN(-0b10),
isAN(-0o10),
isAN(-010),
isAN(-0x10),
// Erro - valor incompatível com o JS: isAN(0b10.1),
// Erro - valor incompatível com o JS: isAN(0o10.1),
// Erro - valor incompatível com o JS: isAN(010.1),
// Erro - valor incompatível com o JS: isAN(0x10.1),
isAN(Number.EPSILON),
isAN(Number.MAX_SAFE_INTEGER),
isAN(Number.MAX_VALUE),
isAN(Number.MIN_SAFE_INTEGER),
isAN(Number.MIN_VALUE),
isAN(Number.POSITIVE_INFINITY),
isAN(Number.NEGATIVE_INFINITY),
isAN(Infinity),
isAN(-Infinity),
isAN(Math.PI),
isAN(Math.SQRT2),
isAN(Math.SQRT1_2),
isAN(Math.E),
isAN(Math.LN2),
isAN(Math.LN10),
isAN(Math.LOG2E),
isAN(Math.LOG10E),

isAN('0'),
isAN('1'),
isAN('-1'),
isAN('37.5'),
isAN('+37.5'),
isAN('-37.5'),
isAN('0.'),
isAN('.5'),
isAN('-.5'),
isAN('1e+2'),
isAN('+1e+2'),
isAN('+1e-2'),
isAN('-1e+2'),
isAN('-1e-2'),
isAN('0b10'),
isAN('0o10'),
isAN('010'),
isAN('0x10'),
isAN('-0b10'),
isAN('-0o10'),
isAN('-010'),
isAN('-0x10'),
isAN('     -1'),
isAN(`
+37.5     `),
isAN('     -37.5     '),
isAN('Number.EPSILON'),
isAN('Number.MAX_SAFE_INTEGER'),
isAN('Number.MAX_VALUE'),
isAN('Number.MIN_SAFE_INTEGER'),
isAN('Number.MIN_VALUE'),
isAN('Number.POSITIVE_INFINITY'),
isAN('Number.NEGATIVE_INFINITY'),
isAN('Infinity'),
isAN('-Infinity'),
isAN('Math.PI'),
isAN('Math.SQRT2'),
isAN('Math.SQRT1_2'),
isAN('Math.E'),
isAN('Math.LN2'),
isAN('Math.LN10'),
isAN('Math.LOG2E'),
isAN('Math.LOG10E'),

isAN(0n),
isAN(1n),
isAN(-1n),
// Erro - valor incompatível com o JS: isAN(37.5n),
// Erro - valor incompatível com o JS: isAN(+37.5n),
// Erro - valor incompatível com o JS: isAN(-37.5n),
// Erro - valor incompatível com o JS: isAN(0.n),
// Erro - valor incompatível com o JS: isAN(.5n),
// Erro - valor incompatível com o JS: isAN(-.5n),
// Erro - valor incompatível com o JS: isAN(1e+2n),
// Erro - valor incompatível com o JS: isAN(+1e+2n),
// Erro - valor incompatível com o JS: isAN(+1e-2n),
// Erro - valor incompatível com o JS: isAN(-1e+2n),
// Erro - valor incompatível com o JS: isAN(-1e-2n),
isAN(0b10n),
isAN(0o10n),
// Erro - valor incompatível com o JS: isAN(010n),
isAN(0x10n),
isAN(-0b10n),
isAN(-0o10n),
// Erro - valor incompatível com o JS: isAN(-010n),
isAN(-0x10n),

isAN('0n'),
isAN('1n'),
isAN('-1n'),
isAN('0b10n'),
isAN('0o10n'),
isAN('0x10n'),
isAN('-0b10n'),
isAN('-0o10n'),
isAN('-0x10n'),
isAN('     1n'),
isAN(`
-1n     `),
isAN('     1n     ')
)

console.log("Resultados dos testes que devem dar 'false':")

csl.log(
    
isAN(0/0),
isAN('1nn'),
isAN('String'),
isAN('     '),
isAN(''),
isAN(true),
isAN([]),
isAN([5, 8]),
isAN({}),
isAN({ prop: 'Valor' }),
isAN(undefined),
isAN(null),
isAN(NaN),
isAN(Number.NaN)
)
*/

/* 
console.log('---------------- Aplicação ------------------')

x = '     -2      '

console.log(x)

if(isAN(x)){

console.log(Number(x))

console.log(6 + Number(x))
}
*/
/* 
[Console]:

---------------- Aplicação ------------------
     -2      
-2
4
 */


/*  
◈──────────────────────────────────────────────────────◈
TODO: Get File Name
◈──────────────────────────────────────────────────────◈ */

function getFileName(url, withType) { // withType é opcional, booleano, e false se omitido.

    var index_bar = url.indexOf("/")

    while(index_bar !== -1) {

        url = url.slice(index_bar + 1)

        index_bar = url.indexOf("/")
    }

    if (withType) {
        
        filename = url

    } else {
        
        var index_dot = url.indexOf(".")

        filename = url.slice(0, index_dot)        
    }

    return filename
}

/*  
◈──────────────────────────────────────────────────────◈
TODO: Get Image Filename
◈──────────────────────────────────────────────────────◈ */

function getImgName(img) {

    var img_src = img.src

    var index_bar = img_src.indexOf("/")

    while(index_bar !== -1) {

        img_src = img_src.slice(index_bar + 1)

        index_bar = img_src.indexOf("/")
    }

    var index_dot = img_src.indexOf(".")

    img_src = img_src.slice(0, index_dot)

    return img_src   
}

/*  
◈──────────────────────────────────────────────────────◈
TODO: Image Filename as ALT Attribute Value
◈──────────────────────────────────────────────────────◈ */

function imgsNamesAsAlts(imgs) {

    for (i = 0; i < imgs.length; i++) {
        
        var img_src = imgs[i].src

        var index_bar = img_src.indexOf("/")

        while(index_bar !== -1) {

            img_src = img_src.slice(index_bar + 1)

            index_bar = img_src.indexOf("/")
        }

        var index_dot = img_src.indexOf(".")

        img_src = img_src.slice(0, index_dot)

        imgs[i].alt = img_src
    }
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Sequential Text Generator
◈──────────────────────────────────────────────────────◈ */

// Ex: sequentialTextGenerator(1, 8, "`p:nth-of-type(${i}) { background: url('images/file_${i}.png'); }`")

function sequentialTextGenerator(firstIndex, lastIndex, string) {
    
    for (i = firstIndex; i <= lastIndex; i++) {

        var div = document.createElement('div')

        div.textContent = runCodeAsString(string)
        
        div.style.fontSize = '19px'

        document.body.append(div)
    }
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Tests
◈──────────────────────────────────────────────────────◈ */

function runCodeAsString2(stg, slot) {

    csl.log('===', slot, '===')

    if(stg === '') {

        return undefined

    } else {

        return Function('"use strict";return (' + stg + ')')()
    }
}

/*  TODO:    1 ▶ Run Code Represented As A String
◈──────────────────────────────────────────────────────◈ */

// Obs.: Esta função não aceita números octodecimais com a sintaxe antiga (p. ex., 010).

function runCodeAsString(stg) {

    if(stg === '') {

        return undefined

    } else {

        return Function('"use strict";return (' + stg + ')')()
    }
}

/*  TODO:        2 ▶ Tests
◈──────────────────────────────────────────────────────◈ */
/* 
csl.topic('runCodeAsString()')

//····································································◈ Variables:

console.log('')

console.groupCollapsed('Variables')

csl.log(
'',
"Variáveis usadas por 1+ testes:",
"",
"var var_1 = 'var 1'", 
"var var_2 = var_1 +' em var 2'", 
"var var_3 = false",
"p = <p>P<b>B</b><i>I</i></p>")

var var_1 = 1

var var_2 = var_1 +' em var 2'

var var_3 = false

var var_4 = [1, "s", true, [], {}]

var array = [1n, 's', var_3, Math.PI, Number.MAX_SAFE_INTEGER, [], { p1: 4*2, p2: "d", p3: false, p4: ['55', true, -0.77, { bnr: -0b10, octd1: -0o10, octd2: -010, hxd: -0x10 }], p5: function ok(){ console.log(var_3) }, p6: 'Sou '+ var_2 +'!', p7: null, p8: undefined, p9: /regex/, p10: NaN }]


var p = document.createElement('p')
var b = document.createElement('b')
var i = document.createElement('i')

p.textContent = 'P'
b.textContent = 'B'
i.textContent = 'I'

p.append(b, i)
document.body.append(p)

console.groupEnd()

console.log('')

//····································································◈ Inputs and additional informations:

var inputsAndInfos = [

    // [vars, input, obs]

    [false, '', false], // Erro corrigido!

    [false, '0', false],
    [false, '1', false],
    [false, '-1', false],
    [false, '37.5', false],
    [false, '+37.5', false],
    [false, '-37.5', false],
    [false, '0.', false],
    [false, '.5', false],
    [false, '-.5', false],
    [false, '1e+2', false],
    [false, '+1e+2', false],
    [false, '+1e-2', false],
    [false, '-1e+2', false],
    [false, '-1e-2', false],
    [false, '0b10', false],
    [false, '0o10', false],
    [false, '010', false], // Erro
    [false, '0x10', false],
    [false, '-0b10', false],
    [false, '-0o10', false],
    [false, '-010', false], // Erro
    [false, '-0x10', false],
    [false, 'Number.EPSILON', false],
    [false, 'Number.MAX_SAFE_INTEGER', false],
    [false, 'Number.MAX_VALUE', false],
    [false, 'Number.MIN_SAFE_INTEGER', false],
    [false, 'Number.MIN_VALUE', false],
    [false, 'Number.POSITIVE_INFINITY', false],
    [false, 'Number.NEGATIVE_INFINITY', false],
    [false, 'Infinity', false],
    [false, '-Infinity', false],
    [false, 'Math.PI', false],
    [false, 'Math.SQRT2', false],
    [false, 'Math.SQRT1_2', false],
    [false, 'Math.E', false],
    [false, 'Math.LN2', false],
    [false, 'Math.LN10', false],
    [false, 'Math.LOG2E', false],
    [false, 'Math.LOG10E', false],
    [false, '0n', false],
    [false, '1n', false],
    [false, '-1n', false],
    [false, '0b10n', false],
    [false, '0o10n', false],
    [false, '0x10n', false],
    [false, '-0b10n', false],
    [false, '-0o10n', false],
    [false, '-0x10n', false],


    // [false, '1', false],
    // [false, '-0.77', false],
    // [false, "-5e-2", false],
    // [false, "10/2", false],
    // [false, '0b10', false],
    // [false, '0o10', false],
    // [false, "010", false], // Erro
    // [false, "0x10", false],
    // [false, "1n", false],
    // [false, "Infinity", false],
    // [false, "Math.PI", false],
    // [false, "Number.MAX_SAFE_INTEGER", false],

    [false, "'String de aspas simples'", false],
    [false, '"String de aspas duplas"', false],
    [false, '`String de modelo`', false],
    [false, 'var_1', false],
    [false, 'var_2', false],
    [false, "'String de aspas simples concatenada '+ var_1 +'!'", false],
    [false, '"String de aspas duplas concatenada "+ var_2 +"!"', false],
    [false, '`String de modelo concatenada ${var_3}!`', false],
    [false, "true", false],
    [false, "false", false],
    [false, 'var_3', false],
    [false, '[]', false],
    [false, "[010]", false], // Erro
    [false, "[0o10]", false],
    [false, '[`String "${var_2}" concatenada`]', false],
    [false, "[true]", false],
    [false, "[false]", false],
    [false, '[1, "s", true, [], {}]', false],
    [false, 'var_4', false],

    [false, `[-5e-2, 1n, Infinity, 's', var_3, Math.PI, Number.MAX_SAFE_INTEGER, [], { p1: 4*2, p2: "d", p3: false, p4: ['55', true, -0.77, { bnr: -0b10, octd1: -0o10, hxd: -0x10 }], p5:function ok(){ console.log(var_3) }, p6: 'Sou '+ var_2 +'!', p7: null, p8: undefined, p9: /regex/, p10: NaN }]`, false],

    [false, '{}', false],
    [false, '{ octo: 010 }', false], // Erro
    [false, '{ octo: 0o10 }', false],
    [false, '{ prop: `String "${var_2}" concatenada`}', false],
    [false, '{ bool: true }', false],
    [false, '{ arr: [1, "s", true, [], {}] }', false],

    [`var array = [1n, 's', var_3, Math.PI, Number.MAX_SAFE_INTEGER, [], { p1: 4*2, p2: "d", p3: false, p4: ['55', true, -0.77, { bnr: -0b10, octd1: -0o10, octd2: -010, hxd: -0x10 }], p5: function ok(){ console.log(var_3) }, p6: 'Sou '+ var_2 +'!', p7: null, p8: undefined, p9: /regex/, p10: NaN }]`,
    "{ a: -5e-2, b: `c`, c: true, d:function(){}, e: array, f: Infinity }", 
    "Há 1 valor octodecimal com a anotação antiga dentro da variável 'array'."], // Obs.: Há 1 valor octodecimal com a anotação antiga dentro da variável 'array'.

    [false, 'function ok(){ console.log(var_3) }', false],
    [false, 'null', false],
    [false, 'undefined', false],
    [false, '/regex/', false],
    [false, 'NaN', false],
    [false, 'p.children', false],
    [false, 'p.childNodes', false],
    [false, `p.style.color = 'red'`, false],
]


//····································································◈ Executions:

console.groupCollapsed('Executions')

console.log('')

var numberOfTests = 0, numberOfOks = 0, numberOfErrors = 0

inputsAndInfos.forEach(function (data) {

    numberOfTests++
        
    var vars = data[0], input = data[1], obs = data[2]

    if (vars) {
        
        csl.ticket('Vars', 'limeGreen')

        csl.log(vars)
    }

    csl.ticket('In', 'deepSkyBlue')

    csl.log(input, 'Type: '+ typeof input)

    csl.ticket('Out', 'deepSkyBlue')

    try {
        
        var output = runCodeAsString(input)
        
        csl.log(output, 'Type: '+ typeof output)

        numberOfOks++
    
    } catch (errorMsg) {
    
        csl.ticket('Error', 'red')

        numberOfErrors++
    }

    if (obs) {

        csl.ticket('Obs', 'gold')

        csl.log(obs)
    }

    csl.log(_)
})

console.groupEnd()

console.log('')

//····································································◈ Conclusion

console.group('Conclusion')

csl.log(
'',
'Todos os testes foram bem sucedidos, exceto os com valores octodecimais de sintaxe antiga, que apenas o teste com o valor octodecimal dentro de uma variável funcionou.',
'',
'- Number of Tests: '+ numberOfTests, 
'- Number of Oks: '+ numberOfOks, 
'- Number of Errors: '+ numberOfErrors)

console.groupEnd()
*/

/*  TODO:    1 ▶ JSON.parse()
◈──────────────────────────────────────────────────────◈ */
/* 
csl.log(__, 'JSON.parse()', __)

var inputs = [
    'null',
    '{}',
    '[1, "a", true]',
    // '[1, "a", true, v]',
    // "[1, 'a', true]",
    //'{ a: 1 }'
    //"{ a: 1, b: 'b', c: false, d: [4, 4], e: { p: 5 } }"
]

var inputs = [

    JSON.parse(0),
    JSON.parse(1),
    JSON.parse(-1),
    JSON.parse(37.5),
    JSON.parse(+37.5),
    JSON.parse(-37.5),
    JSON.parse(0.),
    JSON.parse(.5),
    JSON.parse(-.5),
    JSON.parse(1e+2),
    JSON.parse(+1e+2),
    JSON.parse(+1e-2),
    JSON.parse(-1e+2),
    JSON.parse(-1e-2),
    JSON.parse(0b10),
    JSON.parse(0o10),
    JSON.parse(010),
    JSON.parse(0x10),
    JSON.parse(-0b10),
    JSON.parse(-0o10),
    JSON.parse(-010),
    JSON.parse(-0x10),
    // Erro - valor incompatível com o JS: JSON.parse(0b10.1),
    // Erro - valor incompatível com o JS: JSON.parse(0o10.1),
    // Erro - valor incompatível com o JS: JSON.parse(010.1),
    // Erro - valor incompatível com o JS: JSON.parse(0x10.1),
    JSON.parse(Number.EPSILON),
    JSON.parse(Number.MAX_SAFE_INTEGER),
    JSON.parse(Number.MAX_VALUE),
    JSON.parse(Number.MIN_SAFE_INTEGER),
    JSON.parse(Number.MIN_VALUE),
    // Erro: JSON.parse(Number.POSITIVE_INFINITY), 
    // Erro: JSON.parse(Number.NEGATIVE_INFINITY),
    // Erro: JSON.parse(Infinity),
    // Erro: JSON.parse(-Infinity),
    JSON.parse(Math.PI),
    JSON.parse(Math.SQRT2),
    JSON.parse(Math.SQRT1_2),
    JSON.parse(Math.E),
    JSON.parse(Math.LN2),
    JSON.parse(Math.LN10),
    JSON.parse(Math.LOG2E),
    JSON.parse(Math.LOG10E),
    
    JSON.parse('0'),
    JSON.parse('1'),
    JSON.parse('-1'),
    JSON.parse('37.5'),
    // Erro: JSON.parse('+37.5'),
    JSON.parse('-37.5'),
    // Erro: JSON.parse('0.'),
    // Erro: JSON.parse('.5'),
    // Erro: JSON.parse('-.5'),
    JSON.parse('1e+2'),
    // Erro: JSON.parse('+1e+2'),
    // Erro: JSON.parse('+1e-2'),
    JSON.parse('-1e+2'),
    JSON.parse('-1e-2'),
    // Erro: JSON.parse('0b10'),
    // Erro: JSON.parse('0o10'),
    // Erro: JSON.parse('010'),
    // Erro: JSON.parse('0x10'),
    // Erro: JSON.parse('-0b10'),
    // Erro: JSON.parse('-0o10'),
    // Erro: JSON.parse('-010'),
    // Erro: JSON.parse('-0x10'),
    JSON.parse('     -1'),
    // Erro: JSON.parse(`
    // +37.5     `),
    JSON.parse('     -37.5     '),
    // Erro: JSON.parse('Number.EPSILON'),
    // Erro: JSON.parse('Number.MAX_SAFE_INTEGER'),
    // Erro: JSON.parse('Number.MAX_VALUE'),
    // Erro: JSON.parse('Number.MIN_SAFE_INTEGER'),
    // Erro: JSON.parse('Number.MIN_VALUE'),
    // Erro: JSON.parse('Number.POSITIVE_INFINITY'),
    // Erro: JSON.parse('Number.NEGATIVE_INFINITY'),
    // Erro: JSON.parse('Infinity'),
    // Erro: JSON.parse('-Infinity'),
    // Erro: JSON.parse('Math.PI'),
    // Erro: JSON.parse('Math.SQRT2'),
    // Erro: JSON.parse('Math.SQRT1_2'),
    // Erro: JSON.parse('Math.E'),
    // Erro: JSON.parse('Math.LN2'),
    // Erro: JSON.parse('Math.LN10'),
    // Erro: JSON.parse('Math.LOG2E'),
    // Erro: JSON.parse('Math.LOG10E'),
]

inputs.forEach(function (input) {

    var output = JSON.parse(input)

    csl.log(output, typeof output, _)
})
 */

































/*  
// Gambiarra para poder alterar o estilo de um pseudo elemento (pois 
// não tem como selecionar um pseudo elemento via Java script):

var stylesheet = document.styleSheets[2]

var rule

for(i = 0; i < stylesheet.cssRules.length; i++) {

    if(stylesheet.cssRules[i].selectorText === '.switch.button_full.pill .piece_label::after') {
        
        rule = stylesheet.cssRules[i]
    }
}

var $shine_x = '10px'

rule.style.setProperty('left', $shine_x)
rule.style.setProperty('width', 'calc(100% - 2 * '+ $shine_x +')')
*/
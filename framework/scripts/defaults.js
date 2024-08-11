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

var html = document.querySelector('html')

// var main = document.querySelector('main')

var charLB = `
` // Caractere de quebra de linha (line break).

var isCellphone = innerWidth <= 500 || innerHeight <= 500

// var isMobile = innerWidth <= 1366 && innerHeight <= 1366

// var isPC = innerWidth > 1366 || innerHeight > 1366

// function fct_isPC() { return innerWidth > 1366 || innerHeight > 1366 }

var screen_small_widthLimit = 501; // Largura máxima de um celular. // VÍNCULO: Váriável SCSS

var screen_horizontalMode
var screen_verticalMode

var principalWindowStyle

var transitionDuration_window = 0.2 // segundos

var color_theme = 'DeepSkyBlue' // VÍNCULO: Váriável SCSS

var margin_vertical = 16 // VÍNCULO: Váriável SCSS
var margin_horizontal = 20 // VÍNCULO: Váriável SCSS

/*
◈──────────────────────────────────────────────────────◈
TODO: Console++
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
TODO: Is At Framework
◈──────────────────────────────────────────────────────◈ */
    
var isAtFramework
var URL_begin

if (document.querySelector('h1 a span')) {

    var isAtFramework = (document.querySelector('h1 a span').textContent.toLowerCase() === 'framework')
}

if (isAtFramework) {
    
    // console.log('Você está no Framework')
    URL_begin = ''

} else {
    
    URL_begin = 'framework/'
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Resize Events
◈──────────────────────────────────────────────────────◈ */

var screen_actualMode

if (window.innerWidth >= screen_small_widthLimit) 
{ screen_horizontalMode = true;  screen_verticalMode = !screen_horizontalMode; screen_actualMode = 'Horizontal' } else 
{ screen_horizontalMode = false; screen_verticalMode = !screen_horizontalMode; screen_actualMode = 'Vertical' }

screen_showModeInConsoleAtFramework(screen_actualMode)

window.onresize = function() {

    screen_UpdateMode()

    var menuLists_ON = document.querySelectorAll('.menuList.list_ON, .menuList .list_ON')

    if (menuLists_ON) {
        
        menuLists_ON.forEach(function (list) {
        
            VHimgs_update(list)
        })
    }
}

function screen_UpdateMode() {

    screen_horizontalMode = (window.innerWidth >= screen_small_widthLimit) ? true : false
    screen_verticalMode = !screen_horizontalMode

    if (screen_horizontalMode && screen_actualMode === 'Vertical') {

        screen_actualMode = 'Horizontal'

        screen_showModeInConsoleAtFramework(screen_actualMode)
        
        screen_modeChanged()

    } else if (screen_verticalMode && screen_actualMode === 'Horizontal') {

        screen_actualMode = 'Vertical'

        screen_showModeInConsoleAtFramework(screen_actualMode)
        
        screen_modeChanged()
    }    
}

function screen_showModeInConsoleAtFramework() {

    if (isAtFramework) {
        
        csl.category(screen_actualMode) // +' screen mode')
        // csl.ticket(screen_actualMode +' screen mode', 'deepSkyBlue')
    }
}

function screen_modeChanged() {

    var menuLists_ON = document.querySelectorAll('.menuList.list_ON, .menuList .list_ON')

    if (menuLists_ON) {

        menuLists_ON.forEach(function (list) {
        
            bugFix_mobile_imgsBorderRadius(list)
        })
    }
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Windows
◈──────────────────────────────────────────────────────◈ */
/* 
if (isAtFramework) {
    
    principalWindowStyle = 'highTech'

} else {
    
    principalWindowStyle = 'hologram'
}
 */
principalWindowStyle = 'hologram'

// Não use a janela no estilo 'highTech_2' pois fica bugando e não tem o que fazer para consertar isso, já tentei de tudo, 
// aconteça o que acontecer não tente consertar esta merda, você só vai perder o seu tempo!!!!

var pWS = principalWindowStyle

var principalWindowTextStyle

if (pWS === 'highTech' || pWS === 'highTech_2' || pWS === 'hologram' || pWS === 'neonAurora' || pWS === 'purpleNeonAurora') {

    principalWindowTextStyle = 'floatingBold'

} else if (pWS === 'skyContrast') {

    principalWindowTextStyle = 'smooth'

} else if (pWS === 'blackScreen') {

    principalWindowTextStyle = 'blueNeon'

} else if (pWS === 'blueToCyanVertical') {

    principalWindowTextStyle = 'floatingHeavy'
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Menu List
◈──────────────────────────────────────────────────────◈ */

// Neste tópico, os elementos <li> são chamados de 'options'.

var menuLists = document.querySelectorAll('.menuList')

if (menuLists) {
    menuLists.forEach(function (menuList) {

        var btns = menuList.querySelectorAll(':scope button')
        var subLists = menuList.querySelectorAll(':scope ul')
        var closeBtnHTML = '<li class="close"><button><span>Close</span></button></li>' // '<li class="close"><button aria-label="Close menu"><span style="font-size: 21px;">𐄂</span></button></li>'
        var backBtnHTML = '<li class="back"><button><span>Back</span></button></li>'
        var minWidth_menuList = '240px' // VÍNCULO: Váriável SCSS
        menuList.isNotTransitionRunning = true

        menuList.classList.add('list_ON')
        menuList.style.transition = `transform ${transitionDuration_window}s`

        if (menuList.classList.contains('closeOption')) {
            
            menuList.insertAdjacentHTML('beforeend', closeBtnHTML)

            subLists.forEach(function (subList) {
            
                subList.insertAdjacentHTML('beforeend', backBtnHTML)
                subList.classList.add('backOption')
                subList.insertAdjacentHTML('beforeend', closeBtnHTML)
            })

        } else {
            
            subLists.forEach(function (subList) {
            
                subList.insertAdjacentHTML('beforeend', backBtnHTML)
                subList.classList.add('backOption')
            })
        }

        { // Styles

            menuList.classList.add('window_'+ principalWindowStyle)

            var anchors_and_btns = menuList.querySelectorAll(':scope a, :scope button')

            anchors_and_btns.forEach(function (item) {
            
                item.classList.add('windowText_'+ principalWindowTextStyle)
            })
        }

        var options = menuList.querySelectorAll(':scope li') // Deve ser lido após os botões 'back' e 'close' serem adicionados.

        imgsCSSclasses_adjusts(menuList)
    
        menuList.addEventListener('click', function fct(evt) {

            if (menuList.isNotTransitionRunning) {

                var optionClicked = getNearestAncestor(evt.target, 'li')

                if (optionClicked) {

                    var listClicked = optionClicked.parentElement

                    if (optionClicked.firstElementChild.tagName === 'BUTTON') {
                        
                        menuList.isNotTransitionRunning = false
                    
                        if (optionClicked.classList.contains('directory')) {
                            
                            optionClicked.classList.add('clicked')

                            var unclickedOptions = listClicked.querySelectorAll(':scope > li:not(.clicked)')
                            
                            optionClicked.classList.remove('clicked')

                            menuList.style.transform = 'scaleY(0)'

                            setTimeout(function() {

                                optionClicked.classList.add('borderTopWidth_0px')

                                unclickedOptions.forEach(function (unclickedOption) {
                                
                                    unclickedOption.style.display = 'none'
                                })
            
                                var nextList = optionClicked.querySelector(':scope ul')

                                if (
                                    nextList.classList.contains('imgs_noText_V') || 
                                    nextList.classList.contains('imgs_noText_VH') || 
                                    nextList.classList.contains('imgs_textAside_V') || 
                                    nextList.classList.contains('imgs_textBelow_V') || 
                                    nextList.classList.contains('imgs_textBelow_VH')) {
                                    
                                    menuList.style.minWidth = 'auto'

                                } else {
                                    menuList.style.minWidth = minWidth_menuList
                                }
            
                                nextList.style.display = 'block'
                                nextList.style.width = 'auto'
                                nextList.style.height = 'auto'
                                nextList.style.overflow = 'initial'

                                listClicked.classList.remove('list_ON')
                                nextList.classList.add('list_ON')
            
                                optionClicked.firstElementChild.style.display = 'none' // ⇔ <button>.style.display = 'none'

                                if (listClicked.classList.contains('imgs_textBelow_V') || listClicked.classList.contains('imgs_textBelow_VH')) {

                                    var listClicked_options = listClicked.querySelectorAll(':scope > li:not(.back):not(.close)')

                                    listClicked_options.forEach(function (listClicked_option) {
                                    
                                        listClicked_option.style.width = ''
                                    })
                                }

                                imgsCSSclasses_adjusts(nextList)

                                //····································································◈ Reabrir lista
                                
                                menuList.style.transform = ''

                                setTimeout(function() {

                                    menuList.isNotTransitionRunning = true
            
                                }, transitionDuration_window * 1000)
                                
                            }, transitionDuration_window * 1000)

                        } else if (optionClicked.classList.contains('back')) {

                            menuList.style.transform = 'scaleY(0)'

                            setTimeout(function() {

                                listClicked.parentElement.classList.remove('borderTopWidth_0px')

                                var previousList = listClicked.parentElement.parentElement
                                
                                var previousList_options = previousList.querySelectorAll(':scope > li')

                                previousList_options.forEach(function (option) {
                                
                                    option.style.display = ''
                                })

                                listClicked.style = ''
            
                                listClicked.classList.remove('list_ON')
                                previousList.classList.add('list_ON')

                                listClicked.parentElement.firstElementChild.style = '' // ⇔ <button>.style = ''

                                if (
                                    previousList.classList.contains('imgs_noText_V') || 
                                    previousList.classList.contains('imgs_noText_VH') || 
                                    previousList.classList.contains('imgs_textAside_V') || 
                                    previousList.classList.contains('imgs_textBelow_V') || 
                                    previousList.classList.contains('imgs_textBelow_VH')) {
                                    
                                    menuList.style.minWidth = 'auto'

                                } else {
                                    menuList.style.minWidth = minWidth_menuList
                                }

                                if ( 
                                    // Bug fix: Este bug só acontece em uma lista 'imgs_textBelow_VH', ela precisa estar no modo horizontal, ter
                                    // o botão de fechar ou o de voltar, ter a barra de rolagem horizontal e no PC. Acontece na (1ª lista da) lista de 
                                    // menu e em suas sub-listas, porém, só acontece na 1ª lista da lista de menu quando for em uma janela de lista 
                                    // de menu (como p. ex., a janela de menu de navegação).
                                    // Quando se está em uma lista 'imgs_textBelow_VH', o bug geralmente acontece ao se clicar na opção de maior 
                                    // largura e depois voltar, e depois clicar em outra opção e voltar novamente, isso faz com que apareça um espaço 
                                    // vazio no lado direito da última opção da lista.
                                    
                                    previousList.classList.contains('imgs_textBelow_VH') && 
                                    screen_horizontalMode &&
                                    (previousList.classList.contains('backOption') || previousList.classList.contains('closeOption')) ) {

                                    setTimeout(function() {

                                        imgsCSSclasses_adjusts(previousList)
                                        
                                    }, 300) // Tempo mínimo em ms p/ corrigir o bug em determinado navegador de PC: Chrome: 46, FF e Edge: 290, Safari: 300.
                                    
                                    setTimeout(function() {

                                        menuList.style.transform = ''

                                    }, 250)

                                } else {

                                    imgsCSSclasses_adjusts(previousList)
                                    
                                    menuList.style.transform = ''
                                }

                                setTimeout(function() {

                                    menuList.isNotTransitionRunning = true
            
                                }, transitionDuration_window * 1000)
                                
                            }, transitionDuration_window * 1000)

                        } else if (optionClicked.classList.contains('conclusion') || optionClicked.classList.contains('close')) {

                            fct_menuList_closeOption(menuList, options, btns, subLists, listClicked, transitionDuration_window)
                            
                        } else {
                            menuList.isNotTransitionRunning = true
                        }
                    
                    } else if (optionClicked.firstElementChild.tagName === 'A') {

                        // A classe 'linkAnchor' é necessária para menuLists como janelas (p. ex., o menu de <nav>).

                        if (optionClicked.firstElementChild.classList.contains('linkAnchor')) { 
                        
                            menuList.isNotTransitionRunning = false
                            
                            fct_menuList_closeOption(menuList, options, btns, subLists, listClicked, transitionDuration_window)

                            setTimeout(function() {
                                
                                location.href = optionClicked.firstElementChild.href

                            }, transitionDuration_window * 1000)
                        }
                    }
                }
            }
        })

        menuList.style.visibility = 'visible'
    })
}

function fct_menuList_closeOption(menuList, options, btns, subLists, listClicked, transitionDuration_window) {

    menuList.style.transform = 'scaleY(0)'

    setTimeout(function() {

        options.forEach(function (option) {
        
            option.classList.remove('borderTopWidth_0px')
            option.style.display = ''
        })

        btns.forEach(function (btn) {
        
            btn.style = ''
        })

        subLists.forEach(function (subList) {
        
            subList.style = ''
        })

        listClicked.classList.remove('list_ON')
    
        if (
            menuList.classList.contains('imgs_noText_V') || 
            menuList.classList.contains('imgs_noText_VH') || 
            menuList.classList.contains('imgs_textAside_V') || 
            menuList.classList.contains('imgs_textBelow_V') || 
            menuList.classList.contains('imgs_textBelow_VH')) {
            
            menuList.style.minWidth = ''
        }
        
        menuList.classList.add('display_none')
        menuList.style.transform = ''
        menuList.isNotTransitionRunning = true
        
    }, transitionDuration_window * 1000)
}

function imgs_textBelow_VH_allOptionsWithLargestWidth(list) {

    var imgOptions = list.querySelectorAll(':scope > li:not(.back):not(.close)')
        
    if (list.classList.contains('imgs_textBelow_VH')) {

        if (!list.imgOptions_largestWidthValue) {
                
            imgOptions.forEach(function (imgOption) { // Bug fix: Este bug só acontece quando a janela de lista de menu é aberta 
                // (como quando a janela de menu de navegação é aberta). Por alguma razão quando a janela é aberta, ela fica muito 
                // comprimida, menor que o espaço necessário para conter seu conteúdo.
                    
                imgOption.style.width = ''
            })
            
            list.imgOptions_largestWidthValue = getLargestWidthAmongElements(imgOptions)
            
            { // Código de debug:

            // console.log(imgOptions)
            
            // imgOptions.forEach(function (opt) {
            
            //     console.log(Number(getComputedStyle(opt).getPropertyValue('width').slice(0,-2)))
            // })

            // csl.log('list.imgOptions_largestWidthValue = '+ list.imgOptions_largestWidthValue)
            }         
        }
            
        imgOptions.forEach(function (imgOption) { // Bug fix: Fiz com que o maior valor de largura das opções da lista ficasse gravado 
            // nela usando propriedade ao invés de usar variável para não precisar calcular este valor novamente sempre que esta função
            // for chamada, isso corrige um bug que acontecia quando se clicava em uma opção quando a janela de visualização estivesse 
            // maior que 'screen_small_widthLimit' e depois voltasse com a janela de visualização menor que 'screen_small_widthLimit'.
            // 
            // Isso também corrige um bug que acontece quando uma janela de lista de menu é aberta e depois fechada quando a janela 
            // de visualização é maior que 'screen_small_widthLimit' e depois é aberta quando a janela de visualização é menor que 
            // 'screen_small_widthLimit', as propriedades 'width' das opções da janela de lista de menu ficam grandes o suficiente 
            // até ela (junto com suas margens horizontais) preencher a largura da janela de visualização.

            imgOption.style.width = (list.imgOptions_largestWidthValue) +'px'
        })
    }
}

function bugFix_windowStyle_highTech(list) {
    
    //····································································◈ 

    if (list.classList.contains('window_highTech')) {

        var internalLists = list.querySelectorAll(':scope ul')

        bugFix(list)

        internalLists.forEach(function (list) {
        
            bugFix(list)
        })
        
        function bugFix(list) {
                
            var imgs = list.querySelectorAll(':scope > li:not(.back):not(.close) > * > img, :scope > li:not(.back):not(.close) > * > .img')
            var img_first = imgs[0]
            var img_last = imgs[imgs.length - 1]

            if (list.classList.contains('imgs_noText_V') || list.classList.contains('imgs_textAside_V') || list.classList.contains('imgs_textBelow_V')) {

                img_first.style.marginTop = '3px'

                if (!(list.classList.contains('imgs_textBelow_V') || list.classList.contains('backOption') || list.classList.contains('closeOption'))) {
                
                    img_last.style.marginBottom = '3px'
                }

                imgs.forEach(function (img) {
                
                    img.style.marginLeft = '3px'

                    if (list.classList.contains('imgs_noText_V') || list.classList.contains('imgs_textBelow_V')) {

                        img.style.marginRight = '3px'
                    }
                })

            } else if (list.classList.contains('imgs_noText_VH') || list.classList.contains('imgs_textBelow_VH')) {

                if (!isAtFramework) {
                    
                    lightbox(`Não use classes de lista de menu de imagens que possuam modo horizontal em janelas com o estilo <code class="highlight">highTech</code>.`)
                }
            }
        }
    }
}

function VHimgs_update(list) {

    if ( (list.classList.contains('imgs_noText_VH')) || (list.classList.contains('imgs_textBelow_VH')) ) {

        var optionBack = list.querySelector(':scope > li.back')
        var optionClose = list.querySelector(':scope > li.close')
        var optionBack_child = list.querySelector(':scope > li.back > *')
        var optionClose_child = list.querySelector(':scope > li.close > *')

        if (screen_horizontalMode) {
            
            if (optionBack || optionClose) {

                var imgOptions = list.querySelectorAll(':scope > li:not(.back):not(.close)')

                var totalWidthOptions = 0

                imgOptions.forEach(function (option) {
                    
                    totalWidthOptions += Number(getComputedStyle(option).getPropertyValue('width').slice(0,-2))
                })

                { // Código de debug:

                    // if (imgOptions.length === 3) {
                            
                    //     csl.log(_,

                    //         // imgOptions.length +' + '+ Number(getComputedStyle(imgOptions[0]).getPropertyValue('width').slice(0,-2)) +' = '+
                    //         // imgOptions.length * Number(getComputedStyle(imgOptions[0]).getPropertyValue('width').slice(0,-2)),

                    //         Number(getComputedStyle(imgOptions[0]).getPropertyValue('width').slice(0,-2)) +' + '+ 
                    //         Number(getComputedStyle(imgOptions[1]).getPropertyValue('width').slice(0,-2)) +' + '+ 
                    //         Number(getComputedStyle(imgOptions[2]).getPropertyValue('width').slice(0,-2)) +' = '+
                    //         (Number(getComputedStyle(imgOptions[0]).getPropertyValue('width').slice(0,-2)) +
                    //         Number(getComputedStyle(imgOptions[1]).getPropertyValue('width').slice(0,-2)) +
                    //         Number(getComputedStyle(imgOptions[2]).getPropertyValue('width').slice(0,-2))),
                        
                    //         'totalWidthOptions = '+ totalWidthOptions
                    //     )
                    // }

                    // console.clear()
                }

                var optionBackAndClose_child_width = 
                    Number(getComputedStyle(list).getPropertyValue('width').slice(0,-2)) 
                    - Number(getComputedStyle(list).getPropertyValue('border-left-width').slice(0,-2)) 
                    - Number(getComputedStyle(list).getPropertyValue('border-right-width').slice(0,-2)) 
                    - Number(getComputedStyle(list).getPropertyValue('padding-left').slice(0,-2)) 
                    - Number(getComputedStyle(list).getPropertyValue('padding-right').slice(0,-2)) 
                    +'px'

                { // Código de debug:

                    // csl.log(
                    //     _
                    //     , optionBackAndClose_child_width
                    //     , Number(getComputedStyle(list).getPropertyValue('width').slice(0,-2)) 
                    //     // , Number(getComputedStyle(list).getPropertyValue('border-left-width').slice(0,-2)) 
                    //     // , Number(getComputedStyle(list).getPropertyValue('border-right-width').slice(0,-2)) 
                    //     // , Number(getComputedStyle(list).getPropertyValue('padding-left').slice(0,-2)) 
                    //     // , Number(getComputedStyle(list).getPropertyValue('padding-right').slice(0,-2))
                    // )
                }
                
                if (optionBack) {

                    optionBack.style.minWidth = totalWidthOptions +'px'

                    optionBack_child.style.width = optionBackAndClose_child_width
                }
                
                if (optionClose) {

                    optionClose.style.minWidth = totalWidthOptions +'px'

                    optionClose_child.style.width = optionBackAndClose_child_width
                }
            }

        } else {

            if (optionBack) {

                optionBack.style.minWidth = ''
                optionBack_child.style.width = ''
            }

            if (optionClose) {

                optionClose.style.minWidth = ''
                optionClose_child.style.width = ''
            }
        }
    }
}

function bugFix_mobile_imgsBorderRadius(list) { // Bug fix: Isso corrige o problema de que no iPhone as imagens
    // sobrepõem as bordas exteriores de sua lista de menu.

    var menuList = list

    while(!menuList.classList.contains('menuList')){

        menuList = menuList.parentElement
    }
    
    var menuList_borderRadiusValue = Number(getComputedStyle(menuList).getPropertyValue('border-top-left-radius').slice(0,-2))

    { // Bug fix: Comentei este bloco porque ele buga as janelas de lista de menu com a classe 'imgs_noText_VH' no iPhone.

        // Obs.: Este bloco pode ser comentado sem problema nenhum, apenas o fiz para ter um controle melhor do 
        // estilo 'border-radius' aplicado na lista (por que desta forma se funcionar corretamente no PC, com certeza 
        // também irá funcionar direito no iPhone).

        // list.classList.add('bugFix_mobile_imgsBorderRadius')

        // list.style.borderRadius = menuList_borderRadiusValue +'px'
    }

    if (menuList.classList.contains('window_highTech')) {
    
        var fit = 5
    
    } else if (menuList.classList.contains('window_skyContrast')) {
        
        var fit = 1
    
    } else {
        
        var fit = 3
    }
    
    if (list.classList.contains('imgs_noText_V') || list.classList.contains('imgs_textAside_V')) {

        if (!list.imgs_VmodeOnly_bordersFixed) {

            var imgs = list.querySelectorAll(':scope > li:not(.back):not(.close) > *  > img, :scope > li:not(.back):not(.close) > *  > .img')
            var img_first = imgs[0]
            var img_last = imgs[imgs.length - 1]

            img_first.style.borderTopLeftRadius = (menuList_borderRadiusValue - fit) +'px'
            
            if (list.classList.contains('imgs_noText_V')) {

                img_first.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'
            }

            if (!list.classList.contains('closeOption') && !list.classList.contains('backOption')) {

                img_last.style.borderBottomLeftRadius = (menuList_borderRadiusValue - fit) +'px'
            
                if (list.classList.contains('imgs_noText_V')) {
                    
                    img_last.style.borderBottomRightRadius = (menuList_borderRadiusValue - fit) +'px'
                }
            }

            list.imgs_VmodeOnly_bordersFixed = true
        }
    }

    if (list.classList.contains('imgs_noText_VH') || list.classList.contains('imgs_textBelow_V') || list.classList.contains('imgs_textBelow_VH')) {

        var imgs = list.querySelectorAll(':scope > li:not(.back):not(.close) > * > img, :scope > li:not(.back):not(.close) > * > .img')
        var img_first = imgs[0]
        var img_last = imgs[imgs.length - 1]

        if (list.classList.contains('imgs_noText_VH')) {

            { //····································································◈ Desfaz os borderRadius

                img_first.style.borderTopRightRadius = ''
                img_first.style.borderBottomLeftRadius = ''
                img_last.style.borderTopRightRadius = ''
                img_last.style.borderBottomLeftRadius = ''
                img_last.style.borderBottomRightRadius = ''
            }
            
            img_first.style.borderTopLeftRadius = (menuList_borderRadiusValue - fit) +'px'

            if (!list.classList.contains('closeOption') && !list.classList.contains('backOption')) {

                img_last.style.borderBottomRightRadius = (menuList_borderRadiusValue - fit) +'px'
            }

            if (screen_verticalMode) {

                img_first.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'

                if (!list.classList.contains('closeOption') && !list.classList.contains('backOption')) {

                    img_last.style.borderBottomLeftRadius = (menuList_borderRadiusValue - fit) +'px'
                }
            
            } else if (screen_horizontalMode) {
                
                img_last.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'

                if (!list.classList.contains('closeOption') && !list.classList.contains('backOption')) {

                    img_first.style.borderBottomLeftRadius = (menuList_borderRadiusValue - fit) +'px'
                }
            }
        }

        if (list.classList.contains('imgs_textBelow_V') || list.classList.contains('imgs_textBelow_VH')) {
               
            var texts = list.querySelectorAll(':scope > li:not(.back):not(.close) > * > span')

            list.imgs_largestWidthValue = getLargestWidthAmongElements(imgs)
            list.texts_largestWidthValue = getLargestWidthAmongElements(texts)
            list.texts_horizontalSpace = list.texts_largestWidthValue + (2 * Number(getComputedStyle(texts[0]).getPropertyValue('margin-left').slice(0,-2)))

            { //····································································◈ Desfaz os borderRadius

                img_first.style.borderTopLeftRadius = ''
                img_first.style.borderTopRightRadius = ''
                img_last.style.borderTopRightRadius = ''
            }

            if (list.imgs_largestWidthValue >= list.texts_horizontalSpace) {

                if (list.classList.contains('imgs_textBelow_V')) {
                
                    img_first.style.borderTopLeftRadius = (menuList_borderRadiusValue - fit) +'px'
                    img_first.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'                    
                
                } else if (list.classList.contains('imgs_textBelow_VH')) {
                
                    img_first.style.borderTopLeftRadius = (menuList_borderRadiusValue - fit) +'px'

                    if (screen_verticalMode) {
                    
                        img_first.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'
                    
                    } else if (screen_horizontalMode) {
                    
                        img_last.style.borderTopRightRadius = (menuList_borderRadiusValue - fit) +'px'    
                    }
                }
            }
        }
    }
}

function imgsCSSclasses_adjusts(list) {

    bugFix_windowStyle_highTech(list)
    
    imgs_textBelow_VH_allOptionsWithLargestWidth(list)

    VHimgs_update(list)

    bugFix_mobile_imgsBorderRadius(list)
}

//··································◈ Função que retorna a maior largura dentre os elementos especificados.

function getLargestWidthAmongElements(elements) {

    var element_width_current
    var element_width_wider = 0

    elements.forEach(function (element) {

    element_width_current = Number(getComputedStyle(element).getPropertyValue('width').slice(0,-2))

    // console.log(element)
    // console.log(element_width_current)

    if (element_width_current > element_width_wider) {

        element_width_wider = element_width_current
    }

    // console.log('element_width_wider: '+ element_width_wider)
    })

    return element_width_wider
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Header
◈──────────────────────────────────────────────────────◈ */

{ //····································································◈ Tornar a logo maiúscula

    if (document.querySelector('h1 a span')) {

        document.querySelector('h1 a span').textContent = document.querySelector('h1 a span').textContent.toUpperCase()

        document.querySelector('h1 a span').style.marginBottom = '2px'
    }
}

var header = document.querySelector('header')

if (header) {
    
    window.addEventListener("load", function() {

        header.classList.add('show')
    })    
}


/*  
◈──────────────────────────────────────────────────────◈
TODO: Navigation
◈──────────────────────────────────────────────────────◈ */

/*  TODO:    1 ▶  HTML - Open Button
◈──────────────────────────────────────────────────────◈ */

var nav = document.querySelector('nav')

if (nav) {

    nav.insertAdjacentHTML('beforebegin', `
    
        <button class="nav_openBtn button_icon rounded">
            <img class="piece_icon" src="${URL_begin}images/icons/menu.png" alt="Menu button">
        </button>
    `)
}

/*  TODO:    1 ▶  JS
◈──────────────────────────────────────────────────────◈ */

var nav_openBtn = document.querySelector('.nav_openBtn')

if (nav_openBtn) {

    var size_nav_openBtn = 56; // VÍNCULO: Váriável SCSS
    var offset_nav_openBtn_show = // VÍNCULO: Váriável SCSS 
    size_nav_openBtn;
    // size_nav_openBtn * 3/4;
    // size_nav_openBtn/2;
    var nav = document.querySelector('nav')
    var nav_box = nav.querySelector(':scope .box')
    var nav_menu = nav.querySelector(':scope ul')
    // var nav_menu_isOpen = false
    var options = nav_menu.querySelectorAll(':scope li')
    var btns = nav_menu.querySelectorAll(':scope button')
    var subLists = nav_menu.querySelectorAll(':scope ul')
    var linkAnchors = nav_menu.querySelectorAll(':scope a:not([href^="#"]):not([href=""])') // Variável necessária para 
    // animar a janela ao fechá-la quando clicar em um link dela para outra página, e também para que ela esteja fechada 
    //ao clicar no botão de voltar quando tiver clicado em um link dela para outra página.

    linkAnchors.forEach(function (a) {

        a.addEventListener('click', function(evt) {

            evt.preventDefault()

            a.classList.add('linkAnchor')
        })
    })

    window.addEventListener("load", function() {
            
        nav_openBtn.style.transitionDuration = '1.1s'
        nav_openBtn.style.display = 'inline-flex'

        setTimeout(function() {
            nav_openBtn.classList.add('show')
        })

        //····································································◈ Evitar que o botão de abrir a navegação sobreponha o rodapé.
        {
            var nav_openBtn_space // Espaço extra no final da página pro 'nav_openBtn'.
            var nav_openBtn_base // Bg da área no final da página pro 'nav_openBtn'.
            var nav_openBtn_spaceAndBase_height = 
            (size_nav_openBtn + offset_nav_openBtn_show)
            // (size_nav_openBtn + offset_nav_openBtn_show + margin_vertical)
            // (size_nav_openBtn + 2 * offset_nav_openBtn_show)

            /* 
            Desisti desta parte comentada porque além de funcionar direito apenas no PC, quando a altura da janela de 
            visualização fosse muito próxima da altura total da página, o usuário poderia não perceber que descendo a 
            página até o fim o botão de abrir a navegação iria ocultar-se.

            setInterval(function() {
                
                if (fct_isPC()) { csl.log('PC')

                    if (!nav_openBtn_space) { 

                        if (scrollY + document.documentElement.clientHeight + 0 < html.scrollHeight) { // Tem overflowY e não está no final da página.
                            
                            nav_openBtn.classList.add('show')

                        } else {

                            if (scrollY === 0) { // Não tem overflowY
                            
                                nav_openBtn.classList.add('show')

                                var html_height = Number(getComputedStyle(html).getPropertyValue('height').slice(0,-2))

                                var voidSpaceY = html.scrollHeight - html_height

                                // csl.log(html.scrollHeight, html_height, voidSpaceY, nav_openBtn_spaceAndBase_height, _)

                                if (voidSpaceY < nav_openBtn_spaceAndBase_height) { // Espaço vertical vazio muito pequeno para o botão.

                                    add_nav_openBtn_spaceAndBase()
                                }

                            } else { // Tem overflowY e está no final da página.
                                
                                nav_openBtn.classList.remove('show')
                            }
                        }

                    } else if (html.scrollHeight - document.documentElement.clientHeight > nav_openBtn_spaceAndBase_height) {
                        
                        nav_openBtn_space.remove()
                        nav_openBtn_space = null
                    }

                } else if (!nav_openBtn_space) { */

                    add_nav_openBtn_spaceAndBase()
                    /* 
                }
            }, 1000)  */
           
            function add_nav_openBtn_spaceAndBase() {
                                        
                nav_openBtn_space = document.createElement('div')
                                        
                nav_openBtn_space.classList.add('nav_openBtn_space')
                
                nav_openBtn_space.style.height = (nav_openBtn_spaceAndBase_height) +'px'

                document.body.insertAdjacentElement('beforeend', nav_openBtn_space)

                                        
                nav_openBtn_base = document.createElement('div')
                                        
                nav_openBtn_base.classList.add('nav_openBtn_base')
                
                nav_openBtn_base.style.height = (nav_openBtn_spaceAndBase_height) +'px'

                html.insertAdjacentElement('beforeend', nav_openBtn_base)
            }
        }
    })

    nav_openBtn.addEventListener('click', function() {

        // nav_menu_isOpen = true
        nav_openBtn.classList.add('on')
        // html.classList.add('overflow_hidden') 
        nav_box.style.transition = `background-color 0.3s`
        nav_menu.style.transform = 'scaleY(0)'

        nav.style.display = 'block'
        nav_menu.classList.remove('display_none')
        nav_menu.classList.add('list_ON')
        imgsCSSclasses_adjusts(nav_menu)

        setTimeout(function() {

            nav_openBtn.style.transitionDuration = '0.5s'
            // nav_openBtn.classList.remove('show')
            // nav_box.style.backgroundColor = 'hsla(0, 0%, 100%, 0.7)'
            nav_menu.style.transform = ''

            nav_box.addEventListener('click', function(evt) {

                if (evt.target === nav_box) {

                    if (nav_menu.classList.contains('list_ON')) {
                        
                        var listClicked = nav_menu

                    } else {
                        
                        var listClicked = nav_menu.querySelector(':scope .list_ON')
                    }

                    fct_menuList_closeOption(nav_menu, options, btns, subLists, listClicked, transitionDuration_window)
                    closeNav()

                } else {

                    var optionClicked = getNearestAncestor(evt.target, 'li')

                    if (optionClicked) {

                        if (optionClicked.classList.contains('conclusion') || optionClicked.classList.contains('close') || optionClicked.firstElementChild.classList.contains('linkAnchor')) {
                            
                            closeNav()
                        }
                    }
                }
            })

        }, 100) // Bug fix: Se não deixar esse tempo aqui buga a transição no Firefox de PC.
    })

    function closeNav() {

        // nav_menu_isOpen = false
        // html.classList.remove('overflow_hidden') 
        // nav_box.style.backgroundColor = ''
                
        setTimeout(function() {

            nav.style.display = 'none'
            // nav_openBtn.classList.add('show')
            nav_openBtn.classList.remove('on')

        }, 300)
    }
}



/* 2º <nav> (incompleto):

var nM = document.querySelector('.nav_menu')

if (nM) {
    var nav_expand = 565 // VÍNCULO: Váriável SCSS
    var transitionDuration_nav_btnANDmenu = 0.5 // segundos // VÍNCULO: Váriável SCSS

    var nM_expand = nav_expand
    var nM_isNotTransitionRunning = true
    var nM_mode = 'Compact' // 'Compact' ou 'Expanded'
    var nM_closed = true
    var nM_btn = document.querySelector(':scope .nav_menuBtn')
    var nM_btn_icons = nM_btn.querySelectorAll(':scope *')
    var nM_ulOfOptions = nM.querySelector(':scope .ulOfOptions')
    // var nM_ulsOfSubOptions = nM.querySelectorAll(':scope .ulOfSubOptions')
    // var subOptions = nM.querySelectorAll(':scope .subOption')

    var nM_ulOfOptions_linedUp_spans = nM.querySelectorAll(':scope .ulOfOptions.linedUp .option > * > span')
    var nM_ulsOfSubOptions_linedUp = nM.querySelectorAll(':scope .ulOfSubOptions.linedUp')

    //····································································◈ 

    function nM_resize() {
        
        updateNavMenuMode()
    }

    updateNavMenuMode()

    function updateNavMenuMode() {
        
        if(window.innerWidth >= nM_expand) {
        
            nM_mode = 'Expanded'

        } else {

            nM_mode = 'Compact'
        }
    }

    function undoCompactModeChanges() {  // <----------------------------------------------------------------------

        nM_closed = true

        //····································································◈ Desfaz estilos da classe CSS 'linedUp':
        
        if (nM_ulOfOptions_linedUp_spans) {

            nM_ulOfOptions_linedUp_spans.forEach(function (span) { span.style = '' })
        }
        
        if (nM_ulsOfSubOptions_linedUp) {
                
            nM_ulsOfSubOptions_linedUp.forEach(function (ul) {
            
                var currentUL_subOptions_spans = ul.querySelectorAll(':scope .subOption span')

                currentUL_subOptions_spans.forEach(function (span) { span.style = '' })
            })
        }

        //····································································◈ Desfaz os estilos aplicados ao clicar no botão de menu:
        
        nM.style = ''
        nM_ulOfOptions.style = ''
    }

    //····································································◈ Classe CSS 'linedUp'
    
    if (nM_mode === 'Compact') {

        //··································◈ ulOfOptions
            
        if (nM_ulOfOptions_linedUp_spans) {
            
            var span_width_wider = GetLargestWidthAmongElements(nM_ulOfOptions_linedUp_spans)

            nM_ulOfOptions_linedUp_spans.forEach(function (span) {

                span.style.width = span_width_wider + 7 +'px' // Bug fix: Adicionei 7 pixels pq tava bugando no Edge e no Safari.
            })
        }

        //··································◈ ulsOfSubOptions
            
        if (nM_ulsOfSubOptions_linedUp) {
                
            nM_ulsOfSubOptions_linedUp.forEach(function (ul) {
            
                var currentUL_subOptions_spans = ul.querySelectorAll(':scope .subOption span')
            
                // console.log('-----------------------')
                var span_width_wider = GetLargestWidthAmongElements(currentUL_subOptions_spans)

                currentUL_subOptions_spans.forEach(function (span) {

                    span.style.width = span_width_wider +'px'
                })
            })
        }

        //··································◈ Função que retorna a maior largura dentre os elementos especificados.

        function GetLargestWidthAmongElements(elements) {
            
            var element_width_current
            var element_width_wider = 0

            elements.forEach(function (element) {
            
                element_width_current = Number(getComputedStyle(element).getPropertyValue('width').slice(0,-2))

                // console.log(element)
                // console.log(element_width_current)

                if (element_width_current > element_width_wider) {

                    element_width_wider = element_width_current
                }

                // console.log('element_width_wider: '+ element_width_wider)
            })

            return element_width_wider
        }
    }

    //····································································◈ Bug fix: Ver a nota de 'bug fix' de 'opacity' desse elemento no SCSS.

    setTimeout(function() { nM_btn_icons[1].style.opacity = '1' }, transitionDuration_nav_btnANDmenu * 1000 / 2)

    //····································································◈ 

    nM_btn.addEventListener('click', function() {

        if (nM_isNotTransitionRunning) {
            nM_isNotTransitionRunning = false

            if (nM_closed) {
                
                nM.style.height = 'auto'

                setTimeout(function() {

                    nM_btn_icons[0].style.transform = 'translateX(48px)'
                    nM_btn_icons[1].style.transform = 'translateX(0)'
                    nM.style.backgroundColor = 'hsla(0, 0%, 100%, 0.8)'
                    nM_ulOfOptions.style.height = '491px' // '148px'   '197px'  
                    // nM_ulOfOptions.style.height = 'auto'

                    setTimeout(function() {

                        nM_btn_icons[0].style.transition = 'transform '+ (transitionDuration_nav_btnANDmenu / 2) +'s '+ (transitionDuration_nav_btnANDmenu / 2) +'s'
                        nM_btn_icons[1].style.transition = 'transform '+ (transitionDuration_nav_btnANDmenu / 2) +'s'
                        setTimeout(function() { nM_ulOfOptions.style.overflowY = 'auto' }, 200)  // Bug fix: O setTimeout() evita que a barra de rolagem apareça brevemente após abrir o menu de navegação.
                        nM_closed = false



                        nM_isNotTransitionRunning = true
                    }, transitionDuration_nav_btnANDmenu * 1000)
                })                

            } else {

                nM_ulOfOptions.style.overflowY = ''

                setTimeout(function() {

                    nM_btn_icons[0].style.transform = ''
                    nM_btn_icons[1].style.transform = ''
                    nM.style.backgroundColor = ''
                    nM_ulOfOptions.style.height = ''

                    setTimeout(function() {

                        nM.style.height = ''
                        nM_btn_icons[0].style.transition = ''
                        nM_btn_icons[1].style.transition = ''
                        nM_closed = true

                        nM_isNotTransitionRunning = true
                    }, transitionDuration_nav_btnANDmenu * 1000)
                })                
            }
        }
    })
}

// undoCompactModeStyles()
*/



/* 1º <nav>:
{
var nav_menu_compact_enabled = false
var nav_options_anchors = document.querySelectorAll('.nav_menu > ul > li > a')
var nav_divs = document.querySelectorAll('.nav_menu > ul > li > div') 
var nav_options_anchorClicked_index = 'none'
// var bg_nav_selector = 'url(../../../images/bgs/nav_selector.png)  center/100% 100%' // VÍNCULO: Váriável CSS

var nav_html_scrollbar_allowedEnable = false // <- Variável necessária para impedir que a scrollbar do <html> apareça em momentos em que não se deseja quando se redimensiona a janela de visualização.

document.querySelector('.nav_menuBtn').onclick = function() {

    if(document.querySelector('.nav_menu').style.display !== 'block') { 

        document.querySelector('.nav_menu').style = 'display: block'
        document.querySelector('.nav_menuBtn :nth-child(1)').style = 'display: none'
        document.querySelector('.nav_menuBtn :nth-child(2)').style = 'display: flex'
        html.classList.add('overflow_hidden')
        nav_html_scrollbar_allowedEnable = true
        nav_menu_compact_enabled = true

    } else {

        document.querySelector('.nav_menu').style = 'display: none'
        document.querySelector('.nav_menuBtn :nth-child(2)').style = 'display: none'
        document.querySelector('.nav_menuBtn :nth-child(1)').style = 'display: block'
        html.classList.remove('overflow_hidden')
        nav_menu_compact_enabled = false

        for(var i = 0; i < nav_divs.length; i++) {
            //nav_options_anchors[i].style = ''
            nav_options_anchors[i].classList.remove('nav_selector')
            nav_divs[i].style = 'display: none'
        }

        nav_options_anchorClicked_index = 'none'
    }
}

window.onresize = function() {
    if(window.innerWidth >= nav_expand) {
        //document.querySelector('.nav_menu').style = 'display: inline-block'
         
        if(nav_options_anchorClicked_index === 'none') {

            if(nav_html_scrollbar_allowedEnable === true) {

                html.classList.remove('overflow_hidden')

                nav_html_scrollbar_allowedEnable = false
            }
        }

    } else {

        if(nav_menu_compact_enabled === true) {
            document.querySelector('.nav_menu').style = 'display: block'
            document.querySelector('.nav_menuBtn :nth-child(1)').style = 'display: none'
            document.querySelector('.nav_menuBtn :nth-child(2)').style = 'display: flex'
            html.classList.add('overflow_hidden')
            nav_html_scrollbar_allowedEnable = true

        } else {
            document.querySelector('.nav_menu').style = 'display: none'
            document.querySelector('.nav_menuBtn :nth-child(2)').style = 'display: none'
            document.querySelector('.nav_menuBtn :nth-child(1)').style = 'display: block'
        }
    }

    if(nav_options_anchorClicked_index !== 'none') { 
        if(window.innerWidth >= nav_expand) {
            //nav_options_anchors[nav_options_anchorClicked_index].style = 
            //'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 4px; padding-right: 4px; margin-top: 4px'
            nav_options_anchors[nav_options_anchorClicked_index].classList.add('nav_selector')

        } else { 
            //nav_options_anchors[nav_options_anchorClicked_index].style = 'background: 0' 
            nav_options_anchors[nav_options_anchorClicked_index].classList.remove('nav_selector')
        }
    }
} 

function nav_menu_options(arg) { 
    
    for(var i = 0; i < nav_options_anchors.length; i++) { // <- Verifica qual <a> de categoria foi clicado.
        if(arg === nav_options_anchors[i]) {

            nav_options_anchorClicked_index = i
            break  
        }
    }

    if(nav_divs[nav_options_anchorClicked_index].style.display !== 'block') { // <- Habilita/desabilita o <div> de sub opção 
                                                                           // correspondente ao <a> de categoria clicado.

        for(var i = 0; i < nav_divs.length; i++) { // <- Desabilita todos os <div>'s de sub opção.
            // nav_options_anchors[i].style = ''
            nav_options_anchors[i].classList.remove('nav_selector')
            nav_divs[i].style = 'display: none'
        }

        if(window.innerWidth >= nav_expand) { 
            //nav_options_anchors[nav_options_anchorClicked_index].style = 
            //'background: '+ bg_nav_selector +'; height: 40px; border-radius: 15px; padding-left: 5px; padding-right: 5px; margin-top: 4px'
            nav_options_anchors[nav_options_anchorClicked_index].classList.add('nav_selector')
        }

        nav_divs[nav_options_anchorClicked_index].style = 'display: block'

        nav_menu_compact_enabled = true

        if(window.innerWidth >= nav_expand) { 
            html.classList.add('overflow_hidden')
            nav_html_scrollbar_allowedEnable = true
        }

    } else {
        //nav_options_anchors[nav_options_anchorClicked_index].style = ''
        nav_options_anchors[nav_options_anchorClicked_index].classList.remove('nav_selector')
        nav_divs[nav_options_anchorClicked_index].style = 'display: none'

        nav_options_anchorClicked_index = 'none'

        nav_menu_compact_enabled = false

        if(window.innerWidth >= nav_expand) { 
            html.classList.remove('overflow_hidden')
        }
    }
}

// Fechar janela do menu ao clicar fora dele:
{

var nav_optionsMenu_clicked = false
var nav_subOptionsMenu_clicked = false

// Janela do menu quando HeaderANDnav está compacto:

    document.querySelector('.nav_menu > ul').onclick = function() { // console.log('optionsMenu')
        nav_optionsMenu_clicked = true
    }

    document.querySelector('.nav_menu').onclick = function() { // console.log('.nav_menu')
        if(nav_optionsMenu_clicked === false) {
            document.querySelector('.nav_menu').style = 'display: none'
            document.querySelector('.nav_menuBtn :nth-child(2)').style = 'display: none'
            document.querySelector('.nav_menuBtn :nth-child(1)').style = 'display: block'
            html.classList.remove('overflow_hidden')
            nav_menu_compact_enabled = false

            for(var i = 0; i < nav_divs.length; i++) {
                // nav_options_anchors[i].style = ''
                nav_options_anchors[i].classList.remove('nav_selector')
                nav_divs[i].style = 'display: none'
            }
            nav_options_anchorClicked_index = 'none'
        } else {
            nav_optionsMenu_clicked = false
        }
    }

// Janela do menu quando HeaderANDnav está expandido:

    for(var i = 0; i < nav_divs.length; i++) {

        nav_divs[i].children[0].onclick = function() { // console.log('subOptionsMenu') 
            nav_subOptionsMenu_clicked = true
        }
    }

    for(var i = 0; i < nav_divs.length; i++) {

        nav_divs[i].onclick = function() { // console.log('div')
            if(nav_subOptionsMenu_clicked === false) {

                html.classList.remove('overflow_hidden')
                nav_menu_compact_enabled = false

                for(var i = 0; i < nav_divs.length; i++) {
                    // nav_options_anchors[i].style = ''
                    nav_options_anchors[i].classList.remove('nav_selector')
                    nav_divs[i].style = 'display: none'
                }
                nav_options_anchorClicked_index = 'none'
            } else {
                nav_subOptionsMenu_clicked = false
            }
        }
    }

}

// HeaderANDnav button:

document.querySelector('.nav_menu > ul > li:nth-last-of-type(1)').onclick = function() { // <- Hide HeaderANDnav

    for(var i = 0; i < nav_divs.length; i++) {
        //nav_options_anchors[i].style = ''
        nav_options_anchors[i].classList.remove('nav_selector')
        nav_divs[i].style = 'display: none'
    }

    nav_menu_compact_enabled = false
    nav_options_anchorClicked_index = 'none'

    if(window.innerWidth >= nav_expand) { 
        html.classList.remove('overflow_hidden')
    }
    
    document.querySelector('.headerANDnav').style.display = 'none'
    document.querySelector('.hackBlock').style.display = 'none'
    document.querySelector('.headerANDnav_btn').style.display = 'block'
}

document.querySelector('.headerANDnav_btn').onclick = function() { // <- Show HeaderANDnav
    document.querySelector('.headerANDnav').style.display = 'block'
    document.querySelector('.hackBlock').style.display = 'block'
    document.querySelector('.headerANDnav_btn').style.display = 'none'
}

} */


/*
◈──────────────────────────────────────────────────────◈
TODO: Footer [OFF]
◈──────────────────────────────────────────────────────◈ */

/* 
var footer = document.querySelector('footer')

if (footer) {
    
    if (!isAtFramework) {

        var footer_icons = footer.querySelectorAll(':scope img')

        footer_icons.forEach(function (icon) {
        
            icon.src = URL_begin + icon.src
        })
    }
} 
*/

/*
◈──────────────────────────────────────────────────────◈
TODO: Displays Codes Of Character Entity References In HTML
◈──────────────────────────────────────────────────────◈ */

var charEntityRefs = document.querySelectorAll('.charEntityRef')

if (charEntityRefs) {
    charEntityRefs.forEach(function (ref) {
    
        if (ref.textContent === ' ') { ref.textContent = '&nbsp;' }
        ref.textContent = ref.textContent.replace('<', '&lt;')
        ref.textContent = ref.textContent.replace('>', '&gt;')
        ref.textContent = ref.textContent.replace('"', '&quot;')
        ref.textContent = ref.textContent.replace("'", '&apos;')
        if (ref.textContent === '&') { ref.textContent = '&amp;' }
    })
}

/*
◈──────────────────────────────────────────────────────◈
TODO: <details> [OFF]
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
TODO: Smart Selector [OFF]
◈──────────────────────────────────────────────────────◈ */

/*** SS(referenceElement, CSSselectorsList) ***/    

SS = function(referenceElement, CSSselectorsList) {

    if ((arguments.length === 0) || (arguments.length === 1)) {

        CSSselectorsList = arguments[0]
        referenceElement = null
    }

    var refElement = referenceElement || document

    var elements = refElement.querySelectorAll(':scope '+ CSSselectorsList)

    if (elements.length === 0) {

        return document.createElement('fake')

    } else if (elements.length === 1) {

        return elements[0]

    } else {
        return  elements
    }
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Highlight
◈──────────────────────────────────────────────────────◈ */

var highlights = document.querySelectorAll('.highlight, .rainbow')

fct_highlights(highlights)

function fct_highlights(highlights) {

    if (highlights) {
        
        highlights.forEach(function (hl) {

            var txt = hl.textContent

            if (typeof txt === 'string') {
                
                if ((txt[0] === `'` && txt[txt.length - 1] === `'`) || (txt[0] === `"` && txt[txt.length - 1] === `"`)) {
                    
                    hl.textContent = txt.slice(1, txt.length - 1)
                }
            }
                    
            hl.style.visibility = 'visible'
        })
    }    
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Labels
◈──────────────────────────────────────────────────────◈ */

var labelTags = document.querySelectorAll('.example_1, .example_2, .oneObs, .obsGroup, .attention_1, .attention_2')

if (labelTags) {
    
    labelTags.forEach(function (labelTag) {
    
        var label = labelTag.querySelector(':scope > .label')

        if (label) {
            if ((label.textContent[label.textContent.length - 1] === ':') && (label.textContent[label.textContent.length - 2] === '.')) {
            
                label.textContent = label.textContent.slice(0, label.textContent.length - 2)
            }

            if (label.textContent[label.textContent.length - 1] === ':') {
                
                label.textContent = label.textContent.slice(0, label.textContent.length - 1)
            }
        }

        labelTag.style.display = 'block'
    })
}

var labelTags_ex3 = document.querySelectorAll('.example_3')

if (labelTags_ex3) {
    
    labelTags_ex3.forEach(function (labelTag) {
    
        labelTag.style.display = 'block'
    })
}

/*  
◈──────────────────────────────────────────────────────◈
TODO: Text Icons - Generator
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('.noText').forEach(function (item) {

    item.textContent = ''
})

/*  
◈──────────────────────────────────────────────────────◈
TODO: <abbr> - Classe 'textIconCSS_interrogation'
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll('abbr.textIconCSS_interrogation').forEach(function (abbr) {

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

var switches = document.querySelectorAll('.switch')

if (switches) {
    
    switches.forEach(function (swt) {
    
        swt.addEventListener('click', function() {
        
            switch_event(swt)
        })
    })
}


/*  TODO:    1 ▶ Switches, Buttons, And Anchors All Type Button
◈──────────────────────────────────────────────────────◈ */

var $is_safari_for_desktop_or_is_a_mobile_browser = navigator.vendor.indexOf('Apple') !== -1
var $is_safari_for_desktop_or_is_a_tablet_browser = $is_safari_for_desktop_or_is_a_mobile_browser && !(isCellphone)

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
            if ($swt_or_btn_or_a.classList.contains('button_icon') && $swt_or_btn_or_a.classList.contains('rounded') && isMobile) { 

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

            var $box_shadow_out_clear_square = '0px 0px 12px 0px '+ color_theme
            var $box_shadow_out_clear_no_square = '0px 0px 12px 0px '+ color_theme

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
            
            if (type_number == 1) { $swt_or_btn_or_a.classList.add('button_full') }
            if (type_number == 2) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 3) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 4) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('pill'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 5) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded') }
            if (type_number == 6) { $swt_or_btn_or_a.classList.add('button_full'); $swt_or_btn_or_a.classList.add('rounded'); $swt_or_btn_or_a.classList.add('text_below') }
            if (type_number == 7) { $swt_or_btn_or_a.classList.add('button_text')  }
            if (type_number == 8) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('pill') }
            if (type_number == 9) { $swt_or_btn_or_a.classList.add('button_text'); $swt_or_btn_or_a.classList.add('rounded') }
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

/*  TODO:    1 ▶ Property - Visibility
◈──────────────────────────────────────────────────────◈ */

document.querySelectorAll(`
.switch, 
button.button_full, button.button_text, button.button_icon, button.image, 
a.button_full, a.button_text, a.button_icon, a.image
`).forEach(function (item) {

    item.style.visibility = 'visible'
})
 
/*  
◈──────────────────────────────────────────────────────◈
TODO: Choices 
◈──────────────────────────────────────────────────────◈ */

var choices = document.querySelectorAll('.choice')

if (choices) {

    //····································································◈ Ícone de texto CSS

    choices.forEach(function (choice) {

        var spans = choice.querySelectorAll(':scope span')
    
        spans.forEach(function (span) {
    
            span.classList.forEach(function (className) {
            
                if (className.includes('textIconCSS_')) {
                    
                    span.setAttribute('textIconCSS', '')
                }
            })
        })
    })

    //····································································◈ Logic
        
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

                html.classList.toggle('overflow_hidden')
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

    choices.forEach(function ($choice) {

        //····································································◈ Events

        $choice.addEventListener('click', function(evt) {

            choice($choice)
        })

        var options_anchors = $choice.querySelectorAll(':scope > li > a')

        options_anchors.forEach(function (option_anchor) {
        
            option_anchor.addEventListener('click', function(evt) {
            
                choice_option(option_anchor)
            })
        })

        //····································································◈ Shine

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

    //····································································◈ Mostrar choices

    choices.forEach(function (choice) {
    
        choice.style.visibility = 'visible'
    })
}

// getComputedStyle($piece_icon).getPropertyValue('display')
/*
◈──────────────────────────────────────────────────────◈
TODO: Gallery
◈──────────────────────────────────────────────────────◈ */

window.addEventListener("load", function() { // Bug fix: No Safari às vezes as imagens são carregadas depois que o JS é executado.

    var galleries = document.querySelectorAll('.gallery')

    if (galleries) {

        galleries.forEach(function (gallery) {

            gallery.insertAdjacentHTML('afterbegin', 
            `
            <div class="painel">
                <button class="btn_back"><img src="${URL_begin}images/icons/arrowRounded_L.png"></button>
                <button class="btn_fullScreen"><!-- <img src="${URL_begin}images/icons/click_to_max_img.svg"> --> </button>
                <button class="btn_next"><img src="${URL_begin}images/icons/arrowRounded_R.png"></button>
                <span class="order"><span class="actual">1</span>/<span class="total">?</span></span>
            </div>
            `)

            var all_imgs = gallery.querySelectorAll(':scope > img')

            var imgsBox = document.createElement('div')
            
            imgsBox.classList.add('imgsBox')

            gallery.insertAdjacentElement('beforeend', imgsBox)

            all_imgs.forEach(function (img) {
            
                imgsBox.insertAdjacentElement('beforeend', img)
            })

            all_imgs.forEach(function (img) { // Definindo o tamanho das imagens e cujos nomes terminam com '_x#'.

                setSizeImgs(img)
            })

            var i_last_img = all_imgs.length - 1

            gallery.querySelector(':scope .total').textContent = all_imgs.length

            gallery.querySelector(':scope .btn_next').addEventListener('click', function(evt) {

                for (i = 0; i < all_imgs.length; i++) {
                
                    if (getComputedStyle(all_imgs[i]).getPropertyValue('display') !== 'none') {


                        // csl.log(typeof getComputedStyle(all_imgs[i]).getPropertyValue('display'))

                        
                        if (i === i_last_img) {
                                
                            all_imgs[i].style.display = 'none'
                            all_imgs[0].style.display = 'initial'

                            gallery.querySelector(':scope .actual').textContent = 1

                        } else {
                                
                            all_imgs[i].style.display = 'none'
                            all_imgs[i + 1].style.display = 'initial'

                            gallery.querySelector(':scope .actual').textContent = i + 2
                        }

                        // gallery.querySelector(':scope .order').opacity = 1

                        animation_showOrder(Math.PI, gallery)

                        break
                    }
                }
                // csl.log(gallery, this, evt.target, gallery.querySelector(':scope img'))
            })

            gallery.querySelector(':scope .btn_back').addEventListener('click', function(evt) {

                for (i = 0; i < all_imgs.length; i++) {
                
                    if (getComputedStyle(all_imgs[i]).getPropertyValue('display') !== 'none') {
                        
                        if (i === 0) {
                                
                            all_imgs[0].style.display = 'none'
                            all_imgs[i_last_img].style.display = 'initial'

                            gallery.querySelector(':scope .actual').textContent = i_last_img + 1

                            // csl.log(i, i_last_img, '-x-')

                        } else {

                            ib = all_imgs.length - i
                                
                            all_imgs[i].style.display = 'none'
                            all_imgs[i - 1].style.display = 'initial'

                            gallery.querySelector(':scope .actual').textContent = i

                            // csl.log(i, i - 1, '---')
                        }

                        animation_showOrder(Math.PI, gallery) // gallery.querySelector(':scope .order').opacity = 1

                        break
                    }
                }
                // csl.log(gallery, this, evt.target, gallery.querySelector(':scope img'))
            })

            //····································································◈ Gallery Full Screen:

            gallery.querySelector(':scope .btn_fullScreen').addEventListener('click', function(evt) {

                // if (this.parentElement.parentElement.classList.contains('gallery_fullScreen')) {
                    
                    // this.parentElement.parentElement.classList.toggle('gallery_fullScreen')

                // } else {

                    this.parentElement.parentElement.classList.toggle('gallery_fullScreen')

                    html.classList.toggle('overflow_hidden')

                    /* 
                    
                    var gallery_width_initial = gallery.style.width
                    var gallery_maxWidth_initial = gallery.style.maxWidth
                    var gallery_maxHeight_initial = gallery.style.maxHeight
                    
                    gallery.style.width = gallery_naturalWidth
                    gallery.style.maxWidth = '100vw'
                    gallery.style.maxHeight = '100vh'

                    var div_gallery_fullScreen = document.createElement('div')

                    div_gallery_fullScreen.classList.add('gallery_fullScreen')

                    div_gallery_fullScreen.addEventListener('click', function(evt) {
                    
                        this.insertAdjacentElement('afterend', this.firstElementChild)
                        this.remove()
                    
                        gallery.style.width = gallery_width_initial
                        gallery.style.maxWidth = gallery_maxWidth_initial
                        gallery.style.maxHeight = gallery_maxHeight_initial

                        html.classList.remove('overflow_hidden')
                    })

                    this.insertAdjacentElement('beforebegin', div_gallery_fullScreen)

                    div_gallery_fullScreen.insertAdjacentElement('afterbegin', this) */
                // }
            })

            //····································································◈ Fazer os galleries aparecer

            // Bug fix: Coloquei os galleries ocultos inicialmente via CSS, e coloquei para o exibi-los usando JavaScript 
            // logo assim que forem manipulados por ele. Isso é necessário porque o JavaScript demora um pouco para ser 
            // executado, o que faz com que o HTML seja exibido brevemente antes de ser manipulado pelo JavaScript.

            /* if (gallery.classList.contains('center')) {
                
                gallery.style.display = 'flex' 
                
            } else {
            
                gallery.style.display = 'block' 
            } */

            // gallery.style.display = 'flex' 
            gallery.style.display = 'block' 
        }) 
    }
});


function animation_showOrder(duration, gallery) {

    var  timestamp_firstRepetition
            
    function step(timestamp) {
        
        if (timestamp_firstRepetition === undefined) { 
            timestamp_firstRepetition = timestamp  
        }
        
        var elapsed = timestamp - timestamp_firstRepetition

        var elapsed_seconds = elapsed/1000

        if (isNaN(duration)) { 
            var $t = elapsed_seconds 
        } else { 
            var $t = Math.min(elapsed_seconds, duration) 
        }
        
//---------------------------------------------------------------------------------------

gallery.querySelector(':scope .order').style.opacity = Math.sin($t)

//---------------------------------------------------------------------------------------

        if (isNaN(duration)) { 
            window.requestAnimationFrame(step) 
        } else { 
            if ($t < duration) { 
                window.requestAnimationFrame(step) 
            } 
        }
    }

    window.requestAnimationFrame(step)
}
/* 
animation_clickToMaxImg(Math.PI)

function animation_clickToMaxImg(duration) {

    var  timestamp_firstRepetition
            
    function step(timestamp) {
        
        if (timestamp_firstRepetition === undefined) { 
            timestamp_firstRepetition = timestamp  
        }
        
        var elapsed = timestamp - timestamp_firstRepetition

        var elapsed_seconds = elapsed/1000

        if (isNaN(duration)) { 
            var $t = elapsed_seconds 
        } else { 
            var $t = Math.min(elapsed_seconds, duration) 
        }
        
//---------------------------------------------------------------------------------------

document.querySelector('.gallery .btn_fullScreen img').style.opacity = Math.sin($t)

//---------------------------------------------------------------------------------------

        if (isNaN(duration)) { 
            window.requestAnimationFrame(step) 
        } else { 
            if ($t < duration) { 
                window.requestAnimationFrame(step) 
            } 
        }
    }

    window.requestAnimationFrame(step)
}
 */

/*
◈──────────────────────────────────────────────────────◈
TODO: Slider
◈──────────────────────────────────────────────────────◈ */

var sliders = document.querySelectorAll('.slider')

sliders.forEach(function (slider) {

    var slider_naturalWidth = ((slider.firstElementChild.naturalWidth/0.93) + 4) + 'px'
    var slider_naturalHeight = (slider.firstElementChild.naturalHeight + 4) + 'px'

    if (!(slider.style.maxWidth || slider.style.maxHeight)) {
            
        slider.style.maxWidth = slider_naturalWidth
        slider.style.maxHeight = slider_naturalHeight
    }

    // Slider Full Screen:

    slider.addEventListener('click', function(evt) {

        if (this.parentElement.classList.contains('slider_fullScreen')) {
            
        } else {

            html.classList.add('overflow_hidden') 
                    
            var slider_width_initial = slider.style.width
            var slider_maxWidth_initial = slider.style.maxWidth
            var slider_maxHeight_initial = slider.style.maxHeight
            
            slider.style.width = slider_naturalWidth
            slider.style.maxWidth = '100vw'
            slider.style.maxHeight = '100vh'

            var div_slider_fullScreen = document.createElement('div')

            div_slider_fullScreen.classList.add('slider_fullScreen')

            div_slider_fullScreen.addEventListener('click', function(evt) {
            
                this.insertAdjacentElement('afterend', this.firstElementChild)
                this.remove()
            
                slider.style.width = slider_width_initial
                slider.style.maxWidth = slider_maxWidth_initial
                slider.style.maxHeight = slider_maxHeight_initial

                html.classList.remove('overflow_hidden')
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

// lightbox(`Lightbox com a função <span class='rainbow'>lightbox()</span>.`)

function lightbox(txt, img, width, isImgRounded) { 

    // html.classList.add('overflow_hidden') 

    var lightbox_html = document.createElement("div")

    lightbox_html.classList.add("lightbox")

    lightbox_html.innerHTML = `
    <div>
            <button class="lightbox_closeArea"></button> 
            <div class="lightbox_layout window_${principalWindowStyle}">
                <img src="" alt="" class="lightbox_img">
                <div class="lightbox_text windowText_${principalWindowTextStyle}"></div>
            </div>
    </div>
    `

    var lightbox = lightbox_html.querySelector(':scope .lightbox_layout')
    var lightbox_text = lightbox_html.querySelector(':scope .lightbox_text')
    var lightbox_img = lightbox_html.querySelector(':scope .lightbox_img')
    var lightbox_closeArea = lightbox_html.querySelector(':scope .lightbox_closeArea')

    lightbox.style.transform = 'scaleY(0)'
    lightbox.style.transition = `transform ${transitionDuration_window}s`

    lightbox_text.innerHTML = txt

    if(img !== undefined) {

        lightbox_img.style.display = 'block'
        lightbox_img.setAttribute('src', img) 
        lightbox_img.classList.add('lightbox_img_marginBottom')
        lightbox_text.style.paddingTop = '0px'
 
        if(arguments[2] !== undefined) {

            if ((typeof arguments[2] === 'number') || (typeof arguments[2] === 'string')) {
            
                if (typeof width === 'number') {
                    
                    width = width +'px'
                }

                lightbox_img.style.width = width

                if (typeof arguments[3] === 'boolean') {
            
                    if (arguments[3] === true) {
                        
                        lightbox_img.style.borderRadius = '19px'
                    }
                }
            
            } else if (typeof arguments[2] === 'boolean') {
            
                if (arguments[2] === true) {
                    
                    lightbox_img.style.borderRadius = '19px'
                }
            }
        }
    } 

    {
        var highlights = lightbox_html.querySelectorAll(':scope .highlight, .rainbow')

        fct_highlights(highlights)
    }

    document.body.appendChild(lightbox_html)

    setTimeout(function() {
    
        lightbox.style.transform = ''
    })

    lightbox_closeArea.addEventListener('click', function(evt) {
    
        // html.classList.remove('overflow_hidden')
        lightbox.style.transform = 'scaleY(0)'

        setTimeout(function() {
            
            lightbox_html.style = 'display: none';

        }, transitionDuration_window * 1000)
    })

    // document.querySelector('.lightbox').style = 'display: flex'

    // lightbox_animation_show()
}

function lightbox2(txt, img, width) { 

    document.querySelector('.lightbox_img').classList.add('lightbox_img_rounded')

    lightbox(txt, img, width)
}

/* 
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

    // csl.log(arg)

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

                // html.classList.remove('overflow_hidden')
                document.querySelector('.lightbox_img').classList.remove('lightbox_img_rounded')
                arg.parentNode.parentNode.style = 'display: none';  
            }
        }

        window.requestAnimationFrame(step)
    }
    
}
*/

/*
◈──────────────────────────────────────────────────────◈
TODO: Code Example
◈──────────────────────────────────────────────────────◈ */

var codeExs = document.querySelectorAll('.codeEx')

if (codeExs) {
    codeExs.forEach(function (codeEx) {

        var header = codeEx.querySelector(':scope > .header')

        // var imgs = codeEx.querySelectorAll(':scope > .assets > .box_noCode img')
        var imgs = codeEx.querySelectorAll(':scope img')

        var assets = codeEx.querySelector(':scope > .assets')
        var assets_dts = codeEx.querySelectorAll(':scope > .assets > .label_code, :scope > .assets > .label_noCode')
        var assets_btns = codeEx.querySelectorAll(':scope > .assets > .label_code > button, :scope > .assets > .label_noCode > button')
        var assets_dds = codeEx.querySelectorAll(':scope > .assets > .box_code, :scope > .assets > .box_noCode')

        var codes = codeEx.querySelectorAll(':scope > .assets > .box_code > pre > code')

        var run = codeEx.querySelector(':scope > .run')
        var run_dts = codeEx.querySelectorAll(':scope > .run > .rendering_label, :scope > .run > .console_label')
        var run_btns = codeEx.querySelectorAll(':scope > .run > .rendering_label > button, :scope > .run > .console_label > button')
        var run_dds = codeEx.querySelectorAll(':scope > .run > .rendering_output, :scope > .run > .console_output')

        var btns = codeEx.querySelectorAll(':scope > .assets > .label_code > button, :scope > .assets > .label_noCode > button, :scope > .run > .rendering_label > button, :scope .run > .console_label > button')

        //····································································◈ 'header':

        if (header) {

            //··································◈ Ocultando o '-' e o ':' do 'header':

            header.childNodes.forEach(function (node) {
            
                if (node.textContent.trim().slice(-1) === ':') {
                    node.textContent = node.textContent.slice(0, node.textContent.length - 1)
                }
            
                if ((node.textContent.trim() === '-') || (node.textContent.trim() === ':')) {
                    node.textContent = ''
                }
            })

            //··································◈ Envolver o conteúdo do rótulo do exemplo em um <span> extra: 

            // header.firstElementChild.innerHTML = '<span>'+ header.firstElementChild.textContent +'</span>' // Desta forma buga, pois faz com que as referências de identidade de caracteres sejam identificadas como códigos ao invés de simples textos.

            var stg = header.firstElementChild.textContent

            var span = document.createElement('span')

            header.firstElementChild.innerHTML = ''

            header.firstElementChild.append(span)

            header.firstElementChild.firstElementChild.textContent = stg
        }

        //····································································◈ Definindo o tamanho das imagens cujos nomes terminam com '_x#':

        imgs.forEach(function (img) {

            setSizeImgs(img)
        })

        //····································································◈ Criando e colocando <span>s dentro dos <button>s das etiquetas (<dt>s):

        btns.forEach(function (btn) {
        
            var btn_innerHTML = btn.innerHTML

            btn.innerHTML = '<span>'+ btn_innerHTML +'</span>'
        })

        //····································································◈ Configuração das etiquetas (<dt>s) do 'assets':

        var assets_dts_container = document.createElement('div')
        assets_dts_container.classList.add('assets_dts_container')

        if(assets !== null) {

            assets.prepend(assets_dts_container)

            assets_dts.forEach(function (assets_dt) {
            
                assets_dts_container.append(assets_dt)
            })
        }

        if (assets_dts.length === 1) {
            codeEx.querySelector(':scope > .assets > .assets_dts_container > dt > button').style.cursor = 'initial'
        }

        if (assets_dts.length > 1) {

            // assets_dts_container.style.cursor = 'pointer'

            codeEx.querySelector(':scope > .assets > .assets_dts_container > dt > button').classList.add('on')
            
            assets_dts_container.addEventListener('click', function(evt) {

                assets_btns.forEach(function (assets_btn) {
                
                    assets_btn.classList.remove('on')

                    if (evt.target.tagName === "SPAN") { evt.target.parentElement.classList.add('on') }
                    if (evt.target.tagName === "BUTTON") { evt.target.classList.add('on') }
                })

                assets_dds.forEach(function (assets_dd) {
                
                    assets_dd.style.display = 'none'
                })

                assets_btns.forEach(function (assets_btn, i) {
                
                    if ((evt.target.parentElement === assets_btn) || (evt.target === assets_btn)) {

                        assets_dds[i].style.display = 'block'
                    }
                })
            })
        }

        //····································································◈ Configuração das caixas de código (<dd class="box_code">s) do 'assets':

        codes.forEach(function (code) {
        
            var codeTxt = code.textContent

            codeTxt = codeTxt.trimEnd()

            // csl.log(codeTxt)

            if (codeTxt[0] === charLB) {
                codeTxt = codeTxt.slice(1, codeTxt.length)
            }

            // csl.log(codeTxt)

            var qtSpaces = 0

            for (i = 0; codeTxt[i] === ' '; i++) {
            
                qtSpaces += 1

                // csl.log(codeTxt[i])
            }

            // csl.log(qtSpaces)

            var codeTxtLines = codeTxt.split(charLB)

            codeTxt = ''

            code.innerHTML = null

            codeTxtLines.forEach(function (codeTxtLine) {
            
                codeTxtLine = codeTxtLine.slice(qtSpaces, codeTxtLine.length)

                var span = document.createElement('span')
            
                span.textContent = codeTxtLine + charLB
                
                codeTxtLine = span

                code.appendChild(codeTxtLine)

                // console.log(codeTxtLine)
            })
        })

        //····································································◈ Corrigindo os textos nas caixas de código (<dd class="box_code">s) do 'assets':

        var codeLineTags = codeEx.querySelectorAll(':scope > .assets > .box_code > pre > code *')
        
        codeLineTags.forEach(function (codeLineTag) {

            //··································◈ Corrigindo as URLs dos arquivos:
        
            while(codeLineTag.textContent.indexOf('_x2') !== -1) {
        
                codeLineTag.textContent = codeLineTag.textContent.replace('_x2', '')
            }
        
            /* while(codeLineTag.textContent.indexOf('pages/') !== -1) {
        
                codeLineTag.textContent = codeLineTag.textContent.replace('pages/', '')
            } */
        
            while(codeLineTag.textContent.indexOf('images/exs/') !== -1) {
        
                codeLineTag.textContent = codeLineTag.textContent.replace('images/exs/', '')
            }
        
            while(codeLineTag.textContent.indexOf('images/icons/') !== -1) {
        
                codeLineTag.textContent = codeLineTag.textContent.replace('images/icons/', 'framework/images/icons/')
            }

            //··································◈ Corrigindo as minhas referências de entidade de caracteres:
        
            /*   */ while(codeLineTag.textContent.indexOf('$nbsp;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$nbsp;', '&nbsp;') }
            /* < */ while(codeLineTag.textContent.indexOf('$lt;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$lt;', '&lt;') }
            /* > */ while(codeLineTag.textContent.indexOf('$gt;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$gt;', '&gt;') }
            /* " */ while(codeLineTag.textContent.indexOf('$quot;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$quot;', '&quot;') }
            /* ' */ while(codeLineTag.textContent.indexOf('$apos;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$apos;', '&apos;') }
            /* & */ while(codeLineTag.textContent.indexOf('$amp;') !== -1) { codeLineTag.textContent = codeLineTag.textContent.replace('$amp;', '&amp;') }
        })

        //····································································◈ Configuração das etiquetas (<dt>s) do 'run':

        var run_dts_container = document.createElement('div')
        run_dts_container.classList.add('run_dts_container')

        if(run !== null) {

            run.prepend(run_dts_container)

            run_dts.forEach(function (run_dt) {
            
                run_dts_container.append(run_dt)
            })
        }

        if (run_dts.length === 1) {
            codeEx.querySelector(':scope > .run > .run_dts_container > dt > button').style.cursor = 'initial'
        }

        if (run_dts.length > 1) {
                
            codeEx.querySelector(':scope > .run > .run_dts_container > dt > button').classList.add('on')
            
            run_dts_container.addEventListener('click', function(evt) {

                run_btns.forEach(function (run_btn) {
                
                    run_btn.classList.remove('on')
                    
                    if (evt.target.tagName === "SPAN") { evt.target.parentElement.classList.add('on') }
                    if (evt.target.tagName === "BUTTON") { evt.target.classList.add('on') }
                })

                run_dds.forEach(function (run_dd) {
                
                    run_dd.style.display = 'none'
                })

                run_btns.forEach(function (run_btn, i) {
                
                    if ((evt.target.parentElement === run_btn) || (evt.target === run_btn)) {

                        run_dds[i].style.display = 'block'
                    }
                })
            })
        }

        //····································································◈ Fazer os 'codeEx's aparecer

        // Bug fix: Coloquei os 'codeEx's ocultos inicialmente via CSS, e coloquei para o exibi-los usando JavaScript 
        // logo assim que forem manipulados por ele. Isso é necessário porque o JavaScript demora um pouco para ser 
        // executado, o que faz com que o HTML seja exibido brevemente antes de ser manipulado pelo JavaScript.
        codeEx.style.visibility = 'visible' // codeEx.style.display = 'block'
    })
}






/* 
div.addEventListener('click', function fct(evt) {

    if (evt.target.id === "btn1") { display.textContent = '1' }
    if (evt.target.id === "btn2") { display.textContent = '2' }
    if (evt.target.id === "btn3") { display.textContent = '3' }
})
 */
/*  
◈──────────────────────────────────────────────────────◈
TODO: Temporary Elements
◈──────────────────────────────────────────────────────◈ */

/*  TODO:    1 ▶ Temporary Message
◈──────────────────────────────────────────────────────◈ */

var temporaryMsgs = document.querySelectorAll('.temporaryMsg')

if (temporaryMsgs) {
    temporaryMsgs.forEach(function (temporaryMsg) {

        // var box = document.createElement('div')
        var btn = document.createElement('span')

        // box.classList.add('temporaryMsgBox')
        btn.classList.add('temporaryHideBtn')

        // temporaryMsg.insertAdjacentElement('beforebegin', box)

        // box.insertAdjacentElement('afterbegin', temporaryMsg)

        temporaryMsg.insertAdjacentElement('afterbegin', btn)

        btn.addEventListener('click', function() { 
            
            localStorage.setItem(this.parentNode.id, this.parentNode.id)
        
            this.parentNode.style = 'display: none'
         })

        //Show alll no clicked:

        if(temporaryMsg.id !== localStorage.getItem(temporaryMsg.id)) {

            temporaryMsg.style = 'display: block' 
        }
    })
}

/*  TODO:    1 ▶ Temporary Div
◈──────────────────────────────────────────────────────◈ */

var temporaryDivs = document.querySelectorAll('.temporaryDiv')

if (temporaryDivs) {

    function button_hide(arg) {

        localStorage.setItem(arg.parentNode.id, arg.parentNode.id)
        
        arg.parentNode.style = 'display: none'
    } 

    temporaryDivs.forEach(function (temporaryDiv) {

        // var btn = temporaryDiv.querySelector(':scope .button_hide')

        var btn = document.createElement('span')
        btn.classList.add('temporaryHideBtn')

        temporaryDiv.insertAdjacentElement('afterbegin', btn)

        btn.addEventListener('click', function() { 
            
            localStorage.setItem(this.parentNode.id, this.parentNode.id)
        
            this.parentNode.style = 'display: none'
         })

        //Show alll no clicked:

        if(temporaryDiv.id !== localStorage.getItem(temporaryDiv.id)) {

            temporaryDiv.style = 'display: block' 
        }
    })
}

/*
◈──────────────────────────────────────────────────────◈
TODO: <iframe> - Atributo 'src' [Fica no final]
◈──────────────────────────────────────────────────────◈ */
/* 
Para melhorar a velocidade, define-se o atributo 'src' do iframe com JavaScript após 
o carregamento do conteúdo principal. Isso diminui o tempo de carregamento da 
página principal tornando-a utilizável mais cedo (uma importante métrica de SEO).
*/

var iframes = document.querySelectorAll('iframe')

if (iframes) {
    iframes.forEach(function (iframe) {
    
        iframe.src = iframe.textContent
    })
}

/*
◈──────────────────────────────────────────────────────◈
TODO: Global Functions
◈──────────────────────────────────────────────────────◈ */

html.addEventListener('touchstart', function() { 
    
    // lightbox('Ocorreu um toque')
});

/*  TODO:    1 ▶ Error
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

/*  TODO:    1 ▶ Wait
◈──────────────────────────────────────────────────────◈ */

function wait(t) { // t em segundos

    t = t * 1000

    t0 = performance.now()
    
    while(performance.now() - t0 <= t) {  }
}

/*  TODO:    1 ▶ Variable Is Free
◈──────────────────────────────────────────────────────◈ */

// Esta função retornará true se a variável não tiver sido declarada, ou se tiver sido declarada sem nenhum valor

function varIsFree(variableNameAsString) {
    
    return (typeof window[variableNameAsString] === 'undefined')
}

//····································································◈ Tests
/*
// var testando_varIsFree_1 // Esta variável não é para ser definida no teste, ou seja, a mantenha comentada

var testando_varIsFree_2

var testando_varIsFree_3 = 'Ok'

csl.log(_,
    '[Log]: '+ varIsFree('testando_varIsFree_1'),
    '[Log]: '+ varIsFree('testando_varIsFree_2'),
    '[Log]: '+ varIsFree('testando_varIsFree_3'),
_)
*/

/*  TODO:    1 ▶ Is-A-Number
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

/*  TODO:    1 ▶ Get File Name
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
        
        var index_dot = url.lastIndexOf(".")

        filename = url.slice(0, index_dot)        
    }

    return filename
}

/* Testes:

csl.log(_, getFileName("../images/exs/earth_$1.5.jpg", true), getFileName("../images/exs/earth_$1.5.jpg"))
 */

/*  TODO:    1 ▶ Get Image Filename
◈──────────────────────────────────────────────────────◈ */

function getImgName(img) {

    var img_src = img.src

    var index_bar = img_src.indexOf("/")

    while(index_bar !== -1) {

        img_src = img_src.slice(index_bar + 1)

        index_bar = img_src.indexOf("/")
    }

    var index_dot = img_src.lastIndexOf(".")

    img_src = img_src.slice(0, index_dot)

    return img_src   
}

/* Testes: 

var img = document.createElement('img')

img.src = "../images/exs/earth2_$1.5.jpg"

csl.log(_, getImgName(img))
*/

/*  TODO:    1 ▶ Image Filename as ALT Attribute Value
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

/*  TODO:    1 ▶ Get Nearest Ancestor
◈──────────────────────────────────────────────────────◈ */

function getNearestAncestor(element, ancestorName) {

    ancestorName = ancestorName.toUpperCase()
    
    while(element.tagName !== ancestorName){

        if (element.tagName === 'HTML') {
            
            return null
        }

        element = element.parentElement
    }

    return element
}


/*  TODO:    1 ▶ Sequential Text Generator
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

/*  TODO:    1 ▶ Set The Size Of Images
◈──────────────────────────────────────────────────────◈ */

// Definindo o tamanho das imagens cujos nomes terminam com '_x#':

function setSizeImgs(img) {

    var stgKey = '_x'
    var hasStgKey = (getImgName(img).lastIndexOf(stgKey) !== -1)
    var substringAfterStgKey = getImgName(img).slice(getImgName(img).lastIndexOf(stgKey) + stgKey.length)
    var afterStgKeyIsNumber = isAN(substringAfterStgKey)

    if (hasStgKey && afterStgKeyIsNumber) {

        var n = substringAfterStgKey

        /* 
        console.log(getImgName(img))

        console.log(n)
        */

        img.style.width = (img.naturalWidth / n) +'px'

        /* 
        csl.log(`(${img.style.width} * ${img.naturalHeight}px) / ${img.naturalWidth}px = 
        ${(img.style.width * img.naturalHeight) / img.naturalWidth}`)
        */
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

// ------------------------------------------------------------------------------------------------------------



















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













// console.clear()
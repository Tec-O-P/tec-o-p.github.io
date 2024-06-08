/*  
◈──────────────────────────────────────────────────────◈
TODO: Framework Demos
◈──────────────────────────────────────────────────────◈ */

/*  TODO:    1 ▶ Choices
◈──────────────────────────────────────────────────────◈ */

// Choice - Sample functions:

function choice_option_1(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(1) }
function choice_option_2(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(2) }
function choice_option_3(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(3) }
function choice_option_4(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(4) }
function choice_option_5(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(5) }

// Choice - Example 1 functions:

function choice_ex_1_Action_1() {

    var choice_divsExample_1 = document.querySelector('.choice_ex_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_1').style = 'display: block'
}

function choice_ex_1_Action_2() {

    var choice_divsExample_1 = document.querySelector('.choice_ex_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_2').style = 'display: block'
}

function choice_ex_1_Action_3() {

    var choice_divsExample_1 = document.querySelector('.choice_ex_1').children

    for(var i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_3').style = 'display: block'
}

// Choice - Example 2 functions:

function choice_ex_2_Action_1() {

    var choice_divsExample_2 = document.querySelector('.choice_ex_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_1').style = 'display: block'
}

function choice_ex_2_Action_2() {

    var choice_divsExample_2 = document.querySelector('.choice_ex_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_2').style = 'display: block'
}

function choice_ex_2_Action_3() {

    var choice_divsExample_2 = document.querySelector('.choice_ex_2').children

    for(var i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_3').style = 'display: block'
}

/*  TODO:    1 ▶ Switches
◈──────────────────────────────────────────────────────◈ */

// Switches & Buttons - Sample functions:

function switch_1(arg){ if(arg.classList.contains('disabled')) { return }; console.log(1) /*console.log(arg.className) */ } 
function switch_2(arg){ if(arg.classList.contains('disabled')) { return }; console.log(2) }
function switch_3(arg){ if(arg.classList.contains('disabled')) { return }; console.log(3) }
function switch_4(arg){ if(arg.classList.contains('disabled')) { return }; console.log(4) }
function switch_5(arg){ if(arg.classList.contains('disabled')) { return }; console.log(5) }

// Tests Switches - No Unnecessary Pieces - Turn ON/OFF:

var switches_group_2 = document.querySelector('.tests_toggle_switches_no_unnecessary_pieces')

if (switches_group_2 !== null) {

    switches_group_2.addEventListener('click', function() {
        
        var switches = document.querySelectorAll('.test_switches_group_2 .switch')
        
        switches.forEach(function ($switch) { 

            switch_event($switch) 
        })
    })
}

// Tests Switches - Change Styles - Turn ON/OFF:

var switches_group = document.querySelector('.tests_toggle_switches_change_styles')

if (switches_group !== null) {
        
    switches_group.addEventListener('click', function() { 
        
        var switches = document.querySelectorAll('.test_switches_group .switch')
        
        switches.forEach(function ($switch) { 

            switch_event($switch) 
        })
    })
}

// Switches Change Color:

if (document.querySelector('.switches_change_color')) {
    token_clickable_for_switches_blue = document.querySelector('.switches_change_color .blue').addEventListener('click', func_change_swts_color)
    token_clickable_for_switches_red = document.querySelector('.switches_change_color .red').addEventListener('click', func_change_swts_color)
    token_clickable_for_switches_yellow = document.querySelector('.switches_change_color .yellow').addEventListener('click', func_change_swts_color)
    token_clickable_for_switches_green = document.querySelector('.switches_change_color .green').addEventListener('click', func_change_swts_color)
    token_clickable_for_switches_black = document.querySelector('.switches_change_color .black').addEventListener('click', func_change_swts_color)
    
    function func_change_swts_color() { 

        var new_color = this.classList[1]

        var switches = document.querySelectorAll('.test_switches_group .switch')
    
        switches.forEach(function (swt) {

            swt.classList.remove('blue')
            swt.classList.remove('red')
            swt.classList.remove('green')
            swt.classList.remove('yellow')
            swt.classList.remove('black')
        
            swt.classList.add(new_color)
        })
    }      
}

// <button>/<a> Change Color:

if (document.querySelector('.button_or_a__change_color')) {
    
    token_clickable_for_buttons_blue = document.querySelector('.button_or_a__change_color .blue').addEventListener('click', func_change_btns_color)
    token_clickable_for_buttons_red = document.querySelector('.button_or_a__change_color .red').addEventListener('click', func_change_btns_color)
    token_clickable_for_buttons_yellow = document.querySelector('.button_or_a__change_color .yellow').addEventListener('click', func_change_btns_color)
    token_clickable_for_buttons_green = document.querySelector('.button_or_a__change_color .green').addEventListener('click', func_change_btns_color)
    token_clickable_for_buttons_black = document.querySelector('.button_or_a__change_color .black').addEventListener('click', func_change_btns_color)
    
    function func_change_btns_color() { 

        var new_color = this.classList[1]

        var buttons = document.querySelectorAll('.test_buttons_group button')
    
        buttons.forEach(function (button) {

            button.classList.remove('blue')
            button.classList.remove('red')
            button.classList.remove('green')
            button.classList.remove('yellow')
            button.classList.remove('black')
        
            button.classList.add(new_color)
        })
    }     
}



/*  TODO:    1 ▶ Smart Selector [OFF]
◈──────────────────────────────────────────────────────◈ */
/* 
// console.log(SS('none')) // O elemento <none> não existe.
// console.log(SS('none').tagName === 'FAKE')

SS('none').style.color = 'red' // Não dá erro apesar de não ter selecionado nada.

// console.log(SS('.SS_box1 > p::first-line')) // Tentando selecionar um pseudo-elemento.

var CSSselector = '.SS_box1 > p:nth-of-type(2)'
SS(CSSselector).style.color = 'blue'

var ps = SS('.SS_box1 > p:nth-of-type(1), .SS_box1 > p:nth-of-type(3)')
// if (ps) { ps.forEach(function (p) { p.style.color = 'lime' }) }

var SS_box2 = SS('.SS_box2')
SS(SS_box2, 'p:nth-of-type(1)').style.color = 'red'
*/

/*  
◈──────────────────────────────────────────────────────◈
TODO: Footer - HTML [OFF]
◈──────────────────────────────────────────────────────◈

document.querySelector('footer').innerHTML = `

    <div class="central footer_content">

        <address>
        
            <!--<p>Contactthe author of this page:</p>-->
            <!--<p>Página escrita por <a href="#"> Chris Mills</a>.</p>-->
            <!--  <ul>
                    <li>Phone: <a href="tel:+6824258804">(68) 2425-8804</a></li>
                    <li>E-mail: <a href="mailto:support@company.com.br">support@company.com.br</a></p></li>
                    </ul>-->
            <!--<p>Follow us on:</p>-->
        
                <ul class="footer_icons">

                    <!-- Footer anterior: -->
                    <!--  
                    <li><a href="mailto:support@company.com.br"><img src="../images/icons/mail.svg" alt=""></a></li>  
                    <li><a href="#"><img src="../images/icons/youtube.svg" alt=""></a></li> 
                    <li><a href="#"><img src="../images/icons/twitch.svg" alt=""></a></li>
                    <li><a href="#"><img src="../images/icons/instagram.svg" alt=""></a></li>
                    <li><a href="#"><img src="../images/icons/facebook.svg" alt=""></a></li>  
                    <li><a href="#"><img src="../images/icons/twitter.svg" alt=""></a></li> 
                    -->

                    <!-- Footer novo: -->

                    <li>
                        <a href="mailto:support@company.com.br" class="button_icon rounded"> 
                            <img class="piece_icon" src="../images/icons/email.svg" alt=""> 
                        </a> 
                    </li> 

                    <li>
                        <a class="button_icon rounded green" onclick="lightbox('(68) 2425-8804')"> 
                            <img class="piece_icon" src="../images/icons/whatsapp.svg" alt="" style="padding-top: 1px;">
                        </a> 
                    </li> 

                    <li>
                        <a href="#" class="button_icon rounded red"> 
                            <img class="piece_icon" src="../images/icons/youtube.svg" alt="">
                        </a> 
                    </li> 

                    <!-- 
                    <li>
                        <a href="#" class="button_icon rounded"> 
                            <img class="piece_icon" src="../images/icons/facebook.svg" alt="">
                        </a>
                    </li>
                    -->

                    <li>
                        <a href="#" class="button_icon rounded yellow"> 
                            <img class="piece_icon" src="../images/icons/instagram.svg" alt="">
                        </a> 
                    </li> 
                </ul>
        
            <!--<p>If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.</p> -->
        
        </address> 
        
        <p class="copyright">© Copyright 2750 <!--by nobody./-->Company Inc. All rights reversed.</p>
        
    </div>
 
`

update_switches_buttons_and_anchors(document.querySelectorAll('footer a')) 
 */
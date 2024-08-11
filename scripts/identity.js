/*  
◈──────────────────────────────────────────────────────◈
TODO: Framework Demos
◈──────────────────────────────────────────────────────◈ */

{
// Choice - Sample functions:

function choice_option_1(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(1) }
function choice_option_2(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(2) }
function choice_option_3(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(3) }
function choice_option_4(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(4) }
function choice_option_5(arg){ if(arg.parentNode.parentNode.classList.contains('disabled') || arg.classList.contains('disabled')) { return }; console.log(5) }

// Choice - Example 1 functions:

function choice_example_1_Action_1() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_1').style = 'display: block'
}

function choice_example_1_Action_2() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_2').style = 'display: block'
}

function choice_example_1_Action_3() {

    var choice_divsExample_1 = document.querySelector('.choice_example_1').children

    for(i = 0; i < choice_divsExample_1.length; i++) {

        choice_divsExample_1[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_1_div_3').style = 'display: block'
}

// Choice - Example 2 functions:

function choice_example_2_Action_1() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_1').style = 'display: block'
}

function choice_example_2_Action_2() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_2').style = 'display: block'
}

function choice_example_2_Action_3() {

    var choice_divsExample_2 = document.querySelector('.choice_example_2').children

    for(i = 0; i < choice_divsExample_2.length; i++) {

        choice_divsExample_2[i].style = 'display: none'
    }
    
    document.querySelector('.choice_divsExample_2_div_3').style = 'display: block'
}

// Switch - Sample functions:

function switch_1(arg){ if(arg.classList.contains('disabled')) { return }; console.log(1) }
function switch_2(arg){ if(arg.classList.contains('disabled')) { return }; console.log(2) }
function switch_3(arg){ if(arg.classList.contains('disabled')) { return }; console.log(3) }
function switch_4(arg){ if(arg.classList.contains('disabled')) { return }; console.log(4) }
function switch_5(arg){ if(arg.classList.contains('disabled')) { return }; console.log(5) }
}

/*  
◈──────────────────────────────────────────────────────◈
TODO: Footer - HTML
◈──────────────────────────────────────────────────────◈ */
/* 
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
                            <img class="piece_icon" src="../framework/images/icons/email.svg" alt="E-mail"> 
                        </a> 
                    </li> 

                    <li>
                        <a class="button_icon rounded green" onclick="lightbox('(68) 2425-8804')"> 
                            <img class="piece_icon" src="../framework/images/icons/whatsapp.svg" alt="WhatsApp" style="padding-top: 1px;">
                        </a> 
                    </li> 

                    <li>
                        <a href="#" class="button_icon rounded red"> 
                            <img class="piece_icon" src="../framework/images/icons/youtube.svg" alt="Youtube">
                        </a> 
                    </li> 

                    <!--
                    <li>
                        <a href="#" class="button_icon rounded"> 
                            <img class="piece_icon" src="../framework/images/icons/facebook.svg" alt="Facebook">
                        </a>
                    </li>
                    --> 

                    <li>
                        <a href="#" class="button_icon rounded yellow"> 
                            <img class="piece_icon" src="../framework/images/icons/instagram.svg" alt="Instagram">
                        </a> 
                    </li> 
                </ul>
        
            <!--<p>If you see any bugs, please <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.</p> -->
        
        </address> 
        
        <p class="copyright">© Copyright 2024 <!--by nobody./-->Tec OP Inc. All rights reversed.</p>
        
    </div>
 
`

update_switches_buttons_and_anchors(document.querySelectorAll('footer a'))
 */
/*  
◈──────────────────────────────────────────────────────◈
TODO: Types - Types Interactions
◈──────────────────────────────────────────────────────◈ */

var types_interactions_switchs = document.querySelector('.types_interactions_switchs')

if (types_interactions_switchs) {
    
    //····································································◈ Simplified Mode

    var typesInteractions_tables = document.querySelectorAll('.type_interactions')

    document.querySelector('.simplifiedModeBtn').addEventListener('click', function() {

        typesInteractions_tables.forEach(function (table) {
        
            table.classList.toggle('SimplifiedMode')
        })
    })

    //····································································◈ Show/Hide Robot Type

    var types_interactions_RobotType = document.querySelectorAll('.types_interactions_box .Robot')

    /* types_interactions_RobotType.forEach(function (r) {

        r.classList.toggle('display_none')
    }) */

    document.querySelector('.typesInteractions_ShowRobotTypeBtn').addEventListener('click', function() {

        types_interactions_RobotType.forEach(function (r) {
        
            r.classList.toggle('display_none')
        })
    })
}

/*  
◈──────────────────────────────────────────────────────◈
TODO: Skills - Table
◈──────────────────────────────────────────────────────◈ */

var skills_table = document.querySelector('.skills_table')

if (skills_table) {

    /* Isso está comentado por que não está funcionando!
    
    var type_icon_imgs = document.querySelectorAll('img.type_icon')

    imgsNamesAsAlts(type_icon_imgs)
    */

    /*  TODO:    1 ▶ Variables Used In 2+ Topics
    ◈──────────────────────────────────────────────────────◈ */

    var skills_table_box = document.querySelector('.skills_table_box')

    var skills_table_rows = document.querySelectorAll('.skills_table tr')

    var skills_table_rows_onlySkills = document.querySelectorAll('.skills_table tr:not(:nth-of-Type(1))')

    var skills_table_ths = document.querySelectorAll('.skills_table th')

    var STSB_switchs = document.querySelectorAll('.skills_types_switchs_box .switch')

    var SDSB_switchs = document.querySelectorAll('.skills_data_switchs_box .switch')


    /*  TODO:    1 ▶ Add Classes Of <th> names In Table Cells
    ◈──────────────────────────────────────────────────────◈ */

    for (i = 0; i < skills_table_ths.length; i++) {

        var skills_table_th_content = skills_table_ths[i].textContent
        
        skills_table_ths[i].classList.add(skills_table_th_content)

        /*
        for (i2 = 1; i2 < skills_table_rows.length; i2++) {

            if(skills_table_rows[i2]) {

                var tds = skills_table_rows[i2].querySelectorAll(':scope td')

                tds[i].classList.add(skills_table_th_content)
            }
        }
        */
    }


    /*  TODO:    1 ▶ Skills Choice
    ◈──────────────────────────────────────────────────────◈ */

    imgsNamesAsAlts(document.querySelectorAll('.skills_types_choice img'))

    var skills_choice = document.querySelector('.skills_types_choice')
    var skills_choice_options = document.querySelectorAll('.skills_types_choice > li a')

    skills_choice_options.forEach(function (option) {

        option.addEventListener('click', function() {

            func_skills_types_choices(option)
        })
    })

    function func_skills_types_choices(el) {

        skills_table_rows_onlySkills.forEach(function (skill_row) {

            skill_row.style.display = 'none'
        
            var skill_types_imgs = skill_row.querySelectorAll(':scope .Type img') 

            var switch_show_only_internet_skills_on = 
            document.querySelector('.skills_switch_show_only_internet_skills').classList.contains('on')
        
            var skill_not_available_on_internet = 
            skill_row.querySelector(':scope .Available span').textContent !== 'IRL and Net'

            var always_show_skill_regarding_internet_availability = 
            !(switch_show_only_internet_skills_on && skill_not_available_on_internet)

            if (!(switch_show_only_internet_skills_on && skill_not_available_on_internet)) {
                
            if (el.querySelector('img') === null) { // Quando selecionar para mostrar todas as habilidades.
                    
                skill_row.style.display = 'table-row'
                
            } else { // Quando selecionar algum tipo.

                console.log(always_show_skill_regarding_internet_availability)
            
                var this_type_img = getImgName(el.querySelector('img'))

                for (i = 0; i < skill_types_imgs.length; i++) {

                    if(getImgName(skill_types_imgs[i]) === this_type_img) {

                        console.log(1)

                        skill_row.style.display = 'table-row'

                        break

                    } else {

                        console.log(0)

                        skill_row.style.display = 'none'
                    }
                }
            }

            }

        })

        var skills_quantity = 0

        skills_table_rows_onlySkills.forEach(function (skill_row) {

            if (skill_row.style.display !== 'none' && !skill_row.classList.contains('hiddenSkill')) {
                //csl.log(skill_row)
                skills_quantity++
            }
        })

        // document.querySelector('.skills_table_box').style.display = 'block'
        // document.querySelector('.skills_quantity').style.display = 'block'

        document.querySelector('.skills_quantity span').textContent = skills_quantity
    } 

    document.querySelector('.skills_switch_show_only_internet_skills').addEventListener('click', function() { 
        
        choice(skills_choice)

        skills_choice_options.forEach(function (option) {
        
            if (option.classList.contains('on')) {

                func_skills_types_choices(option)
                choice_option(option)
            }
        })

        choice(skills_choice)  

        /* 
        skills_choice_options.forEach(function (option) {

            if (option.querySelector(':scope span').textContent === skills_choice_actual_type) {
                
                func_skills_types_choices(option)
                choice_option(option)
            }
        })

        choice(skills_choice)
        */    
    })













    /*  TODO:    1 ▶ Skills Types Switchs (OUT)
    ◈──────────────────────────────────────────────────────◈ */


    /*  TODO:        2 ▶ Initial Settings (OUT)
    ◈──────────────────────────────────────────────────────◈ */

    /*
    var quantity_of_types_activated = 0

    for (i = 0; i < skills_table_rows.length; i++) {

        skills_table_rows[i].activated_skill_counter = 0
    }

    imgsNamesAsAlts(document.querySelectorAll('.skills_types_switchs_box img'))
    */


    /*  TODO:        2 ▶ Skills Types Switchs Function (OUT)
    ◈──────────────────────────────────────────────────────◈ */

    /*
    function F_skills_types_switchs(el) {

        for (i = 1; i < skills_table_rows.length; i++) {
            
            var imgs_type = skills_table_rows[i].querySelectorAll(':scope .Type img') 

            var this_type = getImgName(el.querySelector('.piece_icon'))

            for (i2 = 0; i2 < imgs_type.length; i2++) {

                if(getImgName(imgs_type[i2]) === this_type) {

                    if(el.classList.contains('on')) {

                        quantity_of_types_activated--
                        skills_table_rows[i].activated_skill_counter--
                    } else {
                        quantity_of_types_activated++
                        skills_table_rows[i].activated_skill_counter++
                    }

                    if(skills_table_rows[i].activated_skill_counter >= 1) {

                        skills_table_rows[i].style.display = 'table-row'
                    } else {
                        skills_table_rows[i].style.display = 'none'
                    }

                    if(quantity_of_types_activated >= 1) {

                        document.querySelector('.skills_table_box').style.display = 'block'
                    } else {
                        document.querySelector('.skills_table_box').style.display = 'none'
                    }
                }
            }            
        }
    }*/


    /*  TODO:        2 ▶ 'All' Switch (OUT)
    ◈──────────────────────────────────────────────────────◈ */

    /*
    function F_skills_types_all_switch(el) {

        if (el.classList.contains('on')) {
            
            for (ix = 1; ix < STSB_switchs.length; ix++) {

                if (STSB_switchs[ix].classList.contains('on')) {
                    
                    F_skills_types_switchs(STSB_switchs[ix])
                    switch_event(STSB_switchs[ix]) 
                }
            }
        } else {
            
            for (ix = 1; ix < STSB_switchs.length; ix++) {

                if (!STSB_switchs[ix].classList.contains('on')) {
                    
                    F_skills_types_switchs(STSB_switchs[ix])
                    switch_event(STSB_switchs[ix]) 
                }
            }
        }
    }*/


    /*  TODO:        2 ▶ Switch - hide skill names (OUT)
    ◈──────────────────────────────────────────────────────◈ */

    /*
    function F_hide_skills_names(el) {
        
        STSB_switchs.forEach(function (current_switch) {
        
            if (el.classList.contains('on')) {
                
                //current_switch.querySelector('.piece_text').style.display = 'inline'
                current_switch.classList.remove('hide_skills_names')
                document.querySelector('.skills_types_switchs_box').classList.remove('hide_skills_names__justifyContent_center')
            } else {
                //current_switch.querySelector('.piece_text').style.display = 'none'
                current_switch.classList.add('hide_skills_names')
                document.querySelector('.skills_types_switchs_box').classList.add('hide_skills_names__justifyContent_center')
            }
        })
    }*/


    /*  TODO:    1 ▶ Skills Data Switchs
    ◈──────────────────────────────────────────────────────◈ */

    /*  TODO:        2 ▶ Decrease Size Of Buttons On Highest Screen Width
    ◈──────────────────────────────────────────────────────◈ */

    /*
    var larger_screen_minWidth_setting = 1366 // VÍNCULO: Váriável JS, SCSS, e HTML (CSS no <style>).

    onresize = function() {

        if(window.innerWidth >= larger_screen_minWidth_setting) {

            SDSB_switchs.forEach(function (current_switch) {
            
                current_switch.classList.add('small')
            })
        } else {

            SDSB_switchs.forEach(function (current_switch) {
            
                current_switch.classList.remove('small')
            })
        }
    }
    */
    
    /*  TODO:        2 ▶ Labels
    ◈──────────────────────────────────────────────────────◈ */

    for (i = 1; i < SDSB_switchs.length; i++) {

        SDSB_switchs[i].querySelector(':scope .piece_text').textContent = skills_table_ths[i - 1].textContent
    }

    /*  TODO:        2 ▶ Set Switches Widths
    ◈──────────────────────────────────────────────────────◈

    function skills_data_switchs_width() {  

        SDSB_switchs.forEach(function (swt) {

            var dad = swt.parentElement
        
            var dad_width = Number(getComputedStyle(dad).getPropertyValue('width').slice(0,-2)) 
        
            swt.style.width = dad_width +'px'
        })
    }
    
    skills_data_switchs_width()

    window.addEventListener('resize', skills_data_switchs_width) */
    
    /*  TODO:        2 ▶ Logic
    ◈──────────────────────────────────────────────────────◈ */

    /*  TODO:            3 ▶ 'All' Switch
    ◈──────────────────────────────────────────────────────◈ */

    var skills_data_allSwitch = document.querySelector('.skills_data_allSwitch')

    if (skills_data_allSwitch) {
        
        skills_data_allSwitch.addEventListener('click', function() {
        
            F_skills_data_allSwitch(skills_data_allSwitch)
        })
    }

    function F_skills_data_allSwitch(el) {

        if (!el.classList.contains('on')) {
            
            for (ix = 1; ix < SDSB_switchs.length; ix++) {

                if (SDSB_switchs[ix].classList.contains('on')) {
                    
                    if (!hidden_data_indexes.some(function(item) { return item === ix })) {
                        
                        switch_event(SDSB_switchs[ix]) 
                        F_skills_data_switchs(SDSB_switchs[ix])
                    }
                }
            }
        } else {

            for (ix = 1; ix < SDSB_switchs.length; ix++) {

                if (!SDSB_switchs[ix].classList.contains('on')) {
                    
                    if (!hidden_data_indexes.some(function(item) { return item === ix })) {

                        switch_event(SDSB_switchs[ix]) 
                        F_skills_data_switchs(SDSB_switchs[ix])
                    }
                }
            }
        }
    }

    /*  TODO:            3 ▶ Switchs (Except 'All' Switch)
    ◈──────────────────────────────────────────────────────◈ */

    if (SDSB_switchs) {
        
        SDSB_switchs.forEach(function (swt) {
        
            if (!swt.classList.contains('skills_data_allSwitch')) {
                
                swt.addEventListener('click', function() {
                
                    F_skills_data_switchs(swt)
                })
            }
        })
    }

    function F_skills_data_switchs(el) {

        if(!el.classList.contains('disabled')) {

            for (i = 0; i < SDSB_switchs.length; i++) {

                if (el === SDSB_switchs[i]) {
                        
                    var SDSB_switchs_indexSwitch = i - 1
                }
            }

            if (el.classList.contains('on')) {

                skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'table-cell'

                for (i = 1; i < skills_table_rows.length; i++) {
                
                    skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'table-cell'
                }

            } else {

                skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'none'

                for (i = 1; i < skills_table_rows.length; i++) {
                
                    skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'none'
                }
            }
        }
    }


    /*  TODO:        2 ▶ Initial Setting
    ◈──────────────────────────────────────────────────────◈ */

    /*  TODO:            3 ▶ Activate 'All' Type switch
    ◈──────────────────────────────────────────────────────◈ */

    STSB_switchs.forEach(function (current_switch) {

        if (current_switch.querySelector(':scope .piece_text').textContent === 'All') {

            F_skills_types_all_switch(current_switch)
            switch_event(current_switch)
        }
    })

    /*  TODO:            3 ▶ Activateds Data
    ◈──────────────────────────────────────────────────────◈ */

    var activated_data = ['Name', 'Type', 'Effect', 'Condition', 'Available'] // 'Damage', 'Cost', 

    var activated_data_indexes = [ ]

    for (i = 0; i < activated_data.length; i++) {

        for (i2 = 0; i2 < SDSB_switchs.length; i2++) { 

            if (activated_data[i] === SDSB_switchs[i2].querySelector(':scope .piece_text').textContent) {

                activated_data_indexes.push(i2)
            }
        }
    }

    for (ix = 0; ix < activated_data_indexes.length; ix++) {

        switch_event(SDSB_switchs[activated_data_indexes[ix]])
        F_skills_data_switchs(SDSB_switchs[activated_data_indexes[ix]])
    }

    /*  TODO:            3 ▶ 'Name' Data disabled
    ◈──────────────────────────────────────────────────────◈ */

    for (i = 0; i < SDSB_switchs.length; i++) {

        if (SDSB_switchs[i].querySelector(':scope .piece_text').textContent === 'Name') {

            SDSB_switchs[i].classList.add('disabled')
        }
    }

    /*  TODO:            3 ▶ Hidden Data Switchs
    ◈──────────────────────────────────────────────────────◈ */

    var hidden_data_switchs = []
    var hidden_data_switchs = ['Name', 'plusTP', 'Notes'] 

    var hidden_data_indexes = [ ]

    for (i = 0; i < hidden_data_switchs.length; i++) {

        for (i2 = 0; i2 < SDSB_switchs.length; i2++) {

            if (hidden_data_switchs[i] === SDSB_switchs[i2].querySelector(':scope .piece_text').textContent) {

                // SDSB_switchs[i2].style.display = 'none'
                SDSB_switchs[i2].parentElement.style.display = 'none'

                hidden_data_indexes.push(i2)
            }
        }
    }


    /*  TODO:    1 ▶ Set Choice Initial Type
    ◈──────────────────────────────────────────────────────◈ */
    /*  */
    var skills_choice_initial_type = 'All Types'
    
    choice(skills_choice)

    skills_choice_options.forEach(function (option) {

        if (option.querySelector(':scope span').textContent === skills_choice_initial_type) {
            
            func_skills_types_choices(option)
            choice_option(option)
        }
    })
    
    choice(skills_choice)


    /*  TODO:    1 ▶ Auto Table Full Screen
    ◈──────────────────────────────────────────────────────◈

    skills_table_box.classList.toggle('skills_table_box_full'); document.body.classList.toggle('overflow_hidden') */


    /*  TODO:    1 ▶ Replace Table Header 'plusTP' With '+TP'
    ◈──────────────────────────────────────────────────────◈ */

    // Replace In Table Header:

    for (i = 0; i < skills_table_ths.length; i++) {

        if(skills_table_ths[i].textContent.slice(0, 4) === 'plus') {

            skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('plus', '+')
        }
    }

    // Replace In Data Switchs Labels:

    for (i = 0; i < SDSB_switchs.length; i++) {

        if(SDSB_switchs[i].querySelector(':scope .piece_text').textContent.slice(0, 4) === 'plus') {

            SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('plus', '+')
        }
    }


    /*  TODO:    1 ▶ Replace Table Header 'HP_or_AP_or_TP' With 'HP/AP/TP'
    ◈──────────────────────────────────────────────────────◈ */

    // Replace In Table Header:
    /*  
    for (i = 0; i < skills_table_ths.length; i++) {

        skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('_or_', '/')
        skills_table_ths[i].textContent = skills_table_ths[i].textContent.replace('_or_', '/')
    }
    */



    /* Se for utilizar " Replace Table Header 'HP_or_AP_or_TP' With 'HP/AP/TP' ", 
    desbloqueei apenas os códigos desse comentário.*/

    var skills_table_th__HP_or_AP_or_TP = document.querySelector('.skills_table th.HP_or_AP_or_TP')

    if (skills_table_th__HP_or_AP_or_TP !== null) {
            
        skills_table_th__HP_or_AP_or_TP.textContent = 
        skills_table_th__HP_or_AP_or_TP.textContent.replace('_or_', '/').replace('_or_', '/')

        // Replace In Data Switchs Labels:

        for (i = 0; i < SDSB_switchs.length; i++) {

            SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('_or_', '/')
            SDSB_switchs[i].querySelector(':scope .piece_text').textContent = SDSB_switchs[i].querySelector(':scope .piece_text').textContent.replace('_or_', '/')
        }
    }





    /*  
    var SDSB__HP_or_AP_or_TP = document.querySelector('.skills_data_switchs_box .HP_or_AP_or_TP')

    SDSB__HP_or_AP_or_TP.textContent = 
    SDSB__HP_or_AP_or_TP.textContent.replace('_or_', '/').replace('_or_', '/')
    */


    /*  TODO:    1 ▶ Table Full Screen
    ◈──────────────────────────────────────────────────────◈ */

    // console.log(skills_table_box.getBoundingClientRect())

    skills_table_box.addEventListener('click', function() { 
        
        //scroll({ top: skills_table_box.getBoundingClientRect().y  - 72, left: 0, behavior: 'smooth' })

        skills_table_box.classList.toggle('skills_table_box_full')
        document.body.classList.toggle('overflow_hidden')
    })

}









// Register service worker to control making site work offline
if('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/serviceWorker.js').then(() => console.log('Service Worker Registered'));
}
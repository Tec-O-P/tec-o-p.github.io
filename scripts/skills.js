/*  
◈──────────────────────────────────────────────────────◈
TODO: Table - Skills
◈──────────────────────────────────────────────────────◈ */

var type_icon_imgs = document.querySelectorAll('img.type_icon')

imgsNamesAsAlts(type_icon_imgs)


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

    var skills_choice = document.querySelector('.skills_types_choice')
    // var skills_choice_options = document.querySelectorAll('.skills_types_choice > li')
    var skills_choice_options_anchor = document.querySelectorAll('.skills_types_choice > li a')
    
    // var skills_choice_actual_type = document.querySelector('.skills_types_choice > li > a span').textContent

    // console.log(skills_choice_actual_type)
    
    choice(skills_choice)

/*  */
    skills_choice_options_anchor.forEach(function (option) {
    
        if (option.classList.contains('on')) {

            func_skills_types_choices(option)
            choice_option(option)
        }
    })

    choice(skills_choice)  

/* 
    skills_choice_options_anchor.forEach(function (option) {

        if (option.querySelector(':scope span').textContent === skills_choice_actual_type) {
            
            func_skills_types_choices(option)
            choice_option(option)
        }
    })

    choice(skills_choice)
    */    
 })

 












/*  

*/
















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

function F_skills_data_switchs(el) {

    if(!el.classList.contains('disabled')) {

                for (i = 0; i < SDSB_switchs.length; i++) {

            if (el === SDSB_switchs[i]) {
                    
                var SDSB_switchs_indexSwitch = i - 1
            }
        }

        if (el.classList.contains('on')) {
            
            skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'none'

            for (i = 1; i < skills_table_rows.length; i++) {
            
                skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'none'
            }
        } else {
            skills_table_ths[SDSB_switchs_indexSwitch].style.display = 'table-cell'

            for (i = 1; i < skills_table_rows.length; i++) {
            
                skills_table_rows[i].querySelectorAll(':scope td')[SDSB_switchs_indexSwitch].style.display = 'table-cell'
            }
        }
    }
}

/*  TODO:            3 ▶ 'All' Switch
◈──────────────────────────────────────────────────────◈ */

function F_skills_data_all_switch(el) {

    if (el.classList.contains('on')) {
        
        for (ix = 1; ix < SDSB_switchs.length; ix++) {

            if (SDSB_switchs[ix].classList.contains('on')) {
                
                if (!hidden_data_indexes.some(function(item) { return item === ix })) {
                    
                    F_skills_data_switchs(SDSB_switchs[ix])
                    switch_event(SDSB_switchs[ix]) 
                }
            }
        }
    } else {
        
        for (ix = 1; ix < SDSB_switchs.length; ix++) {

            if (!SDSB_switchs[ix].classList.contains('on')) {
                
                if (!hidden_data_indexes.some(function(item) { return item === ix })) {
                    
                    F_skills_data_switchs(SDSB_switchs[ix])
                    switch_event(SDSB_switchs[ix]) 
                }
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

    F_skills_data_switchs(SDSB_switchs[activated_data_indexes[ix]])
    switch_event(SDSB_switchs[activated_data_indexes[ix]])
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

var skills_choice = document.querySelector('.skills_types_choice')
var skills_choice_options = document.querySelectorAll('.skills_types_choice > li')
var skills_choice_options_anchor = document.querySelectorAll('.skills_types_choice > li a')
 
choice(skills_choice)

skills_choice_options_anchor.forEach(function (option) {

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
/*  
◈──────────────────────────────────────────────────────◈
TODO: Types Interactions
◈──────────────────────────────────────────────────────◈ */

/*  TODO:    1 ▶ Simplified Mode
◈──────────────────────────────────────────────────────◈ */

var typesInteractions_tables = document.querySelectorAll('.type_interactions')

document.querySelector('.simplifiedModeBtn').addEventListener('click', function() {

    typesInteractions_tables.forEach(function (table) {
    
        table.classList.toggle('SimplifiedMode')
    })
})

/*  TODO:    1 ▶ Show/Hide Robot Type
◈──────────────────────────────────────────────────────◈ */

var types_interactions_RobotType = document.querySelectorAll('.types_interactions_box .Robot')

/* types_interactions_RobotType.forEach(function (r) {

    r.classList.toggle('display_none')
}) */

document.querySelector('.typesInteractions_ShowRobotTypeBtn').addEventListener('click', function() {

    types_interactions_RobotType.forEach(function (r) {
    
        r.classList.toggle('display_none')
    })
})
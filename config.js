// general
const only_me = {
    "disabled": false,
    "filters": {
        "account": {
            "input": "hardyhard"
        },
        "sale_type": {
            "option": "unpriced"
        },
        "price": {
            "min": '',
            "max": '',
        }
    }
}

// items
const ring = {
    filters: {
        category: {
            option: "accessory.ring"
        }
    },
}

const boots = {
    filters: {
        category: {
            option: "armour.boots"
        }
    },
}


// stats
function life_es(hp, es, count) {
    const stats = [
        {
            type: "count",
            filters: [
                {
                    id: "pseudo.pseudo_total_life",
                    value: {
                        min: hp
                    },
                    disabled: false
                },
                {
                    id: "pseudo.pseudo_total_energy_shield",
                    value: {
                        min: es
                    },
                    disabled: false
                }
            ],
            value: {
                min: count
            },
            disabled: false
        },
    ]
    return stats
}

function speed(speed) {
    const stats = [
        {
            type: "count",
            filters: [
                {
                    id: "pseudo.pseudo_increased_movement_speed",
                    value: {
                        min: speed
                    },
                    disabled: false
                },
            ],
            value: {
                min: 1
            },
            disabled: false
        },
    ]
    return stats
}



// filters
//////////////////////////////////////////////
const ring_hp_and_es = {
    query:{
        status: { option: "any", },
        filters: {
            trade_filters: only_me,
            type_filters: ring,
        },
        stats: life_es(80, 40, 2),
    },
}

const ring_hp_or_es = {
    query:{
        status: { option: "any", },
        filters: {
            trade_filters: only_me,
            type_filters: ring,
        },
        stats: life_es(100, 55, 1),
    },
}

const boots_speed = {
    query:{
        status: { option: "any", },
        filters: {
            trade_filters: only_me,
            type_filters: boots,
        },
        stats: speed(30),
    },
}


const filters = [
    ring_hp_and_es,
    ring_hp_or_es,
    boots_speed,
]

module.exports = {
    filters: filters,
}


// code your solution here
function saturdayFun (verb = 'roller-skate') {
    return `This Saturday, I want to ${verb}!`
}

function mondayWork (travel = 'go to the office') {
    return `This Monday, I will ${travel}.`
}

function wrapAdjective(astrx = "*") {
    return function (adj = "a hard worker") {
            return `You are ${astrx}${adj}${astrx}!`
    }
}
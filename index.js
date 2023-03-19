// code your solution here

function saturdayFun(saturdayActivity = 'roller-skate') {
    return `This Saturday, I want to ${saturdayActivity}!`;
}

const mondayWork = function (mondayActivity = 'go to the office') {
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(outerP = '*') {
    return function(innerP = 'special') {
        return `You are ${outerP}${innerP}${outerP}!`;
    }
}

let result = wrapAdjective('||');
let emphatic = result('a dedicated programmer');

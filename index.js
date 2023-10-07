//Saturday Fun
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(myText="*"){
    return function(status="special"){
        return `You are ${myText}${status}${myText}!`;
    }
}
wrapAdjective("%")("a dedicated programmer");

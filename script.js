let money = +prompt('Скажите ваш бюджет');
let time = prompt('Введите дату', 'В формате YYYY-MM-DD');


let appData = {
    moneyAnswer: money, //общее количество денег
    timeData: time, //пока не понятно для чего
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //дополнительыне расходы
    income: [], //дополнительный доход
    saving: false
};


for ( let i = 0; i < 2; i++) {

    let forWhat = prompt('Введите обязательную статью расходов в этом месяце');
    let howMuchCost = +prompt('Во сколько обойдется?');
    if (typeof(forWhat) === 'string' && typeof(forWhat) != null && typeof(howMuchCost) != null && forWhat != '' &&
        howMuchCost != '' && forWhat.length < 50) {
        console.log(forWhat, howMuchCost);
        appData.expenses[forWhat] = howMuchCost;
    } else {
        alert('Нужно правильно заполнить поля!');
        i--;
    }
}

    /*
    let i = 0;
    do {

        let forWhat = prompt('Введите обязательную статью расходов в этом месяце');
        let howMuchCost = +prompt('Во сколько обойдется?');
        if (typeof(forWhat) === 'string' && typeof(forWhat) != null && typeof(howMuchCost) != null && forWhat != '' &&
            howMuchCost != '' && forWhat.length < 50) {
            console.log(forWhat, howMuchCost);
            appData.expenses[forWhat] = howMuchCost;
    } else {
            alert('Нужно правильно заполнить поля!');
            i--;
            }
             i++;
        }
        while (i < 2);
        */
   /*
    let i = 0;
    while (i < 2) {
    let forWhat = prompt('Введите обязательную статью расходов в этом месяце');
    let howMuchCost = +prompt('Во сколько обойдется?');
        if (typeof(forWhat) === 'string' && typeof(forWhat) != null && typeof(howMuchCost) != null && forWhat != '' &&
            howMuchCost != '' && forWhat.length < 50) {
            console.log(forWhat, howMuchCost);
            appData.expenses[forWhat] = howMuchCost;

    } else {
            alert('Нужно правильно заполнить поля!');
            i--;
        }
        i++;
    }
    */


appData.moneyPerDay = appData.moneyAnswer / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
console.log(appData);
if (appData.moneyPerDay < 500) {
    console.log('Не густой бюджет на день(');
} else if (appData.moneyPerDay < 1000) {
    console.log('Так то солидно получается');
} else {
    console.log('Вы богатый даймё');
}
let money, time;

function start () {
    money = +prompt('Скажите ваш бюджет');
    time = prompt('Введите дату', 'В формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Скажите ваш бюджет');
    }
}

start();

let appData = {
    moneyAnswer: money, //общее количество денег
    timeData: time, //пока не понятно для чего
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //дополнительыне расходы
    income: [], //дополнительный доход
    saving: false
}; //объект для записи данных

function chooseExpenses () {
    for ( let i = 0; i < 2; i++) {

        let forWhat = prompt('Введите обязательную статью расходов в этом месяце');
        let howMuchCost = +prompt('Во сколько обойдется?');
        if (typeof(forWhat) === 'string' && typeof(forWhat) != null && typeof(howMuchCost) != null && forWhat != '' &&
            howMuchCost != '' && forWhat.length < 50) {
            appData.expenses[forWhat] = howMuchCost;
        } else {
            alert('Нужно правильно заполнить поля!');
            i--;
        }
    }
} //функция для обязательных расходов

chooseExpenses();


function detectDayBudget () {
    appData.moneyPerDay = (appData.moneyAnswer / 30).toFixed(1);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    console.log(appData);
} //функция дя расчета денег на день

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 500) {
        console.log('Не густой бюджет на день(');
    } else if (appData.moneyPerDay < 1000) {
        console.log('Так то солидно получается');
    } else {
        console.log('Вы богатый даймё');
    }
} // анализ уровня достатка

detectLevel();

let optExpenses;
function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        optExpenses = prompt('Статья необязательных расходов?');
        if (optExpenses != '') {
            appData.optionalExpenses[i] = optExpenses;
        }
    }
} // функция для записи необязательных расходов

chooseOptExpenses ();

function checkSavings () {
    if (appData.saving == true) {
        let save = +prompt('Какова сумма накоплений?'),
            persent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*persent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
} // функция для проверки накоплений

checkSavings();


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
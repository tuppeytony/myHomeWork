let money, time;

function start () {
    money = +prompt('Скажите ваш бюджет');
    time = prompt('Введите дату', 'В формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Скажите ваш бюджет');
    }
}

//start();

let appData = {
    moneyAnswer: money, //общее количество денег
    timeData: time, //пока не понятно для чего
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //дополнительыне расходы
    income: [], //дополнительный доход
    saving: false,
    chooseExpenses: function () {
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
    }, //функция для обязательных расходов
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyAnswer / 30).toFixed(1);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
        console.log(appData);
    }, //функция дя расчета денег на день
    detectLevel: function () {
        if (appData.moneyPerDay < 500) {
            console.log('Не густой бюджет на день(');
        } else if (appData.moneyPerDay < 1000) {
            console.log('Так то солидно получается');
        } else {
            console.log('Вы богатый даймё');
        }
    }, // анализ уровня достатка
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какова сумма накоплений?'),
                persent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*persent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    }, // функция для проверки накоплений
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExpenses = prompt('Статья необязательных расходов?');
            if (optExpenses != '') {
                appData.optionalExpenses[i] = optExpenses;
            }
        }
    }, // функция для записи необязательных расходов
    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую)', '');
        while (typeof items != 'string' || items == null || items == '') {
            items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может быть что нибудь еще?'));
        appData.income.sort();
        console.log(appData.income);
        appData.income.forEach(function (item, i) {
            alert('Способы дополнительного заработка: ' + (i + 1) + '-' + item);
        })
    } // функция для вариантов дополнительного забатотка
}; //объект для записи данных

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData);
}
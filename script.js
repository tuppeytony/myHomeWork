let money = prompt('Скажите ваш бюджет');
let time = prompt('Введите дату', 'В формате YYYY-MM-DD');
let forWhat = prompt('Введите обязательную статью расходов в этом месяце');
let howMuchCost = prompt('Во сколько обойдется?');
let secondForWhat = prompt('Введите обязательную статью расходов в этом месяце');
let secondHowMuchCost = prompt('Во сколько обойдется?');
let appData = {
    moneyAnswer: money,
    timeData: time,
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //дополнительыне расходы
    income: [], //дополнительный доход
    saving: false
};

appData.expenses.forWhat = howMuchCost;
appData.expenses.secondForWhat = secondHowMuchCost;
alert('У вас осталось ' + appData.moneyAnswer / 30);
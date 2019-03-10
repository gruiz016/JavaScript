const account = {
  name: 'Giovanni Ruiz',
  expenses: [],
  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  addExpenses: function (description, amount) {
    this.expenses.push({
      description: description, 
      amount: amount
    })
  },
  getAccountSummary: function () {
    let summary = 0
    let balance = 0
    let incomeAmount = 0
    this.expenses.forEach(function(expense) {
      summary = summary + expense.amount
    })
    this.income.forEach(function(income) {
      incomeAmount = incomeAmount + income.amount
      balance = incomeAmount - summary
    })
    return `${this.name}, has a balance of $${balance}. $${incomeAmount} in income and $${summary} in expanses.`
  }
}
account.addIncome('Uber', 30)
account.addIncome('Pay Check', 1500)
account.addIncome('Lyft', 20)
account.addExpenses('Rent', 1300)
account.addExpenses('Cable', 120)

console.log(account.getAccountSummary())

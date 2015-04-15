var BankAccount = {
    balance: 0,
    deposit: function(amount){
        return this.balance += amount;
    }
}

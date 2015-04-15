var BankAccount = {
    balance: 0,
    overdraft: false,
    deposit: function(amount){
        return this.balance += amount;
    },
    withdraw: function(amount){
        if (this.overdraft === false) {
            if ((this.balance - amount) <= 0) {
                return "declined"
            } else {
                return this.balance -= amount;
            }
        } else {
            this.balance -= amount;
            return this.balance -= 50;
        }
    }
};

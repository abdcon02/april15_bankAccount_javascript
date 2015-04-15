var BankAccount = {
    balance: 0,
    deposit: function(amount){
        return this.balance += amount;
    },
    withdraw: function(amount){
        if ((this.balance - amount) <= 0) {
            return "declined"
        } else {
            return this.balance -= amount;
        }
    }
};

describe("BankAccount", function() {

    describe("balance", function() {
        it("returns the balance of the bank account its called upon", function() {
            var testAccount = Object.create(BankAccount);
            expect(testAccount.balance).to.equal(0);
        });
    });
    describe("deposit()", function() {
        it("adds the amount to the balance of current bank account", function() {
            var testAccount = Object.create(BankAccount);
            testAccount.deposit(1);
            expect(testAccount.balance).to.equal(1);
        });
    });
    describe("withdraw()", function() {
        it("subtracts the amount from the balance of the called upon bank account", function() {
            var testAccount = Object.create(BankAccount);
            testAccount.balance = 50;
            testAccount.withdraw(30);
            expect(testAccount.balance).to.equal(20);
        });
        it("returns 'declined' if withdraw makes balance equal less than 0.00", function() {
            var testAccount = Object.create(BankAccount);
            testAccount.balance = 50;
            testAccount.withdraw(100);
            expect(testAccount.transaction).to.equal("transaction declined");
        });
        it("returns negative amount - 50 if withdraw makes balance less than 0.00 and overdraft = true", function() {
            var testAccount = Object.create(BankAccount);
            testAccount.balance = 1;
            testAccount.overdraft = true;
            expect(testAccount.withdraw(2)).to.equal(-51);
        });
    });
});

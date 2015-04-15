var BankAccount = {
    balance: 0,
    overdraft: false,
    deposit: function(amount){
        this.transaction = "transaction accepted";
        return this.balance += amount;
    },
    withdraw: function(amount){
        if (this.overdraft === false) {
            if ((this.balance - amount) < 0) {
                this.transaction = "transaction declined";
            } else {
                this.transaction = "transaction accepted";
                return this.balance -= amount;
            }
        } else {
            this.transaction = "overdraft";
            this.balance -= amount;
            return this.balance -= 50;
        }
    }
};




$(function() {
    var accounts = [];
    var foundAccount;
    $("form#create_account").submit(function(event) {
        event.preventDefault();
        var name = $("#account_name").val();
        var userAccount = Object.create(BankAccount);
        userAccount.name = name;



        $("#account_name").val("");

        $("#accounts").show();
        $("#account_list").append("<li>" + name + "</li>");

        accounts.push(userAccount);
        console.log(accounts);
        accounts.forEach(function(account) {
        console.log(account.name);
            if (account.name == $("#account_list").text()) {
            foundAccount = account;
            }
        });
        console.log($("#account_list").text());
        console.log(foundAccount);

        $('#home-btn').click(function() {
            $('#current_account').hide();
            $('#create_account, #accounts').show();
        });

        $("#account_list").last().click(function() {
            $('#create_account').hide();
            $('#accounts').hide();
            $('#current_account').show();
            $('#current_account h3').text(userAccount.name + "'s balance: $" + userAccount.balance);
        });

        $("form#deposit_amount").submit(function(event) {
            event.preventDefault();
            var amount = parseInt($("#deposit").val());
            userAccount.deposit(amount);
            $('#current_account h3').text(userAccount.name + "'s balance: $" + userAccount.balance);
            $('#transaction').text(userAccount.transaction);
            $("#deposit").val("");
        });
        $("form#withdraw_amount").submit(function(event) {
            event.preventDefault();
            var amount = parseInt($("#withdraw").val());
            if ($('#overdraft')[0].checked){
                userAccount.overdraft = true;
                alert('by clicking you agree to our terms of service and any overcharges that may occur')
            } else {
                userAccount.overdraft = false;
            }

            userAccount.withdraw(amount);
            $('#current_account h3').text(userAccount.name + "'s balance: $" + userAccount.balance);
            $('#transaction').text(userAccount.transaction);
            $("#withdraw").val("");


        });

    });
});

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

$(function() {
    $("form#create_account").submit(function(event) {
        event.preventDefault();
        var name = $("#account_name").val();
        var userAccount = Object.create(BankAccount);
        userAccount.name = name;
        $("#account_name").val("");

        $("#accounts").show();
        $("#account_list").append("<li>" + name + "</li>");

        $("#account_list").last().click(function() {
            $('#create_account').hide();
            $('#accounts').hide();
            $('#current_account').show();
            $('#current_account h3').text(userAccount.name + ": $" + userAccount.balance);
        });
        $("form#deposit_amount").submit(function(event) {
            event.preventDefault();
            var amount = parseInt($("#deposit").val());
            userAccount.deposit(amount);
            $('#current_account h3').text(userAccount.name + ": $" + userAccount.balance);
            $("#deposit").val("");
        });
        $("form#withdraw_amount").submit(function(event) {
            event.preventDefault();
            var amount = parseInt($("#withdraw").val());
            userAccount.withdraw(amount);
            $('#current_account h3').text(userAccount.name + ": $" + userAccount.balance);
            $("#withdraw").val("");
        });
    });
});

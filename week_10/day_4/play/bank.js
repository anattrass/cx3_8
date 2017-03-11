var Bank = function() {
  this.accounts = [100, 200, 300];
  this.total = 0;
};

Bank.prototype = {
  setTotal: function() {
    this.total = 0;
    this.accounts.forEach(function(account){
      this.total += account;
    }.bind(this));
  }
}

var bank = new Bank();
console.log("The initial total is", bank.total);

bank.setTotal();
console.log("The total after setting is", bank.total);
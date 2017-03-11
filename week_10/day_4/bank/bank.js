var Bank = function() {
  this.accounts = [];
  this.total = 0;
};

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },

  findAccountsByName: function(name) {
    return this.accounts.filter(function(account){
      return account.name === name;
    });
  },

  findAccountWithLargestBalance: function() {
    var sortedArray = this.accounts.sort(function(next, prev){
      return prev.balance - next.balance ;
    });

    return sortedArray[0];
  },

  getTotal: function() {
    return this.accounts.reduce(function(accum, account){
      return accum + account.balance;
    }, 0);
  },

  getAverageBalance: function() {
    return this.getTotal() / this.accounts.length;
  },

  getTotalOfType: function(type) {
    return this.accounts.reduce(function(accum, account){
      if(account.type === type) {
        return accum + account.balance;
      } else {
        return accum + 0
      }
    }, 0);
  }

}

module.exports = Bank;
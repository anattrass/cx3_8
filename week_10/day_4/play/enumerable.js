// Enumerable Lab
// Create Bank using enumerable methods.

// Bank should be able to:

// Add an account (should be an object with name, type and balance properties)
// Find account by name. (filter)
// Find the account with the largest balance. (reduce)
// Find the total value of all accounts. (reduce)
// Find the average account balance. (reduce)
// Find the total value for an account type. (reduce)

var Bank = function() {
  this.accounts = [];
};

Bank.prototype = {
  countAccounts: function() {
    return this.accounts.length;
  },

  addAccount: function(account) {
    this.accounts.push(account);
  },

  findAccountByName: function(name) {
    var accountByName = this.accounts.filter(function(account){
      return account.name === name;
    });
    return accountByName;
  },

  largestBalance: function() {
    var mostMoney;
    var largestBalance = function(a, b) {
      if(a <= b.balance){
        mostMoney = b;
        return b.balance;
      } else {
        return a;
      }
    }
   var largest = this.accounts.reduce(largestBalance, 0);
    return mostMoney;
  },

  total: function() {
    var sum = function(a, b) {
      return a + b.balance;
    }
    var total = this.accounts.reduce(sum, 0);
    return total;
  },

  averageBalance: function() {
    var average = function() {
      return this.total() / this.countAccounts();
    }.bind(this);
    var averageBalance = this.accounts.reduce(average, 0);
    return averageBalance;
  },

  typeTotal: function(type) {
    var totalByType = this.accounts.reduce(function(
      }
    })
  }
};

module.exports = Bank;


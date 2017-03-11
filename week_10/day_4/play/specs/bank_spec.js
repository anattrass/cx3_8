var Bank = require("../enumerable");
var Account = require("../account");
var assert = require("assert");

describe("Bank", function() {
  var bank;
  var account1;

  beforeEach(function(){
    bank = new Bank();
    account1 = new Account("Adam", "Current", 200);
    account2 = new Account("Dave", "Savings", 25000);
    account3 = new Account("Tommy", "Current", 3000);
  });


  it("Should be able to add account to accounts array of the bank", function(){
    bank.addAccount(account1);
    assert.equal(1, bank.countAccounts());
  });

  it("Should return the account by name", function(){
    bank.addAccount(account1);
    assert.deepEqual([account1], bank.findAccountByName("Adam"));
  });

  it("Should return the account with the largest balance", function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.equal(account2, bank.largestBalance());
  });

  it("Should find the total of the account balances", function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.equal(28200, bank.total());
  });

  it("Should be able to find the average balance", function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.equal(9400, bank.averageBalance());
  });

  it("Should be able to find the total different account types", function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
  })

});

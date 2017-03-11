var assert = require("assert");
var Account = require("../account");
var Bank = require("../bank");

describe("Bank", function(){
  var bank;
  var account;
  var account2;

  beforeEach(function(){
    bank = new Bank();
    account = new Account("John", "personal", 2);
    account2 = new Account("Jarrod", "business", 1000000);
  })

  it("should have no accounts", function(){
    assert.deepEqual([], bank.accounts);
  });

  it("should init with a total of 0", function(){
    assert.equal(0, bank.total);
  });

  it("should find accounts by name", function(){
    bank.addAccount(account);
    assert.deepEqual([account], bank.findAccountsByName("John"));
  });

  it("should find account with largest balance", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.equal(account2, bank.findAccountWithLargestBalance());
  });

  it("should find the total value of all accounts", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.equal(1000002, bank.getTotal());
  });

  it("should find the average of the account balances", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.equal(500001, bank.getAverageBalance());
  });

  it("should find the total for an account type", function(){
    bank.addAccount(account);
    bank.addAccount(account2);
    assert.equal(1000000, bank.getTotalOfType("business"));
  });






});
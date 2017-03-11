var assert = require("assert");
var Account = require("../account");

describe("Account", function(){
  var account = new Account("John", "personal", 2);

  it("Should have a name", function(){
    assert.equal("John", account.name);
  });

  it("Should have a type", function(){
    assert.equal("personal", account.type);
  });

  it("Should have a balance", function(){
    assert.equal(2, account.balance);
  });
});
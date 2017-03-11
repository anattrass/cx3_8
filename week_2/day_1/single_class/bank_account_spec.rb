require ('minitest/autorun')
require ('minitest/rg')
require_relative('bank_account')

class TestBankAccount < MiniTest::Test
  def test_account_name
    account = BankAccount.new('Val', 500, 'business')
    assert_equal('Val', account.name)
  end

  def test_account_type
    account = BankAccount.new('Val', 500, 'business')
    assert_equal('business', account.type)
  end

  def test_account_amount
    account = BankAccount.new('Val', 500, 'business')
    assert_equal(500, account.amount)
  end

  def test_account_set_name
    account = BankAccount.new('Val', 500, 'business')
    account.name = 'John'
    assert_equal('John', account.name)
  end

  def test_pay_monthly_fee_business
    account = BankAccount.new('Val', 500, 'business')
    account.pay_monthly_fee()
    assert_equal(450, account.amount)
  end

  def test_pay_monthly_fee_personal
    account = BankAccount.new('Val', 500, 'personal')
    account.pay_monthly_fee()
    assert_equal(490, account.amount)
  end
end


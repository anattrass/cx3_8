class BankAccount

  attr_accessor :name, :type, :amount


  def initialize(name, value, type)
    @name = name
    @type = type
    @amount = value
  end

def pay_monthly_fee()

  charges = {
    'business' => 50,
    'personal' => 10
  }
  @amount -= charges[@type]
end

  # def get_type()
  # #   return @type
  # # end

  # def get_amount()
  #   return @amount
  # end

  # def set_name(name)
  #   return @name = name
  # end


end
User.delete_all()
Account.delete_all()

user_one = User.create(
    {
      email: 'john@email.com',
      password: 'password',
      password_confirmation: 'password'
    }
  )

user_two = User.create(
    {
      email: 'jarrod@email.com',
      password: 'password',
      password_confirmation: 'password'
    }
  )

user_one.accounts.create(
    {
      name: 'local',
      amount: 100.00
    }
  )

user_two.accounts.create(
    {
      name: 'local',
      amount: 0.01
    }
  )

user_two.accounts.create(
    {
      name: 'Gurnsey Marketing',
      amount: 1000000000.00
    }
  )
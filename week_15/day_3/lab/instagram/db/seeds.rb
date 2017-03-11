User.delete_all()
Account.delete_all()

user_one = User.create(
    {
      email: 'adam@email.com',
      password: 'password',
      password_confirmation: 'password'
    }
  )

user_two = User.create(
    {
      email: 'pumpkin@email.com',
      password: 'password',
      password_confirmation: 'password'
    }
  )

user_one.accounts.create(
    {
      name: 'Me and Colt Cabana',
      image: 'https://pbs.twimg.com/media/CpSslZ8VIAEjEyR.jpg'
    }
  )

user_two.accounts.create(
    {
      name: 'Business',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/046/37a/02248e0.jpg'
    }
  )

user_two.accounts.create(
    {
      name: 'Beach',
      image: 'https://www.facebook.com/photo.php?fbid=10209439783338811&set=rpd.1452035583&type=3&theater'
    }
  )


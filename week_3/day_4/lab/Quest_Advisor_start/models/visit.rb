require_relative("../db/sql_runner")
require_relative('user')

class Visit

  attr_reader :id
  attr_accessor :user_id, :location_id, :review 

  def initialize( options )
    @id = options['id'].to_i
    @user_id = options['user_id'].to_i
    @location_id = options['location_id'].to_i
    @review = options['review']
  end

  def save()
    sql = "INSERT INTO visits (user_id, location_id, review)
           VALUES ('#{ @user_id }', '#{ @location_id }', '#{ @review }') RETURNING id"
    visit = SqlRunner.run( sql ).first
    @id = visit['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM visits"
    visits = SqlRunner.run(sql)
    result = visits.map { |visit| Visit.new( visit ) }
    return result
  end

  def self.delete_all() 
    sql = "DELETE FROM visits"
    SqlRunner.run(sql)
  end

  def user()
    sql = "SELECT * FROM users WHERE id = #{@user_id}"
    user_hash = SqlRunner.run(sql).first
    return User.new(user_hash)
  end

  def location()
    sql = "SELECT * FROM locations WHERE id = #{@location_id}"
    location_hash = SqlRunner.run(sql).first
    return Location.new(location_hash)
  end






end
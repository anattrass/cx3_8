require_relative("../db/sql_runner")
require_relative('Location')

class User

  attr_reader :id
  attr_accessor :name

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO users (name) VALUES ('#{ @name }') RETURNING id"
    user = SqlRunner.run( sql ).first
    @id = user['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM users"
    users = SqlRunner.run(sql)
    result = users.map { |user| User.new( user ) }
    return result
  end

  def self.delete_all() 
    sql = "DELETE FROM users"
    SqlRunner.run(sql)
  end

  def locations()
    sql = "SELECT l.*, v.* FROM locations l
          INNER JOIN visits v
          ON l.id = v.location_id
          WHERE v.user_id = #{@id};"
    locations = Location.get_many(sql)
    return locations
  end


  def print_reviews()
    sql = "SELECT locations.*, visits.* FROM locations
          INNER JOIN visits
          ON visits.location_id = locations.id
          WHERE user_id = #{ @id };"
    results = SqlRunner.run(sql)
    return results.map { |result| "#{@name} visited #{result['name']}: #{result['review']}"}
  end


  def self.get_many(sql)
    users = SqlRunner.run(sql)
    result = users.map { |user| User.new( user ) }
    return result
  end


end
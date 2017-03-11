class AddDietToAnimal < ActiveRecord::Migration[5.0]
  def change
    add_column :animals, :diet, :string
  end
end

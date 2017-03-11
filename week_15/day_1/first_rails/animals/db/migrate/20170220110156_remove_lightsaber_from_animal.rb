class RemoveLightsaberFromAnimal < ActiveRecord::Migration[5.0]
  def change
    remove_column :animals, :lightsaber
  end
end

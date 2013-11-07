class Trucks < ActiveRecord::Migration
  def change
    create_table :trucks do |t|
      t.string :name
      t.string :latitude
      t.string :longitude
      t.string :url

      t.timestamps
    end
  end
end

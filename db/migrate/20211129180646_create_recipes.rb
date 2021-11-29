class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :ingredients
      t.text :directions
      t.text :notes

      t.timestamps
    end
  end
end

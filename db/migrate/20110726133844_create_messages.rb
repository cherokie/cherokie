class CreateMessages < ActiveRecord::Migration
  def self.up
    create_table :messages do |t|
      t.string :name
      t.string :title
      t.string :image
      t.text :content
      t.integer :status

      t.timestamps
    end
  end

  def self.down
    drop_table :messages
  end
end

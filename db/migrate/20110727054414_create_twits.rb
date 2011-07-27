class CreateTwits < ActiveRecord::Migration
  def self.up
    create_table :twits do |t|
      t.string :account
      t.string :description
      t.integer :number
      t.integer :status
      
      t.timestamps
    end
  end

  def self.down
    drop_table :twits
  end
end

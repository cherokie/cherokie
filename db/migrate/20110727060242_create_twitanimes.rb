class CreateTwitanimes < ActiveRecord::Migration
  def self.up
    create_table :twitanimes do |t|
      t.string :account
      t.string :description
      t.integer :number
      t.integer :status

      t.timestamps
    end
  end

  def self.down
    drop_table :twitanimes
  end
end

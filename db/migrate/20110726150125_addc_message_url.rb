class AddcMessageUrl < ActiveRecord::Migration
  def self.up
    add_column :messages, :url, :string
  end

  def self.down
    remove_column :messagesos, :url
  end
end

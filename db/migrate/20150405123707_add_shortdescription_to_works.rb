class AddShortdescriptionToWorks < ActiveRecord::Migration
  def change
    add_column :works, :shortdescription, :string
  end
end

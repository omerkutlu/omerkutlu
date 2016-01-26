class AddPicture3ToWorks < ActiveRecord::Migration
  def change
    add_column :works, :picture3, :string
  end
end

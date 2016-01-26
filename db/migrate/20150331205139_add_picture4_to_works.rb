class AddPicture4ToWorks < ActiveRecord::Migration
  def change
    add_column :works, :picture4, :string
  end
end

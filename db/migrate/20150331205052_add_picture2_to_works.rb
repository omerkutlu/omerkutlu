class AddPicture2ToWorks < ActiveRecord::Migration
  def change
    add_column :works, :picture2, :string
  end
end

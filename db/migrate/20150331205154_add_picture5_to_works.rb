class AddPicture5ToWorks < ActiveRecord::Migration
  def change
    add_column :works, :picture5, :string
  end
end

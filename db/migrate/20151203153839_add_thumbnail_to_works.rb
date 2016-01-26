class AddThumbnailToWorks < ActiveRecord::Migration
  def change
    add_column :works, :thumbnail, :string
  end
end

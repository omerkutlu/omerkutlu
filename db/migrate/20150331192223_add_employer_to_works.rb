class AddEmployerToWorks < ActiveRecord::Migration
  def change
    add_column :works, :employer, :string
  end
end

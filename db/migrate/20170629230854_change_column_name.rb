class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :films, :ISO, :iso
  end
end

class ChangeTypeOfTimeColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :films, :time, :float
  end
end

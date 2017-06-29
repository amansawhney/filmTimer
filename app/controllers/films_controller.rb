class FilmsController < ApplicationController
	String name
	def index
		@films = Film.where(:name => params[:name], :developer => params[:dev], :iso => params[:iso])
	end
	def iso_select
		@films = Film.where(:name => params[:name], :developer => params[:dev])
	end
	def film_select
		@films = Film.all
	end
	def dev_select
		@films = Film.where(:name => params[:name])
	end
end

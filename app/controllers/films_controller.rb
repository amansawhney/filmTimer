class FilmsController < ApplicationController
	String name
	def index
		@films = Film.where(:name => cookies[:name], :developer => cookies[:dev], :iso => params[:iso])
	end
	def iso_select
		cookies[:dev] = params[:dev]
		@films = Film.where(:name => cookies[:name], :developer => params[:dev])
	end
	def film_select
		@films = Film.all
	end
	def dev_select
		cookies[:name] = params[:name]
		@films = Film.where(:name => params[:name])
	end
end

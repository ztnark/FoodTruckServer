class TrucksController < ApplicationController

 def new
 end

 def create
   Truck.create(truck_params)
   redirect_to root_path
 end

 def all
  @trucks = Truck.all
  render :json => @trucks.to_json
 end

 def edit_truck
  @alltrucks = Truck.all
  render :edit
 end

 def update_truck
   truck = Truck.find(truck_params[:id])
   truck.update_attributes(truck_params)
   truck.save
   redirect_to root_path
 end

 # def show
   # @board = Board.find(params[:id])
   # @dart = Dart.new
   # session[:board_id] = @board.id
 # end

 # def destroy
 #   Board.find(params[:id]).destroy
 #   redirect_to user_path(current_user)
 # end



 private
    def truck_params
      params.require(:truck).permit(:id,:name, :latitude, :longitude)
    end
end

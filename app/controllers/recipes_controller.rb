class RecipesController < ApplicationController

    def index
        render json: Recipe.all, status: :ok
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe, status: :ok
    end

     def create
        recipe = Recipe.create!(recipe_params)
        render json: Recipe.order(:trainer_id), status: :created
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update!(recipe_params)
        render json: recipe, status: :accepted
    end

    def destroy
        recipe = Recipe.find_by(id: params[:id])
        recipe.destroy
        head :no_content, status: :ok
    end

    private

    def recipe_params
        params.permit(:name, :ingredients, :directions, :user_id)
    end

end

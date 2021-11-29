class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredients, :directions
end

class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

end

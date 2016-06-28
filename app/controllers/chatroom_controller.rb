class ChatroomController < ApplicationController

  def create
    message = chat_params[:message]
    ActionCable.server.broadcast 'chatroom',
      message: message
    head :ok
  end

  def show

  end

  private

  def chat_params
    params.permit(:message)
  end
end

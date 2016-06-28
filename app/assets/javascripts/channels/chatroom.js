App.chatroom = App.cable.subscriptions.create("ChatroomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    $('#chat-box').append(data.message + '<p>')
    $('#chat-box').animate({ scrollTop: $('#chat-box').prop("scrollHeight")}, 1000);
    $('input#message').val("")     
  }
});

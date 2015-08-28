Template.messages.helpers({
  messages: Messages.find({})

});

Template.listings.helpers({
    channels: function () {
        return Channels.find();
    }
});

Template.footer.events({
  'keypress input': function(e) {
    var inputVal = $('.input-box_text').val();
    if(!!inputVal) {
      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      if (charCode == 13) {
        e.stopPropagation();
/*        Messages.insert({
		  text: $('.input-box_text').val(),
		  user: Meteor.userId(),
		  timestamp: Date.now()
		});*/
Meteor.call('newMessage', {text: $('.input-box_text').val(),
    channel: Session.get('channel'),
 });



        $('.input-box_text').val("");
        return false;
      }    
    }
  }
});


Template.registerHelper("usernameFromId", function (userId) {
    var user = Meteor.users.findOne({_id: userId});


    if (typeof user === "undefined") {
        return "Anonymous";
    }
/*    if (typeof user.services.github !== "undefined") {
        return user.services.github.username;
    }*/
    return user.username;

});

Template.registerHelper("timestampToTime", function (timestamp) {

    var date = new Date(timestamp);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper('count', function () {
	console.log("weee", Messages.find({channel: name}).count())
	//return Messages.find({channel: Session.get('channel')}).count();
return Messages.find({channel: name}).count();

})


Template.registerHelper('currentChannel', function () {
	return Session.get('channel');

})

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});



Template.channel.helpers({
    active: function () {
        if (Session.get('channel') === this.name) {
        	Meteor.call("countos", this.name, this._id)
        	console.log(channel._id)
            return "active";
        } else {
            return "";
        }
    }
});



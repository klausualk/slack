Meteor.methods({
  newMessage: function (message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
     Messages.insert(message);
  },

countos: function (channel) {
	console.log(channel);
	//Channels.channel.piiks.update(Messages.find({channel: channel}).count())
	var uuendus = Messages.find({channel: channel}).count();
	
	Channels.update({name:channel}, {$set: {piiks: uuendus}}) 
	console.log("server ", uuendus, channel, Messages.find({channel: channel}).count())
return uuendus;
//Messages.find({channel: channel}).count();
}
})
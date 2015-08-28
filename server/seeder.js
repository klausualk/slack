
Meteor.startup(function() {
  Factory.define('message', Messages, {
    text: function() {
        return Fake.sentence();
    },
    //user: Meteor.users.findOne()._id,
    user: 'TL9yMrFYPQoPW7vGT',
    timestamp: Date.now(),
    channel: 'general'
  });

  // Add this if you want to remove all messages before seeding
  //Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }
});

/*Channels.remove({});
Channels.insert({
  name: "general",
  piiks: 33
});
Channels.insert({
  name: "random",
  piiks: 88
});*/
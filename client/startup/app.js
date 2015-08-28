
Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  console.log(Session.get('channel'))

  console.log(Messages.find({channel: Session.get('channel')}).count())
  });
});
/*Template.counter.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('counter', Session.get('channel'));
  console.log("subscribed to count", counter)
  });
});*/
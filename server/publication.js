import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function (userId) {
  return users.find();
});

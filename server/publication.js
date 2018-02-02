import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function () {
  return users.find();
});

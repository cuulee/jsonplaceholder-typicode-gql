'use strict';
const UserList = require('./userListModel'); 
const User = require('./userModel'); 

const userSchema = require('./schema');
const { resolvers } = require('./resolvers');
const userResolver = resolvers;

module.exports = {
  userSchema,
  userResolver,
  UserList,
  User
}
function callMultiple(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// function getUser(UserModel, id) {
//   const user = UserModel.findOne(id);
//   return user;
// }

export {
  callMultiple,
  // getUser
};
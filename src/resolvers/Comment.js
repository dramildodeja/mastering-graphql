const Comment = {
  user(parent, args, { db }, info) {
    return db.users.find((user) => user.id === parent.userId);
  },

  post(parent, args, { db }, info) {
    return db.posts.find((post) => post.id === parent.post);
  },
};
export { Comment as default };

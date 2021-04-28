const Post = {
  user(parent, args, { db }, info) {
    return db.users.find((user) => user.id === parent.userId);
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((comment) => comment.post === parent.id);
  }
};

export { Post as default };
